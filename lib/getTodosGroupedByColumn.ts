import { databases } from "@/appwrite"

export const getTodosGroupedByColumn = async () => {

    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
        );
    
    const todos = data.documents;
    const columns = todos.reduce((acc,todo) => {
        if(!acc.get(todo.status)){
            acc.set(todo.status,{
                id:todo.status,
                todos:[]
            })
        }

        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $createdAt: todo.$createdAt,
            title: todo.title,
            status: todo.status,
            ...(todo.image && { image: JSON.parse(todo.image) })
        });

        return acc;
    },new Map<TypedColumn,Column>);

    //if some columns don't exist
    const columntypes: TypedColumn[] = ['todo','inprogress','done'];
    for(const columntype of columntypes){
        if(!columns.get(columntype)){
            columns.set(columntype,{
                id:columntype,
                todos:[]
            });
        }
    }

    const sortedColumns = new Map(
        Array.from(columns.entries()).sort((a,b) => (columntypes.indexOf(a[0])-columntypes.indexOf(b[0])))
    );

    const board: Board = {
        columns: sortedColumns
    }
    return board;
}
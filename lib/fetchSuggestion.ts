import formatTodoForAI from "@/lib/formatTodoForAI";

const fetchSuggestion = async (board: Board) => {

    const todos = formatTodoForAI(board);

    const res = await fetch("/api/generateSummary",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({todos}),
    });

    return res;
}

export default fetchSuggestion;
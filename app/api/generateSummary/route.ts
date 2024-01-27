import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req:NextRequest){

    const {todos} = await req.json();

    const response = await openai.chat.completions.create({ 
        model: "gpt-3.5-turbo",
        messages: [
            {
                role:"system",
                content: "When responding welcome the user always and say welcome to the Trello clone app, Limit the response to 200 characters.",
            },
            {
                role: "user",
                content: `Hi there, provide a summary of the following todos, count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day!. Here's the data ${JSON.stringify(todos)}`,
            }
        ]
    });

    return NextResponse.json(response.choices[0].message.content);

}
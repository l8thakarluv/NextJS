import { comments } from "../data"
import { redirect } from "next/navigation";

export async function GET(_request: Request, props: { params: Promise<{id: string}> }) {
    const params = await props.params;
    const comment = comments.find(e => e.id === parseInt(params.id));
    if (!comment) {
        redirect('/comments');
        // return new Response(JSON.stringify({message: 'No data found!!'}), {status: 404});
    }
    return Response.json(comment);
}

// here - {params}: {params: {id: string}} - is called context
export async function PATCH(request: Request, props: {params: Promise<{ id: string }>}) {
    const params = await props.params;
    const comment = comments.find(e => e.id === parseInt(params.id));
    if (!comment) {
        return new Response(JSON.stringify({message: 'No data found!!'}), {status: 404});
    }
    const newData = await request.json();
    comment['text'] = newData.text;
    return new Response(JSON.stringify(comment), {
        headers: {
            'Content-Type': "application/json"
        },
        status: 201
    })
}

export async function DELETE(request: Request, props: {params: Promise<{id: string}>}) {
    const params = await props.params;
    const comment = comments.find(e => e.id === parseInt(params.id));
    if (!comment) {
        return new Response(JSON.stringify({message: 'No data found!!'}), {status: 404});
    }
    comments.splice(comments.indexOf(comment), 1);
    return new Response(JSON.stringify({message: 'Record deleted successfully!!', comments}), {status: 200});
}
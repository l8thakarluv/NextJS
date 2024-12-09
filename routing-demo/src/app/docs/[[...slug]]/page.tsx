export default function Docs({params}: {
    params: {slug: string[]}
}) {
    if (params.slug?.length === 2) {
        return <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
    } else if (params.slug?.length === 1) {
        return <h1>Viewing docs for feature {params.slug[0]}</h1>
    }

    // catch all segment format - [...slug]

    // optional catch-all segments , when we wrap [slug] like [[slug]], is becomes optional
    // & when there is nothing as a [slug] in URL, below returns otherwise by default 404
    return <h1>Docs home page!!</h1>
}
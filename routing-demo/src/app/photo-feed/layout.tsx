export default function PhotoFeedLayout(props: {
    modal: React.ReactNode,
    children: React.ReactNode
}) {
    return (
        <>
            {props.modal}
            {props.children} {/*children here corresponds to page.tsx file parallel to layout.tsx*/}
        </>
    )
}
import Link from "next/link";

export default function F4() {
    return (
        <div>
            <h1>F4 page</h1>
            <Link href="/Folder1/Folder3">Go to F3 page</Link>
            <Link href="/about">Go to About page</Link>
        </div>
    )
}
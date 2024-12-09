import Link from "next/link";

export default function Home() {
  return (
  <>
    <u>Welcome Home!!</u>
    <Link href="/blog">Blog</Link>
    <Link href="/products">Products</Link>
  </>)
}
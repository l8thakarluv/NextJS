import Link from "next/link"

export default function ProductList() {
    const productIds = [1, 2, 3];
    return (
        <>
            <Link href="/">Home</Link>
            <h1>Products List</h1>
            <h3><Link href={`product/${productIds[0]}`}>Product 1</Link></h3>
            <h3><Link href={`product/${productIds[1]}`}>Product 2</Link></h3>
            <h3><Link href={`product/${productIds[2]}`}>Product 3</Link></h3>
            <h3><Link href="product/100" replace>Product 100</Link></h3>
            
        </>
    )
}
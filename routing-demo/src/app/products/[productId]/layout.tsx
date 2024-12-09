
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading product");
    }
    return (
        <>
            {children}
            <h2>Features Products</h2>
        </>
    )
  }
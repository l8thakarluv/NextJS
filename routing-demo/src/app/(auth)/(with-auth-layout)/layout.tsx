export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <h1>Inner layout</h1>
            {children}
        </div>
    )
  }
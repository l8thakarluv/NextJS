"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Layout & Template files are different, Template is totally opposite of layout files in following ways:
 * when a user navigates between routes that share template -
 *  -> new instance of component is created, (in layout common shared component no remounted when children changes, performance improves)
 *  -> DOM elements are recreated
 *  -> state is not preserved
 *  -> effects are re-syncronized
 * 
 *  - For creating tempates just need to rename or create file name with template, here template.tsx
 */

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
]

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const [input, setInput] = useState("");
    return (
        <div>
            <div>
                <input value={input} onChange={e => setInput(e.target.value)} />
            </div>
            {navLinks.map(link => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.name}
                    className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}
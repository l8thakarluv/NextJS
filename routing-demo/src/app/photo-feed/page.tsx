import Link from "next/link";
import wonderImages from "./wonders";

export default function Home() {
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                New wonders of the World
            </h1>
            <div className="grid grid-cols1 md:grid-cols-4 gap-4">
                {wonderImages.map(({id, src, name}) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        {/* <Image alt={name}
                            src={src}
                        /> */}

                        {/* Codevolution 32nd video remaining half to practivally apply */}
                    </Link>
                ))}
            </div>
        </main>
    )
}
import Image from "next/image";
import wonderImages, { WonderImage } from "../wonders";

export default function PhotoPage({
    params: { id }
}: {
    params: { id: string };
}) {
    const photo: WonderImage = wonderImages.find(e => e.id === id)!;
    return (
        <div className="container mx-auto my-10 w-1/2">
            <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
            <Image
                alt={photo.name}
                src={photo.src}
                className="w-full object-cover aspect-square"
            />

            <div className="bg-white text-black py-4">
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </div>
    )
}
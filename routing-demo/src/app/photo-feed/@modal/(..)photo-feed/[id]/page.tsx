import wonderImages, { WonderImage } from "@/app/photo-feed/wonders";
import Image from "next/image";
import Modal from '@/components/modal';

export default function PhotoPage({
    params: { id }
}: {
    params: { id: string };
}) {
    const photo: WonderImage = wonderImages.find(e => e.id === id)!;
    return (
        <Modal>
            <Image
                alt={photo.name}
                src={photo.src}
                className="w-full object-cover aspect-square"
            />

            <div className="bg-white text-black py-4">
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </Modal>
    )
}
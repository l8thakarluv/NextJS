import { StaticImageData } from "next/image";
import photo1 from './photos/1.jpg';
import photo2 from './photos/2.jpg';
import photo3 from './photos/3.jpg';
import photo4 from './photos/4.jpg';

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
}

const wonderImages: WonderImage[] = [
    {
        id: '1',
        name: 'Wonder1',
        src: photo1,
        photographer: 'Jay',
        location: 'Agra'
    },
    {
        id: '2',
        name: 'Wonder2',
        src: photo2,
        photographer: 'Yenma',
        location: 'Bengaluru'
    },{
        id: '3',
        name: 'Wonder3',
        src: photo3,
        photographer: 'Raja',
        location: 'Mumbai'
    },{
        id: '4',
        name: 'Wonder4',
        src: photo4,
        photographer: 'Rani',
        location: 'Mohali'
    }
];

export default wonderImages;
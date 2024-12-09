import { Metadata } from 'next';

export const metadata: Metadata = {
    // title: "Profile component"
    title: {
        absolute: "Absolute title" // this will ignore other title/template of title declared in root component
    }
}

export default function Profile() {
    return <h1>Profile!!</h1>
}
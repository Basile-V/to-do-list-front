import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Bonjour Basile!</h1>
            <p>Si tu veux acceder a ta check list click <Link href={"/check-list"}>ici</Link></p>
        </div>)

}

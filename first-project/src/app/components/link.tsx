import Link from "next/link";
export default function Component(){
    return(
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/">Home</Link>
      
            </nav>
        </div>
    )

}

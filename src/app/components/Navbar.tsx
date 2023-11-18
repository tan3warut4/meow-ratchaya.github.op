import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="uppercase">
                <ul className="flex justify-center gap-10 py-10">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/video">
                            Video
                        </Link>
                    </li>
                    <li>
                        <Link href="/still">
                            Still
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar; 
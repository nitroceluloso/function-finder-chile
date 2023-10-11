import Link from "next/link";


export const Menu = () => (
    <nav className="flex justify-between">
        <div></div>
        <div className="p-4">
            <ul className="flex flex-row gap-x-4">
                <li>
                    <Link href="/">
                        Peliculas
                    </Link>
                </li>
                <li>
                    <Link href="/nosotros">
                        Lore
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);
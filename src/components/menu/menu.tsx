import Link from "next/link";

export const Menu = () => (
    <nav className="flex justify-between bg-slate-900">
        <div></div>
        <div className="p-2 pr-8">
            <ul className="flex flex-row gap-x-4">
                <li className="p-2 hover:bg-slate-800 rounded-md">
                    <Link href="/">
                        Peliculas
                    </Link>
                </li>
                <li className="p-2 hover:bg-slate-800 rounded-md">
                    <Link href="/nosotros">
                        Lore
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);
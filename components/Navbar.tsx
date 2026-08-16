"use client"
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <header className="fixed left-0 top-0 px-4 md:px-20 py-5 flex md:flex-row items-center justify-between w-full backdrop-blur-sm z-10 bg-black/10">
            <Link href={"/"} className="logo text-2xl font-bold">
                Isaac Newton
            </Link>
            <ul className="hidden md:flex items-center gap-8 text-white/90 font-medium">
                <li><a className="relative hover:after:scale-100 after:origin-left after:duration-300 after:scale-0 after:content-[''] after:bg-white after:h-px after:w-full after:absolute after:-bottom-2 after:left-0" href="#">Home</a></li>
                <li><a className="relative hover:after:scale-100 after:origin-left after:duration-300 after:scale-0 after:content-[''] after:bg-white after:h-px after:w-full after:absolute after:-bottom-2 after:left-0" href="#journey">Journey</a></li>
                <li><a className="relative hover:after:scale-100 after:origin-left after:duration-300 after:scale-0 after:content-[''] after:bg-white after:h-px after:w-full after:absolute after:-bottom-2 after:left-0" href="#discoveries">Discoveries</a></li>
                {/* <li><a className="relative hover:after:scale-100 after:origin-left after:duration-300 after:scale-0 after:content-[''] after:bg-white after:h-px after:w-full after:absolute after:-bottom-2 after:left-0" href="#timeline">Timeline</a></li> */}
                {/* <li><a className="relative hover:after:scale-100 after:origin-left after:duration-300 after:scale-0 after:content-[''] after:bg-white after:h-px after:w-full after:absolute after:-bottom-2 after:left-0" href="#sources">Sources</a></li> */}
                {/* <li><Link className="relative hover:after:scale-100 after:origin-left after:duration-300 after:scale-0 after:content-[''] after:bg-white after:h-px after:w-full after:absolute after:-bottom-2 after:left-0" href={"/more"}>More</Link></li> */}
            </ul>
            <MenuIcon className="md:hidden" onClick={() => setOpen(!open)}/>

            {/* {open && (
                <div className="bg-neutral-950">
                <ul>
                    <li><a className="relative hover:after:scale-100 after:origin-left after:duration-300 after:scale-0 after:content-[''] after:bg-white after:h-px after:w-full after:absolute after:-bottom-2 after:left-0" href="#">Home</a></li>
                </ul>
            </div>
            )} */}
        </header>
    )
}
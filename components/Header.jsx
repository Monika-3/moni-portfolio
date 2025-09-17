"use client";

import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () =>{
    return(
        <header className="pt-2 py-4 xl:py-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*logo*/}
                <Link href="/">
                <h1 className="text-4xl font-bold">
                    Moni<span className="text-accent">.</span>
                </h1>
                </Link>


                {/*desktop nav & contact me*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                  
                </div>

                {/*mobile nav*/}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
                
            </div>
        </header>
    )
}

export default Header;
import Link from "next/link";
import Container from "../container/container";
import ScrollspyNav from "react-scrollspy-nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";
 
const Header = () => {
    return (
        <>
            <header className="sticky top-0 z-50 shadow shadow-neutral-900 bg-neutral-900">
                <Container>
                    <div className="flex justify-between items-center py-3">
                        <Link href="/#home" className="hover:text-gray-300 ease-in-out duration-300">
                            <h1 className="flex items-center gap-3 text-xl font-medium">
                                <img className="w-6" src="/graphic.svg" alt="jackkelly.dev" />
                                jackkelly.dev
                            </h1>
                        </Link>

                        <ScrollspyNav
                            scrollTargetIds={["home", "portfolio", "blog", "experience"]}
                            offset={-30}
                            activeNavClass="is-active"
                            scrollDuration="700"
                            headerBackground="true"
                        >
                            <ul id="menu" className="bg-neutral-900 flex flex-col items-center gap-3 absolute w-full left-0 pb-4 z-[-1] opacity-0 top-[-400px] transition-all ease-in duration-500 md:gap-6 md:flex-row md:items-center md:z-auto md:static md:w-auto md:py-0 md:pl-0 md:opacity-100">
                                <li><a href="#home" className="global-underline">Home</a></li>
                                <li><a href="#portfolio" className="global-underline">Portfolio</a></li>
                                <li><a href="#blog" className="global-underline">Blog</a></li>
                                <li><a href="#experience" className="global-underline">Experience</a></li>
                            </ul>
                        </ScrollspyNav>

                        <button id="menu-button" className="w-6 md:hidden">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </Container>
            </header>
            <Script>
                {`var menu = document.querySelector('#menu');
                var menuButton = document.querySelector('#menu-button');

                menuButton.addEventListener('click',() => {
                    if (menu.classList.contains('top-[75px]')) {
                        menu.classList.remove('top-[75px]');
                        menu.classList.remove('opacity-100');
                    } else {
                        menu.classList.add('top-[75px]');
                        menu.classList.add('opacity-100');
                    }
                });
                
                document.querySelectorAll('#menu a').forEach((link) => {
                    link.addEventListener('click', () => {
                        menu.classList.remove('top-[75px]');
                        menu.classList.remove('opacity-100');
                    })
                })`}
            </Script>
        </>
    )
}

export default Header;
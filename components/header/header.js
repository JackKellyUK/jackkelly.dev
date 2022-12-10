import Link from "next/link";
import Container from "../container/container";
import ScrollspyNav from "react-scrollspy-nav";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 shadow shadow-neutral-900 bg-neutral-900">
            <Container>
                <div className="flex justify-between items-center py-3">
                    <Link href="/" className="hover:text-gray-300 ease-in-out duration-300">
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
                        <ul className="flex gap-6">
                            <li><a href="#home" className="global-underline">Home</a></li>
                            <li><a href="#portfolio" className="global-underline">Portfolio</a></li>
                            <li><a href="#blog" className="global-underline">Blog</a></li>
                            <li><a href="#experience">Experience</a></li>
                        </ul>
                    </ScrollspyNav>
                </div>
            </Container>
        </header>
    )
}

export default Header;
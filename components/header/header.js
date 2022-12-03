import Link from "next/link";
import Container from "../container/container";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 shadow shadow-neutral-900 bg-neutral-900">
            <Container>
              <div className="flex justify-between items-center py-3">
                <Link className="hover:text-gray-300 ease-in-out duration-300" href="/">
                    <h1 className="flex items-center gap-3 text-xl font-medium">
                        <img className="w-6" src="/graphic.svg" alt="jackkelly.dev" />
                        jackkelly.dev
                    </h1>
                </Link>

                <nav className="flex gap-6">
                    <Link className="button" href="/">Home</Link>
                    <Link className="button" href="#portfolio">Portfolio</Link>
                    <Link className="button" href="#experience">Experience</Link>
                </nav>
              </div>
            </Container>
        </header>
    )
}

export default Header;
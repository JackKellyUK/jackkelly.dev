import Link from "next/link";
import Container from "../container/container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Menu from "./menu";

const Header = (props) => {
    return (
        <>
            <header className="sticky top-0 z-50 shadow shadow-neutral-900 bg-neutral-900">
                <Container>
                    <div className="flex justify-between items-center py-3">
                        <Link href="/#home" className="hover:text-gray-300 ease-in-out duration-300">
                            <h1 className="flex items-center gap-3 text-xl font-medium">
                                <img className="w-6" src="/graphic.svg" alt="jackkelly.dev"/>
                                jackkelly.dev
                            </h1>
                        </Link>

                        <Menu home={
                            props.home
                        }/>

                        <button aria-label="Toggle menu" id="menu-button" className="w-6 md:hidden">
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header;

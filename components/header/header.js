import styles from "./header.module.scss";
import Link from "next/link";

const Header = ({links}) => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <h1>
                    <a className="flex items-center">
                        <img className="m-4" src="/graphic.svg" alt="jackkelly.dev" />
                        jackkelly.dev
                    </a>
                </h1>
            </Link>

            <nav>
                {Object.keys(links).map(key => 
                    <Link href={links[key]}><a className="button">{key}</a></Link>
                )}
            </nav>
        </header>
    )
}

export default Header;
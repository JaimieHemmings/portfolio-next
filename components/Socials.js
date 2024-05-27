import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Socials() {
    return (
        <section className="socials-sticky">
            <span></span>
            <ul>
                <li className="pb-5">
                    <Link href="https://github.com/JaimieHemmings"><FaGithub /></Link>
                </li>
                <li className="pb-5">
                    <Link href="https://www.linkedin.com/in/jaimie-hemmings-379786271/"><FaLinkedin /></Link>
                </li>
                <li className="pb-5">
                    <Link href="/contact"><FaEnvelope /></Link>
                </li>
                <li>
                    <Link href="#"></Link>
                </li>
            </ul>
        </section>
    )
}
import { useState, useEffect } from 'react';
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import bg_header from "../assets/images/header-background.png";
import logo_header from "../assets/images/logoSite.png";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // novo estado

    useEffect(() => {
        AOS.init({ duration: 2000, once: false });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="background-header">
                <img className="bg_header" src={bg_header} alt="background do header" data-aos="zoom-out" />
            </div>

            <a className={`logo ${scrolled ? 'scrolled' : ''}`} href="/#" data-aos="fade-down-left">
                <img src={logo_header} alt="logo da citisoft" />
            </a>

            <p className="text-one" data-aos="fade-up">
                Soluções tecnológicas adaptadas aos desafios de suas necessidades.
            </p>

            {/* BOTÃO MENU */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            {/* NAV */}
            <nav className={menuOpen ? 'open' : ''}>
                <ul>
                    <li><a href="">Início</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Soluções</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;


import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";
import about_image from "../../assets/images/about_image.webp"

const About = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          setScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <section id="about" className={scrolled ? 'about-scrolled' : 'about-initial'}>
            <div className="primary-div">
                <div className="initial-text">
                    <p>
                        Na CitieSoft, somos apaixonados por tecnologia e dedicados a fornecer soluções de software inovadoras que atendam às necessidades específicas do seu negócio.
                    </p>
                </div>
                <div className="initial-button-talk">
                    <button>Agendar uma conversa agora<span className="seta">➔</span></button>
                </div>
            </div>
            <div className="secondary-div">
                <img src={ about_image } alt="image" />
            </div>

        </section>
    )
}

export default About;
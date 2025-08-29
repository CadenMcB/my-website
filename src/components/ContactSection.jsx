import { FaLinkedin } from 'react-icons/fa';

export const ContactSection = () => {
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h3 className="font-thin">
                    Let's Connect
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Contact Me
                </h2>
            </div>
            <div className="flex justify-center">
                <a
                    href="https://www.linkedin.com/in/cadenmcbride/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-button p-3"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="h-5 w-5" />
                </a>
            </div>

        </section>
    );
}
import { ArrowDown } from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <img
                src="src/assets/Caden-McBride-Profile.jpg"
                alt="Caden McBride"
                className="mx-auto mb-8 w-80 h-80 object-cover rounded-xl shadow-lg opacity-0 animate-fade-in-delay-1"
            />
            <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="opacity-0 animate-fade-in-delay-1"> Caden</span>
                    <span className="opacity-0 animate-fade-in-delay-2"> McBride</span>
                </h1>
                <h2 className="text-2xl md:text-4xl tracking-tight">
                    <span className="opacity-0 animate-fade-in-delay-3"> Software Engineer</span>
                </h2>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex gap-4 justify-center">
                    <a
                        href="https://x.com/CadenMcBride"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-button p-3"
                        aria-label="X (Twitter)"
                    >
                        <FaXTwitter className="h-5 w-5" />
                    </a>
                    <a
                        href="https://github.com/CadenMcB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-button p-3"
                        aria-label="GitHub"
                    >
                        <FaGithub className="h-5 w-5" />
                    </a>
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
            </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}
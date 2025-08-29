export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h3 className="font-thin">
                Get To Know More
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src="src/assets/Caden-McBride-Casual.jpg"
                        alt="Caden McBride"
                        className="w-3/4 max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-xl shadow-lg mx-auto"
                    />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">Graduating May 2026...</h3>
                    <p className="text-muted-foreground">I am a senior at The Pennsylvania State University, pursuing a degree in Computer Science and a minor in Computer Engineering. My passion lies in automotive, aerospace, and robotics, with a focus on computer vision applications in these fields. Through my academic projects, I have honed my technical expertise and developed an innovative mindset and I am eager to secure an entry-level software engineering role where I can contribute to cutting-edge projects in dynamic, technology-driven industries.</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                        <a href="#contact" className="custom-button px-6 py-2">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
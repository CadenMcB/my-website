import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Languages
    {name: "C", category: "Languages"},
    {name: "C++", category: "Languages"},
    {name: "CSS/HTML", category: "Languages"},
    {name: "Java", category: "Languages"},
    {name: "JavaScript", category: "Languages"},
    {name: "SQL", category: "Languages"},
    {name: "Swift", category: "Languages"},
    {name: "Python", category: "Languages"},

    // Tools
    {name: "NetBeans", category: "Tools"},
    {name: "Git", category: "Tools"},
    {name: "MATLAB", category: "Tools"},
    {name: "Visual Studio Code", category: "Tools"},
    {name: "Linux", category: "Tools"},
    {name: "Xcode", category: "Tools"},

    // Libraries
    {name: "NumPy", category: "Libraries"},
    {name: "OpenCV", category: "Libraries"},
    {name: "pandas", category: "Libraries"},
    {name: "PyTorch", category: "Libraries"},
    {name: "React", category: "Libraries"},
    {name: "tkinter", category: "Libraries"},

    // Frameworks
    {name: "ROS2", category: "Frameworks"}, 
    {name: "SwiftUI", category: "Frameworks"},  
]

const categories = ["Languages", "Tools", "Libraries", "Frameworks"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("Languages");
    const filteredSkills = skills.filter((skill) => activeCategory === skill.category);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h3 className="font-thin">
                Learn About My
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                Skillset
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)} 
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        
                        )}>{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-centered">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}
const experiences = [
    {
        id: 1,
        title: "Advanced Vehicle Team",
        company: "The Pennsylvania State University",
        date: "August 2025 – Present",
        description: [
            "Chosen as a member of the perception department for senior capstone and tasked with building camera, LiDAR, and radar data processing systems using computer vision and machine learning to enhance vehicle environment detection",
            "Working closely with guidance, navigation, and controls teams to integrate perception solutions on team’s Chevy Bolt by utilizing ROS2, Git, and Python for object detection, localization, and efficient data communication"
        ],
    },
    {
        id: 2,
        title: "Enterprise Data Governance Intern",
        company: "Geisinger System Services",
        date: "June 2024 – Present",
        description: [
            "Created a series of SQL and Python scripts to query and analyze large-scale healthcare databases as part of a daily monitoring system to identify, remediate, and resolve data inconsistencies while providing metrics to support data governance decisions",
            "Leveraged SQL and Python scripts as part of a mail optimization project aimed at minimizing the volume of returned mail to reduce the enterprise’s expenditures and improve overall efficiency of communication with customers"
        ],
    },
    {
        id: 3,
        title: "Software Engineering Intern ",
        company: "Golden Section Ventures",
        date: "December 2023 – April 2024",
        description: [
            "Developed an AI-powered desktop application leveraging OpenAI GPT models to analyze sales pipeline data, predict deal success, and recommend sales strategies based on BANT and MEDDIC frameworks to enhance the accuracy and efficiency of deal closure forecasting",
            "Engineered high-quality AI prompts by extracting, transforming, and cleansing raw CRM data with Python to ensure precise and relevant sales insights were provided through rigorous QA testing and stakeholder feedback"
        ],
    }
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h3 className="font-thin">
                    Explore My
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Experience
                </h2>
                <div className="grid grid-rows-3 gap-8">
                    {experiences.map((experience, key) =>  (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6 flex flex-col space-y-4 text-left">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-xl font-semibold text-left">{experience.title}</h3>
                                <div className="text-sm text-muted-foreground mt-1 md:mt-0">
                                    <span>{experience.company}</span>
                                    <span className="mx-2">|</span>
                                    <span>{experience.date}</span>
                                </div>
                            </div>
                            {Array.isArray(experience.description) ? (
                                <ul className="list-disc list-inside text-muted-foreground text-sm">
                                    {experience.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted-foreground text-sm">{experience.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
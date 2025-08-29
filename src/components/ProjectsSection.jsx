const projects = [
    {
        id: 1,
        title: "Vehicle Vision",
        description: "Actively developing and training a computer vision system using the YOLOv11 algorithm to accurately detect road markings, signs, pedestrians and hazards while estimating their distances from the camera for enhanced scene understanding",
    },
    {
        id: 2,
        title: "Visual Servo",
        description: "Implemented visual servoing on a model humanoid robot using OpenCV Haar cascade classifiers for face detection and PID controllers to achieve smooth and responsive head tracking while effectively managing cases with multiple or no detections",
    },
    {
        id: 3,
        title: "Dynamic Memory Allocator",
        description: "Implemented a custom version of C's standard library malloc, free, and realloc functions by utilizing a segregated free list to optimize memory utilization and allocation throughput for commonly used block sizes",
    },
    {
        id: 4,
        title: "Pinhole Camera Model",
        description: "Utilized camera calibration parameters from two camera views to project 3D motion capture points into 2D pixel coordinates to perform triangulation and determine the location and measurement of objects in the scene through the use of the pinhole camera model, fundamental matrices, and epipolar geometry"
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h3 className="font-thin">
                    Browse My Recent
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) =>  (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6 flex flex-col space-y-4">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "Pin Testing Cyber Security Intern",
            company: "Cyber Security C&T",
            duration: "August 2022 – Jan 2023",
            description:
                "Worked and learned with networks and security systems to protect the company's information.",
        },
        {
            role: "Front End Web Developer",
            company: "Smart Zone",
            duration: "Jan 2023 – August 2025",
            description:
                "Developed responsive and user-friendly web interfaces using HTML5, CSS3, and modern JavaScript (ES6+).",
        },
    ];


    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <section id="experience" className="pt-24 pb-20 text-white px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Experience
                </h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="relative border-l border-gray-700 pl-6"
                >
                    {experiences.map((exp, index) => (
                        <motion.div key={index} variants={item} className="mb-10 group relative">

                            <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-[#0f0f0f] group-hover:scale-125 transition-transform duration-300"></div>


                            <div className="bg-[#1f1f1f] p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition">
                                <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                                <p className="text-sm text-gray-400">
                                    {exp.company} — {exp.duration}
                                </p>
                                <p className="mt-2 text-gray-300">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

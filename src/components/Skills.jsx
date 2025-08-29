import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGit } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiExpress, SiEjs } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
        { name: "EJS", icon: <SiEjs className="text-green-200" /> },
        { name: "Git", icon: <FaGit className="text-red-500" /> },
    ];

    return (
        <section id="skills" className="pt-24 pb-20  text-white px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-[#1f1f1f] border border-gray-700 rounded-lg p-4 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="text-4xl mb-2 animate-bounce">{skill.icon}</div>
                            <p className="text-sm">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

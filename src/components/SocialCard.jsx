import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

export default function SocialCard() {
    const links = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/mohammd-ali-589301239",
            icon: <FaLinkedin size={24} className="group-hover:animate-pulse" />,
            bg: "bg-cyan-500",
            tooltip: "Visit my LinkedIn"
        },
        {
            name: "GitHub",
            href: "https://github.com/mohammd99ali",
            icon: <FaGithub size={24} className="group-hover:animate-pulse" />,
            bg: "bg-neutral-800",
            tooltip: "Check my GitHub"
        },
        {
            name: "Phone",
            href: "tel:+962780486500",
            icon: <FaPhoneAlt size={20} className="group-hover:animate-pulse" />,
            bg: "bg-emerald-600",
            tooltip: "Call me"
        }
    ];

    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
            <ul>
                {links.map((link, i) => (
                    <li
                        key={i}
                        className={`group relative flex items-center w-44 h-12 mr-[-120px] hover:mr-0 duration-300 ${link.bg} rounded-l-xl overflow-hidden`}
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-between items-center w-full text-white px-4"
                        >
                            {link.name}
                            <div className="relative">
                                {link.icon}
                                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-10">
                                    {link.tooltip}
                                </span>


                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "projects", "contact"];
            const scrollY = window.scrollY + 100;

            for (let id of sections) {
                const section = document.getElementById(id);
                if (section && section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
                    setActiveSection(id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full  text-white z-50 shadow">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Mohammad Ali</h1>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    ☰
                </button>

                <ul className={`md:flex gap-8 hidden`}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`hover:text-blue-400 transition-colors ${activeSection === item.id ? "text-blue-400" : ""
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


            {menuOpen && (
                <div className="md:hidden bg-[#0a0a0a] px-6 py-4 space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`block ${activeSection === item.id ? "text-blue-400" : ""
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

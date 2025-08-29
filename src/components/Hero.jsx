export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center text-center px-4">
            <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                    Mohammad Ali Abu Ali
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-6">
                    Front-End Developer & Creative Thinker
                </p>
                <a
                    href="#projects"
                    className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
                >
                    View Projects
                </a>
            </div>
        </section>
    );
}
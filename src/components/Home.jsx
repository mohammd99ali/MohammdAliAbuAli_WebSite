function Home() {
    return (



        <div className="max-w-4xl mx-auto mt-12 px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Hi I am Mohammd Ali Abu Ali</h1>
            <p className="text-lg text-gray-700 mb-6">
                I am  Software Engineer with a strong foundation in building dynamic web applications. Experienced in crafting efficient, scalable, and accessible solutions using modern technologies. Driven by a passion for innovation, and mastering new tools to deliver impactful digital experiences.
            </p>
            <div className="flex justify-center gap-6">
                <a
                    href="#projects"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                    Projects
                </a>
                <a
                    href="/about"
                    className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-400 transition"
                >
                    About me
                </a>
            </div>

        </div>





    )
}

export default Home;
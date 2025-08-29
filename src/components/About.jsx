export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-20  text-white"
        >

            <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    my name is mohammd 25 years old i have graguated from Al-Ahliyah Amman university i have bachelor degree in network and Information security and I have strong passion for learning web development and designing user interfaces.
                    I'm currently improving my skills in React, Redux, and Tailwind CSS, and I aim to build meaningful projects that reflect my love for technology. I enjoy spending time learning new things and taking on challenges that help me grow personally and professionally.

                </p>
                <p className="text-gray-400 mt-4">
                    I love solving problems, learning new things, and bringing creative ideas to life through code.
                </p>
            </div>

            <div className="flex-1 max-w-sm">
                <img
                    src="/my-photo.jpg"
                    alt="Mohammad"
                    className="rounded-2xl shadow-lg object-cover"
                />
            </div>
        </section>
    );
}

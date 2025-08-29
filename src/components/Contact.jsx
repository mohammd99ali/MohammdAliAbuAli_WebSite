export default function Contact() {
    return (
        <section id="contact" className="py-24  text-white px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
                <p className="text-gray-400 mb-10">
                    I am interested in front-end and full-stack web development opportunities, if you are offering such opportunities, don't hesitate to contact me using the form below.

                    Name

                </p>

                <form
                    action="#"
                    method="POST"
                    className="flex flex-col gap-6"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="p-4 rounded-md bg-[#1a1a1a] border border-gray-700 text-white"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="p-4 rounded-md bg-[#1a1a1a] border border-gray-700 text-white"
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="p-4 rounded-md bg-[#1a1a1a] border border-gray-700 text-white"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-white text-black py-3 px-6 font-semibold rounded-md hover:bg-gray-200 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

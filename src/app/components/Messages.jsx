export default function Messages() {
  return (
    <section className=" flex justify-center items-center mb-10" id="message">
      <div className="bg-[#1E1E1E] p-5 rounded-2xl text-white w-[600px]">
        <h3 className="mb-15 text-center">Send me a message</h3>
        <form id="contactForm" className="flex flex-col gap-4">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="mb-2 bg-custom-gradient p-2 rounded"
          />
          <p>Email:</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mb-2 bg-custom-gradient p-2 rounded"
          />
          <p>Message:</p>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            className="mb-2 bg-custom-gradient p-2 rounded h-[100px]"
          ></textarea>
          <button
            type="submit"
            className="bg-custom-gradient rounded p-2 h-[50px]"
          >
            Send me message
          </button>
        </form>
      </div>
    </section>
  );
}

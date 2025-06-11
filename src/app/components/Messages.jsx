export default function Messages() {
  return (
    <section
      className=" flex justify-center items-center mb-10 font-medium-16"
      id="message"
    >
      <div className="bg-[#1E1E1E] p-5 rounded-2xl w-[620px]">
        <h3 className="mb-15 text-center font-bold-25">Send me a message</h3>
        <form
          action="https://formspree.io/f/xblygake"
          method="POST"
          className="flex flex-col gap-4"
        >
          <div className="">
            <p className="font-medium-18">Name:</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="mb-2 bg-custom-gradient p-2 rounded w-full"
            />
            <p className="font-medium-18">Email:</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="mb-2 bg-custom-gradient p-2 rounded w-full"
            />
          </div>
          <p className="font-medium-18">Message:</p>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            className="mb-2 bg-custom-gradient p-2 rounded min-h-[75px] h-[100px]"
          ></textarea>
          <button
            type="submit"
            className="bg-custom-gradient rounded p-2 h-[50px] hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:scale-102 transition duration-200 cursor-pointer font-bold-16"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

import { Navbar } from "./NavBar";
import { useEffect } from "react"; // Step 1: Import useEffect

export default function ContactPage() {
  // Step 2: Set the document title
  useEffect(() => {
    document.title = "Contact | Say2Cups ⌖"; // Change this to your desired title
  }, []);

  return (
    <div className="hero">
      <Navbar page="contacts" />
      <div className="aboutpage">
        <h1 id="headerText">Contact</h1>
        <div className="contact-video">
          <div className="email">
            <form
              action="https://formsubmit.co/say2cups1@gmail.com"
              method="POST"
              className="text-box-container"
            >
              <label htmlFor="email" className="label" id="pf2">
                Email *
              </label>
              <input
                type="email"
                id="pf2"
                name="email"
                className="text-box"
                placeholder="Your email address"
                required
              />
              <label htmlFor="message" className="label" id="pf3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="text-box text_flick"
                placeholder="Write your message here..."
                required
              ></textarea>
              <button type="submit" id="pf1" className="button">
                Send
              </button>
            </form>
            <div className="contact_image">
              <img
                className="contact_image_size"
                src="Images/money3d.gif"
                alt="Contact Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

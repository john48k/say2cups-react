export default function ContactPage() {
  return (
    <div className="navclass">
      <header>
        <nav>
          <a
            href="HomePage.html"
            className="font green-say2cups logo cursor link-remove green-point text_flick"
          >
            Say2Cups
          </a>
          <ul>
            <li>
              <a href="HomePage.html" className="green-point text_flick">
                home
              </a>
            </li>
            <li>
              <a href="beatsPage.html" className="green-point text_flick">
                beats
              </a>
            </li>
            <li>
              <a href="kitsPage.html" className="green-point text_flick">
                kits
              </a>
            </li>
            <li>
              <a href="galleryPage.html" className="green-point text_flick">
                gallery
              </a>
            </li>
            <li className="menu">
              <a href="#" className="green-point text_flick">
                socials
              </a>
              <ul className="dropdown">
                <li>
                  <a
                    href="https://instagram.com/say2cups/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@Say2Cups"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://soundcloud.com/say2cups"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    soundcloud
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/artist/5WFyQ3M1qaPqFYnpZ44bAg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    spotify
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contactPage.html" className="green text_flick">
                contact
              </a>
            </li>
          </ul>
        </nav>
        <h1 id="headerText">Contact</h1>
        <div className="gallery">
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
            <div className="contact_image gallery">
              <img
                className="contact_image_size"
                src="Images/money3d.gif"
                alt="Contact Image"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

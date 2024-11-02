export default function Homepage() {
  return (
    <div className="hero">
      <nav>
        <a
          href="HomePage.html"
          className="font green-say2cups logo cursor link-remove green-point text_flick"
        >
          Say2Cups
        </a>
        <ul>
          <li>
            <a href="HomePage.html" className="green text_flick">
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
            <a href="/contacts" className="green-point text_flick">
              contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="aboutpage">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqGhWghNptq0Bh-JjhRM4yt2BMrR4qwyfJg&usqp=CAU"
          alt="photo"
          className="daftphoto text_photo"
        />
        <p className="about-text about-font text_flick_faster">[say2cups]</p>
        <p
          className="about-text about-font"
          style={{ color: "rgb(241, 255, 207)" }}
        >
          <b>
            <span>Music Producer</span>/Video Editor/Full Stack Developer
          </b>
        </p>
      </div>
    </div>
  );
}

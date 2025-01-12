import PropTypes from "prop-types";
export function Navbar({ page }) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="/"
            className="font green-say2cups logo cursor link-remove green-point text_flick"
          >
            Say2Cups
          </a>
        </li>
        <li>
          <a
            href="/"
            className={`green-point text_flick ${page === "home" ? "green" : ""
              }`}
          >
            home
          </a>
        </li>
        <li>
          <a
            href="Beats"
            className={`green-point text_flick ${page === "Beats" ? "green" : ""
              }`}
          >
            beats
          </a>
        </li>
        <li>
          <a
            href="Kits"
            className={`green-point  text_flick ${page === "Kits" ? "green" : ""
              }`}
          >
            kits
          </a>
        </li>
        <li>
          <a
            href="videos"
            className={`green-point text_flick ${page === "videos" ? "green" : ""
              }`}
          >
            videos
          </a>
        </li>
        <li className="menu">
          <a
            href="#"
            className={`green-point  text_flick ${page === "socials" ? "green" : ""
              }`}
          >
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
          <a
            href="Contacts"
            className={`green-point text_flick ${page === "contacts" ? "green" : ""
              }`}
          >
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  page: PropTypes.string.isRequired,
};

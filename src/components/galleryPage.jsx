import { Navbar } from "./NavBar";

export default function Gallery() {
  return (
    <div className="hero">
      <Navbar page="Gallery" />
      <div className="aboutpage"></div>
      <p id="header_text" className="header-text">
        Visuals made with a vision
      </p>
      <div className="gallery">
        <div>
          <video className="video" src="Videos/step bro.mp4" controls></video>
          <p className="pText about-font" id="pf1">
            Are you seriously watching this by yourself!
          </p>
        </div>

        <div>
          <video className="video" src="Videos/rain.mp4" controls></video>
          <a
            href="https://soundcloud.com/lilac/rain"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p className="pText about-font hover-cursor" id="pf2">
              rain
            </p>
          </a>
        </div>

        <div>
          <video
            className="video"
            src="Videos/BENT BREAKS- Kappuh (ft. Wakizashi).mp4"
            controls
          ></video>
          <a
            href="https://www.youtube.com/watch?v=n19O4vnvFYc&pp=ygUSa2FwcHVoIGJlbnQgYnJlYWtz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p className="pText about-font hover-cursor" id="pf3">
              Kappuh - bent breaks (ft. Wakizashi)
            </p>
          </a>
        </div>

        <div>
          <video className="video" src="Videos/cowboy hat.mp4" controls></video>
          <p className="pText about-font" id="pf4">
            I got my cowboy hat on
          </p>
        </div>

        <div>
          <video className="video" src="Videos/half life.mp4" controls></video>
          <p className="pText about-font" id="pf5">
            half life
          </p>
        </div>

        <div>
          <video
            className="video"
            src="Videos/need for speed.mp4"
            controls
          ></video>
          <p className="pText about-font" id="pf6">
            Kappuh - need For $peed [snippet]
          </p>
        </div>

        <div>
          <video
            className="video"
            src="Videos/crt emulator.mp4"
            controls
          ></video>
          <p className="pText about-font" id="pf7">
            taking lsd
          </p>
        </div>

        <div>
          <video
            className="video"
            src="Videos/Car intro maybe.mp4"
            controls
          ></video>
          <p className="pText about-font" id="pf8">
            silvia
          </p>
        </div>
      </div>
      <script src="gallery.js"></script>
    </div>
  );
}

import { useEffect } from "react"; // Step 1: Import useEffect
import { Navbar } from "./NavBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Beats() {
  // Step 2: Set the document title
  useEffect(() => {
    document.title = "Beats | Say2Cups ⌖"; // Change this to your desired title
  }, []);

  return (
    <div className="hero">
      <Navbar page="Beats" />
      <div className="aboutpage"></div>
      <p id="header_text" className="header-text">
        Purchase Beats Here
      </p>

      <div className="beat-align-cards">
        <div className="beat-card-container text_flick_faster">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/577/906/576/japanese-cars-jdm-nissan-s15-nissan-silvia-spec-wallpaper-preview.jpg"
            alt=""
          />
          <div className="text_flick">
            <p>Title: </p>
            <p>Key: </p>
            <p>Bpm:</p>
            <p>Genre:</p>
            <p>Prod:</p>
            <button className="beats-price-button">
              <ShoppingCartIcon />
              $30.00
            </button>
          </div>
        </div>
        <div className="beat-card-container text_flick_faster">
          <img
            src="https://i.pinimg.com/736x/2b/f0/58/2bf0589187b658af1258ba7e23a115b8.jpg"
            alt=""
          />
          <div className="text_flick">
            <p>Title: </p>
            <p>Key: </p>
            <p>Bpm:</p>
            <p>Genre:</p>
            <p>Prod:</p>
            <button className="beats-price-button">
              <ShoppingCartIcon />
              $30.00
            </button>
          </div>
        </div>
        <div className="beat-card-container text_flick_faster">
          <img
            src="https://i.pinimg.com/enabled_lo_mid/736x/2b/83/b8/2b83b8791bde1c9f9786edf41887c136.jpg"
            alt=""
          />
          <div className="text_flick">
            <p>Title: </p>
            <p>Key: </p>
            <p>Bpm:</p>
            <p>Genre:</p>
            <p>Prod:</p>
            <button className="beats-price-button">
              <ShoppingCartIcon />
              $30.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

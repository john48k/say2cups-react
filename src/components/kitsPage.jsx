import { Navbar } from "./NavBar";

export default function Kits() {
  return (
    <div className="hero">
      <Navbar page="Kits" />
      <div className="aboutpage">
        <h1 id="header_text" className="kit_headerText">
          Kits
        </h1>
        <div className="gallery">
          <div>
            <img src="Images/say2cups_drumkit_00000.png" alt="" />
            <p className="pText about-font kit_title_move" id="pf1">
              Say2Cups Personal Drum Kit
            </p>
            <p className="pText about-font" id="pf2">
              <u>Drum Kit Contains:</u>
            </p>
            <div className="move_text">
              <p className="pText about-font">+ 300 chord progression midis</p>
              <p className="pText about-font">+ Recording Vocal Presets</p>
              <p className="pText about-font">+ VST presets (Sauce)</p>
              <p className="pText about-font">+ Mixing presets</p>
              <p className="pText about-font">+ 24 Chants</p>
              <p className="pText about-font">+ 26 808s</p>
              <p className="pText about-font">+ 19 Sub 808s</p>
              <p className="pText about-font">+ 28 Claps</p>
              <p className="pText about-font">
                + 17 Hi-Hats (hi-hat midis included)
              </p>
              <p className="pText about-font">+ 20 Percs</p>
              <p className="pText about-font">+ 12 Snares</p>
              <p className="pText about-font">+ 15 Crashes</p>
              <p className="pText about-font">+ 10 Rims</p>
              <p className="pText about-font">+ 8 Open Hats</p>
              <p className="pText about-font">+ 27 SFX</p>
              <p className="pText about-font">+ 300 Tags/Vocals</p>
              <p className="pText about-font">+ 9 Shakers</p>
              <p className="pText about-font">+ 5 Transition SFX</p>
            </div>
            <button className="kit_button" id="button1">
              Add to Cart: $50.00
            </button>
          </div>
          <div>
            <img src="Images/plugg_loopkitv1_00000.png" alt="" />
            <p className="pText about-font kit_title_move" id="pf3">
              Plugg Loop Kit vol1
            </p>
            <p className="pText about-font" id="pf4">
              <u>Loop Kit Contains:</u>
            </p>
            <div className="move_text">
              <p className="pText about-font">+ 10 Loops</p>
            </div>
            <button className="kit_button" id="button2">
              Add to Cart: $20.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

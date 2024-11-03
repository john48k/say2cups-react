import { Navbar } from "./NavBar";

export default function Beats() {
  return (
    <div className="hero">
      <Navbar page="Beats" />
      <div className="aboutpage">
        <form className="put-middle">
          <label id="beats-title" htmlFor="title">
            TITLE
          </label>
          <input type="text" name="title" id="beats-title-input-box" />

          <label id="beats-price" htmlFor="price">
            PRICE
          </label>
          <input type="number" name="price" id="beats-price-input-box" />
          <button id="beats-save-btn">Save</button>
        </form>
      </div>
    </div>
  );
}

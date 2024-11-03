import { Navbar } from "./NavBar";

export default function Homepage() {
  return (
    <div className="hero">
      <Navbar page="home" />
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

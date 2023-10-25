import React from "react";
import "./intro.css";
import bg1 from "../../assets/bg-1.png";
import bg2 from "../../assets/bg-2.png";
import bg3 from "../../assets/bg-3.png";

const Intro = () => {
  return (
    <div>
      <div id="carouselExampleDark" class="carousel carousel-light slide">
        <div class="carousel-indicators d-none">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={bg3} class="d-block w-100 introimg" alt="first img" style={{ filter: "brightness(50%)" }} />
            <div class="carousel-caption text-start text-white">
              <h2 style={{ fontFamily: "Poppins", fontSize: "50px", fontWeight: "900"}}>
                {" "}
                <span>Jasa Pembuatan Website</span>{" "}
              </h2>
              <h4 style={{ fontFamily: "Poppins", fontWeight: "600", paddingTop: "2px" }}>Proses Cepat, Tepat, dan Berkualitas!</h4>
              <p className="text-white">
                <span className="mb-4" style={{ fontFamily:'Poppins' }}>
                Platform dengan pembuatan website yang cepat dan terpercaya. <br /> Anda bisa stalking website kami untuk informasi lebih lengkap!
                </span>
              </p>
              {/* <button type="button" class="btn btn-primary">Learn more</button> */}
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={bg2} class="d-block w-100 introimg" alt="second img" style={{ filter: "brightness(70%)" }} />
            <div class="carousel-caption text-center text-white">
              <h4 style={{ fontFamily: "Roboto", fontSize: "30px", fontWeight: "400" }}>Kami Adalah Pilihan yang Tepat dan Terbaik Anda!</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img src={bg1} class="d-block w-100 introimg" alt="third img" style={{ filter: "brightness(50%)" }} />
            <div class="carousel-caption text-end text-white">
              <div>
              <h4 className="pb-5">
                Tekan tombol di bawah untuk melihat karya-karya kami!
              </h4>
                <a href="/portofolio">
                  <button type="submit" class="btn btn-primary">
                    {" "}
                    Portofolio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Intro;

import React from "react";
import logo from "../../../assets/logo.png";
import sekolah from "../../../assets/sekolah.jpg";
import lowongan from "../../../assets/lowongan kerja.jpg";
import masjid from "../../../assets/masjid.jpg";

const Isi = () => {
  return (
    <div class="container py-5">
      <div class="row" style={{ marginTop: "130px" }}>
        <p class="text-white text-center" style={{ fontFamily: "Poppins", fontWeight: "900", fontSize: "70px" }}>
          Website{" "}
          <span class="text-secondary text-center" style={{ fontFamily: "Poppins", fontWeight: "900", fontSize: "70px" }}>
            Instan
          </span>
        </p>
      </div>
      <center>
        <button
          className="btn btn-primary"
          onClick={() => {
            document.getElementById("pengertian").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Pengertian
        </button>

        <button
          className="btn btn-primary ms-3"
          onClick={() => {
            document.getElementById("fitur").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Fitur
        </button>

        <button
          className="btn btn-primary ms-3"
          onClick={() => {
            document.getElementById("pilihan").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Pilihan
        </button>

        <hr style={{ width: "700px" }} />
      </center>

      <div id="pengertian" class="row align-items-center border-bottom" style={{ marginTop: "70px", marginBottom: "70px" }}>
        <div class="col-md-7 mx-auto my-5">
          <img src={logo} style={{ width: "400px", height: "400px" }} />
        </div>
        <div class="col-md-5 text-white text-start">
          <p class="display-5" style={{ fontFamily: "Poppins", fontSize: "35px", fontWeight: "400" }}>
            Jasa Pembuatan
          </p>
          <p class="display-5" style={{ fontFamily: "Poppins", fontSize: "35px", fontWeight: "400" }}>
            Website Instan
          </p>
          <p class="lead" style={{ fontFamily: "Poppins", fontSize: "17px" }}>
            Situs web custom adalah suatu website yang diciptakan sesuai dengan keinginan Anda. Tidak ada template yang akan membatasi Anda untuk mengkreasikan bagaimana website yang ingin Anda wujudkan. Websitor menawarkan layanan
            pembuatan situs website custom. Jika Anda bingung menentukan bagimana konsep website yang ingin Anda wujudkan. Silahkan hubungi tanyakan semua pertanyaan hingga rekomendasi dan solusi dari kami.
          </p>
        </div>
      </div>

      <div id="fitur" class="container-fluid text-center text-white py-5 border-bottom" style={{ height: "fit-content", fontFamily: "Roboto", marginTop: "70px", marginBottom: "100px" }}>
        <p class="h1 mb-5 text-center">Fitur Website Instan</p>
        <div class="row">
          <div class="col-md-4 mx-auto" style={{ marginBottom: "70px" }}>
            <p class="h4 text-secondary">
              <span class="mx-2"></span>Web Responsif
            </p>
            <p>
              Situs web responsif adalah <br /> situs web yang dapat menyesuaikan diri <br /> dengan perangkat yang digunakan yaitu <br /> saat sedang memakai komputer, <br /> mobile, maupun tablet.
            </p>
          </div>
          <div class="col-md-4 mx-auto">
            <p class="h4 text-secondary">
              <span class="mx-2"></span>Isi Menarik
            </p>
            <p>
              Setiap halaman di dalam web Anda akan <br /> kami kreasikan dengan menarik agar dapat <br /> memikat perhatian pengunjung <br /> dan bikin pengunjung betah <br /> melihat web Anda.
            </p>
          </div>
          <div class="col-md-4 mx-auto">
            <p class="h4 text-secondary">
              <span class="mx-2"></span>Kontak Informasi
            </p>
            <p>
              Setiap halaman akan kami tampilkan <br /> kontak informasi untuk memudahkan pengunjung <br /> menghubungi Anda. Sehingga kesempatan <br /> menarik pengunjung melakukan transaksi <br /> akan semakin besar.
            </p>
          </div>
        </div>
      </div>

      <div id="pilihan" class="row align-items-center" style={{ marginTop: "70px", marginRight: "70px" }}>
        <h1 className="text-secondary text-left mb-5" style={{ fontFamily: "Poppins", fontWeight: "600" }}>
          Web yang Bisa Jadi Pilihanmu!
        </h1>
      </div>

      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={lowongan} class="d-block w-100 mx-auto" />
            <div class="d-none d-md-block" style={{ marginTop: "70px" }}>
              <h5 className="text-white" style={{ fontSize: "30px" }}>
                Web Portal Lowongan Pekerjaan
              </h5>
              <p className="text-white" style={{ fontSize: "20px" }}>
                Web yang memudahkan para pekerja dalam <br /> mencari pekerjaan.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={sekolah} class="d-block w-100 mx-auto" />
            <div class="d-none d-md-block" style={{ marginTop: "70px" }}>
              <h5 className="text-white" style={{ fontSize: "30px" }}>
                Web Sekolah, Yayasan, dan Universitas
              </h5>
              <p className="text-white" style={{ fontSize: "20px" }}>
                Web yang membantu sekolah untuk memiliki <br /> citra yang lebih baik.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={masjid} class="d-block w-100 mx-auto" />
            <div class="d-none d-md-block" style={{ marginTop: "70px" }}>
              <h5 className="text-white" style={{ fontSize: "30px" }}>
                Website Masjid
              </h5>
              <p className="text-white" style={{ fontSize: "20px" }}>
                Website yang memberikan informasi kepada seluruh jamaah <br /> mengenai informasi donatur, kegiatan masjid, <br /> dan informasi lainnya.
              </p>
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

      <form id="kontak" style={{ marginTop:"70px" }}>
        <div className="text-center text-white mt-4 py-5">
          <h1 style={{ fontFamily: "Poppins" }}>Hubungi Kami</h1>
          <h5 className="text-white-50" style={{ fontFamily: "Roboto" }}>
            Hubungi Kami untuk Konsultasi dan Pembelian serta Seputar Informasi Menarik Lainnya.
          </h5>
        </div>

        <div className="text-white pt-3">
          <div className="row">
            <div className="col-4 ms-5">
              <div className="mb-3">
                <label for="inputEmail3" className="col-3 form-label" style={{ fontFamily: "Roboto" }}>
                  Nama :
                </label>
                <input type="text" className="form-control border-secondary border-3" id="inputEmail3" placeholder="Masukkan Nama"></input>
              </div>
              <div className="mb-4">
                <label for="inputEmail3" className="col-3 form-label" style={{ fontFamily: "Roboto" }}>
                  Email :
                </label>
                <input type="email" className="form-control border-secondary border-3" id="inputEmail3" placeholder="Masukkan Email"></input>
              </div>
              <div className="mb-4">
                <label for="inputEmail3" className="col-3 form-label" style={{ fontFamily: "Roboto" }}>
                  No.Telp :
                </label>
                <input type="number" className="form-control border-secondary border-3" id="inputEmail3" placeholder="Masukkan Nomor Telepon"></input>
              </div>
              <div className="mb-4">
                <label for="inputEmail3" className="col-3 form-label" style={{ fontFamily: "Roboto" }}>
                  Perusahaan :
                </label>
                <input type="text" className="form-control border-secondary border-3" id="inputEmail3" placeholder="Masukkan Perusahaan"></input>
              </div>
            </div>

            <div className="col-5 me-5 ms-auto mb-4">
              <div className="mb-3">
                <label for="inputEmail3" className="col-3 form-label" style={{ fontFamily: "Roboto" }}>
                  Posisi :
                </label>
                <input type="text" className="form-control border-secondary border-3" id="inputEmail3" placeholder="Masukkan Posisi Anda"></input>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontFamily: "Roboto" }}>
                  Message :
                </label>
                <textarea class="form-control border-secondary border-3" id="exampleFormControlTextarea1" rows="9" placeholder="Masukkan Pesan"></textarea>
              </div>
              <button className="btn btn-primary">Kirim Pesan</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Isi;

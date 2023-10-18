import React from "react";

const Form = () => {
  return (
    <form id="kontak" className="container" style={{ marginTop:"70px" }}>
        <div className="text-center text-white mt-4 py-5">
          <h1 style={{ fontFamily: "Poppins", fontWeight:"600", fontSize:"50px"}}>Hubungi Kami</h1>
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
                <input type="text" className="form-control border-3" id="inputEmail3" placeholder="Masukkan Nama"></input>
              </div>
              <div className="mb-4">
                <label for="inputEmail3" className="col-3 form-label" style={{ fontFamily: "Roboto" }}>
                  Email :
                </label>
                <input type="email" className="form-control border-3" id="inputEmail3" placeholder="Masukkan Email"></input>
              </div>
              <div className="mb-4">
                <label for="inputEmail3" className="col-3 form-label" style={{ fontFamily: "Roboto" }}>
                  No.Telp :
                </label>
                <input type="number" className="form-control border-3" id="inputEmail3" placeholder="Masukkan Nomor Telepon"></input>
              </div>
              <div className="mb-4">
                <label for="inputEmail3" className="col-3 form-label" style={{ fontFamily: "Roboto" }}>
                  Perusahaan :
                </label>
                <input type="text" className="form-control border-3" id="inputEmail3" placeholder="Masukkan Perusahaan"></input>
              </div>
            </div>

            <div className="col-5 me-5 ms-auto mb-4">
              <div className="mb-3">
                <label for="inputEmail3" className="col-3 form-label" style={{ fontFamily: "Roboto" }}>
                  Posisi :
                </label>
                <input type="text" className="form-control border-3" id="inputEmail3" placeholder="Masukkan Posisi Anda"></input>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" style={{ fontFamily: "Roboto" }}>
                  Message :
                </label>
                <textarea class="form-control border-3" id="exampleFormControlTextarea1" rows="9" placeholder="Masukkan Pesan"></textarea>
              </div>
              <button className="btn btn-primary">Kirim Pesan</button>
            </div>
          </div>
        </div>
      </form>
  );
};

export default Form;

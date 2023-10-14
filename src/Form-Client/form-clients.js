import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  return (
    <form className="container">
      <div className="text-center text-white mt-4 py-5">
        <h1>Hubungi Kami</h1>
        <h5 className="text-white-50">Hubungi Kami untuk Konsultasi dan Pembelian serta Seputar Informasi Menarik Lainnya.</h5>
      </div>

      <div className="text-white pt-3">
        <div className="row">
          <div className="col-4 ms-5">
            <div className="mb-3">
              <label for="inputEmail3" className="col-3 form-label">
                Nama :
              </label>
              <input type="text" className="form-control" id="inputEmail3" placeholder="Masukkan Nama"></input>
            </div>
            <div className="mb-4">
              <label for="inputEmail3" className="col-3 form-label">
                Email :
              </label>
              <input type="text" className="form-control" id="inputEmail3" placeholder="Masukkan Email"></input>
            </div>
            <div className="mb-4">
              <label for="inputEmail3" className="col-3 form-label">
                No.Telp :
              </label>
              <input type="text" className="form-control" id="inputEmail3" placeholder="Masukkan Nomor Telepon"></input>
            </div>
            <div className="mb-4">
              <label for="inputEmail3" className="col-3 form-label">
                Perusahaan :
              </label>
              <input type="text" className="form-control" id="inputEmail3" placeholder="Masukkan Perusahaan"></input>
            </div>
           
          </div>

          <div className="col-5 me-5 ms-auto mb-4">
            <div className="mb-3">
              <label for="inputEmail3" className="col-3 form-label">
                Posisi :
              </label>
              <input type="text" className="form-control" id="inputEmail3" placeholder="Masukkan Posisi Anda"></input>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message :
              </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="9" placeholder="Masukkan Pesan"></textarea>
            </div>
            <button className="btn btn-primary">Kirim Pesan</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;

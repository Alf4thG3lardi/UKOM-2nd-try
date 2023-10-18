import React from "react";
import checklist from "../../assets/checklist icon.png";
import responsif from '../../assets/responsif.png';
import desain from '../../assets/desain.png';
import konten from '../../assets/konten.png';

const Keunggulan = () => {
  return (
    <div class="container d-flex align-items-center my-5" style={{ height: "100vh" }}>
      <div class="mx-auto">
        <p class="h1 text-white text-center my-5">Keunggulan Website Kami?</p>
        {/* <h5 className="fst-normal text-center mb-5" style={{ color:'blue', fontSize:'25px'}}>
          <span className="text-secondary px-3" style={{fontSize:'20px' }}>Jangan khawatir mengenai spesifikai website Anda. Kami memiliki tim yang akan <br /> menyiapkan website terbaik hingga memperkuat branding bisnis Anda.</span>
        </h5> */}
        <div class="d-flex flex-row justify-content-center">
          <div class="border border-primary border-2 rounded-2 me-3 ps-3 pt-4" style={{ width:'25rem', height:'27rem' }}>
            <center>
            <h5 className="text-white">
              <img className="me-2" src={checklist} alt="" style={{ width: "37px"}} />
              Web Responsif
            </h5>
            <img className="my-4" src={responsif} alt="" style={{ width:'200px'}}/>
            <p className="text-white me-2">Kami membangun situs web responsif dengan layout yang mampu menyesuaikan diri baik dilihat di komputer, mobile, ataupun tablet.</p>
            </center>
          </div>

          <div class="border border-primary border-2 rounded-2 ps-3 pt-4" style={{ width:'25rem', height:'27rem' }}>
            <center>
            <h5 className="text-white">
              <img className="me-2" src={checklist} alt="" style={{ width: "37px"}} />
              Desain yang Mengagetkan
            </h5>
            <img className="my-4" src={desain} alt="" style={{ width:'200px' }}/>
            <p className="text-white me-2">Kami memiliki tim web yang akan menciptakan antar muka yang menakjubkan sehingga pengunjung akan betah melihat website anda!</p>
            </center>
          </div>

          <div class="border border-primary border-2 rounded-2 ms-3 ps-3 pt-4" style={{ width:'25rem', height:'27rem' }}>
            <center>
            <h5 className="text-white">
              <img className="me-2" src={checklist} alt="" style={{ width: "37px"}} />
              Konten yang Menarik
            </h5>
            <img src={konten} alt="" style={{ width:'250px' }}/>
            <p className="text-white me-2">Tim web kami siap sajikan konten menarik untuk website anda dengan ilustrasi-ilustrasi yang bikin geleng-geleng kepala karena takjub.</p>
            </center>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Keunggulan;

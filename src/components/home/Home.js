import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <header>
        <div>
          <img
            src="assets/Home 1.1.png"
            className="rounded mx-auto d-block w-100"
            alt="gambar"
          />
        </div>

        <div>
          <img
            src="assets/logo.png"
            className="rounded mx-auto d-block"
            alt="logo"
            height="300"
            width="mx-auto"
          />
        </div>
      </header>

      <main>
        <h2 className="text-center" id="about">
          Hemat Waktu dan Uang? Pakai Patungan aja!
        </h2>

        <div className="container text-center">
          <div className="row">
            <div className="col">
              Pisahkan tagihan dengan mudah dan adil bersama Patungan. Kami tahu
              bahwa menghitung dan membagi tagihan dengan teman-teman Anda bisa
              menjadi tugas yang melelahkan. Oleh karena itu, kami hadir untuk
              menyederhanakan proses pembayaran bersama. Jadi, tak perlu lagi
              repot-repot dengan perhitungan manual yang merepotkan. Pakai
              Patungan sekarang dan nikmati kemudahan berbagi biaya dengan
              teman-teman Anda. Hidupkan gaya hidup hemat dan cerdas Anda hari
              ini!
            </div>
          </div>

          <Link
            to="/step-satu"
            className="btn btn mt-5 btn-lg"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#17223a",
            }}
            onClick={() => props.changeStatusStep("step1")}
          >
            Hitung Sekarang
          </Link>
        </div>

        <div>
          <img src="assets/pesawat.png" alt="" />
        </div>
      </main>
    </div>
  );
}

export default Home;

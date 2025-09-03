import { listProperty, listTeam, listTestimoni } from "./data";
import buildingImage from "./assets/building.png";

function App() {
  return (
    <div>
      {/* === HERO SECTION === */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${buildingImage})` }}>
        <div className="absolute inset-0 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center p-4 animate__animated animate__fadeInDown animate__delay-4s">
          <a
            href="#"
            className="bg-white rounded-full px-4 py-2 text-black font-normal mb-3">
            <span className="font-semibold">Home/</span>Properties
          </a>
          <h1 className="text-[#F97A00] text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3">
            Temukan Rumah Impian Anda
            <br />
            Dalam hitungan Hari.
          </h1>
          <p className="text-black font-medium opacity-95 text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg 2xl:text-lg  max-w-2xl">
            Jelajahi pilihan peluang real estat bernilai tinggi yang dirancang
            untuk
            <br />
            pertumbuhan dan stabilitas keuangan.
          </p>
        </div>
      </div>

      {/* === HERO SECTION === */}

      {/* === PROPERTI === */}

      <div className="property px-15 bg-[#1f1c1d] pb-20">
        <div>
          <p
            className="text-lg font-semibold text-center text-white mb-3 pt-25"
            data-aos="fade-up"
            data-aos-duration="1000">
            Plihan daftar terbaik untuk anda
          </p>
          <h1
            className="xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-2xl font-semibold text-center mb-10 text-[#F97A00]"
            data-aos="fade-up"
            data-aos-duration="1000">
            Daftar Rumah/Apartemen Pilihan
          </h1>
          <div className="property-box grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 w-11/12 gap-6 mx-auto">
            {listProperty.map((property) => (
              <div
                className="bg-zinc-800 hover:bg-[#2d2d30] p-2 rounded-2xl"
                key={property.id}
                data-aos="fade-up"
                data-aos-duration={property.dad}>
                <img
                  src={property.gambar}
                  alt="PropertyImage"
                  className=" rounded-2xl"
                />
                <div>
                  <h1 className="text-xl font-semibold text-white mt-2">
                    {property.nama}
                  </h1>
                  <div className="flex gap-1 mt-2 items-center">
                    <i className="fa-solid fa-location-dot text-sm text-white"></i>
                    <p className="font-base text-s, text-white">
                      {property.lokasi}
                    </p>
                  </div>
                  <div className="flex items-center mt-1 gap-3">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-arrows-up-down-left-right text-sm text-white"></i>
                      <p className="text-sm text-white">{property.luas}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-bed text-sm text-white"></i>
                      <p className="text-sm text-white">{property.kamar}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-bath text-sm text-white"></i>
                      <p className="text-sm text-white">{property.mandi}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center  mt-5 px-1">
                    <h4 className="font-bold text-xl text-white">
                      {property.harga}
                    </h4>
                    <div className="flex items-center gap-2 text-[#F97A00] hover:text-white">
                      <a href="#" className="font-medium ">
                        Lihat
                      </a>
                      <i className="fa-solid fa-arrow-up-right-from-square "></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="bg-white hover:bg-[#F97A00] cursor-pointer hover:text-white px-4 py-2 rounded-full text-sm font-semibold mt-10 "
              data-aos="fade-up"
              data-aos-duration="1000">
              Property Page
            </button>
          </div>
        </div>
      </div>

      {/* === PROPERTI === */}

      {/* === TESTIMONI === */}
      <div className="testimoni pt-25 px-4 pb-10 sm:px-8 md:px-12 lg:px-16">
        <div
          className=" flex gap-2 justify-center"
          data-aos="fade-up"
          data-aos-duration="1000">
          <div className="bg-zinc-100 rounded-full px-2 py-1 flex items-center gap-2">
            <i className="fa-brands fa-signal-messenger"></i>
            <p className="text-sm font-medium text-center">
              Apa yang pelanggan kami katakan
            </p>
          </div>
        </div>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-center mt-1"
          data-aos="fade-up"
          data-aos-duration="1000">
          TESTIMONI
        </h1>
        <p
          className="text-md font-semibold text-center mt-4 mb-15"
          data-aos="fade-up"
          data-aos-duration="5000">
          Umpan balik nyata dari pemilik rumah yang mempercayai kami dengan
          proyek mereka.
        </p>
        <div className="testimoni-box grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto">
          {listTestimoni.map((testimoni) => (
            <div
              className="bg-zinc-100 hover:bg-zinc-200 p-3 "
              key={testimoni.id}
              data-aos="fade-up"
              data-aos-duration={testimoni.dad}>
              <div className="flex gap-1 text-[#F97A00]">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-xs pt-3">{testimoni.testi}</p>
              <p className="text-sm font-bold pt-5">{testimoni.penulis}</p>
            </div>
          ))}
        </div>
      </div>
      {/* === TESTIMONI === */}

      {/* === TEAM === */}

      <div className="team bg-[#1f1c1d] pt-15 pb-10">
        <div
          className=" flex gap-2 justify-center"
          data-aos="fade-up"
          data-aos-duration="1000">
          <div className="bg-zinc-100 rounded-full px-3 py-1 flex items-center gap-2">
            <i className="fa-solid fa-user"></i>
            <p className="text-sm font-medium text-center text-black">
              PROFESIONAL
            </p>
          </div>
        </div>

        <h1
          className="xl:text-7xl lg:text-7xl md:text-7xl sm:text-6xl text-5xl font-bold text-center mt-1 text-[#F97A00]"
          data-aos="fade-up"
          data-aos-duration="1000">
          TEAM KAMI
        </h1>
        <p
          className="text-md font-semibold text-center mt-4 mb-15 text-white opacity-80"
          data-aos="fade-up"
          data-aos-duration="5000">
          Pekerja profesional kami yang siap membantu kamu.
        </p>
        <div className="team-box grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 mx-auto w-[85%]">
          {listTeam.map((team) => (
            <div key={team.id} data-aos="fade-up" data-aos-duration={team.dad}>
              <img src={team.gambar} alt="" className="rounded-md" />
              <h1 className="text-center text-white text-lg font-bold mt-5 tracking-wider leading-relaxed">
                {team.nama}
              </h1>
              <p className="text-center text-white text-sm opacity-60">
                {team.posisi}
              </p>
            </div>
          ))}
        </div>

        <div className="join mt-20 text-white flex justify-center">
          <div
            className="join-box bg-[#4e1f005d] w-[60%] py-10 px-7 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000">
            <h1 className="text-center font-bold text-3xl ">
              Kami sedang <span className="text-[#F97A00]">merekrut!</span>
            </h1>
            <p className="text-center opacity-50 mt-3">
              Bergabunglah dengan tim kami di Luthfi Property. Kami
              mempekerjakan pemain tim yang andal dan siap bekerja jangka
              panjang di bidang ini.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="#"
                className="bg-[#F97A00] hover:bg-[#f97800d8] rounded-full px-5 py-4 text-center text-sm font-semibold">
                Ajukan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === TEAM === */}
    </div>
  );
}

export default App;

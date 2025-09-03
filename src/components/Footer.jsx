const Footer = () => {
  return (
    <div className="footer pb-10">
      <div className="">
        <div className="flex justify-center items-center gap-1 mt-15">
          <i
            class="fa-solid fa-house-chimney text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"></i>
          <h1
            className="text-4xl font-bold tracking-widest "
            data-aos="fade-up"
            data-aos-duration="1000">
            LuthfiStudio
          </h1>
        </div>

        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="lg:text-lg xl:text-lg md:text-lg sm:text-sm text-sm text-center mt-6 font-medium xl:px-60 lg:px-30 sm:px-12 px-8 opacity-70">
          Temukan pusat property/arsitektur inovatif di Indonesia. Di mana
          modernitas terbentuk. Studio kami mendefinisikan ulang arsitektur
          melalui kreativitas dan keunggulan desain.
        </p>

        <div className="mt-10 flex flex-col justify-between items-center px-4 lg:flex-row lg:px-22">
          <ul
            className="nav-links flex flex-col items-center gap-4 md:flex-row  lg:flex-row lg:gap-8"
            data-aos="fade-up"
            data-aos-duration="1000">
            <li>
              <a href="#" className="text-lg hover:font-medium">
                BERANDA
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:font-medium">
                TENTANG
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:font-medium">
                PROPERTY
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:font-medium">
                TESTIMONI
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:font-medium">
                KONTAK
              </a>
            </li>
          </ul>
          <div
            className="icon flex gap-3 mt-4 md:mt-2 "
            data-aos="fade-up"
            data-aos-duration="1000">
            <div className="bg-zinc-800 cursor-pointer p-2 rounded-full grid place-items-center hover:bg-zinc-900">
              <i className="fa-brands fa-linkedin-in text-xl text-white"></i>
            </div>
            <div className="bg-zinc-800 cursor-pointer p-2 rounded-full grid place-items-center hover:bg-zinc-900">
              <i className="fa-brands fa-instagram text-xl text-white"></i>
            </div>
            <div className="bg-zinc-800 cursor-pointer p-2 rounded-full grid place-items-center hover:bg-zinc-900">
              <i className="fa-brands fa-facebook-f text-xl text-white"></i>
            </div>
            <div className="bg-zinc-800 cursor-pointer p-2 rounded-full grid place-items-center hover:bg-zinc-900">
              <i className="fa-brands fa-github text-xl text-white"></i>
            </div>
            <div className="bg-zinc-800 cursor-pointer p-2 rounded-full grid place-items-center hover:bg-zinc-900">
              <i className="fa-brands fa-tiktok text-xl text-white"></i>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-5 mx-auto w-[90%]">
          <p className="text-lg text-center mt-10">
            © 2025 Luthfi Studio. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

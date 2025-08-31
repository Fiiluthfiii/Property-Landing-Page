import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar flex justify-between items-center py-3 px-10 ">
      <div>
        <h1 className="text-2xl font-bold text-[#F97A00]">Luthfi Studio</h1>
      </div>

      <div
        className={`nav-links duration-500 absolute md:relative bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 z-50 ${
          isOpen ? "top-[9%]" : "top-[-100%] md:top-auto"
        }`}>
        <ul className="flex md:flex-row flex-col md:items-center md:gap-4 gap-8 text-lg ">
          <li>
            <a href="#" className="hover:text-[#F97A00] hover:border-b-2">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#F97A00] hover:border-b-2">
              Tentang
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#F97A00] hover:border-b-2">
              Property
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#F97A00] hover:border-b-2">
              Testimoni
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <button className="bg-[#212121] text-white rounded-full py-2 px-5 font-medium hover:bg-[#444444]">
          Contact
        </button>
        <ion-icon
          name={isOpen ? "close" : "menu"}
          onClick={onToggleMenu}
          className="text-3xl cursor-pointer md:hidden"></ion-icon>
      </div>
    </div>
  );
};

export default Navbar;

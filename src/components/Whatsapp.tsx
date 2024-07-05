import React from "react";
import "@/styles/Whatsapp.css";
import { IoLogoWhatsapp } from "react-icons/io";


export default function Whatsapp() {
  return (
    <div className="whatsapp-btn-container z-[100]">
      <a className="whatsapp-btn" href="https://api.whatsapp.com/send/?phone=905321322728&text&type=phone_number&app_absent=0">
        <i > <IoLogoWhatsapp /> </i>
      </a>
      {/* <span>Contact Us</span> */}
    </div>
  );
}

import React from "react";
import {InstagramOutlined,FacebookOutlined,YoutubeOutlined,InfoCircleOutlined,FileTextOutlined, DollarCircleOutlined,QuestionCircleOutlined,PhoneOutlined,VideoCameraOutlined,CustomerServiceOutlined,NotificationOutlined,TrophyOutlined,} from "@ant-design/icons";

import logo from "@/assets/vite.svg";
import app from "@/assets/img/appstore.svg"
import play from "@/assets/img/googleplay.svg"
const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] dark:bg-slate-900 text-gray-700 dark:text-white  mt-10 py-10">
      <div className="container mx-auto px-4 max-w-[1280px] grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 flex flex-col items-start gap-12">
          <img src={logo} alt="Logo" className="object-contain" />
           
           <div className="flex flex-col gap-2 items-center">
            <img src={app} alt="app store" />
            <img src={play} alt="google play" />
           </div>
        </div>
      
        <div>
          <h4 className="text-lg font-semibold mb-3">About</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 transation-[.4s] hover:text-[#C61F1F] cursor-pointer">
              <InfoCircleOutlined style={{color:"#C61F1F"}} /> About Us
            </li>
            <li className="flex items-center gap-2 transation-[.4s] hover:text-[#C61F1F] cursor-pointer">
              <FileTextOutlined style={{color:"#C61F1F"}} /> Public Offer
            </li>
            <li className="flex items-center gap-2 transation-[.4s] hover:text-[#C61F1F] cursor-pointer">
              <DollarCircleOutlined  style={{color:"#C61F1F"}}/> Advertising
            </li>
            <li className="flex items-center gap-2 transation-[.4s] hover:text-[#C61F1F] cursor-pointer">
              <QuestionCircleOutlined  style={{color:"#C61F1F"}}/> F.A.Q
            </li>
            <li className="flex items-center gap-2 transation-[.4s] hover:text-[#C61F1F] cursor-pointer">
              <PhoneOutlined style={{color:"#C61F1F"}} /> Contacts
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Categories</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 transation-[.4s] hover:text-[#C61F1F] cursor-pointer">
              <VideoCameraOutlined style={{color:"#C61F1F"}} /> Cinema
            </li>
            <li className="flex items-center gap-2 transation-[.4s] hover:text-[#C61F1F] cursor-pointer">
              <CustomerServiceOutlined style={{color:"#C61F1F"}} /> Theater
            </li>
            <li className="flex items-center gap-2 transation-[.4s] hover:text-[#C61F1F] cursor-pointer">
              <NotificationOutlined  style={{color:"#C61F1F"}}/> Concerts
            </li>
            <li className="flex items-center gap-2 transition-[.4s] hover:text-[#C61F1F] cursor-pointer">
              <TrophyOutlined style={{color:"#C61F1F"}} /> Sport
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="mb-3 flex items-center gap-2">
            <PhoneOutlined  style={{color:"#C61F1F"}}/> +998 (95) 897-33-38
          </p>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:scale-110" aria-label="Instagram">
              <InstagramOutlined style={{ color: "#C61F1F" }} />
            </a>
            <a href="#" className="hover:scale-110" aria-label="Facebook">
              <FacebookOutlined style={{ color: "#C61F1F" }} />
            </a>
            <a href="#" className="hover:scale-110" aria-label="YouTube">
              <YoutubeOutlined style={{ color: "#C61F1F" }} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default React.memo(Footer);

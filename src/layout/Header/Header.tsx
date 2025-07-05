import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  VideoCameraOutlined,
  BookOutlined,
  SearchOutlined,
  BulbOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import Navlogo from "@/assets/img/LOGOTYPE – BILETICK.svg";
import CustomButton from "@/components/button/CustomButton";
import { Button, Drawer } from "antd";

const Header = () => {
  const navigate = useNavigate();
  //dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);
  const Handlthem = () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  //draw
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  return (
    //sticky top-0 z-50
    <header className="">
      <div className="container mx-auto flex items-center justify-between py-3 px-3 lg:px-0">
        <div className="flex-shrink-0 ">
          <img
            onClick={() => navigate("/")}
            src={Navlogo}
            alt="Navbar logo"
            className="w-[140px] cursor-pointer"
          />
        </div>
        <nav className="flex items-center gap-6 max-[600px]:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-Ax ${
                isActive ? "text-[#C61F1F]" : "text-gray-500"
              } hover:text-[#C61F1F]`
            }
          >
            <HomeOutlined style={{ fontSize: "22px" }} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-Ax ${
                isActive ? "text-[#C61F1F]" : "text-gray-500"
              } hover:text-[#C61F1F]`
            }
          >
            <VideoCameraOutlined style={{ fontSize: "22px" }} />
            <span>Movies</span>
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-Ax ${
                isActive ? "text-[#C61F1F]" : "text-gray-500"
              } hover:text-[#C61F1F]`
            }
          >
            <BookOutlined style={{ fontSize: "20px" }} />
            <span>Saved</span>
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-Ax ${
                isActive ? "text-[#C61F1F]" : "text-gray-500"
              } hover:text-[#C61F1F]`
            }
          >
            <SearchOutlined style={{ fontSize: "20px" }} />
            <span>Search</span>
          </NavLink>
        </nav>
        <div className="flex items-center gap-4 max-[600px]:hidden">
          <BulbOutlined
            onClick={Handlthem}
            style={{ fontSize: "20px", color: "#C61F1F" }}
            className="cursor-pointer"
          />
          <CustomButton />
        </div>
        <div className="hidden max-[600px]:block ">
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 22, color: "#C61F1F" }} />}
            onClick={toggleDrawer}
          />
        </div>
      </div>
      <div className="dark:bg-black dark:text-white">
        <Drawer
          title="Menu"
          placement="right"
          onClose={toggleDrawer}
          open={open}
          className="hidden max-[600px]:block "
          rootClassName="custom-drawer"
         
         
        >
          <div className=" flex flex-col gap-4">
            <NavLink to="/" onClick={toggleDrawer}>
              <HomeOutlined /> Home
            </NavLink>
            <NavLink to="/movies" onClick={toggleDrawer}>
              <VideoCameraOutlined /> Movies
            </NavLink>
            <NavLink to="/saved" onClick={toggleDrawer}>
              <BookOutlined /> Saved
            </NavLink>
            <NavLink to="/search" onClick={toggleDrawer}>
              <SearchOutlined /> Search
            </NavLink>
            <BulbOutlined
              onClick={Handlthem}
              style={{ fontSize: "20px", color: "#C61F1F" }}
              className="cursor-pointer"
            />
            <CustomButton />
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default React.memo(Header);

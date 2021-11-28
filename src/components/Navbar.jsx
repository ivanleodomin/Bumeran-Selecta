import React from "react";
import { Link } from "react-router-dom";
import { GrFormAdd } from "react-icons/gr";

//Rosa => #EA3380
//Violeta => #0A26EE

const Header = () => {
  return (
    <header className="relative">
      <div
        style={{ background: "#ffff" }}
        className="flex item-center justify-between mb-1 pl-10 mt-1 shadow h-16"
      >
        <div className="w-55">
          <img
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/logo-1.png"
            alt="BumeranLogo"
            className="w-full m-2"
          />
        </div>
        <div>
          <ul className="flex flex-nowrap examples">
            <li className="mr-6  mt-6" id="examples">
              <div class="example">
                <Link to="/recruiter/add">
                <li class="hover hover-1 mr-6 ">Form</li>
                </Link>
              </div>
            </li>
            <li className="mr-6 mt-6" id="examples">
              <div class="example">
                <li class="hover hover-1 mr-6">Menu</li>
              </div>
            </li>
            <li className="mr-6 mt-6" id="examples">
              <div class="example">
                <li class="hover hover-1 m-6">About</li>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

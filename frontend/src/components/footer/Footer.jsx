import React from "react";
import { Logo } from "../Logo";

function Footer() {
  return (
    <div div className=" container bg-[#00522C] py-12  font-ubuntu">
      <div className="logo flex gap-2 text-white items-center">
        <Logo color="white" />
      </div>
      <div className="contact mt-6 text-white">
        <h1 className="text-2xl font-medium">Let's stay connected</h1>
        <p>Enter your email to receive news about us</p>
        <div className="email mt-4 flex gap-3">
          <input
            className="p-2 rounded-sm outline-none text-gray-900"
            type="text"
            placeholder="email address"
          />
          <button className="bg-[#00B05E] text-white p-2 rounded-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import * as React from "react";
import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#DEF2f1]" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#17252A]">
            Get in Touch
          </h2>
          <p className="text-[#2B7A78] dark:text-[#2B7A78] max-w-md mx-auto">
            Feel free to reach out to me if you have any questions or would like
            to discuss a potential project.
          </p>
        </div>
      </div>
      <ul className="p-8 md:flex md:justify-evenly text-[#3AAFA9]">
        <li className="flex font-bold items-center">
          <HiMail className="text-[#17252A]" />
          <span className="pl-2">lmendozan90@gmail.com</span>
        </li>
        <li className="flex font-bold items-center">
          <HiPhone className="text-[#17252A]" />
          <span className="pl-2">+51 951294769</span>
        </li>
        <li className="flex font-bold items-center">
          <FaLinkedin className="text-[#17252A]" />
          <span className="pl-2">
            <a
              className="hover:text-[#2B7A78]"
              href="https://www.linkedin.com/in/fernando-mendoza-nieves-b0b55691/"
              rel="noreferrer"
              target="_blank"
            >
              Fernando Mendoza Profile
            </a>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Contact;

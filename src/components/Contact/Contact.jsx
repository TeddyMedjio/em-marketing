"use client";

import { useState } from "react";
import htmr from "htmr";
import Image from "next/image";
import profil from "../../../public/img/profil.png";
import Notification from "../Notification/Notification";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: htmr(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // alert("Message sent successfully");
      setLoading(false);
      setShow(true);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.subject.value = "";
      event.target.message.value = "";

      setTimeout(function () {
        setShow(false);
      }, 5000);
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
    // console.log(data);
  }

  return (
    <div className=" bg-[#E7ECF2]">
      <div className="mx-auto container px-5 max-w-6xl py-40">
        <h1 className="font-bold uppercase text-6xl py-20">contact</h1>
        <div className="flex items-center justify-between lg:justify-normal">
          <h3 className=" uppercase text-[#189332] font-bold leading-6 text-xl">
            cyrille david <br /> kapoua checkem <br />
            <span className="text-black font-normal">ceo</span>
          </h3>
          <Image src={profil} height="350" alt="image de profil de cyrille" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <div className="flex lg:flex-row flex-col lg:items-center lg:space-x-4 space-y-2 lg:space-y-0">
            {" "}
            <input
              type="text"
              id="name"
              required
              minLength={5}
              maxLength={150}
              autoComplete="off"
              placeholder="Name"
              className="flex-1 pl-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#189332] focus:ring-3 outline-none sm:text-sm sm:leading-6"
            />
            <input
              type="email"
              id="email"
              required
              autoComplete="off"
              minLength={5}
              maxLength={150}
              placeholder="Email"
              className="flex-1 pl-2  rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#189332] outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <input
            type="text"
            id="subject"
            required
            placeholder="Subject"
            className=" pl-2  rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#189332] outline-none sm:text-sm sm:leading-6"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={5}
            minLength={10}
            maxLength={500}
            className="pl-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#189332] outline-none sm:text-sm sm:leading-6"
            defaultValue={""}
          />
          <button
            type="submit"
            disabled={loading}
            className=" disabled:bg-slate-400 disabled:text-gray-100 bg-[#189332] w-[139px] py-3 rounded-sm text-white uppercase font-semibold cursor-pointer hover:bg-[#1B2D91] transition-all duration-300 ease-in-out"
          >
            send
          </button>
        </form>

        <h3 className=" uppercase text-[#189332] font-bold leading-6 text-xl mt-20">
          emotional marketing
        </h3>
        <div className="flex items-center mt-5 space-x-3">
          <svg
            width="34"
            height="42"
            viewBox="0 0 46 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.0069 15.6666C20.8851 15.6666 18.8503 16.5095 17.35 18.0098C15.8497 19.5101 15.0069 21.5449 15.0069 23.6666C15.0069 25.7884 15.8497 27.8232 17.35 29.3235C18.8503 30.8238 20.8851 31.6666 23.0069 31.6666C25.1286 31.6666 27.1634 30.8238 28.6637 29.3235C30.164 27.8232 31.0069 25.7884 31.0069 23.6666C31.0069 21.5449 30.164 19.5101 28.6637 18.0098C27.1634 16.5095 25.1286 15.6666 23.0069 15.6666ZM18.3402 23.6666C18.3402 22.429 18.8319 21.242 19.707 20.3668C20.5822 19.4916 21.7692 19 23.0069 19C24.2445 19 25.4315 19.4916 26.3067 20.3668C27.1819 21.242 27.6735 22.429 27.6735 23.6666C27.6735 24.9043 27.1819 26.0913 26.3067 26.9665C25.4315 27.8417 24.2445 28.3333 23.0069 28.3333C21.7692 28.3333 20.5822 27.8417 19.707 26.9665C18.8319 26.0913 18.3402 24.9043 18.3402 23.6666ZM40.3335 37.6666L26.8829 51.9466C26.3842 52.4761 25.7826 52.898 25.1149 53.1864C24.4472 53.4748 23.7275 53.6236 23.0002 53.6236C22.2729 53.6236 21.5532 53.4748 20.8855 53.1864C20.2178 52.898 19.6162 52.4761 19.1175 51.9466L5.66686 37.6666H5.71753L5.69486 37.64L5.66686 37.6066C2.21446 33.5235 0.324354 28.347 0.333529 23C0.333529 10.4813 10.4815 0.333313 23.0002 0.333313C35.5189 0.333313 45.6669 10.4813 45.6669 23C45.676 28.347 43.7859 33.5235 40.3335 37.6066L40.3055 37.64L40.2829 37.6666H40.3335ZM37.7429 35.508C40.7137 32.0183 42.3415 27.5829 42.3335 23C42.3335 12.3226 33.6775 3.66665 23.0002 3.66665C12.3229 3.66665 3.66686 12.3226 3.66686 23C3.65852 27.583 5.28643 32.0185 8.25753 35.508L8.6682 35.992L21.5442 49.66C21.7312 49.8585 21.9568 50.0168 22.2072 50.1249C22.4576 50.233 22.7274 50.2888 23.0002 50.2888C23.2729 50.2888 23.5428 50.233 23.7932 50.1249C24.0436 50.0168 24.2692 49.8585 24.4562 49.66L37.3322 35.992L37.7429 35.508Z"
              fill="black"
            />
          </svg>

          <p className="leading-5 font-semibold text-xl">
            Rütiweg 101, <br /> 3072 Ostermundigen
          </p>
        </div>
      </div>
      {show && <Notification message="Message sent successfully" />}
    </div>
  );
};

export default Contact;

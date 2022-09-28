import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";

const ContactSection = (props) => {
  const formRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      e?.target[0]?.value?.length > 0 &&
      e?.target[1]?.value?.length > 0 &&
      e?.target[2]?.value?.length > 0
    ) {
      emailjs
        .sendForm(
          "service_i98uhfi", //service ID
          "template_ngmv1yx", //template ID
          formRef.current,
          "i-gSOvJ1W1yFXTqfC" //public key
        )
        .then(
          (result) => {
            if (result?.status === 200) {
              props?.setSuccess(true);
              setTimeout(() => {
                props?.setSuccess(false);
              }, 5000);
            }
            e.target.reset();
          },
          (error) => {
            props?.setError(true);
            setTimeout(() => {
              props?.setError(false);
            }, 5000);
          }
        );
    }
  };

  return (
    <div id="contactSection" className="bg-[#1f1f1f]">
      <h1 className="text-center text-3xl py-10 pt-20 text-white">
        CONTACT ME
      </h1>

      <div className="flex flex-col md:flex-row  w-full  md:w-[80%] mx-auto gap-5 ">
        <form ref={formRef} className="flex-1  w-full" onSubmit={submitHandler}>
          <input
            name="senderName"
            type="text"
            placeholder="Name"
            className="outline-none border-0 bg-gray-200 rounded-md block p-3 px-5 w-full max-w-[400px] mx-auto md:ml-auto mb-5"
          />
          <input
            name="senderEmail"
            type="email"
            placeholder="Email"
            className="outline-none border-0 bg-gray-200 rounded-md block p-3 px-5 w-full max-w-[400px] mx-auto md:ml-auto mb-5"
          />
          <textarea
            name="senderMessage"
            cols="30"
            rows="10"
            placeholder="Message"
            className="outline-none border-0 bg-gray-200 rounded-md block p-3 px-5 w-full max-w-[400px] mx-auto md:ml-auto mb-5"
          ></textarea>
          <button
            type="submit"
            className="bg-white font-semibold active:scale-95 transition-all rounded-md block p-3 px-5 w-full max-w-[400px] mx-auto md:ml-auto mb-5"
          >
            Send
          </button>
        </form>
        <div className="flex-1 text-white flex md:flex-col gap-5 justify-center items-center">
          <div className="flex gap-2 m-5 items-center">
            <LocationOnOutlinedIcon fontSize="large" />
            <span>Amritsar, Punjab, India</span>
          </div>
          <div className="flex gap-2 m-5 items-center">
            <AlternateEmailRoundedIcon fontSize="large" />
            <span>amrit@paji.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

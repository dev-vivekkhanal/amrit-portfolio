import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i98uhfi", //service ID
        "template_ngmv1yx", //template ID
        formRef.current,
        "i-gSOvJ1W1yFXTqfC" //public key
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div id="contactSection" className="bg-[#1f1f1f]">
      <h1 className="text-center text-3xl py-10 pt-20 text-white">
        CONTACT ME
      </h1>

      <div className="flex items-center w-[80%] mx-auto">
        <form ref={formRef} className="flex-1" onSubmit={submitHandler}>
          <input
            name="senderName"
            type="text"
            placeholder="Name"
            className="outline-none border-0 bg-gray-200 rounded-md block p-3 px-5 w-full max-w-[400px] ml-auto mb-5"
          />
          <input
            name="senderEmail"
            type="email"
            placeholder="Email"
            className="outline-none border-0 bg-gray-200 rounded-md block p-3 px-5 w-full max-w-[400px] ml-auto mb-5"
          />
          <textarea
            name="senderMessage"
            cols="30"
            rows="10"
            placeholder="Message"
            className="outline-none border-0 bg-gray-200 rounded-md block p-3 px-5 w-full max-w-[400px] ml-auto mb-5"
          ></textarea>
          <button
            type="submit"
            className="bg-white font-semibold active:scale-95 transition-all rounded-md block p-3 px-5 w-full max-w-[400px] ml-auto mb-5"
          >
            Send
          </button>
        </form>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default ContactSection;

import React from "react";
import { Button } from '@chakra-ui/react'

// WILL NEED TO REFACTOR FROM TAILWIND TO CHAKRAUI

const Contact = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>Contact Page</h1>
    {/* setting up a flexbox container with a vertical layout */}
    <div className="flex flex-col mb-10 mx-auto">
      {/* centering its children both horizontally and vertically within its parent container */}
      <div className="flex justify-center items-center">
        {/* creating a form element */}
        <form
          action="https://getform.io/f/269790e2-0ff0-476e-8c4b-d72394a966a6" // specific URL to which the form data will be submitted
          method="POST" // specified HTTP method to be used when submitting the form
          className="flex flex-col w-full md:w-7/12"
        >
          <h2>Contact Me</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10" // initial number of rows displayed in the textarea
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <Button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-lime-700 to-lime-400 drop-shadow-md hover:stroke-white hover:scale-105 hover:duration-1000"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
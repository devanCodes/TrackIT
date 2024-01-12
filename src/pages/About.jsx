import React from "react";
import { PiQuotesFill } from "react-icons/pi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// WILL NEED TO REFACTOR FROM TAILWIND TO CHAKRAUI
// PROBABLY WILL DO A DIFFERENT DESIGN TO NOT COPY CLAYDY'S WEBSITE

const About = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Navbar />
      <h1>About Page</h1>
      <h1>About TrackIT!</h1>
      <p>
        In the vibrant world of health and wellness, TrackIT! emerged as a
        beacon of nutritional empowerment. Founded in 2023 by passionate fitness
        enthusiast and Software Developer, Devan Hailey, TrackIT! was born out
        of a vision to simplify the journey to a healthier lifestyle.
        <br></br>
        <br></br>
        Devan, having experienced the challenges of tracking his own caloric
        intake, set out to create a solution that seamlessly integrated
        technology with nutrition. Through extensive research, TrackIT! was
        meticulously crafted to be the go-to platform for individuals seeking an
        intuitive way to monitor their daily food consumption.
        <br></br>
        <br></br>
        Launched in April 2024, TrackIT! quickly gained popularity for its
        user-friendly interface and robust API-powered food database. The
        platform became a trusted companion for anyone on their fitness
        journeys. Whether users aimed to lose weight, maintain a balanced diet,
        or gain muscle mass, TrackIt! adapted to their needs, offering
        personalized recommendations.
        <br></br>
        <br></br>
        Now, TrackIT! stands as a testament to the commitment and vision of
        Devan, as well as the thriving community it has fostered. From its
        humble beginnings to a global phenomenon, TrackIT! remains dedicated to
        helping individuals make informed choices, one calorie at a time.
      </p>
      <br></br>
      <br></br>
      <h1>Testimonials</h1>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mt-10 p-6">
        <div className="relative bg-purple-600 text-white p-8 rounded-lg xl:col-span-2 xl:row-start-1">
          <div className="absolute top-0 right-6 z-0 text-6xl">
            <PiQuotesFill />
          </div>
          <div className="relative z-10 flex justify-start space-x-4">
            <img
              src="https://ui-avatars.com/api/?name=D"
              alt=""
              className="h-8 w-8 rounded-full border-2 border-purple-400"
            />
            <div>
              <h2 className="font-bold text-sm">Devan</h2>
              <h3 className="text-xs opacity-50">Software Developer</h3>
            </div>
          </div>
          <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            facilis alias totam perferendis cupiditate delectus nobis,
            aspernatur repudiandae amet unde adipisci earum voluptatibus
            perspiciatis non dicta vero enim voluptates odio.
          </p>
        </div>
        <div className="relative bg-gray-600 text-white p-8 rounded-lg xl:col-span-2 xl:row-start-3">
          <div className="absolute top-0 right-6 z-0 text-6xl lg:hidden">
            <PiQuotesFill />
          </div>
          <div className="relative z-10 flex justify-start space-x-4">
            <img
              src="https://ui-avatars.com/api/?name=C"
              alt=""
              className="h-8 w-8 rounded-full border-2 border-gray-400"
            />
            <div>
              <h2 className="font-bold text-sm">Claydy</h2>
              <h3 className="text-xs opacity-50">Lawyer</h3>
            </div>
          </div>
          <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis
            quod vero, repellat magni autem quia. Illum cumque voluptatum ut,
            dicta quo minima consequuntur enim, temporibus, eaque esse omnis
            nam!
          </p>
        </div>
        <div className="relative bg-turqoise_dark text-gray-800 p-8 rounded-lg xl:col-span-2 xl:row-start-2">
          <div className="absolute top-0 right-6 z-0 text-6xl lg:hidden">
            <PiQuotesFill />
          </div>
          <div className="relative z-10 flex justify-start space-x-4">
            <img
              src="https://ui-avatars.com/api/?name=R"
              alt=""
              className="h-8 w-8 rounded-full border-2 border-turqoise"
            />
            <div>
              <h2 className="font-bold text-sm">Ron</h2>
              <h3 className="text-xs opacity-50">
                Retired Director of Operations
              </h3>
            </div>
          </div>
          <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, natus
            iusto! Ad odio, suscipit saepe, natus ea dolores minima reiciendis
            sed doloremque laboriosam deserunt numquam, a molestiae asperiores
            eveniet magnam?
          </p>
        </div>
        <div className="relative bg-gray-900 text-white p-8 rounded-lg xl:col-span-2">
          <div className="absolute top-0 right-6 z-0 text-6xl lg:hidden">
            <PiQuotesFill />
          </div>
          <div className="relative z-10 flex justify-start space-x-4">
            <img
              src="https://ui-avatars.com/api/?name=M"
              alt=""
              className="h-8 w-8 rounded-full border-2 border-gray-700"
            />
            <div>
              <h2 className="font-bold text-sm">Michelle</h2>
              <h3 className="text-xs opacity-50">PE Teacher</h3>
            </div>
          </div>
          <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit quasi a nemo repellendus assumenda nostrum id
            cupiditate inventore quia numquam, incidunt dolor, totam laudantium
            soluta maiores nulla consectetur. Explicabo, maxime.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

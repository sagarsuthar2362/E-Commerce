import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Subscribe from "../components/Subscribe";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="md:space-y-18 space-y-8">
      <Title text1={"about"} text2={"us"} center={true} />

      <section className="flex md:flex-row flex-col md:gap-12 gap-5">
        <div>
          <img src={assets.about_img} alt="dummy image" />
        </div>

        <div className="lg:pr-44  space-y-8 lg:py-18">
          <p className="text-gray-600">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>

          <p className="text-gray-600">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>

          <h3 className="text-gray-800">
            <strong>Our Mission</strong>
          </h3>

          <p className="text-gray-600">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <Title text1={"why"} text2={"choose us"} />

        <div className="grid border border-gray-200 md:divide-x divide-y divide-gray-200 md:grid-cols-3 grid-cols-1  mt-5">
          <div className="md:p-20 px-8 py-12 space-y-5">
            <h2 className="text-gray-800">
              <strong>Quality Assurance:</strong>
            </h2>

            <p className="text-gray-600">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>

          <div className="md:p-20 px-8 py-12 space-y-5">
            <h2 className="text-gray-800">
              <strong>Quality Assurance:</strong>
            </h2>

            <p className="text-gray-600">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>

          <div className="md:p-20 px-8 py-12 space-y-5">
            <h2 className="text-gray-800">
              <strong>Quality Assurance:</strong>
            </h2>

            <p className="text-gray-600">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
        </div>
      </section>

      <Subscribe />
    </div>
  );
};

export default About;

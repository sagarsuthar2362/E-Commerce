import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Subscribe from "../components/Subscribe";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div className="space-y-12">
      <Title text1={"contact"} text2={"us"} center={true} />

      <section className="lg:w-7/12 md:mx-auto flex items-center gap-12 mb-24">
        <img src={assets.contact_img} alt="" className="w-[500px]" />

        <div className="space-y-5">
          <h2 className="text-gray-800 text-lg">
            <strong>Our Store</strong>
          </h2>

          <p className="text-gray-600">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>

          <p className="text-gray-600">
            Tel: (415) 555-0132 <br /> Email: admin@forever.com
          </p>

          <h2 className="text-gray-800 text-lg">
            <strong>Careers at Forever</strong>
          </h2>

          <p className="text-gray-600">
            Learn more about our teams and job openings.
          </p>

          <button className="border hover:bg-black hover:text-white transition-all duration-200 cursor-pointer px-5 py-3">
            Explore jobs
          </button>
        </div>
      </section>

      <Subscribe />
    </div>
  );
};

export default Contact;

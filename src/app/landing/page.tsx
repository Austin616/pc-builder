import React from 'react';
import Navbar from '../components/Navbar';
import ComputerDesk from '../components/ComputerDesk';
import SliderComponent from '../components/SliderComponent';

const Page = () => {
  return (
    <div className="">
      <Navbar />

      <div className="flex justify-center text-2xl font-semibold mt-6">
        Welcome to <span className="text-blue-500 font-bold ml-2">Assemble</span>
      </div>

        <div className="flex justify-center text-lg font-semibold mt-2">
            Your one-stop shop for PC building and parts
        </div>

        <div className="flex justify-center text-lg font-semibold mt-2 mb-6">
            Start building your dream PC today!
        </div>

      <div className="max-w-4xl mx-auto mb-6" >
        <ComputerDesk/>
      </div>

      <SliderComponent />
    </div>
  );
};

export default Page;

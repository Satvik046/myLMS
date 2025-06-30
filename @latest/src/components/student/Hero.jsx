import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="md:text-5xl text-3xl font-bold text-gray-800 max-w-3xl leading-snug">
        Empower your future with the <br />
        courses designed to{' '}
        <span className="text-blue-600 underline underline-offset-4">fit your choice.</span>
      </h1>

      <p className="text-gray-500 mt-4 max-w-xl text-sm md:text-base">
        We bring together world-class instructors, interactive content, and a supportive community to help
        you achieve your personal and professional goals.
      </p>
    </div>
  );
};

export default Hero;

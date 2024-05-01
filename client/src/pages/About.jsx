import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 bg-slate-900 text-slate-300'>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Japan's Work Culture</h1>
          <p className='text-justify leading-7'>
            Japan's work culture is renowned for its emphasis on dedication, precision, and teamwork. In Japanese companies, there's a strong focus on maintaining harmony within the workplace, which often translates into a strong sense of loyalty among employees.
            <br/><br/>
            One notable aspect of Japanese work culture is the concept of "kaizen," which refers to continuous improvement. Companies encourage employees to constantly strive for better results and efficiency in their work processes.
          </p>
        </div>
        <img src={JobImg} alt='Japanese Work Culture' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
          Another characteristic of Japanese work culture is the value placed on long-term employment. Many employees stay with the same company for their entire careers, fostering deep loyalty and commitment.
          <br/><br/>
          Additionally, punctuality and respect for deadlines are highly regarded in Japanese workplaces. Meetings often start and end promptly, and deadlines are taken very seriously.
        </p>
      </div>
    </div>
  );
};

export default About;

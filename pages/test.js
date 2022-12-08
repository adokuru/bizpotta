/* eslint-disable @next/next/no-img-element */
// rafce

import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../components/Auth-Components/Button";
import learnersService from "../services/LearnersService";

const Reimagine = () => {
  const [data, setData] = useState({ name: "", email: "", city: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await learnersService.confUsers1(data).catch((err) => {
      toast.error(err.response.data.message);
    });

    if (result?.status === 200) {
      toast.success("Thank you for your submission");
      setData({ name: "", email: "", city: "" });
      setLoading(false);
    }

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className='w-full flex flex-row '>
      <div className='w-full md:w-[60%] xl:w-[40%] h-full md:h-screen px-2 sm:px-4 xl:px-10 flex flex-col py-3'>
        <img src='./images/logo.png' className='w-[200px] h-[40px] mx-auto md:mx-0' />

        <p className='text-[15px] font-semibold text-center md:text-start  mt-8'>Bizpotta Global Entrepreneurship Conference 2022</p>

        <div className='hidden md:block'>
          <div className='text-[24px] font-bold uppercase mt-4'>
            <span className='text-darkBlue '>Reimagining </span>
            <span className='text-[#C78108] '>Africa’s Future:</span>
          </div>
          <div className='text-[14px] font-bold uppercase text-darkBlue mt-2'>Developing The Human Capital for exponential Growth</div>
        </div>

        <div
          className=' block md:hidden bg-no-repeat bg-contain bg-center w-full h-[200px] mt-4'
          style={{ backgroundImage: "url(./images/EventMobile.webp)" }}
        />

        <div className='text-[14px] font-bold mt-4 text-center md:text-start'>Date: 9th - 10th Dec. 2022</div>
        <form className='mt-10 w-full'>
          <p className='text-[14px] font-bold text-center md:text-start'>Register for the event today!</p>

          <div className='flex flex-col gap-y-7 mt-4'>
            <FormInput title='Full Name' type='text' name='name' setData={setData} value={data.name} />
            <FormInput title='Email' type='email' name='email' setData={setData} value={data.email} />
            <FormInput title='City' type='text' name='city' setData={setData} value={data.city} />
          </div>

          <div className='mt-8'>
            <Button name='Register' loading={loading} onClick={handleSubmit} size='w-[100px]' type='button' />
          </div>
        </form>
      </div>

      <div
        className='bg-no-repeat bg-cover bg-center w-[40%] xl:w-[60%] hidden md:block md:h-screen'
        style={{ backgroundImage: "url(./images/EventImage.webp)" }}
      />
    </div>
  );
};

export default Reimagine;

const FormInput = ({ title, name, type, setData, value }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className=''>
      <p className='text-[13px] font-bold'>{title}</p>
      <input
        type={type}
        name={name}
        value={value}
        required
        className='w-full h-[40px] rounded-md focus:ring-0 focus:outline-none outline-none border-[1px] mt-1'
        onChange={handleChange}
      />
    </div>
  );
};

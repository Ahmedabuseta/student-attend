"use client";
import ahmedAli from "@/public/ahmedali.jpeg";
import Image from "next/image";
import TextGenerateEffectDemo from "./text-generate-effect";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter()
  return (
    <div className="h-screen w-screen flex gap-x-8 flex-wrap p-4 items-center justify-center">
      <div className="w-[400px] h-[400px]  z-20 rounded-full p-2 border-green-400  border-2  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
        <Image
          src={ahmedAli}
          alt="ahmed ali photo"
          className=" h-full flex w-full aspect-auto rounded-full"
        />
      </div>
      <div className="flex flex-col items-end gap-3 justify-center lg:w-1/2 z-20 text-white ">
        {/* <TextGenerateEffectDemo /> */}
        <h2 className="sm:text-2xl lg:text-3xl text-white font-semibold rounded-lg space-y-3 bg-gradient-to-t from-teal-800 to-teal-600 px-4 py-3 text-right">
          مرحبا بكم في موقعنا الرسمي
        </h2>
        <h2 className="sm:text-2xl lg:text-4xl text-white font-semibold rounded-lg space-y-3 bg-gradient-to-t from-indigo-800 to-indigo-600 px-4 py-3 text-right">
          انا مستر احمد علي
        </h2>
        <h2 className="sm:text-2xl lg:text-2xl text-white font-semibold rounded-lg space-y-3 bg-gradient-to-t from-rose-800 to-rose-600 px-4 py-3 text-right">
          متخصص فى معادله كليه تجاره و الثانوي التجاري
        </h2>
        <button className="p-[3px] relative mt-4" onClick={()=>router.push('/Form')}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black hover:bg-indigo-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            احجز الان
          </div>
        </button>
      </div>
    </div>
  );
};
export default HeroSection;

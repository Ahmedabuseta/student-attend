import Navbar from "@/components/navbar";
import Image from "next/image";
import InputForm from "./Form/page";
import { Vortex } from "@/components/ui/vortex";
import { InfiniteMovingCards_1 } from "./home/components/moving-cards";
import HomePage from "./home/page";
export default function Home() {
  return (
    <div className="bg-black">
      
      {/* <InfiniteMovingCards_1/>
       */}
       <HomePage/>
    </div>
  );
}

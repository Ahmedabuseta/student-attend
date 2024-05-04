import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from '@/public/ahmedali.jpeg'
import { Facebook, FacebookIcon, PhoneCall } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  console.log(logo);
  
  return (
    <div className=" bg-black text-white fixed top-0 z-20 inset-x-0 flex justify-between items-center px-3 py-1 text-center w-full shadow-sm ">
      <div className="flex items-center justify-start gap-x-4 ms-4">
        <div>
          <Avatar>
            <AvatarImage src={logo.src}  />
            <AvatarFallback>Ahmd ALi</AvatarFallback>
          </Avatar>
        </div>
        <Link href={'./home'}><p className="text-2xl text-white italic font-semibold">
            Mr.Ahmed Ali
          </p>
          </Link>
      </div>
      <Link href={'https://www.facebook.com/profile.php?id=100030506240012'}  target='_blank'>
            <FacebookIcon className="text-white border border-white rounded-full p-1 hover:bg-white hover:text-black" />
      </Link>
    </div>
  );
};
export default Navbar; //   )

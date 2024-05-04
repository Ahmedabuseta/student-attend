import { FacebookIcon } from "lucide-react";
import Link from "next/link";

interface iProps {}

const Footer = ({}: iProps) => {
  return (
    <div>
      <footer className="bg-gray-800 ">
        <div className="flex justify-between items-center px-4 py-3">
          <Link href={'./home'}><p className="text-2xl text-white italic font-semibold">
            Mr.Ahmed Ali
          </p>
          </Link>
          
          <Link
            href={"https://www.facebook.com/profile.php?id=100030506240012"}
            target="_blank"
          >
            <FacebookIcon className="text-white border border-white rounded-full p-1 hover:bg-white hover:text-black" />
          </Link>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

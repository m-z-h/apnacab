import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Booking from "../components/Booking/Booking";

export default function Home() {
  return (
    <div >
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className="bg-green-50">
          <Booking />
        </div>
        <div className='col-span-2 bg-blue-300'>
          map
        </div>
      </div>
    </div>
  );
}
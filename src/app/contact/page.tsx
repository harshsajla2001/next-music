import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";


function page() {
  return (
    <div className="">
      <div className=" w-full relative h-screen">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <h1 className="font-bold text-8xl text-white mb-4 mt-40 relative z-50">
            Contact Us
          </h1>
          <p className="font-normal text-center text-base text-wrap text-slate-400 my-12 relative z-50 max-w-[40%]">
            We&apos;re here to help with any question about our course,
            programs, or events, Reach out and let us know we can
            assist you in your musical journey.
          </p>
          <form
            className=" min-w-[50%] mx-auto flex flex-col justify-center gap-8  "
            noValidate
          >
            <input className="shadow-xl bg-black text-gray-500  px-4 py-6 rounded-2xl w-auto" type="text" placeholder="Your email address" />
            <textarea className="placeholder:   h-56  bg-black text-gray-500 px-4 py-6 rounded-2xl w-auto" placeholder="Your message" />
          </form>
          <Link href={"/contact"}>
            <button className="border mt-12 px-4 py-4 rounded-lg  border-green-700 text-gray-300">
              Send message
            </button>
          </Link>
          <Meteors number={40} />
        </div>
      </div>
    </div>
  )
}

export default page
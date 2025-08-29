import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-wrap justify-between font-space my-[4.375rem]">
      <div className=" flex flex-col gap-[2.188rem] max-w-[531px]">
        <h1 className="text-6xl font-medium leading-[4.813rem]">
          Navigating the digital landscape for success
        </h1>
        <p className="text-xl font-normal pr-8 ">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button className="btn bg-zinc-900 text-white w-fit font-normal">
          Book a consultation
        </Button>
      </div>
      <div className="">
        <Image src="/illustration.png" alt="hero" width={600} height={515} />
      </div>
    </section>
  );
};

export default Hero;

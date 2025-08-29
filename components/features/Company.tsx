import Image from "next/image";
import { companyLogo } from "../shared/constants/companyLogo";

const Company = () => {
  return (
    <section className="flexBetween flex-wrap lg:flex-nowrap font-space gap-10 lg:gap-24">
      {companyLogo.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="grayscale hover:grayscale-0 transition-all cursor-pointer"
        />
      ))}
    </section>
  );
};

export default Company;

import Cards from "../shared/components/Cards";
import { services } from "../shared/constants/services";

const Services = () => {
  return (
    <section className="distance">
      <div className="flex gap-10 lg:flex-row flex-col items-center font-space">
        <h2 className="headline">Services</h2>
        <p className="text-lg leading-tight w-full max-w-[36.25rem]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  lg:gap-10 mb-[6.25rem] mt-20">
        {services.map((service, index) => (
          <Cards
            key={index}
            title={service.title}
            image={service.img}
            color={service.bg}
            textColor={service.textBg}
            learnMore={service?.learMore}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

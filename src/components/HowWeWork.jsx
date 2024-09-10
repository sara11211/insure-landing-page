import { patternHowWeWorkMobile, patternHowWeWorkDesktop } from "../images";

const HowWeWork = () => {
  return (
    <section className="w-full px-6 md:px-8 xl:px-40 max-width">
      <div className="relative flex flex-col items-center justify-center w-full px-6 py-16 text-center text-white max-md:gap-8 md:flex-row md:justify-between bg-dark-violet md:px-12 md:text-left xl:px-16">
        <div className="absolute top-0 right-0 h-full">
          <img
            className="md:hidden"
            src={patternHowWeWorkMobile}
            alt="pattern"
          />
          <img
            className="object-cover h-full max-md:hidden"
            src={patternHowWeWorkDesktop}
            alt="pattern"
          />
        </div>
        <h2 className="z-10 text-4xl font-accent lg:text-5xl">
          Find out more <br />
          about how we work
        </h2>
        <button className="z-30 px-6 py-2 text-sm font-bold tracking-widest uppercase border-2 border-white md:text-base font-plain hover:bg-white hover:text-very-dark-violet">
          how we work
        </button>
      </div>
    </section>
  );
};

export default HowWeWork;

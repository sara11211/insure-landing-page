import {
  imageIntroMobile,
  imageIntroDesktop,
  patternIntroRightMobile,
  patternIntroLeftMobile,
  patternIntroLeftDesktop,
  patternIntroRightDesktop,
} from "../images";

const Hero = () => {
  return (
    <section className="mt-16">
      <div className="z-20">
        <img
          className="w-full md:hidden"
          src={imageIntroMobile}
          alt="A family holding hands"
        />
      </div>
      <div className="relative w-screen px-12 text-white max-md:py-20 bg-dark-violet md:px-8 xl:px-40 lg:max-h-[570px] xl:max-h-[650px] flex justify-center">
        <div className="absolute right-0 top-2/3 md:hidden">
          <img src={patternIntroRightMobile} alt="pattern" />
        </div>
        <div className="absolute top-0 left-0 md:hidden">
          <img src={patternIntroLeftMobile} alt="pattern" />
        </div>
        <div className="absolute left-0 max-md:hidden top-2/3">
          <img src={patternIntroLeftDesktop} alt="pattern" />
        </div>
        <div className="absolute right-0 -top-6 max-md:hidden">
          <img src={patternIntroRightDesktop} alt="pattern" />
        </div>
        <div className="xl:pt-28 md:pt-24 md:flex md:items-start md:justify-center md:gap-8 max-width">
          <div className="flex flex-col items-center justify-center gap-6 text-center md:items-start md:text-left md:gap-8 2xl:gap-12">
            <div className="h-px bg-very-light-gray w-[30%] max-md:hidden mb-8 opacity-60" />
            <h1 className="z-20 text-4xl tracking-wide font-accent xl:text-7xl md:text-5xl lg:text-6xl">
              Humanizing your insurance.
            </h1>
            <p className="z-30 text-sm leading-normal font-plain lg:text-base">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </p>
            <button className="z-30 px-6 py-2 text-sm font-bold tracking-widest text-white uppercase border-2 border-white font-plain hover:bg-white hover:text-very-dark-violet md:px-7 md:py-2 md:text-base">
              view plans
            </button>
          </div>
          <img
            className="hidden max-2xl:w-[50%] lg:block max-xl:z-30"
            src={imageIntroDesktop}
            alt="A family holding hands"
          />
          <img
            className="z-40 max-md:hidden md:visible lg:hidden"
            src={imageIntroMobile}
            alt="A family holding hands"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

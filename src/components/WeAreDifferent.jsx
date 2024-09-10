import {
  affordablePricesIcon,
  peopleFirstIcon,
  snappyProcessIcon,
} from "../images";

const WeAreDifferent = () => {
  return (
    <section className="lg:pt-32 xl:px-40 md:px-8 max-width">
      <div className="h-px bg-dark-violet lg:w-[10%] max-lg:w-[30%] max-lg:mx-auto mb-8 xl:mb-12 opacity-60" />
      <div className="flex flex-col justify-center max-lg:text-center max-lg:items-center max-lg:px-11">
        <h2 className="mb-12 text-4xl font-accent md:text-5xl md:mb-16 xl:text-6xl">We're different</h2>
        <ul className="flex flex-col gap-12 text-sm leading-normal text-center lg:text-left lg:flex-row font-plain text-dark-grayish-violet md:text-base lg:items-start">
          <li className="flex flex-col items-center justify-center gap-4 lg:items-start">
            <img src={snappyProcessIcon} alt="light icon" />
            <h3 className="text-2xl text-black font-accent ">Snappy Process</h3>
            <p>
              Our application process can be completed in minutes, not hours.
              Don't get stuck filling in tedious forms.
            </p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 lg:items-start">
            <img src={affordablePricesIcon} alt="dolar sign" />
            <h3 className="text-2xl text-black font-accent">Affordable Prices</h3>
            <p>
              We don't want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 lg:items-start">
            <img src={peopleFirstIcon} alt="person icon" />
            <h3 className="text-2xl text-black font-accent">People First</h3>
            <p>
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WeAreDifferent;

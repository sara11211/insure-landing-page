import {
  affordablePricesIcon,
  peopleFirstIcon,
  snappyProcessIcon,
} from "../images";

const WeAreDifferent = () => {
  return (
    <section>
      <div className="h-px bg-dark-violet w-[30%] mx-auto mb-8 opacity-60" />
      <div className="flex flex-col items-center justify-center text-center px-11">
        <h2 className="mb-12 text-4xl font-accent">We're different</h2>
        <ul className="flex flex-col gap-12">
          <li className="flex flex-col items-center justify-center gap-4">
            <img src={snappyProcessIcon} alt="light icon" />
            <h3 className="text-2xl font-accent">Snappy Process</h3>
            <p className="text-sm leading-normal font-plain text-dark-grayish-violet">
              Our application process can be completed in minutes, not hours.
              Don't get stuck filling in tedious forms.
            </p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4">
            <img src={affordablePricesIcon} alt="dolar sign" />
            <h3 className="text-2xl font-accent">Affordable Prices</h3>
            <p className="text-sm leading-normal font-plain text-dark-grayish-violet">
              We don't want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4">
            <img src={peopleFirstIcon} alt="person icon" />
            <h3 className="text-2xl font-accent">People First</h3>
            <p className="text-sm leading-normal font-plain text-dark-grayish-violet">
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

import { imageIntroMobile, patternIntroRightMobile, patternIntroLeftMobile } from "../images"
import Button from "./Button"

const Hero = () => {
  return (
    <section className="mt-16">
      <div>
        <img src={imageIntroMobile} alt="A family holding hands" />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-4 px-12 py-20 text-center bg-dark-violet text-very-light-gray">
      <div className="absolute right-0 top-2/3">
        <img src={patternIntroRightMobile} alt="pattern" />
      </div>
      <div className="absolute top-0 left-0">
        <img src={patternIntroLeftMobile} alt="pattern" />
      </div>
        <h1 className="text-4xl tracking-wide font-accent">
          Humanizing your insurance.
        </h1>
        <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-sm leading-normal font-plain">
          Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.
        </p>
        <Button text="view plans" />
        </div>
      </div>
    </section>
  )
}

export default Hero
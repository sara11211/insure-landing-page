import { patternHowWeWorkMobile } from "../images"
import Button from "./Button"

const HowWeWork = () => {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-center gap-8 px-6 py-16 mx-4 text-center bg-dark-violet text-very-light-gray">
        <div className="absolute top-0 right-0">
          <img src={patternHowWeWorkMobile} alt="pattern" />
        </div>
        <h2 className="z-10 text-4xl font-accent">Find out more about how we work</h2>
        <Button text="how we work" />
      </div>
    </section>
  )
}

export default HowWeWork
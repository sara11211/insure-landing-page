const Button = ({text, full=false}) => {
  return (
    <button className={`px-6 py-2 text-sm font-bold tracking-wider uppercase border-2 border-white font-plain hover:bg-white hover:text-dark-violet ${full && 'px-24'}`}>
      {text}
    </button>
  )
}

export default Button
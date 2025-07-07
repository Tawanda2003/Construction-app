
interface ButtonProps{
    text: string
}

const Button = ({ text}:ButtonProps) => {
  return (
    <div>
        <button className="text-white bg-amber-300 py-[18px] px-[7px] w-[200px] font-bold" >{text}</button>
    </div>
  )
}

export default Button

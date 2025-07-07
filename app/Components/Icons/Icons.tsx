import React, {ReactElement} from 'react'
interface IconsProps{
    Icon: ReactElement
    display: string
    bg:string 
}

const Icons:React.FC<IconsProps> = ({Icon,display,bg}) => {
  return (
    <div className={`${display} ${bg} mr-[10px] p-[10px] rounded-[20px] `}>
      {Icon}
    </div>
  )
}

export default Icons

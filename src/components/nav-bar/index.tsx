import React from 'react'
import { useNavigate } from 'react-router-dom'

import backIcon from '@/assets/image/back.png'
import './index.less'

interface NavBarProps {
  title?: string
}






const NavBar = (props: NavBarProps) => {


  const {title} = props
  const navigate = useNavigate()


  const handleBack = () => {
    navigate(-1)
  }
  return(
    <div className="nav-bar">
        <img src={backIcon} alt=""  onClick={handleBack}/>
       <span>{title}</span>
      </div>
  )
}

export default NavBar
 import { NavLink } from 'react-router-dom'
import {IoIosClose} from 'react-icons/io'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
const Smallmenu = () => {
  const {isActiveMenu, menuHandler}=useContext(AppContext)
  return (
    <div className={`flex flex-col justify-center items-center gap-16 fixed backdrop-blur-md inset-0  ${isActiveMenu?" md:hidden":"hidden"}`}>
      <IoIosClose className="text-6xl flex md:hidden cursor-pointer "onClick={menuHandler} />
            <h1 className=" text-blue-700 text-2xl">Pesonalverwaltung</h1>
            <ul className="flex flex-col  gap-16  ">
                <li><NavLink onClick={menuHandler} to="/home">Home</NavLink></li>
                <li><NavLink onClick={menuHandler} to="/about">About</NavLink></li>
                <li><NavLink onClick={menuHandler} to="/kontakt">Kontakt</NavLink></li>
            </ul>
    </div>
  )
}

export default Smallmenu

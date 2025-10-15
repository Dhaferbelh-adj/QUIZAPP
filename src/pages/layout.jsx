import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {MdDarkMode,MdLightMode} from 'react-icons/md'
function Layout() {
  const [mode,setMode]= useState('dark')
  const  changeMode = ()=>{
    setMode(mode == 'dark' ? '': 'dark')
  }
    return (
    <div className={`${mode} bg-background transition-all ease-linear duration-100`}  >
      <div className=" h-screen w-screen flex flex-col items-center justify-start ">
        <h1 className="dark:text-white text-4xl font-bold mb-8 mt-20 ">QUIZ APP</h1>
        <Outlet />
<Button onClick={()=>changeMode()} className='absolute bottom-5' >
          
          {mode == 'dark'?<MdLightMode   size={20}/> : <MdDarkMode className='text-black' size={20}/> }
        </Button>
        
      </div>
      
    </div>
  )
}

export default Layout


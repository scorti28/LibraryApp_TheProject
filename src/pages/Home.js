import React from 'react'
import {useEffect} from "react";

function Home() {
  //  useEffect(() => {
  //    const userInfo = localStorage.getItem("userInfo");
  //    if(userInfo){
  //     history.push("/home");
  //    }
  //  }, [history]);

  return (
    <div className='home'>
        <h1>Home</h1>
    </div>
  )
}

export default Home

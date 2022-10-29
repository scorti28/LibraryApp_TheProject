import React from 'react'
import {useEffect} from "react";
import {useHistory} from "react";
import {http} from "react";


function Home() {
  // const history = useHistory();

  //  useEffect(() => {
  //    const userInfo = localStorage.getItem("userInfo");
  //    if(userInfo){
  //     history.push("http://localhost:3001");
  //    }
  //  }, [history]);


  return (
    <div className='home'>
        <h1>Home</h1>
    </div>
  )
}

export default Home

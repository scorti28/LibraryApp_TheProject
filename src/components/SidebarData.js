import React from 'react';
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { IconName } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { BiArrowFromRight } from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome />,
        cName: 'nav-text'
    },

    {
        title: 'Products',
        path: '/products',
        icon: <SlBasket />,
        cName: 'nav-text'
    },

    {
        title: 'Sign-In',
        path: '/LogIn',
        icon: <VscAccount />,
        cName: 'nav-text'
    },

    {
        title: 'Log-Out',
        path: '/',
        icon: <BiArrowFromRight />,
        cName: 'nav-text',
        onclick: buttonLogOut
    },

]

function buttonLogOut(){
    localStorage.removeItem("userInfo");
    localStorage.removeItem("songInfo");
}
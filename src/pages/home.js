import React from 'react';
import {NavLink} from "react-router-dom";
import Header from "../comp/header";
import MainCon from "../comp/mainCon";
import '../compCss/head.css'
import HomeCss from '../compCss/home.module.css'
import {Helmet} from "react-helmet-async";

function Home(props) {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <MainCon aa="Home"/>
            <Header/>

            <p className={HomeCss.cc}>hello Ahmed</p>


        </>
    );
}

export default Home;
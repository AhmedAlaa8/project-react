import React from 'react';
import Header from "../comp/header";
import MainCon from "../comp/mainCon";
import {Helmet} from "react-helmet-async";

function Main(props) {
    return (
        <>
            <Helmet>
                <title>main</title>
            </Helmet>
            <Header/>
            <MainCon aa="Main"/>
        </>
    );
}

export default Main;
import React from 'react';
import Header from "../comp/header";
import MainCon from "../comp/mainCon";
import '../compCss/head.css'
import {Helmet} from "react-helmet-async";

function Fil(props) {
    return (
        <>
            <Helmet>
                <title>Fil</title>
            </Helmet>
            <MainCon aa="Fil"/>
            <Header/>




        </>
    );
}

export default Fil;
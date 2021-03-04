import React from "react";
import P5 from "../components/background/p5";
import {Footer} from "../components/footer/content"
import styled from "styled-components"
import bambe from "../images/bambe-purple.png"

import "../styles/fonts.css"

const IndexPage = () => {
    return (<div>
        <HeaderIcon >_Bambounou</HeaderIcon>
        <BambeIcon><img src={bambe} alt=""/></BambeIcon>
        
        <P5/>
        <Footer/>
    </div>
    )

}

const HeaderIcon = styled('div')`
    color: #707080;
    
    font-size:60px;
    margin: 13px 40px;
    

    @media (max-width: 800px) {
        font-size:70px;
        margin: 13px 45px;
    }
    @media (max-width: 600px) {
        font-size:40px;
        margin: 30px 8px;
    }
 `


const BambeIcon = styled('div')`
color: #000;

font-size:60px;
margin: 13px 40px;

position : fixed;
left : 78vw;
top : -5vh;


@media (max-width: 800px) {
    font-size:70px;
    margin: 13px 45px;
}
@media (max-width: 600px) {
    font-size:40px;
    margin: 30px 8px;
}
`
export default IndexPage
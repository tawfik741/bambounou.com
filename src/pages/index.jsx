import React from "react";
import P5 from "../components/background/p5";
import {Footer} from "../components/footer/content"
import styled from "styled-components"

const IndexPage = () => {
    return (<div>
        <HeaderIcon>__Bambounou</HeaderIcon>
        <P5/>
        <Footer/>
    </div>
    )

}

const HeaderIcon = styled('div')`
    color: #FFF;
    font-size:70px;
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
export default IndexPage
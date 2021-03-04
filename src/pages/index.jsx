import React from "react";
import P5 from "../components/background/p5";
import { Footer } from "../components/footer/content";
import styled from "styled-components";
import bambe from "../images/bambe-purple.png";

import "../styles/fonts.css";

const IndexPage = () => {
  return (
    <div>
    <Padding>
      <Header>
        <HeaderIcon>_Bambounou</HeaderIcon>
        <BambeIcon>
          <img src={bambe} alt="" />
        </BambeIcon>
      </Header>

    </Padding>

      <P5 />
      <Footer />
    </div>
  );
};

const Padding = styled.div`
    padding: 16px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderIcon = styled("div")`
  color: #707080;

  font-size: 60px;
  line-height: 0.8;

  @media (max-width: 600px) {
    font-size: 40px;
    padding: 40px 0px;
  }
`;

const BambeIcon = styled("div")`
  color: #000;
`;
export default IndexPage;

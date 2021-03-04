import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faSoundcloud,
  faBandcamp,
  faSpotify,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  ButtonGroup,
  IconButton,
  Typography,
  Modal,
  useMediaQuery,
} from "@material-ui/core";

export const Footer = () => {
  const [open, setOpen] = useState(false);

  // const isLarge = useMediaQuery('(min-width:600px)');

  //<IconButton onClick={() => setOpen(true)}><StyledIcon icon={faQuestionCircle} size='lg' />{/* {isLarge ? null : 'sometext'} */}</IconButton>

  const renderButtonsList = () => {
    return (
      <>
        <IconButton
          href={`https://www.instagram.com/bambounouu/?hl=fr`}
          target="_blank"
        >
          <StyledIcon size="lg" icon={faInstagram} />
          {/* {isLarge ? null : 'sometext'} */}
        </IconButton>
        <IconButton href={`https://bambounouofficial.bandcamp.com/`}>
          <StyledIcon size="lg" icon={faBandcamp} />
          {/* {isLarge ? null : 'sometext'} */}
        </IconButton>
        <IconButton href={`https://soundcloud.com/BAMBOUNOU`}>
          <StyledIcon size="lg" icon={faSoundcloud} />
          {/* {isLarge ? null : 'sometext'} */}
        </IconButton>
        <IconButton
          href={`https://open.spotify.com/artist/48P6su5lHrVCZtJVXMjJnX`}
        >
          <StyledIcon size="lg" icon={faSpotify} />
          {/* {isLarge ? null : 'sometext'} */}
        </IconButton>
      </>
    );
  };
  /* if (isLarge) */ return (
    <>
      <StyledGroup style={{}} size="large">
        {renderButtonsList()}
      </StyledGroup>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ backgroundColor: "purple", width: 530, height: 163 }}>
          <Typography>About us</Typography>
        </div>
      </Modal>
    </>
  );
  /*     return (
        <ButtonGroup style={{ position: 'fixed', top: '40%', left: '40%' }} orientation='vertical'>
            {renderButtonsList()}
        </ButtonGroup>
    ) */
};

const StyledGroup = styled(ButtonGroup)`
  position: fixed;
  bottom: 20px;
  right: 20px;

  @media (max-width: 600px) {
    width: 100%;
    right: 0px;
    justify-content: space-evenly;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #707080;
  margin: 13px 40px;

  @media (max-width: 800px) {
    margin: 0 45px;
  }
  @media (max-width: 600px) {
    margin: 0 8px;
  }
`;

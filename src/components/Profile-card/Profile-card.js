import React from "react";
import "./ProfileCard.css";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";

const FancyButton = styled(Button)({
    background: 'black',
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0,0,0,0.25)',
    color: 'white',
    height: 48,
    padding: '0 3.5vh',
    '&:hover': {
        background: 'white',
        color: 'black',
    },
  });

function ProfileCard(props) {
    return (
        <div className="card1">
                <div className="cardss">
                    <div className="headerss">
                        <h1 className="bold-text">Name : {props.name} </h1>
                        <h1 className="bold-text">E-Mail : {props.mail}</h1>
                    </div>
                    <div className="buttonss">
                        {/* <button
                        className="profile-button"
                        onClick={() => {
                        props.onCreateDocumentClick();
                        }}>Create a Document</button> */}

                        <FancyButton
                                variant="contained"
                                // fullWidth
                                color="primary"
                                onClick={() => {
                                    props.onCreateDocumentClick();
                                    }}
                        >
                                Create a Document
                        </FancyButton>

                        <FancyButton
                                variant="contained"
                                // fullWidth
                                color="primary"
                                onClick={() => {
                                    props.onEnterDocumentClick();
                                    }}
                        >
                                Enter Document Code
                        </FancyButton>
                        {/* <button
                        className="profile-button"
                        onClick={() => {
                        props.onEnterDocumentClick();
                        }}>Enter Document Code</button> */}
                    </div>
                </div>
        </div>
    );
}

export default ProfileCard;

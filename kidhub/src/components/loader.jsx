"use client";

import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
      </div>
      <div className="loader-text">
        <p>Loading Creator Webpage...</p>
        <p>Made by Dexibility</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px; /* Space between loader and text */

  .loader {
    width: 112px;
    height: 112px;
  }

  .box1,
  .box2,
  .box3 {
    border: 16px solid white;
    box-sizing: border-box;
    position: absolute;
    display: block;
  }

  .box1 {
    width: 112px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
    animation: abox1 5s 0s forwards ease-in-out infinite;
  }

  .box2 {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
    animation: abox2 5s 0s forwards ease-in-out infinite;
  }

  .box3 {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
    animation: abox3 5s 0s forwards ease-in-out infinite;
  }

  .loader-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px; /* Space between the two text lines */
    color: #ffffff; /* White text for contrast against bg-gray-900 */
    font-family: sans-serif;
    font-size: 18px; /* Equivalent to text-lg */
    font-weight: 400; /* Regular weight for clean look */
    text-align: center;
  }

  @keyframes abox1 {
    0% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    25% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    75% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 0px;
    }
    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  @keyframes abox2 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    25% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    50% {
      width: 112px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
    75% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
  }

  @keyframes abox3 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
    25% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 64px;
    }
    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }
    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }
    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }
    75% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }
    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }
    100% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
  }
`;

export default Loader;

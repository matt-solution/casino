import styled from "styled-components";
import BgShape from "../../../../assets/images/bg/mint-1_bg.png";
import aboutBg from "../../../../assets/images/nft/i.png";
import gradientShape from "../../../../assets/images/nft/v4_baner_mesh-grad.png";

const MintStyleWrapper = styled.section`
  background-color: #1e002e;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  /* padding-top: 130px; */
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    content: "";
  
    z-index: -1;
  }

  // left content
  .mint_left_content {
    padding-right: 99px;

    p {
      margin-top: 23px;
      a {
        color: rgba(255, 255, 255, 0.8);
        font-weight: 600;
      }
    }

    .bithu-btn {
      width: 100% !important;
    }
  }
  .red-text {
    color: red;
  }

  .mint_left_inner {
    max-width: 372px;
    width: 100%;
    margin-left: auto;
  }

  .mint_count_list {
    padding: 0;
    margin: 15px 0 30px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 56px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      h5 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        color: #ffffff;
      }
    }
  }

  .mint_quantity_sect {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 106px;
    width: 100%;
    height: 100%;

    button {
      border: none;
      outline: none;
      background: transparent;
      padding: 0px;
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }

    input {
      max-width: 58px;
      width: 100%;
      border: none;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      padding: 0px 19px;
      outline: none;
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

  //right content
  .mint_right_content {
    position: relative;
    margin-top: 70px;
    &::before {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: url(${gradientShape}) no-repeat;
      background-position: center;
      background-size: contain;
      content: "";
      z-index: -1;
    }
    h1,
    h4,
    h5,
    h6 {
      color: #ffffff;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .content_header {
      h4 {
        img {
          margin-left: 7px;
        }
      }
      h1 {
        font-size: 60px;
        margin-top: 15px;
       
      }
      
    }

    .mint_timer {
      margin-top: 20px;
      margin-bottom: 53px;
    }

    .mint_btns {
      display: flex;
      column-gap: 25px;
      margin-top: 70px;

      button {
        background: transparent;
      }
    }
  }

  // timer
  .countdown_wrapper {
    display: flex;
    column-gap: 15px;
    align-items: center;

    .count_number {
      font-family: "Bakbak One";
      align-items: baseline;
      color: #ffffff;
      font-size: 40px;
      padding-right: 25px;
      line-height: 50px;
      .label {
        font-size: 50%;
        font-weight: 400;
        text-transform: uppercase;
        color: #ffffff;
        position: relative;
      }

      &::before {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }

  /* particles */
  .banner_particles {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .mint_left_content {
      padding-right: 20px;
    }

    .mint_right_content {
      .content_header {
        h4 {
          font-size: 18px;
        }

        h1 {
          font-size: 40px;
          color:
        }
      }

      .content_footer {
        h5 {
          font-size: 18px;
        }
      }
    }

    //timer
    .countdown_wrapper {
      .count_number {
        font-size: 36px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 140px 0 120px 0;
    .mint_left_inner {
      margin: 0 auto;
    }
    .mint_left_content {
      padding-right: 0;
    }
  }
  @media only screen and (max-width: 575px) {
    padding-bottom: 140px;

    .mint_right_content {
      margin-top: 10px;
      .content_header {
        h1 {
          font-size: 45px;
        }
      }
    }

    .countdown_wrapper {
      .count_number {
        font-size: 29px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .mint_right_content {
      margin-top: 10px;
      .mint_btns {
        // flex-direction: column;
        row-gap: 15px;
      }
    }
  }
`;

export default MintStyleWrapper;

import styled from "styled-components";

const PopupStyleWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  width: 100%;
  z-index: 95;
  padding: 0 10px;

  .popup_container {
    background: rgba(88, 101, 242, 0.6);
    backdrop-filter: blur(10px);
    max-width: 550px;
    width: 100%;
    margin: auto;
    min-height: 60px;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    position: relative;

    .close_btn {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.3);
      padding: 10px;
      right: 10px;
      cursor: pointer;
      border: none;
    }
  }

  .popup_inner {
    display: block;
  }

  .popup_slider {
    width: 40px;
    height: 40px;
  }

  .popup_inner {
    display: flex !important;
    align-items: center;
  }

  .coin_icon {
    height: 40px;
    width: 40px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .popup_content {
    margin-left: 10px;
    h5 {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 0px;
      text-align: left;
    }

    h6 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      color: #ffffff;
      text-align: left;
      margin: 0;
    }
  }

  @media screen and (max-width: 320px) {
    .popup_content {
      padding-right: 20px;

      h5 {
        font-size: 14px;
      }
      h6 {
        font-size: 11px;
      }
    }
  }
`;

export default PopupStyleWrapper;

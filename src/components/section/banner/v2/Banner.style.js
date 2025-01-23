import styled from "styled-components";
import bannerBg from "../../../../assets/images/bg/bkg.png";


const BannerStyleWrapper = styled.section`
  background: url(${bannerBg});
  width: 100%;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 192px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .bithu_v2_baner_content {
    margin-top: 135px;
    position: relative;
    .banner-emot {
      display: block;
      text-align: center;
      margin-bottom: 20px;
    }
    h2 {
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      line-height: 60px;
      text-align: center;
      text-transform: uppercase;
      color: #00ffa3;
      margin-bottom: 29px;
      position: relative;
      z-index: 2;
      span {
        color: #ff004c;
      }
    }
    h3 {
      font-size: 40px;
      line-height: 65px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      position: relative;
      margin: 0;
      z-index: 2;
    }

    h5 {
      font-size: 20px;
      line-height: 65px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      position: relative;
      margin: 0;
      z-index: 2;
      span {
        color: #ff004c;
      }
    }

    span {
      display: inline-block;
    }

    .bithu_v2_timer {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 15px;
      z-index: 2;
      h4 {
        font-size: 40px;
        line-height: 65px;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        margin: 0;
      }
    }

    .bithu_v2_baner_buttons {
      margin-top: 41px;
      button {
        margin: 0 auto;
      }
    }

    .v2_baner_stars {
      top: -80px;
      height: 499px;
    }
  }

  /* timer  */
  .countdown_wrapper {
    font-size : 40px;
    
    line-height: 65px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    column-gap: 30px;
    .count_number {
      font-family: "Bakbak One";
      font-size: 40px;
      column-gap: 10px;
      padding-right: 30px;

      .label {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 80px;

    .bithu_v2_baner_content {
      h2 {
        font-size: 50px;
      }

      h3 {
        font-size: 35px;
      }

      .bithu_v2_timer {
        h4 {
          font-size: 35px;
        }
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .bithu_v2_baner_content {
      h2 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      h3 {
        font-size: 21px;
      }

      .bithu_v2_timer {
        h4 {
          font-size: 21px;
        }
      }
    }

    .countdown_wrapper {
      column-gap: 10px;
      .count_number {
        padding-right: 15px;
        font-size: 21px;
      }
    }
  }
`;

export default BannerStyleWrapper;

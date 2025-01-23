import styled from "styled-components";
import bgImg from "../../../assets/images/bg/009.png";

const UpcomingStyleWrapper = styled.section`
  min-height: 100vh;
  position: relative;
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;

  .title {
    font-size: 40px;
    color: #ffffff;
    text-align: center;
    margin-left:31px;
    margin-bottom: 20px;
    z-index: 1;
  }
  .title_1 {
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    margin-left:31px;
    margin-bottom: 40px;
    z-index: 1;
  }

  /* cuntdown timer  */
  .countdown_wrapper {
    margin-left:50px;
    max-width: 568px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    column-gap: 20px;
    margin: 0 auto;

    .count_number {
      display: flex; 
      margin-left:15px;
      margin-right:-30px;
      flex-direction: column;
    }

    .count_value {
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center; 
      font-size: 60px;
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 

      &::before{
        display: none;
      }
    }

 
    .label,
    .count_value {
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      line-height: 50px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }

    .label {
      font-size: 18px;
    }
  }

  .note {
    margin: 40px 0 0;
    h5 {
      max-width: 270px;
      margin: auto;
      text-align: center;
      font-size: 18px;
      color: #ffffff;
    }
  }

  .bithu_menu_list {
    margin-left: 630px;
    margin-right: 96px;
    max-width: 514px;
    min-width: 409px;
    margin-top: 40px;
    width: 100%;
    color: #000;
  
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      gap:50px;
      margin-left: 30px;
      padding: 0;

      color: #000;
      text-align: center;
  
      li {
        position: relative;
        cursor: pointer;
  
        a {
          font-family: "Bakbak One";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          text-transform: uppercase;
          color: #FFFF;
  
          &:hover {
            color: #a300ff; /* Change color on hover */
          }
        }
  
        /* submenu */
        &.submenu {
          .sub_menu_sect {
            background: transparent;
            border-top: 50px solid transparent;
            position: absolute;
            top: -50px;
            left: -20px;
            width: 190px;
            visibility: hidden;
            opacity: 0;
            z-index: -100;
            transition: all 0.5s;
  
            .sub_menu_list {
              padding: 15px 20px;
              background: #171f25;
              flex-wrap: wrap;
  
              li {
                width: 100%;
                a {
                  font-family: "Bakbak One";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 40px;
                  color: rgba(255, 255, 255, 0.8);
                  text-transform: capitalize;
  
                  &:hover {
                    color: #a300ff; /* Change color on hover */
                  }
                }
              }
            }
          }
  
          &:hover {
            .sub_menu_sect {
              top: 7px;
              visibility: visible;
              opacity: 1;
              z-index: 99;
            }
          }
        }
      }
    }
  }
  .menu_link {
    margin-right: 20px;
    color: white;
    text-decoration: none; /* Remove default underline */
  }
  
  .menu_link:hover {
    color: purple; /* Change color to purple on hover */
  }  
  

  .input_box {
    max-width: 470px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 25px;

    input {
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.2);
      height: 60px;
      border-right: none;
      width: 320px;
      padding: 0px 21px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 45px;
      color: #ffffff;
      outline: none;
    }

    button {
      background: #00ffa3;
      height: 60px;
      width: 150px;
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      text-transform: uppercase;
      color: #111111;
      outline: none;
      border: none;
      transition: all 0.3s;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  .cta_btns {
    max-width: 430px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    margin: 0 auto;
    margin-top: 60px;

    button {
      background: transparent;
    }
  }

  /* social links */
  .social_links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    max-width: 540px;
    margin: 0 auto;
    margin-top: 45px;

    a {
      position: relative;
      display: block;
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
   
      backdrop-filter: blur(10px);
      overflow: hidden;

      svg,
      img {
        height: 20px;
        width: 20px;
        color: #ffffff;
      }

      .hover_shape {
        position: absolute;
        left: -10px;
        top: 0;
        height: 15px;
        width: 15px;
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s;
      }

      &:hover {
        .hover_shape {
          left: 5px;
          top: 0;
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  .banner_particles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media only screen and (min-width: 992px) and (max-width: 1700px) {
    .title {
      margin-bottom: 20px;
      font-size: 35px;
    }

    .time_count {
      max-width: 400px;
      margin: auto;
    }

    .countdown_wrapper {
      .count_value {
        height: 70px;
        width: 70px;
        font-size: 38px;
      }
    }

    .note {
      h5 {
        font-size: 14px;
      }
    }

    .input_box {
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 120px 0px;
    .title {
      font-size: 25px;
      margin-bottom: 60px;
    }

    .countdown_wrapper {
      justify-content: space-around;
      .count_value {
        height: 60px;
        width: 60px;
        font-size: 30px;
      }
    }

    .note {
      h5 {
        margin-top: 30px;
      }
    }

    .input_box {
      margin-top: 30px;
    }

    .cta_btns {
      button {
        height: 55px;
        width: 170px;
      }
    }
  }

  @media only screen and (max-width: 540px) {
    .cta_btns {
      flex-direction: column;
      margin-top: 50px;

      button {
        .hover-shape {
          height: 15px;
          width: 15px;
        }
      }
    }

    .countdown_wrapper {
      .count_number {
      .label {
        font-size: 14px;
      }
      }
    }

    .input_box {
      input {
        width: 80%;
      }

      button {
        font-size: 12px;
        img {
          margin-left: 5px;
        }
      }
    }

    .social_links {
      gap: 30px;

      a {
        height: 50px;
        width: 50px;
      }
    }
  }
`;

export default UpcomingStyleWrapper;

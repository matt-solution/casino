import styled from "styled-components";

const NavWrapper = styled.nav`
  z-index: 999;
  &.bithu_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 1px;
    height: 90px;
    transition: all 0.3s;

    &.sticky {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(27, 34, 38, 0.8);
      backdrop-filter: blur(15px);
      z-index: 998;
      margin-top: 0px;
      transition: all 0.2s;
    }
  }

  .bithu_menu_sect {
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bithu_menu_left_sect {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 15%;

    .logo {
      a {
        display: inline-block;
      }
    }
  }

  .bithu_menu_right_sect {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .bithu_menu_list {
    margin-left: 55px;
    margin-right: 176px;
    max-width: 514px;
    min-width: 409px;
    justify-content: space-around;
    width: 100%;
    color: #000;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
     
      padding: 0;
    color: #000;

      

      li {
        position: relative;
        cursor: pointer;
        

        a {
          font-family: "Bakbak One";
          margin-right: 29px;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          justify-content: space-between;
          text-align: center;
          text-transform: uppercase;
          color: #FFFF00;
         

         

        }

        &:hover {
          a {
            color: #FFFFFF;
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
                }

                &:hover {
                  a {
                    color: #00ffa3;
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

  .bithu_menu_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    min-width: 284px;
    button {
      color: #ffffff;
      text-transform: uppercase;
      font-family: "Bakbak One";
      font-weight: 400;
      font-size: 16px;
    }

    .menu_btn {
      display: none;
      border: none;
      background: transparent;
      cursor: pointer;
      svg {
        font-size: 40px;
      }
    }

    .join_btn {
      height: 50px;
      width: 114px;
      background-color: transparent;
    }

    .connect_btn {
      height: 50px;
      min-width: 150px;
      border: none;
      margin-left: 100px;
      background: rgba(255, 255, 255, 0.2);

      svg {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    .bithu_menu_list {
      margin-right: 20px;
    }
  }
  @media (max-width: 991px) {
    .bithu_menu_right_sect {
      justify-content: end;
    }
    .bithu_menu_btns {
      justify-content: end;
      .menu_btn {
        display: block;
      }
    }

    .bithu_menu_btns {
      .join_btn {
        display: none;
      }
    }
    .bithu_menu_list {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @media (max-width: 667px) {
    .bithu_menu_btns {
      .connect_btn {
        display: none;
      }

      .menu_btn {
        svg {
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 540px) {
    .bithu_menu_left_sect {
      width: 180px;
      .logo {
        img {
          width: 100px;
        }
      }
    }

    .bithu_menu_right_sect {
      width: 50%;
      .bithu_menu_right_sect {
        width: 50%;
      }
    }
  }
`;

export default NavWrapper;

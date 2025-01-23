import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../../assets/images/logo.png";
import { presaleExpireDate } from '../../../../config'

const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [mintStart, setmintStart] = useState(false);
  const [timeDaysFromNow, setTimeDaysFromNow] = useState(presaleExpireDate);
  const [today, setDate] = useState(Date.now());

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => { 
      setDate(Date.now());
      if((timeDaysFromNow - today) <= 0){
        setmintStart(true);
      }
    }, 1000);
    
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <>
      <NavWrapper className="bithu_header" id="navbar">
        <div className="container">
          <div className="bithu_menu_sect">
            <div className="bithu_menu_left_sect">
              <div className="logo">
                {/* <a href="/">
                  <img src={logo} alt="bithu nft logo" />
                </a> */}
              </div>
            </div>
            <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
              <div className="bithu_menu_list">
                <ul style={{ listStyleType: "none", padding: 0, display: "flex" }}>
                  <li style={{ marginRight: "10px" }}>
                    <a href="#home">Home</a>
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <a href="#about">About</a>
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <a href="https://t.me/casino_404_real">Contact</a>
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <a href="https://404-casino.gitbook.io/docs">Documentation</a>
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    {mintStart? <a href="/mint-1">Mint</a> : <a>Mint</a>}
                  </li>
                  {/* <li>
                  <a href="./coming-soon">Sneak_peek</a>
                </li> */}
                </ul>
              </div>

              <div className="bithu_menu_btns">
                <button className="menu_btn" onClick={() => handleMobileMenu()}>
                  <MdNotes />
                </button>
                <Button
                  sm
                  variant="hovered"
                  className="connect_btn"
                  // onClick={() => walletModalHandle()}
                  onClick={!mintStart? () => {} : walletModalHandle}
                >
                  <FaWallet /> Connect
                </Button>
              </div>
            </div>

          </div>
        </div>
      </NavWrapper>
      {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
    </>
  );
};

export default Header;

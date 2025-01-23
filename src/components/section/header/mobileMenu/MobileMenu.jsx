import { useState, useEffect } from "react";
import { useModal } from "../../../../utils/ModalContext";
import { FaTelegramPlane, FaTwitter, FaWallet } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Button from "../../../../common/button";
import logo from "../../../../assets/images/logo.png";
// import openseaIcon from "../../../../assets/images/icon/opensea.svg";
import bannerBg from "../../../../assets/images/nft/footer.png";
import { presaleExpireDate } from '../../../../config';
import MobileMenuStyleWrapper from "./MobileMenu.style";

const MobileMenu = ({ mobileMenuhandle }) => {
  const { walletModalHandle } = useModal();
  const [isSubmenu, setSubmenu] = useState(false);
  const [countDisabled, setCountDisabled] = useState(true);

  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };

  const [timeDaysFromNow, setTimeDaysFromNow] = useState(presaleExpireDate);
  const [mintStart, setmintStart] = useState(false);
  const [today, setDate] = useState(Date.now());

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
    <MobileMenuStyleWrapper className="bithu_mobile_menu">
      <div className="bithu_mobile_menu_content">
        <div className="mobile_menu_logo">
          <img className="bithu_logo" src={bannerBg} alt="bithu logo" />
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="bithu_mobile_menu_list">
          <ul>
            <li>
              <a href="#home" onClick={() => mobileMenuhandle()}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => mobileMenuhandle()}>About</a>
            </li>
            <li>
              <a href="https://t.me/casino_404_real" onClick={() => mobileMenuhandle()}>Contact</a>
            </li>
            <li>
              <a href="https://404-casino.gitbook.io/docs">Documentation</a>
            </li>
            <li>
              <a href="#faq" onClick={() => mobileMenuhandle()}>FAQ</a>
            </li>
            <li>
              { mintStart? <a href="mint-1">Mint</a> : <a>Mint</a>}
            </li>
          </ul>
        </div>
        <div className="mobile_menu_social_links">
          {/* <a href="# ">
            <img src={openseaIcon} alt="bithu social icon" />
          </a> */}
          <a href="https://twitter.com/404Casino">
            <FaTwitter />
          </a>
          <a href="https://t.me/casino_404_real ">
            <FaTelegramPlane />
          </a>
        </div>
        <Button
          sm
          variant="hovered"
          className="connect_btn"
          // onClick={() => walletModalHandle()}
          onClick={countDisabled? () => {} : walletModalHandle}
        >
          <FaWallet /> Connect
        </Button>
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;

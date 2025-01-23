import { Slider, SliderItem } from "../../../common/slider/Slider";
import PopupStyleWrapper from "./Popup.style";

import coinIcon1 from "../../../assets/images/icon/pop-up-img-1.png";
import coinIcon2 from "../../../assets/images/icon/pop-up-img-2.png";
import coinIcon3 from "../../../assets/images/icon/pop-up-img-3.png";
import closeIcon from "../../../assets/images/icon/popup-close-icon.svg";

const Popup = ({ popupHandle }) => {
  const coinIcons = [coinIcon1, coinIcon2, coinIcon3];

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
    speed: 400,
    autoplaySpeed: 400,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    </>
    
  );
};

export default Popup;

import { useState, useEffect } from "react";
import {
  FaTelegramPlane,
} from "react-icons/fa";

import CountdDown from "../../../../common/countDown"
import { useModal } from "../../../../utils/ModalContext";
import { Slider, SliderItem } from "../../../../common/slider/Slider";
import Button from "../../../../common/button";
import Particle from "./Particles";
import MintStyleWrapper from "./Mint.style";

import thumb1 from "../../../../assets/images/nft/152.png";
import thumb2 from "../../../../assets/images/nft/159.png";
import thumb3 from "../../../../assets/images/nft/249.png";
import thumb4 from "../../../../assets/images/nft/1153.png";
import thumb5 from "../../../../assets/images/nft/1582.png";
import thumb6 from "../../../../assets/images/nft/2013.png";
import thumb7 from "../../../../assets/images/nft/2160.png";
import thumb8 from "../../../../assets/images/nft/2172.png";
import thumb9 from "../../../../assets/images/nft/2509.png";
import thumb10 from "../../../../assets/images/nft/2737.png";
import twitterIcon from "../../../../assets/images/icon/Twitter.svg";
import { mintExpireDate } from '../../../../config'


const formatDay = (date) => {
  let d = new Date(date),
    day = '' + d.getDate();

  if (day.length < 2)
    day = '0' + day;

  return day;
}

const formatMonth = (date) => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1);

  if (month.length < 2)
    month = '0' + month;

  let months = '';
  switch (month) {
    case '01':
      months = 'Jan';
      break;
    case '02':
      months = 'Feb';
      break;
    case '03':
      months = 'Mar';
      break;
    case '04':
      months = 'Apr';
      break;
    case '05':
      months = 'May';
      break;
    case '06':
      months = 'Jun';
      break;
    case '07':
      months = 'Jul';
      break;
    case '08':
      months = 'Aug';
      break;
    case '09':
      months = 'Sep';
      break;
    case '10':
      months = 'Oct';
      break;
    case '11':
      months = 'Nov';
      break;
    case '12':
      months = 'Dec';
      break;
    default:
      months = 'Jan';
  }

  return months;
}

const Mint = () => {
  const [count, setCount] = useState(1);
  const [timeDaysFromNow, setTimeDaysFromNow] = useState(mintExpireDate);
  const [mintStart, setmintStart] = useState(false);
  const {mintModalHandle} = useModal();
  const [today, setDate] = useState(Date.now());

  const slideImages = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8, thumb9, thumb10];

  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleChenge = () => { };

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(Date.now());
      if ((timeDaysFromNow - today) <= 0) {
        setmintStart(true);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <MintStyleWrapper>
      <Particle />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mint_left_content">
              <div className="mint_left_inner">
                <div className="mint_slider">
                  <Slider {...sliderSettings}>
                    {slideImages?.map((thumb, idx) => (
                      <SliderItem key={idx}>
                        <div className="mint_thumb">
                          <img src={thumb} alt="thumb" />
                        </div>
                      </SliderItem>
                    ))}
                  </Slider>
                </div>
                <ul className="mint_count_list">
                  <li>
                    <h5>Remaining</h5>
                    <h5>
                      0/<span>9999</span>
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>0.15 ETH</h5>
                  </li>
                  <li>
                    <h5>Quantity</h5>
                    <div className="mint_quantity_sect">
                      <button
                        className="input_number_decrement"
                        onClick={() =>
                          count > 1 ? setCount(count - 1) : count
                        }
                      >
                        -
                      </button>
                      <input
                        className="input_number"
                        type="text"
                        value={count}
                        onChange={handleChenge}
                      />
                      <button
                        className="input_number_increment"
                        onClick={() =>
                          count > 0 ? setCount(count + 1) : count
                        }
                      >
                        +
                      </button>
                    </div>
                    <h5>
                      <span>0.30</span> ETH
                    </h5>
                  </li>
                </ul>
                <Button lg variant="mint" onClick={mintStart ? () => mintModalHandle() : () => { }}>
                  {" "}
                  Mint now
                </Button>
                <p>
                  By clicking “MINT”, You agree to our{" "}
                  <a href="#">Terms of Service</a> and our{" "}
                  <a href="#">Privacy Policy.</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mint_right_content">
              <div className="content_header">
                <h4>

                  <span>
                    {/* <img src={checkIcon} alt="icon" /> */}
                  </span>
                </h4>
                <h4>

                  <span>
                    {/* <img src={checkIcon} alt="icon" /> */}
                  </span>
                </h4>


                <h1>PRESALE MINT <span className="red-text">LIVE!</span></h1>

              </div>

              <div className="mint_timer">
                <h5>Public Mint Ends in</h5>
                <CountdDown date={mintExpireDate} />
              </div>
              <div className="content_footer">
                <h5>NO MAX LIMIT ON NFTS PER WALLET</h5>
                <h5>Price 0.09 ETH + gas</h5>
                <h5>Mint is live until {formatDay(mintExpireDate)} {formatMonth(mintExpireDate)} {new Date(mintExpireDate).toISOString().slice(11, 13)}H</h5>
              </div>
              <div className="mint_btns">
                <Button lg variant="outline">
                  <a href="https://t.me/casino_404_real" target="_blank" style={{ color: 'white' }}>
                    <FaTelegramPlane />
                    join telegram
                  </a>
                </Button>
                <Button lg variant="outline">
                  <img src={twitterIcon} alt="icon" />
                  <a href="https://twitter.com/404Casino" target="_blank" style={{ color: 'white' }}>
                    {/* <img src={discordIcon} alt="icon" /> */}
                    join twitter
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MintStyleWrapper>
  );
};

export default Mint;

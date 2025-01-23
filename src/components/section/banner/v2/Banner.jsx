import React, { useState, useEffect } from "react";
import { useModal } from "../../../../utils/ModalContext";
import CountdDown from "../../../../common/countDown";
import Counter from "../../../../common/counter";
import Particle from "../../../../common/particle/v1";
import Button from "../../../../common/button";
import { presaleExpireDate } from '../../../../config';
import data from "../../../../assets/data/particle/bannerV2Particles";
import BannerStyleWrapper from "./Banner.style";

const Banner = () => {
  const { mintModalHandle } = useModal();
  const [mintStart, setmintStart] = useState(false);
  const [timeDaysFromNow, setTimeDaysFromNow] = useState(presaleExpireDate);
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
    <BannerStyleWrapper className="bithu_v2_baner_sect" id="home">
      <div className="container">
        <div className="bithu_v2_baner_content">
          <h2>
            <span className="banner-emot">🎉</span>Presale <span>Coming Soon!</span>
          </h2>
          <h3>
            <span className="count">
              {/* <Counter end={10000} duration={10000} /> */}
              <Counter />
            </span>{" "}
            / 9999 Minted
          </h3>
          <div className="bithu_v2_timer">
            <h4>TIME LEFT</h4>
            <div className="timer">
              <CountdDown
                date={Number(presaleExpireDate)}
                renderer={({ days, hours, minutes, seconds }) => (
                  <span>
                    {days} days {hours} hours {minutes} minutes {seconds} seconds
                  </span>
                )}
              />
            </div>
          </div>
          <div className="bithu_v2_baner_buttons text-center">
            <Button lg variant="mint" onClick={!mintStart? () => {} : mintModalHandle}>
              Mint Now
            </Button>
          </div>
          <h5>
            <span className="count">
              MINT & CONNECT BUTTONS ACTIVATE AT PRESALE LAUNCH! STAY TUNED!
            </span>
          </h5>
          <Particle className="v2_baner_stars" particles={data} />
        </div>
      </div>
    </BannerStyleWrapper>
  );
};

export default Banner;

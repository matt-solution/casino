import React, { useState, useEffect } from 'react';
import SectionTitle from "../../../../common/sectionTitle";
import Counter from "../../../../common/counter";
import AboutImageLeft from "../../../../assets/images/nft/about_image_left.png";
import AboutImageRight from "../../../../assets/images/nft/about_image_right.png";
import AboutInfoCardList from "../aboutInfoCardList";
import AboutStyleWrapper from "./About.style";

const About = () => {
  const [showCounters, setShowCounters] = useState(true);
  const [endValue1, setEndValue1] = useState(0);
  const [endValue2, setEndValue2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update end values here
      setEndValue1(9999); // Update this to your desired end value
      setEndValue2(35); // Update this to your desired end value
    }, 2000); // Change this to the desired interval in milliseconds

    return () => clearInterval(interval);
  }, []); // Run effect only once on mount

  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="About Us"
          subtitle=""
        />
        <div className="v2_about_us_content">
          <div className="v2_about_us_text">
            <p>
            Welcome to 404.casino, the world's first ERC-404 Casino revolutionizing the landscape of digital ownership and gambling. Our groundbreaking project introduces the 404 experimental standard, bringing together a unique collection of 10,000 NFTs and 10,000 Tokens in an unprecedented fusion of blockchain technology and entertainment.
            </p>
            <p>
            At 404.casino, we redefine traditional concepts of ownership by offering fractional ownership of NFTs, opening up new realms of possibility for investors and enthusiasts alike. Our platform provides an immersive gaming experience where players can engage with and invest in a diverse range of digital assets, all backed by the security and transparency of blockchain technology.
            </p>
            <p>
              
            With our innovative approach, we aim to democratize access to valuable digital assets, empowering individuals to participate in the growing NFT market like never before. Whether you're a seasoned investor or a newcomer to the world of blockchain, 404.casino offers a gateway to explore, engage, and profit from the exciting frontier of decentralized finance and digital collectibles.
            </p>
            <p>
            Join us at 404.casino and embark on a journey where innovation meets opportunity, where ownership is redefined, and where the future of gaming and investment converge.
            </p>

            {showCounters && (
              <div className="counter-wrap">
                <h4>To be minted <Counter end={endValue1} /></h4>
                <h4>Attributes <Counter end={endValue2} /></h4>
              </div>
            )}
          </div>
          <div className="v2_about_img v2_about_img_left">
            <span>
              {/* <img src={AboutImageLeft} alt="bithu nft about" /> */}
            </span>
          </div>
          <div className="v2_about_img v2_about_img_right">
            <span>
              {/* <img src={AboutImageRight} alt="bithu nft thumb" /> */}
            </span>
          </div>
        </div>

        {/* about card */}
        <AboutInfoCardList />
      </div>
    </AboutStyleWrapper>
  );
};

export default About;

import Counter from "../../../../common/counter";
import SectionTitle from "../../../../common/sectionTitle";
import data from "../../../../assets/data/about/dataV2";
import catThumb1 from "../../../../assets/images/nft/10.png";

import AboutStyleWrapper from "./About.style";

const About = () => {
  const { aboutDescription1, aboutDescription2 } = data;
  return (
    <AboutStyleWrapper id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-left-item">
              {/* <div className="counter_item">
                <h3>
                  <Counter
                    end={2200}
                    decimal="."
                    decimals={2200 % 1 !== 0 ? "2" : "0"}
                    suffix={""}
                  />
                </h3>
                <h6>Total Items</h6>
              </div> */}
              {/* <div className="counter_item">
                <h3>
                  <Counter
                    end={915}
                    decimal="."
                    decimals={915 % 1 !== 0 ? "2" : "0"}
                    suffix={"$"}
                  />
                </h3>
                <h6>NFT Mint Price</h6>
              </div> */}
           
              <div className="counter_item">
                <h3>
                
                </h3>
              
              </div>
            </div>
            <div className="image_section">
    <img src={catThumb1} alt="Descriptive Text" className="styled-image"/>
</div>

          </div>
          <div className="col-md-6">
            <div className="v1_about_us_right_sect">
              <SectionTitle title="ABOUT US" subtitle="THE STORY " />
              <div className="v1_about_us_right_text">
                <p>{aboutDescription1}</p>
                <p>{aboutDescription2}</p>
                {/* <p>{aboutDescription3}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;

import CTA from "../../cta/v1";
import { footerLinksV1 } from "../../../../assets/data/insiteLinks";
import footerLogo from "../../../../assets/images/logo.png";
import backToTopIcon from "../../../../assets/images/icon/back_to_top.svg";
import footerShapesLeft from "../../../../assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "../../../../assets/images/icon/footer_shapes_right.png";

import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper id="Contact">
      <CTA />

      <div className="bithu_v1_main_footer">
        <div className="bithu_v1_main_footer_overlay"></div>
        <div className="footer_bottom">
          <div className="footer_bottom_content">
            <span className="footer_shapes_left">
              <img src={footerShapesLeft} alt="bithu nft footer" />
            </span>
            <span className="footer_shapes_right">
              <img src={footerShapesRight} alt="bithu nft footer" />
            </span>
            <div className="container">
              <div className="footer_menu">
                <div className="bottom_footer_left">
                  <div className="footer_logo">
                   
                  </div>
                  <div className="copiright_text">
                    <p>Copyright © 2024 404 Casino</p>
                  </div>
                </div>
                <div className="bottom_footer_right">
                  <div className="footer_logo">
                   
                  </div>
                  {/* <div className="copiright_text">
                    <p>Send us an email at artsims@1124design.com</p>
                  </div> */}
                </div>
                <a href="# " className="bact_to_top_btn">
                  <img src={backToTopIcon} alt="bithu nft back to top" />
                </a>
                <div className="bottom_footer_right">
                  <ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;

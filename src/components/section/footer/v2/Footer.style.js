import styled from "styled-components";
import footerBG from "../../../../assets/images/nft/footer.png";

const FooterStyleWrapper = styled.footer`
  padding-top: 105px;
  position: relative;

  &::before {
    position: absolute;
    background: url(${footerBG});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    content: "";
    height: 50%;
    width: 76%;
    bottom: 163px;
    margin-left:204px;
  }

  @media screen and (max-width: 768px) {
    &::before {
      margin-left:0;
      width: 100%;
    }
  }
`;

export default FooterStyleWrapper;

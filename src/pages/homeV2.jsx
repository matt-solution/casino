import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import Banner from "../components/section/banner/v2";
import CharacterSlider from "../components/section/characterSlider/v2";
import About from "../components/section/about/v2";
import RoadMap from "../components/section/roadMap/v2";
import Team from "../components/section/team/v2";
import FAQ from "../components/section/faq/v2";
import Partner from "../components/section/partner";
import Footer from "../components/section/footer/v2";
import Popup from "../components/section/popup";
import MintNowModal from "../common/modal/mintNowModal";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import WalletModal from "../common/modal/walletModal/WalletModal";

const HomeV2 = () => {
  const {
    visibility,
    metamaskModal,
    walletModalvisibility,
    isPopup,
    popupHandle,
  } = useModal();

  return (
    <>
      <Layout>
        <GlobalStyles />
        {isPopup && <Popup popupHandle={popupHandle} />}
        {metamaskModal && <MetamaskModal />}
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <Banner />
        <CharacterSlider />
        <About />
        {/* <RoadMap /> */}
        {/* <Team /> */}
        <FAQ />
        {/* <Partner /> */}
        <Footer />
      </Layout>
    </>
  );
};

export default HomeV2;

import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner/v1";
import Counter from "../components/section/counter/v1";
import CharacterSlider from "../components/section/characterSlider/v1";
import HowToMint from "../components/section/howToMint/v1";
import About from "../components/section/about/v1";
import RoadMap from "../components/section/roadMap/v1";
import Team from "../components/section/team/v1";
import FAQ from "../components/section/faq/v1";
import Footer from "../components/section/footer/v1";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Popup from "../components/section/popup";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
const HomeV1 = () => {
  const {
    visibility,
    metamaskModal,
    walletModalvisibility,
    isPopup,
    popupHandle
  } = useModal();
  return (
    <Layout>
      <GlobalStyles />
      {isPopup && <Popup popupHandle={popupHandle} />}
      {metamaskModal && <MetamaskModal />}
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <Banner />
      <Counter />
      <CharacterSlider />
      <HowToMint />
      <About />
      <RoadMap />
      <Team />
      <FAQ />
      <Footer />
    </Layout>
  );
};

export default HomeV1;

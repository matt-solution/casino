import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import PageHeader from "../common/pageHeader/v3";
import RoadMap from "../components/section/roadMap/v6";
import CTA from "../components/section/cta/v2";
import Footer from "../components/section/footer/v3";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Popup from "../components/section/popup";
import WalletModal from "../common/modal/walletModal/WalletModal";
const RoadmapPage = () => {
  const { walletModalvisibility, metamaskModal, isPopup, popupHandle } =
    useModal();
  return (
    <>
      <Layout>
        <GlobalStyles />
        {isPopup && <Popup popupHandle={popupHandle} />}
        {metamaskModal && <MetamaskModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader />
        <RoadMap />
        {/* <CTA /> */}
        {/* <Footer /> */}
      </Layout>
    </>
  );
};

export default RoadmapPage;

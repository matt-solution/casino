import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1";
import PageHeader from "../common/pageHeader/v6";
import FAQ from "../components/section/faq/v6";
import CTA from "../components/section/cta/v2";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Popup from "../components/section/popup";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";

const FAQPage = () => {
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
        <PageHeader />
        <FAQ />
        <CTA />
      </Layout>
    </>
  );
};

export default FAQPage;

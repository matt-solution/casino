import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import PageHeader from "../common/pageHeader/v5";
import Contact from "../components/section/contact";
import CTA from "../components/section/cta/v2";
import Footer from "../components/section/footer/v3";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Popup from "../components/section/popup";
import WalletModal from "../common/modal/walletModal/WalletModal";
const ContactPage = () => {
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
        <Contact />
        <CTA />
        <Footer />
      </Layout>
    </>
  );
};

export default ContactPage;

import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v2";
import Upcoming from "../components/section/upcoming";
import MintNowModal from "../common/modal/mintNowModal";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Popup from "../components/section/popup";
import WalletModal from "../common/modal/walletModal/WalletModal";

const ComingSoon = () => {
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
        <Upcoming />
      </Layout>
    </>
  );
};

export default ComingSoon;

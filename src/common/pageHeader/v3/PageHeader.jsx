import titleShape from "../../../assets/images/icon/home-shape.png";
import PageHeaderStyleWrapper from "./PageHeader.style";
const PageHeader = () => {
  return (
    <PageHeaderStyleWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                <a href="./home">Home</a> <span>.</span> Terms And Conditions
                <img
                  className="heading_shape"
                  src={titleShape}
                  alt="bithu nft heading shape"
                />
              </div>
              <h2 className="breadcrumb_title text-uppercase">Terms And Conditions</h2>
            </div>
          </div>
          <div className="col-md-7">
            {/* <h2 className="roadmap_phase">2022 - 2023</h2> */}
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;

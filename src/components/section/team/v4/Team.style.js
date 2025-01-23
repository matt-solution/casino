import styled from "styled-components";

const TeamStyleWrapper = styled.section`
background: #007bff;
  backdrop-filter: blur(5px);
  position: relative;
  padding: 113px 0px 120px 0px;
  z-index: 1;
  text-align: center;

  .team_bear_img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -150px;
  }

  .bithu_team_content {
    margin-top: 53px;
    position: relative;
    z-index: 1;

    .row {
      row-gap: 30px;
    }
  }
`;

export default TeamStyleWrapper;

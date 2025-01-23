import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import avatarThumb1 from "../../images/nft/10.png";
import avatarThumb2 from "../../images/nft/14.png";
import avatarThumb3 from "../../images/nft/32.png";
import avatarThumb4 from "../../images/nft/39.png";

const data = [
  {
     avatar: avatarThumb1,
    name: "Bear Necessities",
    designation: "",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  } ,

  {
     avatar: avatarThumb2,
    name: "Bear General",
    designation: "",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  } 
  ,
  {
     avatar: avatarThumb3,
    name: "Bear Mascot",
    designation: "",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  }
];

export default data;

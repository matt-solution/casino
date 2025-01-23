import { FaLinkedinIn, FaTwitter, FaInstagram, FaTelegramPlane, FaFacebook } from "react-icons/fa";
import u from "../images/icon/q.png";
import q from "../images/icon/q1.png";
import s from "../images/icon/swap.png";
import openseaIcon from "../images/icon/opensea.svg";
import mediumIcon from "../images/icon/med.svg";

const data = [
  {
    thumb: q,
    url: "https://twitter.com/404Casino",
  },
  {
    icon: <FaTelegramPlane />,
    url: "https://t.me/casino_404_real",
  },
  {
    thumb: openseaIcon,
    // url: "twitter.com/bipolarbears",
  },
  {
    thumb: s,
    url: "https://uniswap.org/",
    style: { fontSize: "48px", color: "red" }, // Add style for Uniswap thumb
  },
  // {
  //   thumb: mediumIcon,
  //   url: "#",
  // },
];

export default data;

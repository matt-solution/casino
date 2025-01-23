import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate instead of useHistory
import CountdDown, { zeroPad } from 'react-countdown';
import {
  FaDiscord,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from 'react-icons/fa';
import Button from '../../../common/button';
import Particle from './Particles';
import UpcomingStyleWrapper from './Upcoming.style';

const CountdownElement = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown_wrapper">
      <div className="count_number">
        <span className="count_value">{zeroPad(days)}</span>{' '}
        <span className="label">Days</span>
      </div>
      <div className="count_number">
        <span className="count_value"> {zeroPad(hours)} </span>{' '}
        <span className="label">Hours</span>
      </div>
      <div className="count_number">
        <span className="count_value"> {zeroPad(minutes)} </span>
        <span className="label">Minutes</span>
      </div>
      <div className="count_number">
        <span className="count_value"> {zeroPad(seconds)} </span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

const Upcoming = () => {
  const navigate = useNavigate(); // Using useNavigate instead of useHistory
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 12 * 24 * 60 * 60 * 1000); // 12 days in milliseconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate('./home'); // Redirect to home page using useNavigate
    }
  }, [redirect, navigate]);

  return (
    <UpcomingStyleWrapper>
      <Particle />
      <div className="container-fluid">
        <div className="upcoming_content">
          <h2 className="title">MINT COMING SOON</h2>
          <h2 className="title_1">The Worlds First ERC-404 Casino</h2>
          <div className="time_count">
            <CountdDown date={Date.now() + 12 * 24 * 60 * 60 * 1000} renderer={CountdownElement} />
            <div className="note">
              {/* <h5>
                Leave Your Email to Be Notified About Presales & Whitelist
              </h5> */}
            </div>
          </div>

          <div className="input_box">
            <input type="text" placeholder="Contract Address" />
            {/* <button>
              {" "}
              Notify Me <img src={msgIcon} alt="icon" />
            </button> */}
          </div>

          <div className="cta_btns">
            <Button lg variant="outline">
              {' '}
              <FaTelegramPlane /> Join Telegram{' '}
            </Button>
            <Button lg variant="outline">
              {' '}
              <FaTwitter /> Join Twitter{' '}
            </Button>
          </div>
        </div>
      </div>
    </UpcomingStyleWrapper>
  );
};

export default Upcoming;

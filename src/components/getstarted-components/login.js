import React, { useEffect, useState } from 'react';
import LogoApple from '../../assets/icons/logo-apple.png';
import LogoGoogle from '../../assets/icons/logo-google.png';
import { InputGroup, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { Eye, EyeSlashFill } from 'react-bootstrap-icons';

const Login = () => {
  const [mybubbles, setMybubbles] = useState(document.getElementsByClassName('ani-bubble'));
  // const mybubbles = document.getElementsByClassName('ani-bubble');
  const bubblecolors = ['#c5a5ab', '#e3e2dd', '#87a6c0'];

  useEffect(() => {
    setMybubbles(document.getElementsByClassName('ani-bubble'));
    for (let i = 0; i < mybubbles.length; i++) {
      mybubbles[i].style.backgroundColor = bubblecolors[Math.floor(Math.random() * bubblecolors.length)];
      mybubbles[i].style.opacity = Math.random() * 0.75;

      const bubblesize = (Math.floor(Math.random() * 9) + 2) * 50;

      mybubbles[i].style.width = bubblesize + 'px';
      mybubbles[i].style.height = bubblesize + 'px';
      mybubbles[i].style.borderRadius = bubblesize / 2 + 'px';

      mybubbles[i].style.left = Math.floor(Math.random() * 100) + '%';

      mybubbles[i].style.animationDuration = Math.floor(Math.random() * 16) + 8 + 's';
      mybubbles[i].style.animationDelay = Math.floor(Math.random() * 8) + 's';
    }
  }, [mybubbles, bubblecolors]);

  return (
    <section className="getstarted-wrap">
      <div className="getstarted-cont">
        <div className="getstarted-cont__left">
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
          <div className="ani-bubble" />
        </div>
        <div className="getstarted-cont__form">
          <div className="getstarted-cont__form-top"></div>
          <div className="getstarted-cont__form-bottom">
            <p className="getstarted-cont__form-title">IAMPAM CloudOps Login</p>
            <div className="signup-cont__form-btns">
              <Button className="signup-cont__form-btns__btn" variant="outline-dark">
                <img src={LogoGoogle} alt="" />
                <p>
                  Sign up with <span>Google</span>
                </p>
              </Button>
              <Button className="signup-cont__form-btns__btn" variant="outline-dark">
                <img src={LogoApple} alt="" />
                <p>
                  Sign up with <span>Apple</span>
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

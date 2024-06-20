import React, { useState } from 'react';
import LogoApple from '../../assets/icons/logo-apple.png';
import LogoGoogle from '../../assets/icons/logo-google.png';
import { InputGroup, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { Key } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Eye, EyeSlashFill } from 'react-bootstrap-icons';

const Signup = () => {
  const [showPass, setShowPass] = useState(false);

  const clickHandler = () => {
    setShowPass((prev) => !prev);
  };

  return (
    <section className="getstarted-wrap">
      <div className="getstarted-cont">
        <div className="signup-cont__form">
          <p className="signup-cont__form-title">IAMPAM CloudOps Login</p>
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
          <hr className="signup-cont__divider" />
          <div className="signup-cont__form-inputs">
            <div className="signup-cont__form-inputs__title">
              <p>Email</p>
              <div className="signup-cont__form-inputs__email-input">
                <Form.Control placeholder="inactive" aria-label="inactive" aria-describedby="basic-addon1" />
                <p>@</p>
                <InputGroup className="mb-3">
                  <Form.Control aria-label="Text input with dropdown button" placeholder="직접입력" />
                  <DropdownButton variant="outline-secondary" title="" id="input-group-dropdown-2" align="end">
                    <Dropdown.Item href="#">gmail.com</Dropdown.Item>
                    <Dropdown.Item href="#">naver.com</Dropdown.Item>
                    <Dropdown.Item href="#">직접입력</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
              </div>
            </div>
            <div className="signup-cont__form-inputs__title">
              <p>Password</p>
              <div className="signup-cont__form-inputs__password-input">
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showPass ? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                    aria-label="password"
                    aria-describedby="password-input"
                    required
                  />
                  <InputGroup.Text onClick={clickHandler}>{showPass ? <EyeSlashFill /> : <Eye />}</InputGroup.Text>
                </InputGroup>
              </div>
            </div>
            <div className="signup-cont__form-inputs__title">
              <p>Confirm Password</p>
              <div className="signup-cont__form-inputs__confirmpassword-input">
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showPass ? 'text' : 'password'}
                    name="password"
                    placeholder="Confirm Password"
                    aria-label="password"
                    aria-describedby="password-input"
                    required
                  />
                  <InputGroup.Text onClick={clickHandler}>{showPass ? <EyeSlashFill /> : <Eye />}</InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

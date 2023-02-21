import React, { useState } from "react";
import "./Registration.css";
import {
  AiOutlineClose,
  AiOutlineUserAdd,
  AiOutlineUser,
} from "react-icons/ai";

function Registration() {
  const [classname, setClassname] = useState();

  function openRegForm() {
    setClassname("registration");
  }

  function openLoginForm() {
    setClassname("login");
  }

  function registerUser(e) {
    e.preventDefault();
  }

  function loginUser(e) {
    e.preventDefault();
  }

  return (
    <div className="registration">
      {classname === "registration" && (
        <div className="onclick">
          <div className="onclick-inner">
            <div className="onclick-inner__close">
              <AiOutlineClose
                id="close"
                onClick={() => {
                  setClassname("");
                }}
              />
            </div>
            <div className="onclick-inner__form">
              <h1>Registration</h1>
              <form action="">
                <input type="text" placeholder="User name..." />
                <input type="text" placeholder="Email..." />
                <input type="text" placeholder="Password..." />
                <input type="text" placeholder="Password..." />
                <button onClick={registerUser}>Done</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {classname === "login" && (
        <div className="onclick">
          <div className="onclick-inner">
            <div className="onclick-inner__close">
              <AiOutlineClose
                id="close"
                onClick={() => {
                  setClassname("");
                }}
              />
            </div>
            <div className="onclick-inner__form">
              <h1>login</h1>
              <form action="">
                <input type="text" placeholder="Email..." />
                <input type="text" placeholder="Password..." />
                <button onClick={loginUser}>Done</button>
              </form>
            </div>
          </div>
        </div>
      )}
      <h1>
        <em>REGISTRATION</em>
      </h1>
      <div className="registration-form">
        <div className="registration-form__box" onClick={openRegForm}>
          <div className="registration-form__box-icon">
            <AiOutlineUserAdd />
          </div>
          <div className="registration-form__box-title">
            <h2>REGISTRATION</h2>
          </div>
          <div className="registration-form__box-content">
            <p>
              If you are new on our web site click here to create new account
            </p>
          </div>
        </div>
        <div className="registration-form__box" onClick={openLoginForm}>
          <div className="registration-form__box-icon">
            <AiOutlineUser />
          </div>
          <div className="registration-form__box-title">
            <h2>LOG IN</h2>
          </div>
          <div className="registration-form__box-content">
            <p>If you had an account of our web site, pleace Log in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

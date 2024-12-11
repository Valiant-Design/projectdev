import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styled from 'styled-components';
import { FaqData } from "../data/FaqData";

const Faq = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const navigate = useNavigate();


  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section className="content-five" id="faq">
      <div className="faqs-container">
        <div className="faq-section">
          <h1 className="title">FAQs</h1>
          <p className="faqs-answer">
            Find answers to common questions about the platform, how to join, and what to expect.
          </p>
          {FaqData.map((faq, index) => (
            <div
              key={index}
              className={`faq ${activeFAQ === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="questions">
                <h4>{faq.question}</h4>
                <FontAwesomeIcon
                  icon={activeFAQ === index ? faMinus : faPlus}
                  className={`fa-icon ${activeFAQ === index ? "rotate" : ""}`}
                />
              </div>
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
          <div className="bottom-title">
            <h2>Still have questions?</h2>
            <p className="faqs-questions">Contact us for more information or assistance.</p>
            <a href="">
              {/* <button className="faqs-contact-btn">Contact Us</button> */}
              <StyledWrapper>
                {/* <button onClick={() => scrollTo(0, 0)navigate('/contact')}>Contact Us</button> */}
                <button
                  onClick={() => {scrollTo(0, 0); navigate('/contact');}}>      Contact Us
                </button>
              </StyledWrapper>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};



const StyledWrapper = styled.div`
  button {
    --color: #0077ff;
    font-family: inherit;
    display: inline-block;
    width: 6em;
    height: 2.6em;
    line-height: 2.5em;
    overflow: hidden;
    cursor: pointer;
    margin: 20px;
    font-size: 17px;
    z-index: 1;
    color: #17a2b8;
    border: 2px solid #17a2b8;
    border-radius: 6px;
    position: relative;
  }

  button::before {
    position: absolute;
    content: "";
    background: #17a2b8;
    width: 150px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
  }

  button:hover {
    color: white;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  button:hover::before {
    top: -30px;
    left: -30px;
  }`;




export default Faq;

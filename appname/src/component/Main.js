
import "./Main.css"
import React, { useRef } from "react";
import {
  FaShareAlt,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../asset/screen.png"


const testimonials = [
  {
    name: "Chukwudi M.",
    text: "The fastest payout I've experienced. Sold my USDT and had Naira in my bank before I even closed the tab.",
    image: "/images/user1.jpg",
  },
  {
    name: "Amina B.",
    text: "I trade large volumes daily. LareMay's liquidity and zero-fee structure on deposits make them my go-to OTC desk.",
    image: "/images/user2.jpg",
  },
  {
    name: "Tunde O.",
    text: "Simple interface, no confusing charts. Just pure, straightforward exchange. Highly recommended for beginners.",
    image: "/images/user3.jpg",
  },
  {
    name: "Grace I.",
    text: "Support team is phenomenal. Had a query about a network delay and they sorted it within 5 minutes.",
    image: "/images/user4.jpg",
  },
  {
    name: "David K.",
    text: "Very smooth experience. The transaction was completed quickly and everything was exactly as expected.",
    image: "/images/user5.jpg",
  },
  {
    name: "Sarah A.",
    text: "Excellent exchange platform. Easy to use and the support team responds very quickly.",
    image: "/images/user6.jpg",
  },
];


function Main () {


    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
        });
    };

    return(
        <div>
            <section className="hero-section">
                <div>
                    <div>
                        <div className="hero-status">
                            <p>Live Rates Available</p>
                        </div>
                        <div className="hero-text">
                            <h1>Your Simple Way to Buy & Sell Crypto.</h1>
                            <p>Buy and sell crypto securely with fast Naira payments. Simple, reliable, and built for you.</p>
                        </div>
                        
                        <div className="hero-stats">
                            <div className="hero-stats-container">

                                <div className="hero-stat-item">
                                <h2>1,000+</h2>
                                <p>TRADERS</p>
                                </div>

                                <div className="divider"></div>

                                <div className="hero-stat-item">
                                <h2>$35K+</h2>
                                <p>MONTHLY VOL</p>
                                </div>

                                <div className="divider"></div>

                                <div className="hero-stat-item fee-item">
                                <div className="verified-icon">
                                    ✓
                                </div>

                                <p>ZERO HIDDEN FEES</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-section">
                <div className="service-text">
                    <div className="service-h"><h1>Core <span>Services</span> designed for speed.</h1></div>
                    <div className="service-p"><p>Whether you are looking to enter or exit the market, our streamlined processes ensure you get the best rates instantly.</p></div>
                </div>
                <div className="services">
                    <div className="buy-service">
                        <div className="buy-service-icon">
                            <div className="buy-service-icons"><span><svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="rgb(0 48 146 / var(--tw-text-opacity, 1))"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg></span></div>
                            <div className="buy-service-icon-button"><div>Instant</div></div>
                        </div>
                        <div className="buy-service-header">
                            <h2>Buy Crypto</h2>
                            <p>Convert your Naira to digital assets securely. Direct bank transfers supported.</p>
                        </div>
                        <div className="buy-service-text">
                            <p><span><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#0a0b0b"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>Competitive exchange rates</p>
                            <p><span><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#0e0f0f"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>Zero deposit fees</p>
                            <p><span><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#090909"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>Multi-network support</p>
                        </div>
                        <div className="buy-service-button">
                            <button>Start Buying<span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></span></button>
                        </div>
                    </div> 
                    <div className="buy-service" style={{background:"blue",color:"white"}}>
                        <div className="buy-service-icon">
                            <div className="buy-service-icons" style={{background:"rgba(85, 136, 237, 0.516)",color:"white"}}><span><svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e8eaed"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg></span></div>
                            <div className="buy-service-icon-button" ><div style={{background:"rgba(85, 136, 237, 0.516)",color:"white"}}>Most Popular</div></div>
                        </div>
                        <div className="buy-service-header">
                            <h2>Buy Crypto</h2>
                            <p style={{color:"white"}}>Convert your Naira to digital assets securely. Direct bank transfers supported.</p>
                        </div>
                        <div className="buy-service-text" style={{color:"white"}}>
                            <p><span><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>Competitive exchange rates</p>
                            <p><span><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>Zero deposit fees</p>
                            <p><span><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>Multi-network support</p>
                        </div>
                        <div className="buy-service-button">
                            <button style={{color:"white"}}>Start Buying<span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></span></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="process-section">
                <div className="process-header">
                    <h5>THE PROCESS</h5>
                    <h2>How LareMay Works</h2>
                </div>
                <div>
                    <div className="process-format">
                        <div className="process-icon-container">
                            <div className="process-icon">
                                <div className="process-icon-animation">
                                    <div><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q440-607 440-640t-23.5-56.5Q393-720 360-720t-56.5 23.5Q280-673 280-640t23.5 56.5Q327-560 360-560t56.5-23.5ZM360-640Zm0 400Z"/></svg></span></div>
                                </div>
                                <div className="process-icon-number">1</div>
                            </div>
                            <div className="process-text">
                                <h3>Create Account</h3>
                                <p>Sign up and verify your identity in minutes.</p>
                            </div>
                        </div>
                        <div className="process-icon-container">
                            <div className="process-icon">
                                <div className="process-icon-animation">
                                    <div><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#080808"><path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg></span></div>
                                </div>
                                <div className="process-icon-number">2</div>
                            </div>
                            <div className="process-text">
                                <h3>Select Amount</h3>
                                <p>Choose what to buy/sell and lock in your rate.</p>
                            </div>
                        </div>
                        <div className="process-icon-container">
                            <div className="process-icon">
                                <div className="process-icon-animation">
                                    <div><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#040404"><path d="M480-40q-112 0-206-51T120-227v107H40v-240h240v80h-99q48 72 126.5 116T480-120q75 0 140.5-28.5t114-77q48.5-48.5 77-114T840-480h80q0 91-34.5 171T791-169q-60 60-140 94.5T480-40Zm-36-160v-52q-47-11-76.5-40.5T324-370l66-26q12 41 37.5 61.5T486-314q33 0 56.5-15.5T566-378q0-29-24.5-47T454-466q-59-21-86.5-50T340-592q0-41 28.5-74.5T446-710v-50h70v50q36 3 65.5 29t40.5 61l-64 26q-8-23-26-38.5T482-648q-35 0-53.5 15T410-592q0 26 23 41t83 35q72 26 96 61t24 77q0 29-10 51t-26.5 37.5Q583-274 561-264.5T514-250v50h-70ZM40-480q0-91 34.5-171T169-791q60-60 140-94.5T480-920q112 0 206 51t154 136v-107h80v240H680v-80h99q-48-72-126.5-116T480-840q-75 0-140.5 28.5t-114 77q-48.5 48.5-77 114T120-480H40Z"/></svg></span></div>
                                </div>
                                <div className="process-icon-number" style={{padding: "4px 10px 8px 10px"}}>3</div>
                            </div>
                            <div className="process-text">
                                <h3>Send Funds</h3>
                                <p>Transfer crypto or fiat to the provided details.</p>
                            </div>
                        </div>
                        <div className="process-icon-container">
                            <div className="process-icon">
                                <div className="process-icon-animation">
                                    <div><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#09eb11"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg></span></div>
                                </div>
                                <div className="process-icon-number" style={{padding: "4px 10px 9px 10px"}}>4</div>
                            </div>
                            <div className="process-text">
                                <h3>Receive Assets</h3>
                                <p>Get credited instantly upon confirmation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutus-section">
                <div className="aboutus-container">
                    <div className="aboutus-header">
                        <h2>Built on Trust. 
                            Engineered for Speed.</h2>
                        <p>We prioritize security without compromising on efficiency. Experience seamless transactions backed by enterprise-grade infrastructure.</p>
                    </div>
                    <div>
                        <div className="aboutus-icon">
                            <div className="aboutus-icons">
                                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z"/></svg></span>
                            </div>
                            <div className="aboutus-icon-text">
                                <h3>Direct Exchange</h3>
                                <p>No intermediaries. Trade directly with our deep liquidity pools for the best execution.</p>
                            </div>
                        </div>
                        <div className="aboutus-icon">
                            <div className="aboutus-icons">
                                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg></span>
                            </div>
                            <div className="aboutus-icon-text">
                                <h3>Fast Settlements</h3>
                                <p>Say goodbye to waiting. Payouts are triggered automatically the moment your transfer confirms.</p>
                            </div>
                        </div>
                        <div className="aboutus-icon">
                            <div className="aboutus-icons">
                                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Zm-80 160h160q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520v-40q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560v40q-17 0-28.5 11.5T360-480v120q0 17 11.5 28.5T400-320Zm40-200v-40q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560v40h-80Z"/></svg></span>
                            </div>
                            <div className="aboutus-icon-text">
                                <h3>Secure Transactions</h3>
                                <p>Bank-grade encryption, cold storage infrastructure, and rigorous compliance protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial-section">

                <div className="testimonial-header">
                    <div>

                    <h2>
                        Hear from our traders.
                    </h2>
                    <p className="testimonial-small-title">Thousands trust LareMay for their daily exchange needs.</p>
                    </div>

                    <div className="testimonial-buttons">
                    <button onClick={scrollLeft} aria-label="Previous testimonials">
                        ←
                    </button>

                    <button onClick={scrollRight} aria-label="Next testimonials">
                        →
                    </button>
                    </div>
                </div>

                <div
                    className="testimonial-slider"
                    ref={sliderRef}
                >
                    {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>

                        <div className="testimonial-user">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            onError={(e) => {
                            e.target.style.display = "none";
                            }}
                        />

                        <div className="user-placeholder">
                            {testimonial.name.charAt(0)}
                        </div>
                        </div>

                        <div className="stars">
                        ★ ★ ★ ★ ★
                        </div>

                        <p className="testimonial-text">
                        "{testimonial.text}"
                        </p>

                        <div className="testimonial-line"></div>

                        <h4>{testimonial.name}</h4>

                    </div>
                    ))}
                </div>

            </section>
            <section className="exchange-cta">
                <div className="cta-container">

                
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>

                <div className="exchange-content">
                    <h2>Ready to exchange your crypto?</h2>

                    <div className="exchange-buttons">
                    <button className="sell-btn">Sell Crypto</button>
                    <button className="buy-btn">Buy Crypto</button>
                    </div>
                </div>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-container">
                    <div>
                      <div>
                        <div className="footer-logo">
                            <img className="footer-img" src={logo} alt="" />
                            <span className="logo-text">
                                <strong>LAREMAY</strong>
                                <span className="logo-sub">Exchange</span>
                            </span>
                        </div> 
                        <p>
                            Secure, efficient, and reliable digital asset exchange for the
                            Nigerian market. Bridging traditional finance with the future.
                        </p>

                        <div className="social-links">
                            <a href="#share" aria-label="Share">
                            <FaShareAlt />
                            </a>

                            <a href="https://github.com" aria-label="Github">
                            <FaGithub />
                            </a>

                            <a href="mailto:info@laremayechange.com" aria-label="Email">
                            <FaEnvelope />
                            </a>
                        </div>
                      </div>  
                    </div>
                    <div className="footer-link">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#aml">About Us</a></li>
                            <li><a href="#aml">Careers</a></li>
                            <li><a href="#aml">Press</a></li>
                            <li><a href="#aml">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-link">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#aml">Buy Crypto</a></li>
                            <li><a href="#aml">Sell Crypto</a></li>
                        </ul>
                    </div>
                    <div className="footer-link">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#aml">Help Center</a></li>
                            <li><a href="#aml">Contact</a></li>
                            <li><a href="#aml">Security</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-botto">
                    <div>
                        <h5>© 2024 LareMay Exchange. All rights reserved. Licensed by CBN</h5>
                    </div>
                    <div className="footer-policy">
                       <ul>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                            <li><a href="#aml">AML Policy</a></li>
                        </ul> 
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Main
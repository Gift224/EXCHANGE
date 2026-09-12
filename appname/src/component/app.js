import React from "react";
import "./app.css";

function FX() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <TrustSection />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}


/* =========================
   HEADER
========================= */

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <span className="logo-mark">≋</span>
          <span>LareMay</span>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#buy">Buy Crypto</a>
          <a href="#sell">Sell Crypto</a>
          <a href="#business">Business</a>
          <a href="#about">About</a>
          <a href="#how">How It Works</a>
        </nav>

        <div className="header-actions">
          <button className="login-btn">Login</button>
          <button className="gold-btn small-btn">
            Get Started
          </button>

          <div className="profile-icon">●</div>
        </div>

      </div>
    </header>
  );
}


/* =========================
   HERO
========================= */

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-content">

          <div className="available">
            <span></span>
            LIVE RATES AVAILABLE
          </div>

          <h1>
            Your <em>Simple</em> Way to
            <br />
            Buy & Sell Crypto.
          </h1>

          <p>
            Buy and sell crypto securely with fast Naira payments.
            Simple, reliable, and built for you.
          </p>

          <Stats />

        </div>


        <ExchangeCard />

      </div>

    </section>
  );
}


/* =========================
   EXCHANGE CARD
========================= */

function ExchangeCard() {
  return (
    <div className="exchange-card">

      <div className="exchange-tabs">
        <button className="active-tab">
          Buy Crypto
        </button>

        <button>
          Sell Crypto
        </button>
      </div>


      <div className="input-group">
        <label>You Send</label>

        <div className="currency-input">
          <input
            type="text"
            value="1000"
            readOnly
          />

          <select defaultValue="USDT">
            <option>USDT</option>
            <option>BTC</option>
            <option>ETH</option>
          </select>
        </div>
      </div>


      <div className="exchange-rate">
        ↕ 1 USDT = ₦1,480
      </div>


      <div className="input-group">
        <label>You Receive</label>

        <div className="currency-input">
          <input
            type="text"
            value="1,480,000"
            readOnly
          />

          <select defaultValue="NGN">
            <option>NGN</option>
            <option>USD</option>
          </select>
        </div>
      </div>


      <button className="exchange-btn">
        Sell USDT Now
      </button>

      <p className="rate-note">
        Fee processing: <span>~2 mins</span>
      </p>

    </div>
  );
}


/* =========================
   STATS
========================= */

function Stats() {
  return (
    <div className="stats">

      <div className="stat">
        <strong>1,000+</strong>
        <span>TRADERS</span>
      </div>

      <div className="stat-divider"></div>

      <div className="stat">
        <strong>$35K+</strong>
        <span>MONTHLY VOL</span>
      </div>

      <div className="stat-divider"></div>

      <div className="stat">
        <div className="verified">✓</div>
        <span>ZERO HIDDEN FEES</span>
      </div>

    </div>
  );
}


/* =========================
   SERVICES
========================= */

function Services() {
  return (
    <section className="services-section" id="business">

      <div className="section-container">

        <div className="section-heading-row">

          <div>
            <h2>
              Core <em>Services</em> designed for
              <br />
              speed.
            </h2>
          </div>

          <p>
            Whether you're looking to enter or exit the market,
            our streamlined processes ensure you get the best
            rates instantly.
          </p>

        </div>


        <div className="service-grid">

          <ServiceCard
            type="buy"
            icon="▣"
            title="Buy Crypto"
            text="Convert your Naira to digital assets securely. Direct bank transfers supported."
            features={[
              "Competitive exchange rates",
              "Zero deposit fees",
              "Multi-network support"
            ]}
          />

          <ServiceCard
            type="sell"
            icon="▣"
            title="Sell Crypto"
            text="Off-ramp your crypto to fiat effortlessly. Get paid directly into your Nigerian bank account."
            features={[
              "Automated payouts",
              "Fast liquidity guaranteed",
              "24/7 Processing"
            ]}
          />

        </div>

      </div>

    </section>
  );
}


function ServiceCard({
  type,
  icon,
  title,
  text,
  features
}) {
  return (
    <div className={`service-card ${type}`}>

      <div className="service-top">
        <div className="service-icon">
          {icon}
        </div>

        <span className="service-badge">
          {type === "buy" ? "Instant" : "Most Popular"}
        </span>
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <span>✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <a href={type === "buy" ? "#buy" : "#sell"}>
        {type === "buy" ? "Start Buying" : "Start Selling"} →
      </a>

    </div>
  );
}


/* =========================
   HOW IT WORKS
========================= */

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Account",
      text: "Sign up and verify your identity in minutes."
    },
    {
      number: "2",
      title: "Select Amount",
      text: "Choose what to buy or sell and lock in your rate."
    },
    {
      number: "3",
      title: "Send Funds",
      text: "Transfer crypto or fiat to the provided details."
    },
    {
      number: "4",
      title: "Receive Assets",
      text: "Get credited instantly upon confirmation."
    }
  ];

  return (
    <section className="how-section" id="how">

      <div className="how-header">
        <span>THE PROCESS</span>

        <h2>
          How LareMay Works
        </h2>
      </div>


      <div className="steps">

        {steps.map((step) => (
          <div className="step" key={step.number}>

            <div className="step-circle">
              <span>{step.number}</span>
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}


/* =========================
   TRUST
========================= */

function TrustSection() {
  const benefits = [
    {
      icon: "◆",
      title: "Direct Exchange",
      text: "No intermediaries. Trade directly with our deep liquidity pools for the best execution."
    },
    {
      icon: "↯",
      title: "Fast Settlements",
      text: "Say goodbye to waiting. Payouts are triggered automatically the moment your transfer confirms."
    },
    {
      icon: "♙",
      title: "Secure Transactions",
      text: "Bank-grade encryption, strong infrastructure, and rigorous compliance protocols."
    }
  ];

  return (
    <section className="trust-section">

      <div className="trust-container">

        <div className="trust-title">

          <h2>
            Built on Trust.
            <br />
            Engineered for Speed.
          </h2>

          <p>
            We prioritize security without compromising on efficiency.
            Experience seamless transactions backed by enterprise-grade
            infrastructure.
          </p>

        </div>


        <div className="trust-features">

          {benefits.map((benefit, index) => (

            <div className="trust-item" key={index}>

              <div className="trust-icon">
                {benefit.icon}
              </div>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================
   TESTIMONIALS
========================= */

function Testimonials() {

  const reviews = [
    {
      name: "Amaka R.",
      text: "I made my first transaction within minutes. The process was incredibly simple."
    },
    {
      name: "Aisha R.",
      text: "I trade large volumes daily. LareMay's liquidity and response time are impressive."
    },
    {
      name: "Tunde O.",
      text: "Simple interface, no confusing charges. Everything worked exactly as expected."
    },
    {
      name: "Grace L.",
      text: "Support team was responsive and the transaction completed faster than expected."
    }
  ];

  return (
    <section className="testimonials">

      <div className="testimonials-header">

        <h2>
          Hear from our traders.
        </h2>

        <p>
          Thousands trust LareMay for their exchange needs.
        </p>

      </div>


      <div className="review-grid">

        {reviews.map((review, index) => (

          <div className="review-card" key={index}>

            <div className="avatar">
              ●
            </div>

            <div className="stars">
              ☆ ☆ ☆ ☆ ☆
            </div>

            <p>
              "{review.text}"
            </p>

            <span>
              {review.name}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}


/* =========================
   CTA
========================= */

function CTA() {
  return (
    <section className="cta-section">

      <div className="cta-content">

        <h2>
          Ready to exchange your crypto?
        </h2>

        <div className="cta-buttons">

          <button className="gold-btn">
            Sell Crypto
          </button>

          <button className="white-btn">
            Buy Crypto
          </button>

        </div>

      </div>

    </section>
  );
}


/* =========================
   FOOTER
========================= */

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="logo">
            <span className="logo-mark">≋</span>
            <span>LareMay</span>
          </div>

          <p>
            Secure, efficient, and reliable digital asset exchange
            for the Nigerian market. Bridging traditional finance
            with the future.
          </p>

          <div className="socials">
            <span>◉</span>
            <span>𝕏</span>
            <span>◎</span>
          </div>

        </div>


        <div className="footer-column">

          <h4>Company</h4>

          <a href="#about">About Us</a>
          <a href="#careers">Careers</a>
          <a href="#press">Press</a>
          <a href="#blog">Blog</a>

        </div>


        <div className="footer-column">

          <h4>Services</h4>

          <a href="#buy">Buy Crypto</a>
          <a href="#sell">Sell Crypto</a>
          <a href="#otc">OTC Desk</a>
          <a href="#limits">Limits</a>

        </div>


        <div className="footer-column">

          <h4>Support</h4>

          <a href="#help">Help Center</a>
          <a href="#contact">Contact</a>
          <a href="#security">Security</a>
          <a href="#terms">Limits</a>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2024 LareMay Exchange. All rights reserved.
        </span>

        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#aml">AML Policy</a>
        </div>

      </div>

    </footer>
  );
}


export default FX;
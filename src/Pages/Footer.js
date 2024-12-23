import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Navigation Links */}
      <div style={styles.navLinks}>
        <a href="#home" style={styles.link}>
          Home
        </a>
        <a href="#about" style={styles.link}>
          About
        </a>
        <a href="#services" style={styles.link}>
          Services
        </a>
        <a href="#skills" style={styles.link}>
          Skill
        </a>
        <a href="#projects" style={styles.link}>
          Projects
        </a>
        <a href="#contact" style={styles.link}>
          Contact
        </a>
      </div>

      {/* Social Icons */}
      <div style={styles.socialIcons}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <i className="fab fa-github" style={styles.icon}></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <i className="fab fa-linkedin" style={styles.icon}></i>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <i className="fab fa-youtube" style={styles.icon}></i>
        </a>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>Copyright © All rights reserved – | 2024</p>
        <p>Built with love by Ashfaque Ahmed</p>
      </div>
    </footer>
  );
};

// Inline styles for the component
const styles = {
  footer: {
    backgroundColor: "#000", // Black background
    color: "#fff", // White text
    padding: "20px 0",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  navLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  iconLink: {
    color: "#fff",
    fontSize: "20px",
    textDecoration: "none",
  },
  icon: {
    fontSize: "24px",
  },
  copyright: {
    fontSize: "14px",
    lineHeight: "1.5",
  },
};

export default Footer;

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import styles from "../StyleSheet/Services.module.css";
import Modal from "./Modal";

const Services = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedCard, setSelectedCard] = useState(null); // State for selected card

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      cardsRef.current,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2, duration: 1 }
    );
  }, []);

  // Function to open modal
  const handleReadMore = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedCard(null);
  };

  const cardData = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user interfaces is my passion. I focus on creating visually appealing, user-friendly, and accessible designs.",
      icon: "🎨",
    },
    {
      title: "Web Development",
      description: "I specialize in building custom websites tailored to your unique needs, from small business sites to large-scale web applications.",
      icon: "💻",
    },
    {
      title: "API Integration",
      description: "Integrating your website with third-party services and APIs can greatly enhance its functionality and user experience.",
      icon: "🔗",
    },
  ];

  return (
    <section
      id="services"
      style={{ height: "auto", backgroundColor: "#121212", color: "#fff" }}
      className={styles.servicesSection}
    >
      <div className="container">
        <h1 ref={headingRef} className={styles.servicesHeading}>
          Services
        </h1>
        <p className={styles.servicesSubheading}>
          I transform your innovative ideas into distinctive, high-quality web projects that inspire you and captivate your customers.
        </p>

        <div className={styles.servicesCardsGrid}>
          {cardData.map((card, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <Card
                title={card.title}
                description={card.description}
                buttonLabel="Read More"
                icon={card.icon}
                onClick={() => handleReadMore(index)} // Pass index to open modal
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard !== null && (
        <Modal
          title={cardData[selectedCard].title}
          description={cardData[selectedCard].description}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Services;

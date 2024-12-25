import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Card from "./Card";
// import '../StyleSheet/Style.css'
import "../StyleSheet/Services.css"; // Import the external CSS file



const Services = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP animation for the heading sliding in from the left
    gsap.fromTo(
      headingRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    // GSAP animation for cards sliding in from the right
    gsap.fromTo(
      cardsRef.current,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2, duration: 1 }
    );
  }, []);

  return (
    <section
      id="services"
      style={{ height: "100vh", backgroundColor: "#121212", color: "#fff" }}
      className="services-section"
    >
      <div className="container">
        <h1 ref={headingRef} className="services-heading">
          Services
        </h1>
        <p className="services-subheading">
          I transform your innovative ideas into distinctive, high-quality web
          projects that inspire you and captivate your customers.
        </p>

        <div className="services-cards-grid services-card ">
          <div ref={(el) => (cardsRef.current[0] = el)}>
            <Card
              title="UI/UX Design"
              description="Crafting intuitive and engaging user interfaces is my passion. I focus on creating visually appealing, user-friendly, and accessible designs."
              buttonLabel="Read More"
              icon="🎨"
            />
          </div>
          <div ref={(el) => (cardsRef.current[1] = el)}>
            <Card
              title="Web Development"
              description="I specialize in building custom websites tailored to your unique needs, from small business sites to large-scale web applications."
              buttonLabel="Read More"
              icon="💻"
            />
          </div>
          <div ref={(el) => (cardsRef.current[2] = el)}>
            <Card
              title="API Integration"
              description="Integrating your website with third-party services and APIs can greatly enhance its functionality and user experience."
              buttonLabel="Read More"
              icon="🔗"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;














// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import Card from "./Card";

// const Services = () => {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     // GSAP animation for cards sliding in from the right
//     gsap.fromTo(
//       cardsRef.current,
//       { x: 300, opacity: 0 },
//       { x: 0, opacity: 1, stagger: 0.2, duration: 1 }
//     );
//   }, []);

//   return (
//     <section
//       id="services"
//       style={{ height: "100vh", backgroundColor: "#121212", color: "#fff" }}
//       className="services-section"
//     >
//       <div className="container">
//         <h1 className="services-heading">Services</h1>
//         <p className="services-subheading">
//           I transform your innovative ideas into distinctive, high-quality web
//           projects that inspire you and captivate your customers.
//         </p>

//         <div className="cards-grid">
//           <div ref={(el) => (cardsRef.current[0] = el)}>
//             <Card
//               title="UI/UX Design"
//               description="Crafting intuitive and engaging user interfaces is my passion. I focus on creating visually appealing, user-friendly, and accessible designs."
//               buttonLabel="Read More"
//               icon="🎨"
//             />
//           </div>
//           <div ref={(el) => (cardsRef.current[1] = el)}>
//             <Card
//               title="Web Development"
//               description="I specialize in building custom websites tailored to your unique needs, from small business sites to large-scale web applications."
//               buttonLabel="Read More"
//               icon="💻"
//             />
//           </div>
//           <div ref={(el) => (cardsRef.current[2] = el)}>
//             <Card
//               title="API Integration"
//               description="Integrating your website with third-party services and APIs can greatly enhance its functionality and user experience."
//               buttonLabel="Read More"
//               icon="🔗"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;






// // import React, { useState, useEffect, useRef } from 'react';
// // import Card from './Card';

// // const Services = () => {
// //     const [isVisible, setIsVisible] = useState(false);
// //     const headingRef = useRef(null);

// //     useEffect(() => {
// //         const observer = new IntersectionObserver(
// //             (entries) => {
// //                 entries.forEach((entry) => {
// //                     if (entry.isIntersecting) {
// //                         setIsVisible(true);
// //                         observer.disconnect(); // Animation only once
// //                     }
// //                 });
// //             },
// //             { threshold: 0.5 }
// //         );

// //         if (headingRef.current) {
// //             observer.observe(headingRef.current);
// //         }

// //         return () => observer.disconnect();
// //     }, []);

// //     return (
// //         <div>
// //             <h2
// //                 ref={headingRef}
// //                 style={{
// //                     fontSize: '60px',
// //                     color: 'white',
// //                     fontWeight: 'bold',
// //                     textAlign: 'center',
// //                     transform: isVisible ? 'translateX(0px)' : 'translateX(-100px)',
// //                     opacity: isVisible ? 1 : 0,
// //                     transition: 'all 0.5s ease-in-out',
// //                 }}
// //             >
// //                 Services
// //             </h2>

// //             <h3 className="text-center">
// //                 I transform your innovative ideas in distinctive, high-quality web projects that inspire you and captivate your customers.
// //             </h3>
// //             <Card />
// //         </div>
// //     );
// // };

// // export default Services;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../StyleSheet/About.css"; // Import the external CSS file

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      rotate: 0,
      duration: 0.2,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <section id="about">
      <div className="about-container">
        <div ref={imageRef} className="about-image">
          <img src="/image.jpg" alt="Profile" />
        </div>
        <div ref={textRef} className="about-text">
          <h2>About Me</h2>
          <p>
            I am <span className="highlight">Ashfaque Ahmed</span>, a
            self-taught full-stack developer with a strong passion for coding
            and a dedication to continuous learning. I have gained my skills
            through various online platforms, including{" "}
            <span className="highlight">freeCodeCamp</span>,{" "}
            <span className="highlight">Coursera</span>, and{" "}
            <span className="highlight">MDN Web Docs</span>.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;








// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // GSAP ScrollTrigger ko register karen
// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     // Image rotation animation on scroll
//     gsap.to(imageRef.current, {
//       rotate: 30, // Reduced rotation (was 150)
//       duration: 0.2, // Animation duration
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top center", // Animation start position
//         end: "bottom center", // Animation end position
//         scrub: true, // Smooth animation on scroll
//       },
//     });

//     // Text animation
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top center",
//         },
//       }
//     );
//   }, []);

//   return (
//     <section id="about">
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "row",
//         padding: "50px",
//         backgroundColor: "#202020",
//         color: "#c9d1d9",
//         minHeight: "100vh",
//       }}
//     >
//       <div
//         ref={imageRef}
//         style={{
//           border: "2px solid #58a6ff",
//           borderRadius: "15px",
//           overflow: "hidden",
//           display: "inline-block",
//         }}
//       >
//         <img
//           src="/image.jpg"
//           alt="Profile"
//           style={{ width: "250px", height: "250px" }}
//         />
//       </div>
//       <div ref={textRef} style={{ marginLeft: "50px", maxWidth: "600px" }}> {/* Increased margin */}
//         <h2 style={{ fontSize: "40px", color: "#58a6ff", fontWeight: "bold" }}>
//           About Me
//         </h2>
//         <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
//           I am{" "}
//           <span style={{ color: "#58a6ff", fontWeight: "bold" }}>
//             Ashfaque Ahmed
//           </span>
//           , a self-taught full-stack developer with a strong passion for coding
//           and a dedication to continuous learning. I have gained my skills
//           through various online platforms, including{" "}
//           <span style={{ color: "#58a6ff" }}>freeCodeCamp</span>,{" "}
//           <span style={{ color: "#58a6ff" }}>Coursera</span>, and{" "}
//           <span style={{ color: "#58a6ff" }}>MDN Web Docs</span>.
//         </p>
//         <button
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#58a6ff",
//             color: "#0d1117",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontWeight: "bold",
//           }}
//         >
//           Read More
//         </button>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default About;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../StyleSheet/About.css";

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const expandedContentRef = useRef(null);

  const [expanded, setExpanded] = useState(false);

  // Handle "Read More" click
  const handleReadMore = () => {
    gsap.to([imageRef.current, textRef.current], {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => setExpanded(true),
    });
  };




  const handleShowLess = () => {
    if (expandedContentRef.current) {
      gsap.to(expandedContentRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          setExpanded(false);
  
          // Reset image visibility explicitly
          gsap.set(imageRef.current, { opacity: 1, scale: 1 });  // Ensure image is visible
  
          // Animate About Me content and image back in
          if (textRef.current) {
            gsap.fromTo(
              textRef.current,
              { opacity: 0, scale: 0.8 },
              { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
            );
          }
        },
      });
    }
  };
      


  // Handle "Show Less" click
  // const handleShowLess = () => {
  //   if (expandedContentRef.current) {  // Check if ref is valid
  //     gsap.to(expandedContentRef.current, {
  //       opacity: 0,
  //       scale: 0.8,
  //       duration: 0.8,
  //       ease: "power2.out",
  //       onComplete: () => {
  //         setExpanded(false);
  
  //         // Animate About Me content back in
  //         if (imageRef.current && textRef.current) {  // Check for validity of refs
  //           gsap.fromTo(
  //             [imageRef.current, textRef.current],
  //             { opacity: 0, scale: 0.8 },
  //             { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
  //           );
  //         }
  //       },
  //     });
  //   }
  // };
  

  useEffect(() => {
    if (expanded && expandedContentRef.current) {
      gsap.fromTo(
        expandedContentRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [expanded]);  // Dependency on `expanded` state
  
  return (
    <section id="about">
      <div className="about-container">
        {!expanded ? (
          <>
          
            <div ref={imageRef} className="about-image">
              <img src="/Images/image.jpg" alt="Profile" />
            </div>
            <div ref={textRef} className="about-text">
              <h2>About Me</h2>
              <p>
                I am Ashfaque Ahmed, a self-taught full-stack developer with an
                unwavering passion for coding and a commitment to continuous
                learning.
              </p>
              <button onClick={handleReadMore}>Read More</button>
            </div>
          </>
        ) : (
          <div
            ref={expandedContentRef}
            className="about-expanded-text d-flex justify-content-center align-items-center flex-column text-center"
          >
            <h2>About Me</h2>
            <p>
              Over the years, I have honed my skills in various technologies,
              including React, Node.js, and MongoDB. My projects reflect a
              dedication to creating efficient and visually appealing
              applications that solve real-world problems.
            </p>
            <button className="bt btn-primary" onClick={handleShowLess}>Show Less</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;






// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../StyleSheet/About.css";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);
//   const [expanded, setExpanded] = useState(false);

//   const handleReadMore = () => {
//     gsap.to([imageRef.current, textRef.current], {
//       opacity: 0, // Fade out effect
//       scale: 0.8, // Slightly shrink for smooth transition
//       duration: 1,
//       ease: "power2.out",
//       onComplete: () => {
//         setExpanded(true); // Show expanded content
//       },
//     });
//   };

//   useEffect(() => {
//     if (expanded) {
//       const expandedText = document.querySelector(".about-expanded-text");
//       gsap.to(expandedText, {
//         opacity: 1,
//         scale: 1, // Bring back to normal size
//         duration: 1,
//         ease: "power2.out",
//       });
//     }
//   }, [expanded]);

//   return (
//     <section id="about">
//       <div className="about-container">
//         {!expanded ? (
//           <>
//             <div ref={imageRef} className="about-image">
//               <img src="/images/image.jpg" alt="Profile" />
//             </div>
//             <div ref={textRef} className="about-text">
//               <h2>About Me</h2>
//               <p>
//                 I am Ashfaque Ahmed, a self-taught full-stack developer with an
//                 unwavering passion for coding and a commitment to continuous
//                 learning.
//               </p>
//               <button onClick={handleReadMore}>Read More</button>
//             </div>
//           </>
//         ) : (
//           <div className="about-expanded-text">
//             <h2>More About Me</h2>
//             <p>
//               Over the years, I have honed my skills in various technologies,
//               including React, Node.js, and MongoDB. My projects reflect a
//               dedication to creating efficient and visually appealing
//               applications that solve real-world problems.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default About;













// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../StyleSheet/About.css";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);
//   const [expanded, setExpanded] = useState(false);


//   const handleReadMore = () => {
//     console.log("Animation Start");
//     gsap.to([imageRef.current, textRef.current], {
//       x: -300,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//       onComplete: () => {
//         console.log("Animation Complete");
//         setExpanded((prevExpanded) => {
//           console.log("Previous State:", prevExpanded);
//           return true;
//         });
//       },
//     });
//   };


//   useEffect(() => {
//     if (expanded) {
//       console.log(
//         "Expanded Content DOM Node:",
//         document.querySelector(".about-expanded-text")
//       );
//     }
//   }, [expanded]);



//   return (
//     <section id="about">
//       <div className="about-container">
//         {!expanded ? (
//           <>
//             <div ref={imageRef} className="about-image">
//               <img src="/images/image.jpg" alt="Profile" />
//             </div>
//             <div ref={textRef} className="about-text">
//               <h2>About Me</h2>
//               <p>
//                 I am Ashfaque Ahmed, a self-taught full-stack developer with an
//                 unwavering passion for coding and a commitment to continuous
//                 learning.
//               </p>
//               <button onClick={handleReadMore}>Read More</button>
//             </div>
//           </>
//         ) : (
//           <div className="about-expanded-text d-flex justify-content-center align-items-center flex-column text-center">
//             <h2>More About Me</h2>
//             <p>
//               Over the years, I have honed my skills in various technologies,
//               including React, Node.js, and MongoDB. My projects reflect a
//               dedication to creating efficient and visually appealing
//               applications that solve real-world problems.
//             </p>
//           </div>
//         )}


//       </div>
//     </section>
//   );
// };

// export default About;








  // useEffect(() => {
  //   // Initial animations
  //   if (!expanded) {
  //     gsap.fromTo(
  //       imageRef.current,
  //       { rotate: -90, x: -200, opacity: 0 },
  //       {
  //         rotate: 0,
  //         x: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: imageRef.current,
  //           start: "top center+=100",
  //         },
  //       }
  //     );

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
  //   }
  // }, [expanded]);



  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       imageRef.current,
  //       { rotate: -90, x: -200, opacity: 0 },
  //       { rotate: 0, x: 0, opacity: 1, duration: 1, ease: "power2.out" }
  //     );
  //   });
  //   return () => ctx.revert(); // کلین اپ
  // }, []);




  // const handleReadMore = () => {
  //   setExpanded(true); // Skip animation
  // };











// import React, { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom"; // Import for createPortal
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../StyleSheet/About.css";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     if (!expanded) {
//       gsap.fromTo(
//         imageRef.current,
//         { rotate: -90, x: -200, opacity: 0 },
//         {
//           rotate: 0,
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: imageRef.current,
//             start: "top center+=100",
//           },
//         }
//       );

//       gsap.fromTo(
//         textRef.current,
//         { opacity: 0, x: -50 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: textRef.current,
//             start: "top center",
//           },
//         }
//       );
//     }
//   }, [expanded]);


//   const handleReadMore = () => {
//     console.log("Animation Start");
//     gsap.to([imageRef.current, textRef.current], {
//       x: -300,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//       onComplete: () => {
//         console.log("Animation Complete");
//         setExpanded((prevExpanded) => {
//           console.log("Previous State:", prevExpanded);
//           return true;
//         });
//       },
//     });
//   };


//   // const handleReadMore = () => {
//   //   console.log("Animation Start");
//   //   gsap.to([imageRef.current, textRef.current], {
//   //     x: -300,
//   //     opacity: 0,
//   //     duration: 1,
//   //     ease: "power2.out",
//   //     onComplete: () => {
//   //       console.log("Animation Complete");
//   //       setExpanded(true);
//   //     },
//   //   });
//   // };

//   const AboutExpandedContent = () => (
//     <div className="about-expanded-text">
//       <h2>More About Me</h2>
//       <p>
//         Over the years, I have honed my skills in various technologies,
//         including React, Node.js, and MongoDB. My projects reflect a dedication
//         to creating efficient and visually appealing applications that solve
//         real-world problems.
//       </p>
//     </div>
//   );

//   return (
//     <section id="about">
//       <div className="about-container">
//         {!expanded ? (
//           <>
//             <div ref={imageRef} className="about-image">
//               <img src="/images/image.jpg" alt="Profile" />
//             </div>
//             <div ref={textRef} className="about-text">
//               <h2>About Me</h2>
//               <p>
//                 I am Ashfaque Ahmed, a self-taught full-stack developer with an
//                 unwavering passion for coding and a commitment to continuous
//                 learning.
//               </p>
//               <button onClick={handleReadMore}>Read More</button>
//             </div>
//           </>
//         ) : (
//           ReactDOM.createPortal(
//             <AboutExpandedContent />,
//             document.getElementById("portal-root")
//           )
//         )}
//       </div>
//     </section>
//   );
// };

// export default About;












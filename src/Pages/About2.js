import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../StyleSheet/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

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




  const handleReadMore = () => {
    console.log("Animation Start");
    gsap.to([imageRef.current, textRef.current], {
      x: -300,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        console.log("Animation Complete");
        setExpanded((prevExpanded) => {
          console.log("Previous State:", prevExpanded);
          return true;
        });
      },
    });
  };


  useEffect(() => {
    if (expanded) {
      console.log(
        "Expanded Content DOM Node:",
        document.querySelector(".about-expanded-text")
      );
    }
  }, [expanded]);


  // const handleReadMore = () => {
  //   // Animate existing content out and show new content
  //   gsap.to([imageRef.current, textRef.current], {
  //     x: -300,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power2.out",
  //     onComplete: () => {
  //       setExpanded(true); // Show expanded content
  //     },
  //   });
  // };



  return (
    <section id="about">
      <div className="about-container">
        {!expanded ? (
          <>
            <div ref={imageRef} className="about-image">
              <img src="/images/image.jpg" alt="Profile" />
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
          <div className="about-expanded-text">
            <h2>More About Me</h2>
            <p>
              Over the years, I have honed my skills in various technologies,
              including React, Node.js, and MongoDB. My projects reflect a
              dedication to creating efficient and visually appealing
              applications that solve real-world problems.
            </p>
          </div>
        )}

        {/* ReactDOM.createPortal(
        <div className="about-expanded-text">
          <h2>More About Me</h2>
          <p>
            Over the years, I have honed my skills in various technologies,
            including React, Node.js, and MongoDB.
          </p>
          <button onClick={() => setExpanded(false)}>Close</button>
        </div>,
        document.getElementById("portal-root")
        ); */}

      </div>
    </section>
  );
};

export default About;


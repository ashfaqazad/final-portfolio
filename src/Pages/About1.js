// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../StyleSheet/About.css"; // Import the external CSS file

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     // Animate the image
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
//           onEnter: () => console.log("Image animation triggered!"),
//         },
//       }
//     );

//     // Animate the text
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

//   const handleReadMore = () => {
//     const timeline = gsap.timeline();

//     // Slide out current content
//     timeline
//       .to(imageRef.current, {
//         x: "100%",
//         duration: 1,
//         ease: "power2.inOut",
//       })
//       .to(
//         textRef.current,
//         {
//           x: "100%",
//           duration: 1,
//           ease: "power2.inOut",
//         },
//         "-=1"
//       )
//       .add(() => setShowMore(true)); // Show extended content after animation
//   };

//   return (
//     <section id="about">
//       <div className="about-container">
//         {!showMore ? (
//           <>
//             <div ref={imageRef} className="about-image">
//               <img src="/images/image.jpg" alt="Profile" />
//             </div>
//             <div ref={textRef} className="about-text">
//               <h2>About Me</h2>
//               <p>
//                 I am Ashfaque Ahmed, a self-taught full-stack developer with an
//                 unwavering passion for coding and a commitment to continuous
//                 learning. My journey in web development began with a curiosity
//                 to build dynamic and user-friendly web applications, which soon
//                 transformed into a dedicated pursuit of excellence in the field.
//               </p>
//               <button onClick={handleReadMore}>Read More</button>
//             </div>
//           </>
//         ) : (
//           <div className="about-expanded">
//             <h2>More About Me</h2>
//             <p>
//               My web development journey includes training and self-learning
//               through platforms like YouTube, where I explored Meta's tutorials
//               and insightful videos. From mastering React for frontend to Node.js
//               and MongoDB for backend development, I have honed my skills with
//               persistence and passion. Every step in this field is an opportunity
//               for growth and innovation, and I am excited to continue building
//               impactful projects.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default About;













import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../StyleSheet/About.css"; // Import the external CSS file

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate the image
    gsap.fromTo(
      imageRef.current,
      { rotate: -90, x: -200, opacity: 0 },
      {
        rotate: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center+=100",
          onEnter: () => console.log("Image animation triggered!"),
        },
      }
    );

    // Animate the text
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
          <img src="/images/image.jpg" alt="Profile" />
        </div>
        <div ref={textRef} className="about-text">
          <h2>About Me</h2>
          {/* <p>
            I am <span className="highlight">Ashfaque Ahmed</span>, a
            self-taught full-stack developer with a strong passion for coding
            and a dedication to continuous learning. I have gained my skills
            through various online platforms, including{" "}
            <span className="highlight">freeCodeCamp</span>,{" "}
            <span className="highlight">Coursera</span>, and{" "}
            <span className="highlight">MDN Web Docs</span>.
          </p> */}
          <p>I am Ashfaque Ahmed, a self-taught full-stack developer with an unwavering passion for coding and a commitment to continuous learning. My journey in web development began with a curiosity to build dynamic and user-friendly web applications, which soon transformed into a dedicated pursuit of excellence in the field.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;



// I have honed my skills through various online platforms such as freeCodeCamp, Coursera, and MDN Web Docs, where I mastered core concepts of front-end and back-end development. Additionally, I have leveraged resources like YouTube tutorials, exploring insightful content from channels that simplify complex topics. Notably, I have benefited from learning through training sessions and tutorials provided by Meta, which deepened my understanding of modern development practices.

// Through countless hours of self-learning and practical experimentation, I have developed a strong foundation in technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB. Each project I work on reflects my growth and adaptability, as I continue to integrate best practices and cutting-edge tools into my work.

// Beyond coding, I am driven by the belief that consistent learning and a growth mindset are the keys to success. My journey is a testament to the power of self-motivation and the vast opportunities available in today’s digital landscape.





// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../StyleSheet/About.css"; // Import the external CSS file

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);

//       // gsap.fromTo(
//       //   card,
//       //   { rotate: -90, x: -200, opacity: 0 },
//       //   {
//       //     rotate: 0,
//       //     x: 0,
//       //     opacity: 1,
//       //     duration: 1,
//       //     ease: "power2.out",
//       //     scrollTrigger: {
//       //       trigger: card,
//       //       start: "top center+=100",
//       //       delay: index * 0.2,
//       //       onEnter: () => console.log(`Card ${index + 1} triggered!`),  // Debug
//       //     },
//       //   }
//       // );
//   useEffect(() => {
//     gsap.to(imageRef.current, {
//       rotate: 0,
//       duration: 0.2,
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

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
//       <div className="about-container">
//         <div ref={imageRef} className="about-image">
//           <img src="/images/image.jpg" alt="Profile" />
//         </div>
//         <div ref={textRef} className="about-text">
//           <h2>About Me</h2>
//           <p>
//             I am <span className="highlight">Ashfaque Ahmed</span>, a
//             self-taught full-stack developer with a strong passion for coding
//             and a dedication to continuous learning. I have gained my skills
//             through various online platforms, including{" "}
//             <span className="highlight">freeCodeCamp</span>,{" "}
//             <span className="highlight">Coursera</span>, and{" "}
//             <span className="highlight">MDN Web Docs</span>.
//           </p>
//           <button>Read More</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;











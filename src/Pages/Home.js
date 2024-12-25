import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../StyleSheet/Home.css"; // Import the external CSS file

const Home = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const stats = [
    { label: "Years Of Experience", endValue: 3 },
    { label: "Completed Projects", endValue: 6 },
    { label: "Technologies Mastered", endValue: 5 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });

    // Animate image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, rotate: -360 },
      { opacity: 1, rotate: 0 }
    );

    // Animate text
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0 },
      "-=0.5"
    );

    // Numbers animation (only runs once)
    stats.forEach((stat, index) => {
      gsap.to({}, {
        duration: 2,
        ease: "power2.out",
        onUpdate: function () {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(
              Math.ceil(this.progress() * stat.endValue),
              stat.endValue
            );
            return newCounts;
          });
        },
      });
    });
  }, []); // Empty dependency array ensures animations run only once

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div ref={textRef} className="home-text">
          <h2>
            Hello There! I'm <span className="highlight">Ashfaque Ahmed</span>
          </h2>
          <h1>I'M A WEB DEVELOPER</h1>
          <p>
            I build intuitive web applications, turning complex requirements
            into seamless user experiences.
          </p>
          <div className="home-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h1>{counts[index]}+</h1>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="home-buttons">
            <button className="btn-primary">CV & Credentials</button>
            <button className="btn-secondary">Set Cursor</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;















// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// const Home = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);
//   const stats = [
//     { label: "Years Of Experience", endValue: 3 },
//     { label: "Completed Projects", endValue: 20 },
//     { label: "Technologies Mastered", endValue: 5 },
//   ];

//   const [counts, setCounts] = useState(stats.map(() => 0));

//   useEffect(() => {
//     const tl = gsap.timeline({
//       defaults: { duration: 1, ease: "power2.out" },
//     });

//     // Animate image
//     tl.fromTo(
//       imageRef.current,
//       { opacity: 0, rotate: -360 },
//       { opacity: 1, rotate: 0 }
//     );

//     // Animate text
//     tl.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0 },
//       "-=0.5"
//     );

//     // Numbers animation (only runs once)
//     stats.forEach((stat, index) => {
//       gsap.to({}, {
//         duration: 2,
//         ease: "power2.out",
//         onUpdate: function () {
//           setCounts((prevCounts) => {
//             const newCounts = [...prevCounts];
//             newCounts[index] = Math.min(
//               Math.ceil(this.progress() * stat.endValue),
//               stat.endValue
//             );
//             return newCounts;
//           });
//         },
//       });
//     });
//   }, []); // Empty dependency array ensures animations run only once

//   return (
//     <>
//       <section id="home" style={{ height: "100vh" }}>
//       <div
//   style={{
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center", // Center horizontally and vertically
//     flexDirection: "row",
//     padding: "50px",
//     backgroundColor: "#0d1117",
//     color: "#c9d1d9",
//     minHeight: "100vh",
//   }}
// >
//   <div ref={textRef} style={{ margin: "0 auto", maxWidth: "600px" }}>
//     <h2
//       style={{
//         fontSize: "40px",
//         color: "#58a6ff",
//         fontWeight: "bold",
//       }}
//     >
//       Hello There! I'm{" "}
//       <span style={{ color: "#c778dd" }}>Ashfaque Ahmed</span>
//     </h2>
//     <h1
//       style={{
//         fontSize: "50px",
//         color: "#ffffff",
//         fontWeight: "bold",
//       }}
//     >
//       I'M A WEB DEVELOPER
//     </h1>
//     <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
//       I build intuitive web applications, turning complex requirements into
//       seamless user experiences.
//     </p>
//     <div
//       style={{
//         display: "flex",
//         gap: "30px",
//         marginTop: "20px",
//       }}
//     >
//       {stats.map((stat, index) => (
//         <div key={index} style={{ textAlign: "center" }}>
//           <h1 style={{ fontSize: "40px", color: "#58a6ff" }}>
//             {counts[index]}+
//           </h1>
//           <p>{stat.label}</p>
//         </div>
//       ))}
//     </div>
//     <div
//       style={{
//         marginTop: "20px",
//         display: "flex",
//         gap: "15px",
//       }}
//     >
//       <button
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#58a6ff",
//           color: "#0d1117",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           fontWeight: "bold",
//         }}
//       >
//         CV & Credentials
//       </button>
//       <button
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#ffffff",
//           color: "#0d1117",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           fontWeight: "bold",
//         }}
//       >
//         Set Cursor
//       </button>
//     </div>
//   </div>
// </div>

//       </section>
//     </>
//   );
// };

// export default Home;








//           // <div
//           //   ref={imageRef}
//           //   style={{
//           //     border: "2px solid #58a6ff",
//           //     borderRadius: "15px",
//           //     padding: "10px",
//           //     overflow: "hidden",
//           //     display: "inline-block",
//           //   }}
//           // >
//           //   <img
//           //     src="https://via.placeholder.com/150"
//           //     alt="Profile"
//           //     style={{ width: "150px", borderRadius: "50%" }}
//           //   />
//           // </div>

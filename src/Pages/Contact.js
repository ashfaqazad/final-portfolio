import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../StyleSheet/Style.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contactItemsRef = useRef([]);
  const formFieldsRef = useRef([]);

  useEffect(() => {
    // GSAP animation for the section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3 }
    );

    // Rotate animation for contact items
    contactItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, rotate: -90, y: 50 },
        {
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });

    // Rotate animation for form fields
    formFieldsRef.current.forEach((field, index) => {
      gsap.fromTo(
        field,
        { opacity: 0, rotate: 90, x: 50 },
        {
          opacity: 1,
          rotate: 0,
          x: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: field,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);


  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ height: "auto", backgroundColor: "#121212", color: "#fff" }}
      className="contact-section"
    >
      <div className="container">
        <h1 ref={headingRef} className="contact-heading">
          Contact Me
        </h1>
        <p className="contact-text">
          Ready to elevate your digital presence? Whether you're starting a new
          website, refreshing an existing one, or seeking expert guidance on
          web technologies, I'm here to assist. Contact me to discuss your
          project, inquire about services, or simply say hello.
        </p>

        <div className="contact-grid">
          {["Email", "LinkedIn", "WhatsApp"].map((title, index) => (
            <div
              className="contact-item"
              key={title}
              ref={(el) => (contactItemsRef.current[index] = el)}
            >
              <h2>{title}</h2>
              <p>
                {title === "Email"
                  ? "ashfaqahmedazad@gmail.com"
                  : title === "LinkedIn"
                  ? "ashfaqazad"
                  : "+92 3332758958"}
              </p>
              <button>
                {title === "Email" ? "Send an Email" : "Send a Message"}
              </button>
            </div>
          ))}
        </div>

        <form className="contact-form">
          {["Your Full Name", "Your Email", "Your Message"].map(
            (placeholder, index) => (
              <React.Fragment key={index}>
                {placeholder === "Your Message" ? (
                  <textarea
                    placeholder={placeholder}
                    ref={(el) => (formFieldsRef.current[index] = el)}
                  ></textarea>
                ) : (
                  <input
                    type={placeholder === "Your Email" ? "email" : "text"}
                    placeholder={placeholder}
                    ref={(el) => (formFieldsRef.current[index] = el)}
                  />
                )}
              </React.Fragment>
            )
          )}
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
















// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import '../StyleSheet/Style.css'

// const Contact = () => {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);

//   useEffect(() => {
//     // GSAP animation for the section
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1 }
//     );

//     gsap.fromTo(
//       headingRef.current,
//       { opacity: 0, x: -100 },
//       { opacity: 1, x: 0, duration: 1, delay: 0.3 }
//     );
//   }, []);

//   return (
//     <section
//       id="contact"
//       ref={sectionRef}
//       style={{ height: "100vh", backgroundColor: "#121212", color: "#fff" }}
//       className="contact-section"
//     >
//       <div className="container">
//         <h1 ref={headingRef} className="contact-heading">Contact Me</h1>
//         <p className="contact-text">
//           Ready to elevate your digital presence? Whether you're starting a new website,
//           refreshing an existing one, or seeking expert guidance on web technologies,
//           I'm here to assist. Contact me to discuss your project, inquire about services,
//           or simply say hello.
//         </p>

//         <div className="contact-grid">
//           <div className="contact-item">
//             <h2>Email</h2>
//             <p>prasanth.ragava@gmail.com</p>
//             <button>Send an Email</button>
//           </div>
//           <div className="contact-item">
//             <h2>LinkedIn</h2>
//             <p>prasanth</p>
//             <button>Send a Message</button>
//           </div>
//           <div className="contact-item">
//             <h2>WhatsApp</h2>
//             <p>+91 7337578778</p>
//             <button>Send a Message</button>
//           </div>
//         </div>

//         <form className="contact-form">
//           <input type="text" placeholder="Your Full Name" />
//           <input type="email" placeholder="Your Email" />
//           <textarea placeholder="Your Message"></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;






// // import React from 'react'

// // const Contact = () => {
// //     return (
// //         <section id="contact" style={{ height: '100vh'}}>
// //                     <h1>Contact Section</h1>

// //         </section>
// //     )
// // }

// // export default Contact
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.card');

      // GSAP Animation
      gsap.fromTo(
        cards,
        { rotationY: 360, opacity: 0, y: 50 },
        {
          rotationY: 0,
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="d-flex justify-content-center align-items-center flex-wrap"
      style={{ marginTop: '50px', gap: '20px' }}
    >
      {/* Cards */}
      {[
        {
          title: 'UI/UX Design',
          icon: '🎨',
          description:
            'Crafting intuitive and engaging user interfaces and experiences is my passion. I focus on creating designs that are visually appealing and user-friendly.',
          button: 'Read more',
          color: '#6c63ff', // Blue glow
        },
        {
          title: 'Web Development',
          icon: '💻',
          description:
            'I specialize in building custom websites tailored to your unique needs. From small business sites to large-scale web applications.',
          button: 'Read more',
          color: '#28a745', // Green glow
        },
        {
          title: 'API Integration',
          icon: '🔗',
          description:
            'Integrating your website with third-party services and APIs can enhance functionality and user experience.',
          button: 'Read more',
          color: '#007bff', // Purple glow
        },
      ].map((card, index) => (
        <div
          key={index}
          className="card text-center"
          style={{
            width: '20rem',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: `0 4px 15px ${card.color}`,
            background: 'linear-gradient(to bottom, #1e1e2f, #2d2d3e)',
            color: 'white',
            border: `2px solid ${card.color}`,
          }}
        >
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>{card.icon}</div>
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text" style={{ fontSize: '14px', marginBottom: '20px' }}>
            {card.description}
          </p>
          <a
            href="#"
            className="btn btn-primary"
            style={{
              backgroundColor: card.color,
              border: 'none',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            {card.button}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;





// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Card = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (containerRef.current) {
//       const cards = containerRef.current.querySelectorAll('.card');

//       // GSAP Animation
//       gsap.fromTo(
//         cards,
//         { rotationY: 360, opacity: 0 },
//         {
//           rotationY: 0,
//           opacity: 1,
//           duration: 1.5,
//           stagger: 0.2,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="d-flex justify-content-center align-items-center flex-wrap"
//       style={{ marginTop: '5px', marginBottom: "5px", gap: '20px' }}
//     >
//       {[...Array(3)].map((_, index) => (
//         <div key={index} className="card" style={{ width: '18rem' }}>
//           <div className="card-body bg-dark rounded-3" style={{ backgroundColor: 'gray' }}>
//             <h5 className="card-title text-white">Card {index + 1}</h5>
//             <p className="card-text text-white">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rem
//               debitis alias eaque ad labore suscipit quod? Ex excepturi minus,
//               consequuntur assumenda a quibusdam corporis? Pariatur amet atque
//               praesentium nam?
//             </p>
//           <button className='btn btn-primary'>Reade More</button>

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;

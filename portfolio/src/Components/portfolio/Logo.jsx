import React from 'react';

export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
  <circle cx="50" cy="50" r="48" fill="url(#grad1)" />

  {/* L */}
  <path
    d="M 34 30 L 34 70 L 50 70"
    stroke="white"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* R */}
  <path
    d="M 56 30 L 56 70
       M 56 30 Q 76 30 76 46 Q 76 60 56 60
       M 56 60 L 76 70"
    stroke="white"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#5B55FF" />
      <stop offset="100%" stopColor="#7A64FF" />
    </linearGradient>
  </defs>
</svg>

    // <svg
    //   viewBox="0 0 100 100"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={className}
    // >
    //   {/* Background Circle */}
    //   <circle cx="50" cy="50" r="48" fill="url(#gradient)" />
      
    //   {/* Letter A */}
    //   <path
    //     // d="M 35 70 L 42 50 L 50 30 L 58 50 L 65 70 M 45 55 L 55 55"
    //     d="M 35 30 L 35 70 L 55 70"
    //     stroke="white"
    //     strokeWidth="4"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     fill="none"
    //   />
      
    //   {/* Letter J */}
    //   <path
    //     // d="M 70 30 L 70 55 Q 70 65 60 65 Q 55 65 55 60"
    //       d="M 70 30 L 70 70 
    //  M 70 30 Q 90 30 90 45 Q 90 60 70 60
    //  M 70 60 L 90 70"
    //     stroke="white"
    //     strokeWidth="4"
    //     strokeLinecap="round"
    //     fill="none"
    //   />
      
    //   {/* Gradient Definition */}
    //   <defs>
    //     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    //       <stop offset="0%" stopColor="#4F46E5" />
    //       <stop offset="100%" stopColor="#7C3AED" />
    //     </linearGradient>
    //   </defs>
    // </svg>
  );
}
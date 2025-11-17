import React from 'react';

export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="50" cy="50" r="48" fill="url(#gradient)" />
      
      {/* Letter A */}
      <path
        d="M 35 70 L 42 50 L 50 30 L 58 50 L 65 70 M 45 55 L 55 55"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Letter J */}
      <path
        d="M 70 30 L 70 55 Q 70 65 60 65 Q 55 65 55 60"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}
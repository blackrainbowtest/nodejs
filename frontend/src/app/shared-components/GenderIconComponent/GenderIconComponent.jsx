import { memo } from "react";

function GenderIconComonent({ gender }) {
  return gender ? (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='0.92em'
      height='1em'
      viewBox='0 0 22 24'
    >
      <path
        fill='currentColor'
        d='M14.041 16.683a14.884 14.884 0 0 1-.035-.72c2.549-.261 4.338-.872 4.338-1.585c-.007 0-.006-.03-.006-.041C16.432 12.619 19.99.417 13.367.663a3.344 3.344 0 0 0-2.196-.664h.008C2.208.677 6.175 12.202 4.13 14.377h-.004c.008.698 1.736 1.298 4.211 1.566c-.007.17-.022.381-.054.734C7.256 19.447.321 18.671.001 24h22.294c-.319-5.33-7.225-4.554-8.253-7.317z'
      />
    </svg>
  ) : (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='0.92em'
      height='1em'
      viewBox='0 0 22 24'
    >
      <path
        fill='currentColor'
        d='M14.145 16.629a23.876 23.876 0 0 1-.052-2.525l-.001.037a4.847 4.847 0 0 0 1.333-2.868l.002-.021c.339-.028.874-.358 1.03-1.666a1.217 1.217 0 0 0-.455-1.218l-.003-.002c.552-1.66 1.698-6.796-2.121-7.326C13.485.35 12.479 0 11.171 0c-5.233.096-5.864 3.951-4.72 8.366a1.222 1.222 0 0 0-.455 1.229l-.001-.008c.16 1.306.691 1.638 1.03 1.666a4.858 4.858 0 0 0 1.374 2.888a24.648 24.648 0 0 1-.058 2.569l.005-.081C7.308 19.413.32 18.631 0 24h22.458c-.322-5.369-7.278-4.587-8.314-7.371z'
      />
    </svg>
  );
}

export default memo(GenderIconComonent);
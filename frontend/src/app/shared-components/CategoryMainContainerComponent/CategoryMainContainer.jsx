import { Box } from "@mui/material";
import { memo, useRef } from "react";
import styled, { css } from "styled-components";

const MainContainer = styled(Box)(
    ({ theme, customstyles }) => css`
      width: 100%;
      min-height: 80px;
      display: flex;
      align-items: center;
      gap: 20px;
      overflow-x: auto;
      user-select: none;
      -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none;  /* Internet Explorer 10+ */
      
      &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
  
      ${customstyles}
    `
  );

function CategoryMainContainer({ children, customStyles }) {
  const containerRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    isDown = true;
    startX = e.touches[0].pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDown = false;
  };

  const handleTouchMove = (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMovePreventDefault = (e) => {
    if (containerRef.current && containerRef.current.scrollWidth > containerRef.current.clientWidth) {
      e.stopPropagation();
    }
  };

  return (
    <MainContainer
      ref={containerRef}
      customstyles={customStyles}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchMoveCapture={handleTouchMovePreventDefault}
    >
      {children}
    </MainContainer>
  );
}

export default memo(CategoryMainContainer);

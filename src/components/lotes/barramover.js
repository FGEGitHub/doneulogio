import React, { useRef } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HorizontalScrollBar = ({ children }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {/* Barra de desplazamiento en la parte superior */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
        <IconButton onClick={() => scroll('left')}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={() => scroll('right')}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>

      {/* Contenedor con desplazamiento horizontal */}
      <div
        ref={containerRef}
        style={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          width: '100%',
          display: 'flex',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollBar;

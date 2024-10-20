import React from 'react';

// Flèche précédente
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ButtonPrev: React.FC<any> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white cursor-pointer`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      &#9664; {/* Flèche gauche */}
    </div>
  );
};

// Flèche suivante
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ButtonNext: React.FC<any> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white cursor-pointer`}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      &#9654; {/* Flèche droite */}
    </div>
  );
};
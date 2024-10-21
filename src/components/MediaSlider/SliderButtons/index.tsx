import React from 'react';

// Flèche précédente
 
export const ButtonPrev: React.FC<any> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white cursor-pointer`}
      onClick={onClick}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
    >
      &#9664; {/* Flèche gauche */}
    </div>
  );
};

// Flèche suivante
 
export const ButtonNext: React.FC<any> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white cursor-pointer`}
      onClick={onClick}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
    >
      &#9654; {/* Flèche droite */}
    </div>
  );
};
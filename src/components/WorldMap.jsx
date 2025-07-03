import React from 'react';

const WorldMap = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        margin: 0,
        padding: 0,
      }}
      className="font-['Montserrat']"
    >
    
      <div className="text-[#0D5F53] text-4xl sm:text-5xl font-bold mt-10 mb-5">
        World Domination
        <div className="text-[#4A6D6F] text-lg sm:text-xl font-normal mt-2">
          Working all over the world
        </div>
      </div>

  
      <img
        src="/world.png"
        alt="World Map"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          maxWidth: '100%',
          maxHeight: '100%',
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default WorldMap;

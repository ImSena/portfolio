import React from 'react';

const ButtonTab = ({title, active})=> {
  return (
    <>
        <button className={active ? 'active' : ''}>
            {title}
        </button>    
    </>
  );
}

export default ButtonTab;
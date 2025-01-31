import React from 'react';

const ButtonTab = ({title, active, setActive, setVisibleCount})=> {
  return (
    <>
        <button className={active ? 'active' : ''} onClick={()=>{ 
          setActive();
          setVisibleCount(6);

        }}>
            {title}
        </button>    
    </>
  );
}

export default ButtonTab;
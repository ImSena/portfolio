import React from 'react';

const ButtonTab = ({title, active, setActive})=> {
  return (
    <>
        <button className={active ? 'active' : ''} onClick={()=> setActive()}>
            {title}
        </button>    
    </>
  );
}

export default ButtonTab;
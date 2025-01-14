import React from 'react';
import ButtonTab from '../ButtonTab';

const TabProjects = ()=> {
  return (
    <div>
        <ButtonTab title={"Front-End"}/>
        <ButtonTab title={"Back-End"} />
        <ButtonTab title={"Database"} />
        <ButtonTab title={"Iot"} />
        <ButtonTab title={"Desing UI/UX"} />
    </div>
  );
}

export default TabProjects;
import React from 'react';
import ButtonTab from '../ButtonTab';
import TabStyle from './style';

const TabProjects = () => {
  return (
    <TabStyle>
      <ButtonTab active={true} title={"Front-End"} />
      <ButtonTab title={"Back-End"} />
      <ButtonTab title={"Database"} />
      <ButtonTab title={"Iot"} />
      <ButtonTab title={"Desing UI/UX"} />
    </TabStyle>
  );
}

export default TabProjects;
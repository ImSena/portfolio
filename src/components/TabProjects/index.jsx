import React from 'react';
import ButtonTab from '../ButtonTab';
import TabStyle from './style';

const TabProjects = ({tabs, setActiveTab, activeTab}) => {
  return (
    <TabStyle>
      {
        tabs.map((tab)=>(
          <ButtonTab 
            key={tab}
            active={tab === activeTab} 
            title={tab} 
            setActive={()=> setActiveTab(tab)}
            />
        ))
      }
    </TabStyle>
  );
}

export default TabProjects;
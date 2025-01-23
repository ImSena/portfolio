import React, {Children, createContext, useContext, useState} from 'react';

const LanguageContext = createContext();

export const useLanguage = () =>{
    return useContext(LanguageContext);
};

export const LanguageProvider= ({children}) => {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pt': 'en'));
    }

    return(
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
'use client';
import React, { ReactNode, useState } from 'react';


const FitContext = React.createContext({});

const FitContextProvider = ({ children }: { children: ReactNode }) => {

    const [todaysPlan, setTodaysPlan] = useState({});
    const [saveLater, setSaveLater] = useState({});

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        saveLater,
        setSaveLater
    };

    return (
        <div>
            <FitContext.Provider value={sharedData}>
                {children}
            </FitContext.Provider>
        </div>
    );
};

export default FitContextProvider;
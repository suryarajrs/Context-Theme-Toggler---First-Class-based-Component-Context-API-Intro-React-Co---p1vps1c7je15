import React, { useState } from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = ({children}) =>{

   const [theme ,setTheme] = useState("light")

    return (
        <React.Fragment>
            <ThemeContext.Provider value={{theme ,setTheme}}>
              {children}
            </ThemeContext.Provider>
         
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}
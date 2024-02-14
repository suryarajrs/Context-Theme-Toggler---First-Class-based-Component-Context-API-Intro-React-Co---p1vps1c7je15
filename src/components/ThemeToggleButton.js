import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const {theme,setTheme} = useContext(ThemeContext);
    const [toggle,setToggle] = useState('Switch to dark theme');

    const handleOnclick =()=>{

        if(toggle === 'Switch to dark theme'){
            setTheme('dark')
            setToggle('Switch to light theme');
        }else{
            setTheme('light');
            setToggle('Switch to dark theme');
        }

    }
    
    return (
       <>
       <button onClick={handleOnclick} className={`btn btn-${theme} txt-${theme}`} id="global-theme-toggler">{`Switch to ${(theme==="light")?("dark"):("light")} theme`}</button>
       </>
    )

}
export {ThemeToggleButton}
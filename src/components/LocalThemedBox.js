import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const initial = localTheme === 'dark'? 'Toggle local theme to light' : 'Toggle local theme to dark';

    const {theme, setTheme}=useContext(ThemeContext);
    const [localTheme,setLocalTheme] = useState(theme);
    const [localBtn,setLocalBtn] = useState(initial)


    let localThemefn = () => {
        if(localBtn === 'Toggle local theme to dark'){
           setLocalTheme('dark');
            setLocalBtn('Toggle local theme to light');
        }else{
            setLocalTheme('light');
            setLocalBtn('Toggle local theme to dark');
        }
    }

    useEffect(() => {
        
        setLocalTheme(theme);
       let ini = theme === 'dark'? 'Toggle local theme to light' : 'Toggle local theme to dark';
       setLocalBtn(ini);

    },[theme])

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}}  id="local-themed-box" className={'bg-'+localTheme}>
        {/* Write code below this line */}
        <p id="local-themed-text-container" className={'txt-'+localTheme}>hiiii</p>
        <button  onClick={localThemefn} className={`btn btn-${theme} txt-${localTheme}` }id="local-themed-toggler" >{localBtn}</button>

        
    </div>
)
}

export { LocalThemedBox }
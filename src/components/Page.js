import React, { useContext } from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
    const {theme,setTheme} = useContext(ThemeContext);

    return(
        <div className={'bg-'+theme}  id="themed-page" >
            <p id="themed-text-container" className={'txt-'+theme}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn btn-${theme} txt-${theme}`}  id="themed-button">Sup</button>
            <LocalThemedBox />
        </div>
    )
}

export { Page }
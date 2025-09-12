import React,{useContext} from 'react'
import { AppContext } from '../store/store'

const ThemeSwitcher = () => {
    const {theme,toggleTheme}=useContext(AppContext);
  return (
    <div>
        <h3>current Theme:{theme}</h3>
        <button onClick={toggleTheme}>Toggle Theme</button>
      
    </div>
  )
}

export default ThemeSwitcher

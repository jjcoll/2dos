// Importar modulo -- necesito funcion saludar
import './styles.css'

const themeBtn = document.querySelector(".theme-icon")
let theme = "d"

themeBtn.addEventListener('click', () => {
  if (theme === "d") {
    themeBtn.setAttribute("name", "moon-outline")
    theme = "n"
    document.documentElement.style.setProperty('--background', '#1A1A1A');
    document.documentElement.style.setProperty('--border', '#4D4D4D');
    document.documentElement.style.setProperty('--text', '#FFFFFF');
    document.documentElement.style.setProperty('--background-hover', '#313131');
  } else {
    themeBtn.setAttribute("name", "sunny-outline")
    theme = "d"
    document.documentElement.style.setProperty('--background', '#FFFFFF');
    document.documentElement.style.setProperty('--border', '#F0F0F0');
    document.documentElement.style.setProperty('--text', '#000000');
    document.documentElement.style.setProperty('--background-hover', '#e6e6e6');
  }
})

const toggleTheme = () => {

};

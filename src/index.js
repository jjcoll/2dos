import './styles.css'

const themes = {
  dark: [
    ['--background', '#1A1A1A'],
    ['--border', '#4D4D4D'],
    ['--text', '#FFFFFF'],
    ['--background-hover', '#313131'],
  ],
  light: [
    ['--background', '#FFFFFF'],
    ['--border', '#F0F0F0'],
    ['--text', '#000000'],
    ['--background-hover', '#e6e6e6'],
  ],
}

let theme = 'light'

const changeTheme = (newTheme) => {
  for (let i = 0; i < themes[theme].length; i++) { 
    document.documentElement.style.setProperty(`${themes[newTheme][i][0]}`, `${themes[newTheme][i][1]}`)
  }
  theme = newTheme
}

const dayNightBtn = document.querySelector('.theme-icon')

dayNightBtn.addEventListener('click', () => {
  if (theme === 'light') {
    dayNightBtn.setAttribute('name', 'moon-outline')
    changeTheme("dark")
  } else {
    dayNightBtn.setAttribute('name', 'sunny-outline')
    changeTheme("light")
  }
})








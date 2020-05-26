function toggleDarkMode(event) {
    const isDarkmode = event.target.checked
  
    if (isDarkmode) {
      document.documentElement.setAttribute('data-mode', 'dark')
    } else {
      document.documentElement.setAttribute('data-mode', '')
    }
  }
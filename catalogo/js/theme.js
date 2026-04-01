const themeToggleButton = document.getElementById('themeToggle');

// Define o mode inicial com base no localStorage ou dark como padrão
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
    themeToggleButton.textContent = 'Modo Escuro';
} else {
    document.documentElement.classList.remove('light');
    themeToggleButton.textContent = 'Modo Claro';
}

// Alterna entre os modos
themeToggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');

    if (document.documentElement.classList.contains('light')) {
        themeToggleButton.textContent = 'Modo Escuro';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggleButton.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
    }
});

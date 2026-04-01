document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile a');

    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const figure = link.querySelector('figure');
            const img = figure.querySelector('img');
            const figcaption = figure.querySelector('figcaption');

            if (img && figcaption) {
                const nome = figcaption.textContent.trim();
                const imagem = img.src;

                localStorage.setItem('perfilAtivoNome', nome);
                localStorage.setItem('perfilAtivoImagem', imagem);
            }
        });
    });
});</content>
<parameter name="filePath">d:\Curso de Programação (Python)\Visual code\catalogo\js\index.js
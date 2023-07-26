var botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    var elementoBtn = document.getElementById(this.id)
    var categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    console.table(livrosFiltrados)
}


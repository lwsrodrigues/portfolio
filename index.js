// Função para atualizar o número de visitantes
function updateVisitorCount() {
    // Obtém o número atual de visitantes do localStorage
    let count = localStorage.getItem('visitorCount');
    
    // Se não houver contagem, inicia em 0
    if (!count) {
        count = 0;
    } else {
        // Caso contrário, converte o valor para número
        count = parseInt(count);
    }

    // Incrementa a contagem
    count++;

    // Atualiza o localStorage
    localStorage.setItem('visitorCount', count);

    // Atualiza o conteúdo na página
    document.getElementById('count').textContent = count;
}

// Chama a função para atualizar o contador ao carregar a página
updateVisitorCount();
// index.js

$(document).ready(function () {
    // Quando o modal for aberto
    $('#certificateModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Botão que abriu o modal
        var image = button.data('image'); // Extrai a imagem do atributo data-image
        var modal = $(this);
        modal.find('#modalImage').attr('src', image); // Atualiza o src da imagem do modal
    });
});

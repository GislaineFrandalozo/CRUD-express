
document.addEventListener("DOMContentLoaded", function () {

    // Atualize o valor do atributo "data-id" da modal quando um botão "Deletar" é clicado
    const deleteButtons = document.querySelectorAll('[data-bs-target="#exampleModal"]');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            const modal = document.querySelector('#exampleModal');
            const deleteButton = modal.querySelector('#delete-note');

            deleteButton.addEventListener('click', delete_note);
            
            function delete_note(event) {
            event.preventDefault()
            
            fetch(`/notes/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message == 'note deleted') {
                        window.location.reload();
                    }
                })
                .catch(error => console.error(error));
            }
        })

    });
});

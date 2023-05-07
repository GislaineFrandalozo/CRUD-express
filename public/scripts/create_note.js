const btn_create_note = document.querySelector("#create-note");
const url_create = btn_create_note.dataset.url_create;

btn_create_note.addEventListener('click', create_note);

function create_note(event) {
    event.preventDefault()

    const input_title = document.getElementById("title");
    const title = input_title.value;


    const input_body = document.getElementById("body");
    const body = input_body.value;

    const up_data = {
        title,
        body,
    };


    fetch(url_create, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(up_data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
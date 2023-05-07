const btn_update_note = document.querySelector("#update-note");
const url_update = btn_update_note.dataset.url_update;

btn_update_note.addEventListener('click', update_note);

function update_note(event) {
    event.preventDefault()
    console.log("click");

    const input_title = document.getElementById("title");
    const title = input_title.value;


    const input_body = document.getElementById("body");
    const body = input_body.value;

    const up_data = {
        title,
        body,
    };


    fetch(url_update, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(up_data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
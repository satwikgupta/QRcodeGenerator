const b = document.querySelector('button');
const img = document.querySelector('div');
const input = document.querySelector('input');

b.addEventListener('click', () => {
    fetch(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)
    .then(response => {
        console.log(response);
        return response.blob();
    }).then(blob => {
        const objUrl = URL.createObjectURL(blob);
        img.innerHTML = `<img src="${objUrl}" height="150px" width="150px" alt="QR Code">`;
    }).catch(error => {
        console.error('There was a problem with the fetch operation:',error);
    })
})
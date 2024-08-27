let imgbox = document.getElementById('imgbox');
let qrimg = document.getElementById('qrimg');
let qrtext = document.getElementById('qrtext');

function generateQR() {
    if (qrtext.value.length > 0) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        qrimg.classList.add("show-img");
        console.log("QR code generated with text: " + qrtext.value);
    } else {
        qrtext.classList.add("error")
        setInterval(() => {
            qrtext.classList.remove("error")
        }, 1000);
        console.log("Text field is empty. QR code not generated.");
    }
}



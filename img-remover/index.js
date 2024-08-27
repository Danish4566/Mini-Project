
let imageurl;
function handleupload() {
    let fileupload = document.querySelector('#input-file'); // if 'input-file' is an id
    let image = fileupload.files[0];
    let formdata = new FormData(); // 'FormData' should be capitalized
    formdata.append('image_file', image)
    formdata.append('size', 'auto');
    const apikey = 'tM7NQwQ1R6unjodtatfUd4ZH'
    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': apikey
        },
        body: formdata
    })
        .then(function (response) {
            return response.blob();
        })
        .then(function (blob) {
            console.log(blob);
            let url =URL.createObjectURL(blob)
            let img =document.createElement('img');
            imageurl = url
            img.src=url;
            document.body.appendChild(img);  
        })
       
       .catch();
        console.log('clicked');
}
function downloadfile(){
    var anchorelement= document.createElement('a');
    anchorelement.href = imageurl;
    anchorelement.download= 'no-bg.png';
    document.body.appendChild(anchorelement)
    anchorelement.click()
    document.body.removeChild(a)
}


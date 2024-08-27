// window.addEventListener('load',function () {
//     document.querySelector('input[type="file"]').addEventListener('change', function () {
//         if (this.files && this.files[0]) {
//             var image =document.querySelector('img');
//             image.onload = () => {
//               URL.revokeObjectURL(image.src);
//             }
//         image.src = URL.createObjectURL(this.files[0]);
//         }
//     })
// })

let image =document.querySelector('#img');
let inputfile =document.querySelector('#input-file');
inputfile.onchange = function () {
    image.src = URL.createObjectURL(this.files[0]);
}
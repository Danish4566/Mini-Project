
var image = document.querySelector('#image');
var cropper = new Cropper(image,{
    aspectRatio: 0,
    viewMode:0,
})
 var imagecrop = document.querySelector('#imgcrop').addEventListener('click',
  function () {
var croppedimg =cropper.getCroppedCanvas().toDataURL('image/png')
document.querySelector('#output').src = croppedimg ;
 })

 

 
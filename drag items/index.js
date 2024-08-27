const lists = document.getElementsByClassName('list');
let rightbox;
rightbox = document.getElementById('right');
let leftbox = document.getElementById('left');
for (const list of lists) {
    list.addEventListener('dragstart', (e) => {
        // Your logic here
        let selected = e.target;
        rightbox.addEventListener('dragover', (e) => {
            e.preventDefault()
         });
         rightbox.addEventListener('drop', (e) => {
           rightbox.appendChild(selected)
           selected = null;
         });
         leftbox.addEventListener('dragover', (e) => {
            e.preventDefault()
         });
         leftbox.addEventListener('drop', (e) => {
           leftbox.appendChild(selected)
           selected = null;
         });
    });
}

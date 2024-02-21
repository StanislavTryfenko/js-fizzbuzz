
const ulElement = document.querySelector('.grid');

for(let i = 1; i <= 49; i++){
    //console.log(i);
    const markupListItem = `<li>${i}</li>`;
    ulElement.insertAdjacentHTML('beforeend', markupListItem);

    
}

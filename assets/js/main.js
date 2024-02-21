
const ulElement = document.querySelector('.grid');

for(let i = 1; i <= 49; i++){
    //console.log(i);

    if (i % 3 == 0){
        const markupListItem = `<li>fizz</li>`;
        ulElement.insertAdjacentHTML('beforeend', markupListItem)   
    }
    else if (i % 5 == 0){
        const markupListItem = `<li>buzz</li>`;
        ulElement.insertAdjacentHTML('beforeend', markupListItem)
    }
    else if ((i % 3 == 0) || (i % 5 ==0)){
        const markupListItem = `<li>fizzbuzz</li>`;
        ulElement.insertAdjacentHTML('beforeend', markupListItem);  
    }
    else{
        const markupListItem = `<li>${i}</li>`;
    ulElement.insertAdjacentHTML('beforeend', markupListItem) 
    }







    /**/;


}

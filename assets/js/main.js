for(let i = 1; i <= 49; i++){

    if (i % 3 == 0 && i % 5 ==0 ){
        // Create an "li" node:
        const li = document.createElement("li");

        // Add a class to "li":
        li.classList.add("fizzbuzz")

        // Create a text node:
        const liText = document.createTextNode("FizzBuzz");

        // Append the text node to the "li" node:
        li.appendChild(liText);

        // Append the "li" node to the list:
        document.getElementById("grid").appendChild(li);
    }
    else if (i % 5 == 0){
        // Create an "li" node:
        const li = document.createElement("li");

        // Add a class to "li":
        li.classList.add("buzz")

        // Create a text node:
        const liText = document.createTextNode("Buzz");

        // Append the text node to the "li" node:
        li.appendChild(liText);

        // Append the "li" node to the list:
        document.getElementById("grid").appendChild(li);
    }
    else if (i % 3 == 0){
        // Create an "li" node:
        const li = document.createElement("li");

        // Add a class to "li":
        li.classList.add("fizz")

        // Create a text node:
        const liText = document.createTextNode("Fizz");

        // Append the text node to the "li" node:
        li.appendChild(liText);

        // Append the "li" node to the list:
        document.getElementById("grid").appendChild(li);;   
    }
    else{
        // Create an "li" node:
        const li = document.createElement("li");

        // Create a text node:
        const liText = document.createTextNode(i);

        // Append the text node to the "li" node:
        li.appendChild(liText);

        // Append the "li" node to the list:
        document.getElementById("grid").appendChild(li);;
    }
}

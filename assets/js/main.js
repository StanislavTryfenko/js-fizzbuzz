for(let i = 1; i <= 100; i++){

    // Create an "li" node:
    const li = document.createElement("li");

    if (i % 3 == 0 && i % 5 ==0 ){
        // Add a class to "li":
        li.classList.add("fizzbuzz")

        // Create a text node:
        var liText = document.createTextNode("FizzBuzz");
    }
    else if (i % 5 == 0){
        // Add a class to "li":
        li.classList.add("buzz")

        // Create a text node:
        var liText = document.createTextNode("Buzz");
    }
    else if (i % 3 == 0){
        // Add a class to "li":
        li.classList.add("fizz")

        // Create a text node:
        var liText = document.createTextNode("Fizz");
    }
    else{
        // Create a text node:
        var liText = document.createTextNode(i);

    }
    
    // Append the text node to the "li" node:
    li.appendChild(liText);

    // Append the "li" node to the list:
    document.getElementById("grid").appendChild(li);
}

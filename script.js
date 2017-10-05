document.addEventListener("DOMContentLoaded", function(){
 let button = document.getElementById("button");

    button.addEventListener("click", function(){
    
    //creates an array that will hold the friend names
    let friends = ["Mason", "Emilio", "Jay", "Gizelle"]; 

    /*
        the first for loop will print each friends name in the array 
    */
    for (let i=0; i<friends.length; i++){
        //create elements
        const div = document.createElement("div");
        const heading = document.createElement("h3");
        

        //append the div to body
        document.body.appendChild(div);
        //assign a class name of friend to the div
        div.className = "friend";
        //add h3 to the div element
        div.innerHTML= "<h3 class='name'>" + friends[i].toUpperCase() + "</h3>";    
        /*
            the second for loop will print the song for each friend
        */
        for (let j=99; j>0; j--){
            //the if statement checks for the last iteration and changes the song to singular 
            if (j===1){
                const p = document.createElement("p");
                p.innerHTML =  j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";   
                div.appendChild(p); 
            } else { 
                const p = document.createElement("p");
                p.innerHTML =  j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file";      
                div.appendChild(p); 
            } 
        };
    };
    


    });
});

/*
if (j===1){
    div.appendChild(p);    
    p.innerHTML =  j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";   
} else { 
    div.appendChild(p);   
    p.innerHTML =  j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file";      
}
*/
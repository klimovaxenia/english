function checkAnswers(ulId) {
    let spanArr = Array.from(document.getElementById(ulId).getElementsByClassName("check"));
    let inputArr = Array.from(document.getElementById(ulId).getElementsByClassName("sm-inpt"));
    for (i = 0; i < inputArr.length; i++) {
        let mySpan = inputArr[i].parentElement;
        let inputVal = inputArr[i].value;
        let inputValCase = inputArr[i].value.toLowerCase().replace(/\s/g, "");
        let answer = inputArr[i].getAttribute("answer").toLowerCase().replace(/\s/g, "");
        let myState = mySpan.getAttribute("state")
        
        if (inputVal && myState == "empty") {
            
            if (answer == inputValCase) {
                console.log("Right answer!");
                mySpan.setAttribute("state", "right");
                mySpan.classList.add("right-sp");
                inputArr[i].classList.add("hide-inpt");
                mySpan.innerHTML = inputVal;

            } else {
                console.log("Wrong!");
                mySpan.setAttribute("state", "wrong");
                inputArr[i].classList.add("wrong-inpt");
            }
        
        } else if (inputVal && myState == "wrong") {
            
            if (answer == inputValCase) {
                console.log("Right answer!");
                mySpan.setAttribute("state", "right");
                mySpan.classList.add("right-sp");
                inputArr[i].classList.add("hide-inpt");
                mySpan.innerHTML = inputVal;

            } else {
                console.log("Wrong!");
                mySpan.setAttribute("state", "wrong");
                inputArr[i].classList.add("wrong-inpt");
            }
        
        }

    }
}

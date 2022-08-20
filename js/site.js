//Controller
function getValues(){
    //get tht values from the input
    document.getElementById("alert").classList.add("invisible")
    let inputText = document.getElementById("input").value;
    inputText = inputText.toLowerCase()
    //Input clean up
    let regex = /[^a-z0-9]/gi;
    inputText = inputText.replace(regex,"")

    //Check if it's a palindrome
    let res = checkPilindrome(inputText)
    //Display 
    disPlayPalindrome(res, inputText)
}


function checkPilindrome(input) {
    let i = 0
    let j = input.length - 1

    while (i<j){
        if (input[i] != input[j]){
            return false
        }
        i += 1
        j-=1
    }
    return true
}

function disPlayPalindrome(res,input) {
    if (res){
        document.getElementById("alertHeader").innerHTML = `Well Done!`
        document.getElementById("msg").innerHTML = `Your message in a palindrome: ${input}`
        document.getElementById("alert").classList.remove("invisible")
    }else {
        document.getElementById("alertHeader").innerHTML = `Sorry`
        document.getElementById("msg").innerHTML = `Your message in NOT a palindrome: ${input}`
        document.getElementById("alert").classList.remove("invisible")

    }

}
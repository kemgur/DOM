 //Creating a function
    //We will use this function for the button element
    function isEven(){
        //getting the value on the input element
        //when user enters 10, number=10 
        //when user enters 29, number=29
        var number= document.getElementById("TextBox").value;
        if(number%2===0){
            alert(number + 'Number is Even')
        }else{
            alert(number + 'Number is Odd')
        }
    }
    
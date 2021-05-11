//Creating a function
        //We will use this function for the button element
        function IsEven(){
            //getting the value on the input element
            //when user ebters 10, number=10
            //when user enters 29, number=29
            var number=document.getElementById("TextBox").value;
            if(number%2==0){
                alert('Number is Even')
            }else{
                alert('Number is Old')
            }
        }
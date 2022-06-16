    
    

    function blank_protection(){

        var name_field = document.forms['sign_up_form']['f_name'].value;
        var phone_field = document.forms['sign_up_form']['f_number'].value;
        var email_field = document.forms['sign_up_form']['email'].value;
        var age_field = document.forms['sign_up_form']['age'].value;
        var gender_field = document.forms['sign_up_form']['gender'].value;
        var interest_field_size = document.querySelectorAll('input[type="checkbox"]:checked').length;
        var country_field = document.getElementById('country');
        var country_field_text = document.getElementById('country').options[country_field.selectedIndex].value;
        let password_field = document.forms['sign_up_form']['password'].value;
        let confirm_password_field = document.forms['sign_up_form']['password2'].value;


        if(name_field == "" || name_field == " "){
            document.getElementById('name_error').innerHTML = "Please enter your name";
            
        }

        if(phone_field == "" || phone_field == " "){
            document.getElementById('phone_error').innerHTML = "Please enter your number";
           
        }

        if(email_field == "" || email_field == " "){
            document.getElementById('email_error').innerHTML = "Please enter your email";
           
        }

        if(age_field == "" || age_field == " "){
            document.getElementById('age_error').innerHTML = "Please enter your age";
           
        }

        if(gender_field == "" || gender_field == " "){
            document.getElementById('gender_error').innerHTML = "Please select your geneder";
        }else{
            document.getElementById('gender_error').innerHTML = "";
        }
           
        
        
        if(interest_field_size == 0){
            document.getElementById('interest_error').innerHTML = "Please select your interest";
        }

        if(country_field_text == "" || country_field_text == " "){
            document.getElementById('country_error').innerHTML = "Please select your country";
        }

        if(password_field == "" || password_field == " "){
            document.getElementById('password_error').innerHTML = "Please enter your password";
        }

        if(confirm_password_field == "" || confirm_password_field == " "){
            document.getElementById('password_error2').innerHTML = "Please enter confirm your password";
        }
        
        return false;


    }
    
    
    
    
    
    function name_validation(){
        let name_field = document.forms['sign_up_form']['f_name'].value;

        var name_vali = /^([A-Za-z\s])+$/;
        var name_test = name_vali.test(name_field);

        if(name_field =="" || name_field == " "){
            document.getElementById('name_error').innerHTML = "Please enter your name";
            document.getElementById('f_name').style.border="2px solid red";
            return false;
        }
        else if(!name_test){
            document.getElementById('name_error').innerHTML = "Please enter correct name";
            document.getElementById('f_name').style.border="2px solid red";
            
            return false;
        }
        else{
            document.getElementById('name_error').innerHTML = "";
            document.getElementById('f_name').style.border="2px solid green";
        }

    }


    function phone_validation(){

        let phone_field = document.forms['sign_up_form']['f_number'].value;
        var phone_vali = /^[0-9]+$/;
        var phone_vali2 = /^01/;
        var phone_test = phone_vali.test(phone_field);
        var phone_test2 = phone_vali2.test(phone_field);

        if(phone_field =="" || phone_field == " "){
            document.getElementById('phone_error').innerHTML = "Please enter your phone number";
            document.getElementById('f_number').style.border="2px solid red";
            return false;
        }
        else if(!phone_test){
            document.getElementById('phone_error').innerHTML = "Phone number must be numeric value";
            document.getElementById('f_number').style.border="2px solid red";
            return false;
        }
        else if(!phone_test2){
            document.getElementById('phone_error').innerHTML = "Phone number must be start with 01";
            document.getElementById('f_number').style.border="2px solid red";
            return false;
        }
        else if(phone_field.length != 11){
            document.getElementById('phone_error').innerHTML = "Phone number must be 11 digit";
            document.getElementById('f_number').style.border="2px solid red";
            return false;
        }
        
        else{
            document.getElementById('phone_error').innerHTML = "";
            document.getElementById('f_number').style.border="2px solid green";
        }

    }

    function phone_validation2(){

        let phone_field = document.forms['sign_up_form']['f_number'].value;
        var phone_vali = /^[1-9]/;
        var phone_test = phone_vali.test(phone_field);

        if(phone_field =="" || phone_field == " "){
            document.getElementById('phone_error').innerHTML = "Your number must be start with 01";
            document.getElementById('f_number').style.border="2px solid red";
            return false;
        }
       

    }



    function email_validation(){

        let email_field = document.forms['sign_up_form']['email'].value;
        var email_vali = /^([0-9a-zA-Z]\.?)+[^\.]@([0-9a-zA-Z])+[\.]([0-9a-zA-Z]\.?)+([0-9a-zA-Z]?)[^\.]+$/;
        var email_test = email_vali.test(email_field);

        if(email_field =="" || email_field.value == " "){
            document.getElementById('email_error').innerHTML = "Please enter your email";
            document.getElementById('email').style.border="2px solid red";
            return false;
        }
        else if(!email_test){
            document.getElementById('email_error').innerHTML = "Please enter correct email";
            return false;
        }
        
        
        else{
            document.getElementById('email_error').innerHTML = "";
            document.getElementById('email').style.border="2px solid green";
        }

    }


    function password_validation(){

        let password_field = document.forms['sign_up_form']['password'].value;
        //var password_vali = /ddd/;
        //var password_test = password_vali.test(password_field);

        var casematching = new Array();

        casematching.push("[$@$!%*#?&]");
        casematching.push("[A-Z]");
        casematching.push("[0-9]");
        casematching.push("[a-z]");

        var numberofcase = 0;

        for (var i=0; i<casematching.length;i++){
        

            if(new RegExp(casematching[i]).test(password_field)){
                numberofcase++;
            }
            
        }


        if(password_field =="" || password_field.value == " "){
            document.getElementById('password_error').innerHTML = "Please enter your password";
            document.getElementById('email').style.border="2px solid red";
            return false;
        }
        else if(password_field.length<8){
            document.getElementById('password_error').innerHTML = 'Password minimum length 8 digit';
            return false;
        }
        // else if(password_field.length>=8){
        //     document.getElementById('password_error').innerHTML = '';
        //     return false;
        // }

        else if(password_field.length>=8){
            document.getElementById('password_error').innerHTML = '';

            switch(numberofcase){
                case 0:
                document.getElementById('password_strength').innerHTML = "";
                break;

                case 1:
                document.getElementById('password_strength').innerHTML = "Very weak";
                document.getElementById('password_strength').style.color ="red";
                break;

                case 2:
                document.getElementById('password_strength').innerHTML = "Weak";
                document.getElementById('password_strength').style.color ="red";
                break;

                case 3:
                document.getElementById('password_strength').innerHTML = "Medium";
                document.getElementById('password_strength').style.color ="#90EE90";
                break;

                case 4:
                document.getElementById('password_strength').innerHTML = "Strong";
                document.getElementById('password_strength').style.color ="green";
                break;
                
            }
            if(password_field.length>20){

                document.getElementById('password_error').innerHTML = 'Password length cannot be bigger than 20';
                return false;
    
            }
            
            return false;
        }

        
        
       

    }

    function confirm_password(){
        let password_field = document.forms['sign_up_form']['password'].value;
        let confirm_password_field = document.forms['sign_up_form']['password2'].value;
        if(password_field != confirm_password_field){
            document.getElementById('password_error2').innerHTML = 'Password not matching';
        }else{
            document.getElementById('password_error2').innerHTML = '';
        }
    }


    function password_show_hide(){
        var a = document.getElementById("password");
        var b = document.getElementById("password2");
        if (a.type === "password") {
          a.type = "text";
          b.type = "text";
        } else {
          a.type = "password";
          b.type = "password";
        }
        return false;
    }



    function age_validation(){

        var age_field = document.forms['sign_up_form']['age'].value;


        if(age_field == "" || age_field == " "){
            document.getElementById('age_error').innerHTML = "Please enter your age";
            document.getElementById('age').style.border="2px solid red";
            return false;
        }
        else if(age_field <18){
            document.getElementById('age_error').innerHTML = "Your age must be 18+";
            document.getElementById('age').style.border="2px solid red";
            return false;
        }
        
        
        else{
            document.getElementById('age_error').innerHTML = "";
            document.getElementById('age').style.border="2px solid green";
        }

    }




    function gender_validation(){
        var gender_field = document.forms['sign_up_form']['gender'].value;

        if(gender_field == "" || gender_field == " "){
            document.getElementById('gender_error').innerHTML = "Please select your geneder";
        }else{
            document.getElementById('gender_error').innerHTML = "";
        }
    }


    function interest_validation()
    {
        var interest_field_size = document.querySelectorAll('input[type="checkbox"]:checked').length;
        
        if(interest_field_size == 0){
            document.getElementById('interest_error').innerHTML = "Please select your interest";
        }
        else if( interest_field_size>2){
            document.getElementById('interest_error').innerHTML = "Max 2 interest can be selected";

        }
        else{
            document.getElementById('interest_error').innerHTML = "";
        }
    }


    function country_validation()
    {
        var country_field = document.getElementById('country');
        var country_field_text = document.getElementById('country').options[country_field.selectedIndex].value;

        if(country_field == ""){
            document.getElementById('country_error').innerHTML = "Please select your country";
        }else{
            document.getElementById('country_error').innerHTML = "";
        }
        
    }
    
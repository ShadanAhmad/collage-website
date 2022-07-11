
        
            var email= document.forms['form']['mail'];
            var password= document.forms['form']['pwd'];

            
        
            function validate(){
                     if(email.value==""){
                         email.style.border = "1px solid red";
                         
                         document.getElementById('email_error').innerHTML="**Please Fill the Email and length atleast 9 char";
                         return false;
                     }
                     if(password.value.length<= 6){
                        password.style.border = "1px solid red";
                        document.getElementById('pass_error').innerHTML="**Password should be atleast 6 character";
                        return false;
                    }
                    if(password.value==""){
                        password.style.border = "1px solid red";
                        document.getElementById('pass_error').innerHTML="**Please enter the password";
                        return false;
                    }
                    
            
        }





$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });

    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }


        });

    });

}); 
$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
})


//$('.dropify').dropify();


function onSubmit(){
       if(validateFirstName()){
           if(validateFullName()){
               if(validateDesignation()){
                   if(validateEmpCode()){
                       if(validateBloodGrp()){
                           if(validateEmail()){
                               if(validateNumber()){
                                   if(validateEmerg()){
                                       postData();
                                   }
                                   else{
                                       //throw error num
                                   }
                               }
                               else{
                                   //throw error num
                               }
                           }
                           else{
                               // error for email
                           }
                       }
                       else{
                           //throe error for blood grp
                       }
                   }
                   else{
                       //error for emp code

                   }
               }
               else{
                   //error for designation
               }
           }
           else{
               //error for full name
           }

       }
       else{
           //errorfor name
       } 


}

function validateFirstName(){
    var name = $('#firstName').val();
   return checkAlpha(name);
}


function validateFullName(){
    var name = $('#fullName').val();
   return checkAlpha(name);
}

function validateFirstName(){
    var name = $('#desig').val();
   return checkAlpha(name);
}

function validateEmpCode()
{
    var code=$('#empCode').val();
    return checkNum(code,7);
}


function validateNumber()
{
    var num=$('#empNo').val();
    return checkNum(num,10);
}

function validateEmerg()
{
    var num=$('#emergencyNo').val();
    return checkNum(num,10);
}

function validateBloodGrp(){
    var grp=$('#bloodGroup')
    var blood1Pattern =  /(A|B|AB|O)[+-]/;
  if(grp.val.match(blood1Pattern)){
      return true;
  }  
  else{
      return false;
  }
}

function validateEmail(){
    var email=$('#email').val();
    if (/@virtusa\.com$/.test(email)) {
        return true;
    }
    else{
        return false;
    }
    
}


function checkAlpha(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)&&name.value.length!=0)
      {
       return true;
      }
    else
      {
            return false;
      }
 
}

function checkNum(num ,len)
{
   var numbers = /^[0-9]+$/;
   if(num.value.match(numbers)&&num.value.length==len)
   {
    return true;
   }
   else
   {
      return false;
   }
} 
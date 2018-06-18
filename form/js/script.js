var valid = 0;
$(function(){
    $("span").hide();

});
function addDetails()
{
    valid = 0;
    $("span").hide();

    var validate = validateDetails();
    if(validate)
    {
        postTheData();
    }
    
}
function validateDetails()
{
    validateFirstName();
    validateFullName();
    validateDesignation();
    validateEmployeeNumber();    
    validateReasonsforIssues();    
    validateEmployeeMobileNumber();
    validateEmployeeEmergencyNumber();
    validateEmailId();
    validateBloodGroup();
    if(valid == 1)
    {
        return false;
    }
    return true;
}
function validateFirstName()
{
   if(checkNull("firstName"))
   {
        valid = 1;
        showError("errorMessageForFirstName", "firstName");
   }
  else{
   $('#firstName').css("border","solid 1px green");
}}
function validateFullName()
{
   if(checkNull("fullName"))
   {
       valid = 1;
       showError("errorMessageForFullName", "fullName");
      
   }
   else{
    $('#fullName').css("border","solid 1px green");
 }
}
function validateDesignation()
{
    if(checkNull("desig"))
   {
       valid = 1;
       showError("errorMessageForDesignation", "desig");
      
   } else{
    $('#designation').css("border","solid 1px green");
 }
}
function validateEmployeeNumber()
{
    if(checkNull("empCode"))
   {
       valid = 1;
       showError("errorMessageForEmployeeNumber", "empCode");
      
   }
     else if(checkNumbersOnly("emp_no")) {
        valid = 1;
        showError("errorMessageForEmployeeNumber", "empCode");
    
      }
      else if(checkLength("emp_no", 7)) {
        valid = 1;
        showError("errorMessageForEmployeeNumber", "empCode");
    
      }
      else{
        $('#emp_no').css("border","solid 1px green");
     }
}


function validateEmailId()
{
    if(checkNull("email")||checkEmail("email"))
   {
       valid = 1;
       showError("errorMessageEmailID", "email");
      
   }
   else{
    $('#email').css("border","solid 1px green");
 }
//  if(checkEmail("email")) {
//     valid = 1;
//     showError("errorMessageEmailID", "email");
       
//    }
}

function validateEmployeeMobileNumber()
{
    if(checkNull("empNo"))
   {
       valid = 1;
       showError("errorMessageForEmployeeMobileNumber", "empNo");
        
   }
     else if(checkNumbersOnly("empNo")) {
        valid = 1;
        showError("errorMessageForEmployeeMobileNumber", "empNo");
    
      }
      else{
        $('#mobile').css("border","solid 1px green");
     }

}
function validateEmployeeEmergencyNumber()
{
    if(checkLength("emergencyNo", 10)) 
    {
        valid = 1;
        showError("errorMessageForEmployeeEmergencyContactNumber", "emergencyNo");
    
      }
      else{
        $('#emergency').css("border","solid 1px green");
     }
}

function checkNull(id)
{
    const value = $(`#${id}`).val();
    if(value == null || value == '')
    {
        return true;
    }
    return false;
}
function checkNumbersOnly(id)
{
    const pattern=/^[1-9][0-9]{9}/;
    const value=$(`#${id}`).val();
    const result=value.match(pattern);
    if(result==null)
    {
        return true;
    }
    return false;
    
    
}
function checkLength(id, length)
{
    const value=$(`#${id}`).val();
    if(value.length != length)
    {
        return true;
    }
    return false;
}
function checkEmail(id)
  
   {  const value=$(`#${id}`).val();
    const valid=/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/;
    // "/^([A-Za-z0-9_\-\.])+\@[virtusa.com]$/";
    const result=value.match(valid);
    console.log(result);
    if(result==null)
    {
        return true;
    }
    return false;
   }

function showError(spanId, inputId)
{
    $(`#${spanId}`).show();
    $(`#${inputId}`).addClass('error');
}

function postTheData()
{
    console.log("Finally inside posting the data");
    const firstName = $("#firstName").val();
    const fullName = $("#fullName").val();
    const formDetails = {
        "firstName" : firstName,
        "fullName" : fullName
    }
    const data = JSON.stringify(formDetails);
   $.ajax({
       type: "POST",
       url: "https://application-form-fd16d.firebaseio.com/ApplicationIds.json",
        data: data,
       success : function(data)
       {
          console.log("In success");
      },
        error : function(err)
        {
            console.log(err);
        }
      });
}

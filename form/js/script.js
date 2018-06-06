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




function addDetails(){
 if(validateFirstName){
     if(validateFullName){
         //post it 
         postData();
     }
     else{
         //display error message
     }
 }
 else {
     //display error message
 }
}


function validateFirstName(){
   var firstName = $()
}

function validateFullName(){
     return true;
}

function displayErrorMsgFullName(){

}

function displayErrorMsgFirstName(){
    $('span').show();
    

}

    

function postData(){

}
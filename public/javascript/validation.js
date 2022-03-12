
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Signup form for worker-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//************************************Grabbing element from signup form worker************************************

const WorkerFirstName = document.getElementById("WorkerFirstName");
let validWorkerFirstName = false;

const WorkerLastName=document.getElementById("WorkerLastName")
let validWorkerLastName=false;

const WorkerDOB=document.getElementById("WorkerDOB")
let validWorkerDOB=false;

const WorkerAddress1=document.getElementById('WorkerAddress1');
let validWorkerAddress1=false;

const WorkerAddress2=document.getElementById('WorkerAddress2');
let validWorkerAddress2=false;

const WorkerPincode=document.getElementById("WorkerPincode");
let validWorkerPincode=false;

const WokerCity=document.getElementById("WokerCity");
let validWokerCity=false;

const WorkerState=document.getElementById("WorkerState");
let validWorkerState=false;

const WorkerType=document.getElementById("WorkerType");
let validWorkerType=false;

const WorkersAadhar=document.getElementById('WorkersAadhar')
let validWorkersAadhar=false;

const WorkerContactNumber=document.getElementById("ContactNumber");
let validContactNumber=false;

const WorkerPassword=document.getElementById("WorkerPassword");
let validWorkerPassword=false;

const WorkerConfirmPassword=document.getElementById("WorkerConfirmPassword");
let validWorkerConfirmPassword=false;

// **************************************Event listener for element**************************************

WorkerFirstName.addEventListener('blur', function() {
    let regex = /^[a-z ,.'-]+$/i;
    let str = WorkerFirstName.value;
    // validWorkerFirstName=displaymessage(regex,str,WorkerFirstName);
    if (regex.test(str)) {
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkerFirstName = true;
    }
    else {
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkerFirstName = false;
    }
})

WorkerLastName.addEventListener('blur', function() {
    let regex = /^[a-z ,.'-]+$/i;
    let str = WorkerLastName.value;
    // validWorkerFirstName=displaymessage(regex,str,WorkerFirstName);
    if (regex.test(str)) {
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkerLastName = true;
    }
    else {
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkerLastName = false;
    }
})

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

WorkerDOB.addEventListener('blur',function(){
    let str = WorkerDOB.value;
    console.log(str)
    if(getAge(str)>18){
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkerLastName = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkerLastName = false;
    }
})

WorkerAddress1.addEventListener('blur',function(){
    let str = WorkerAddress1.value;
    console.log(str)
    if(str){
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkerAddress1 = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkerAddress1 = false;
    }
})

WorkerAddress2.addEventListener('blur',function(){
    let str = WorkerAddress2.value;
    console.log(str)
    if(str){
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkerAddress2 = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkerAddress2 = false;
    }
})

WorkerPincode.addEventListener('blur',function(){
    let str = WorkerPincode.value;
    let regex = /^([0-9]){6}$/;
    // console.log(str)
    if(regex.test(str)){
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkerPincode = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkerPincode = false;
    }
})

WokerCity.addEventListener('blur',function(){
    let str = WokerCity.value;
    console.log(str)
    if(str){
        this.parentElement.nextElementSibling.style.display = "none"
        validWokerCity = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWokerCity = false;
    }
})


WorkerState.addEventListener('blur',function(){
    let str = WorkerState.value;
    // console.log(str)
    if(str){
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkerState = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkerState = false;
    }
})


WorkerType.addEventListener('blur',function(){
    let str = WorkerType.value;
    // console.log(str)
    if(str){
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkerType = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkerType = false;
    }
})

WorkersAadhar.addEventListener('blur',function(){
    let str = WorkersAadhar.value;
    let regex = /^([0-9]){12}$/;

    // console.log(str)
    if(regex.test(str)){
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkersAadhar = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkersAadhar = false;
    }
})

WorkerContactNumber.addEventListener('blur',function () {
    let str = WorkerContactNumber.value;
    let regex = /^([0-9]){10}$/;

    // console.log(str)
    if(regex.test(str)){
        this.parentElement.nextElementSibling.style.display = "none"
        validContactNumber = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validContactNumber = false;
    }
})

WorkerPassword.addEventListener('blur',function () {
    let str=WorkerPassword.value;
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/ ;
    if(regex.test(str)){
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkerPassword = true;
    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkerPassword = false;
    }

})

WorkerConfirmPassword.addEventListener('blur',function () {
    let str1=WorkerConfirmPassword.value;
    let str2=WorkerPassword.value;
    if(str1===str2){
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkerConfirmPassword = true;
    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkerConfirmPassword = false;
    }
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Signup form for Customer-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//************************************Grabbing element from signup form Customer************************************

const CustomerFirstName=document.getElementById("CustomerFirstName")
let validCustomerFirstName=false;

const CustomerLastName=document.getElementById("CustomerLastName")
let validCustomerLastName=false;

const CustomerAddress1=document.getElementById("CustomerAddress1");
let validCustomerAddress1=false;

const CustomerAddress2=document.getElementById("CustomerAddress2");
let validCustomerAddress2=false;

const CustomerPincode=document.getElementById("CustomerPincode");
let validCustomerPincode=false;

const CustomerCity=document.getElementById("CustomerCity");
let validCustomerCity=false;

const CustomerState=document.getElementById("CustomerState");
let validCustomerState=false;

const CustomerContactNo=document.getElementById("CustomerContactNo");
let validCustomerContactNo=false;

const CustomerEmail=document.getElementById("CustomerEmail")
let validCustomerEmail=false;

const CustomerPassword=document.getElementById("CustomerPassword")
let validCustomerPassword=false;

const CustomerConfirmPassword=document.getElementById("CustomerConfirmPassword");
let validCustomerConfirmPassword=false;
// **************************************Event listener for element**************************************

CustomerFirstName.addEventListener('blur',function () {
    
    let regex = /^[a-z ,.'-]+$/i;
    let str = CustomerFirstName.value;
    // validWorkerFirstName=displaymessage(regex,str,WorkerFirstName);
    if (regex.test(str)) {
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerFirstName = true;
    }
    else {
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerFirstName = false;
    }
})

CustomerLastName.addEventListener('blur',function () {
    
    let regex = /^[a-z ,.'-]+$/i;
    let str = CustomerLastName.value;
    // validWorkerFirstName=displaymessage(regex,str,WorkerFirstName);
    if (regex.test(str)) {
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerLastName = true;
    }
    else {
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerLastName = false;
    }
})

CustomerAddress1.addEventListener('blur',function(){
    let str = CustomerAddress1.value;
    // console.log(str)
    if(str){
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerAddress1 = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerAddress1 = false;
    }
})

CustomerAddress2.addEventListener('blur',function(){
    let str = CustomerAddress2.value;
    // console.log(str)
    if(str){
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerAddress2 = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerAddress2 = false;
    }
})

CustomerPincode.addEventListener('blur',function(){
    let str = CustomerPincode.value;
    let regex = /^([0-9]){6}$/;
    // console.log(str)
    if(regex.test(str)){
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerPincode = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerPincode = false;
    }
})

CustomerCity.addEventListener('blur',function () {
    let str = CustomerCity.value;
    
    
    if(str.length>3){
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerCity = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerCity = false;
    }
})

CustomerState.addEventListener('blur',function () {
    let str=CustomerState.value;
    if(str){
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerState= true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerState = false;
    }
})


CustomerContactNo.addEventListener('blur',function () {
    let str = CustomerContactNo.value;
    let regex = /^([0-9]){10}$/;

    // console.log(str)
    if(regex.test(str)){
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerContactNo = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerContactNo = false;
    }
})

CustomerEmail.addEventListener('blur',function () {
    let str = CustomerEmail.value;
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    // console.log(str)
    if(regex.test(str)){
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerEmail = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerEmail = false;
    }
})

CustomerPassword.addEventListener('blur',function () {
    let str=CustomerPassword.value;
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/ ;
    if(regex.test(str)){
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerPassword = true;
    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerPassword = false;
    }
})

CustomerConfirmPassword.addEventListener('blur',function () {
    let str1=CustomerConfirmPassword.value;
    let str2=CustomerPassword.value;
    console.log(str1,str2)
    if(str1===str2){
        this.parentElement.nextElementSibling.style.display = "none"
        validCustomerConfirmPassword = true;
    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validCustomerConfirmPassword = false;
    }
})
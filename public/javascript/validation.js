
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
    console.log(str)
    if(str){
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
    // console.log(str)
    if(str){
        this.parentElement.nextElementSibling.style.display = "none"
        validWorkersAadhar = true;

    }
    else{
        this.parentElement.nextElementSibling.style.display = "block"
        validWorkersAadhar = false;
    }
})


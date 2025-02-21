// let StudentSahil ={
//     firstName:"Sahil",
//     lastName:"agarwal",
    // getResult: function(){
    //     console.log("Passed");
    // },
    // getName: function(){
    //     console.log(this.firstName);
    // } 
// }

// var print =StudentSahil.firstName+" "+StudentSahil.lastName
// // console.log(print);
// // console.log(StudentSahil.getName());


// let StudentJasjot ={
//     firstName:"Jasjot",
//     lastName:"Singh",
    // getName: function(){
    //     console.log(this.firstName);
    // } 
    // getResult:function(){
    //     console.log("Passed Jasjot");
    // }
// }

// const getName =function(classStudent){
//         console.log(this.firstName+" "+this.lastName+" from class "+classStudent);
//     } 

// const getStudent1 =getName.call(StudentSahil,"g16","G17");

// const getStudent2 =getName.apply(StudentJasjot,["g16"]);

// const getStudentBind =getName.bind(StudentSahil,"g16");
// console.log(getStudentBind());


//==========

//? What is event 

// document.getElementById('grandparent').addEventListener('click',(e)=>{
//     console.log("THIS IS GRAND PARENT DIV");
//     e.stopPropagation();
// },true)
// document.getElementById('parent').addEventListener('click',(e)=>{
//     console.log("THIS IS PARENT DIV");
//     e.stopPropagation();
// },false)
// document.getElementById('child').addEventListener('click',()=>{
//     console.log("THIS IS CHILD DIV");
//     e.stopPropagation();
// },false)

// document.getElementById('subjects').addEventListener("click",(e)=>{
//         console.log(e);
//         window.location.href=e.target.id;
//         console.log("https://localhost/"+e.target.id);
//     })

//? debouncing
// document.getElementById('searchbox').addEventListener('input',debouncingFunction);
// let whichCall =1;
// let a;
// function fetchData(){
//     console.log("Fetch API Data",whichCall++);
// }

// function debouncingFunction(){
//     clearTimeout(a);
//     a=setTimeout((fetchData), 2000);
// }

async function fetchData(){
    const data = await fetch("https://api.chucknorris.io/jokes/categories");
    const mydata =await data.json();
    return mydata; 
}
const finalData=fetchData();
finalData.then((res)=>{
    console.log(res);
})
// const myPromiseFromNetflix = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // resolve("Fetched data from Netflix");
//         reject("Error in netflix");
//     },1000);
// });
// const myPromiseFromTwitter= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Fetched data from Twitter");
//         // reject("Error in twitter");
//     },2000);
// });
// const myPromiseFromGithub= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Fetched data from Github");
//         // reject("Error in Git");
//     },3000);
// });
// const myPromiseFromHoststar= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Fetched data from Hotstar");
//         // reject("Error in Hotstar");
//     },4000);
// });

// const dataFromAll =Promise.all([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGithub,myPromiseFromHoststar]);
// console.log(dataFromAll);

// const dataFromAllSettled =Promise.allSettled([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGithub,myPromiseFromHoststar]);
// console.log(dataFromAllSettled);

// const dataFromRace =Promise.race([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGithub,myPromiseFromHoststar]);
// console.log(dataFromRace);

// const dataFromAny =Promise.any([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGithub,myPromiseFromHoststar]);
// console.log(dataFromAny);
// const StudentPromise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("I'll come on time")
//     }, 4000);
// })
// console.log("Hello");
// function TechMAhindra(){
//     const promiseByStudent =StudentPromise;
//     console.log("Student");
// }
// TechMAhindra();
// console.log("Class end");

// const helloTechMahindra = async function helloTech(){
//     console.log("Hello! Tech Mahindra");
// }

// helloTechMahindra();

//! async function 
// async function techDirectFunction(params) {
//     console.log("THIS IS Hello Tech Mahindra");    
// }

// const techData =techDirectFunction();
// console.log(techData);
// techData.then((res)=>{
//     return res;
// })
// console.log("Class strt");
// const ProjectSubmission= new Promise( function (resolve,reject) {
//     setTimeout(() => {
//         resolve("Project Submitted")
//     }, 5000);
//     console.log("Class Lunch");
// });

// async function ProjectEvaluation(){
//     console.log("Attendence viva");
//     const ProjectFile = await ProjectSubmission;
//     console.log(ProjectFile);
//     console.log("ProjectFileCheck")
// }

// ProjectEvaluation();
// console.log("Class end");

// console.log("Class strt");
// const FileSubmission= new Promise( function (resolve,reject) {
//     setTimeout(() => {
//         resolve("File Submitted by Kuber after 10sec")
//     }, 10000);
// });

// async function ProjectEvaluation(){
//     try {
//         console.log("Attendence Marking");
//         const ProjectFile = await FileSubmission;
//         console.log(ProjectFile)
//         console.log("File evaluation");
//         console.log("Class end");
//     } catch (error) {
//         console.log(error);
//     }
    
// }
// ProjectEvaluation();

async function fetchData(){
    try {
       const data = await fetch("https://api.chucknorris.io/jokes/categories");
        const mydata =await data.json();
        return mydata; 
    } catch (error) {
        console.log(error)
    }
}
const finalData=fetchData();
finalData.then((res)=>{
    console.log(res);
})
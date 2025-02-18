function checkTable(){
    console.log("checkTable");
    setTimeout(() => {
        console.log("Table!");
        Starter();
    }, 1000);
}
function Starter(){
    console.log("Starter");
    setTimeout(() => {
        console.log("Starters!");
        Dinner();
    }, 1000);
}
function Dinner(){
    console.log("Dinner");
    setTimeout(() => {
        console.log("Dinner!");
        Desert();
    }, 1000);
}
function Desert(){
    console.log("Desert");
    setTimeout(() => {
        console.log("Desert!");
        Paycheck();
    }, 1000);
}
function Paycheck(){
    console.log("Paycheck");
}

checkTable();

document.getElementById('searchbox').addEventListener('input', debouncingFunction);
let debounceTimer;

async function fetchData() {
    const data = await fetch("https://api.chucknorris.io/jokes/categories");
    const mydata = await data.json();
    return mydata;
}

function filterData(inputData, data) {
    return data.filter(item => item.includes(inputData));
}

function debouncingFunction() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
        const inputData = document.getElementById('searchbox').value;
        const data = await fetchData();
        const filteredData = filterData(inputData, data);
        console.log(filteredData);
    }, 2000);
}

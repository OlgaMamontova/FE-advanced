const btn_get_info = document.querySelector('#btn_get_info');
const btn_allPlanets = document.querySelector('#btn_allPlanets');
let urlPlanets = 'https://swapi.dev/api/planets/';
let getNum = document.querySelector('.input');

async function getInfo(){
    try{
        document.querySelector('#content').innerHTML = '<span id="loading">loading...</span>';
        let promiseFilm2 = await fetch(`https://swapi.dev/api/films/${getNum.value}`, {
            method: 'GET',
        });
        let jsonFilm2 = await promiseFilm2.json();
        let promisePeople = [];
        let jsonPeople = [];
        for(let i = 0; i < jsonFilm2.characters.length; i++){
            promisePeople[i] = await fetch(jsonFilm2.characters[i]);
            jsonPeople[i] = await promisePeople[i].json();
        }
        displayInfo(jsonPeople);       
    } catch (err) {
        alert(err);
    };   
};

async function getAllPlanets(){
    try{
        let promisePlanets = await fetch(urlPlanets, {
            method: 'GET',
        });
        let jsonPlanets = await promisePlanets.json();
        displayAllPlanets(jsonPlanets.results);

        let buttonPrevious = createButton('button_nav', 'previous');
        let buttonNext = createButton('button_nav', 'next');
        if(!jsonPlanets.previous == 0){
            buttonPrevious.style.cursor = 'pointer';
            buttonPrevious.addEventListener('click', function(){
                urlPlanets = jsonPlanets.previous;                
                getAllPlanets();
            });
        };
        if(!jsonPlanets.next == 0){
            buttonNext.style.cursor = 'pointer';
            buttonNext.addEventListener('click', function(){
                urlPlanets = jsonPlanets.next;
                getAllPlanets();
            });
        };       
    } catch(err) {
        alert(err);
    };
};

function displayInfo (arr){
    document.querySelector('#content').innerHTML = '';
    arr.forEach(el => {
        if (el.gender.toLowerCase() == 'male'){
            el.gender = '♂';
        } else if (el.gender.toLowerCase() == 'female') {
            el.gender = '♀';
        } else {
            el.gender = '🤖';
        };        
        createDiv('infoCharacter').innerHTML = el.name + ', ' + el.birth_year + ', ' + el.gender;
    });
};

function displayAllPlanets(arr){
    document.querySelector('#content').innerHTML = '';
    arr.forEach(el => {
        createDiv('planet').innerHTML = el.name;
    });
};

function createDiv(className){
    let div = document.createElement('div');
    document.querySelector('#content').append(div);
    div.classList.add(className);
    return div;
};

function createButton(className, html){
    let button = document.createElement('button');
    document.querySelector('#content').append(button);
    button.classList.add(className);
    button.innerHTML = html;
    return button;
};

btn_get_info.onclick = getInfo;
btn_allPlanets.onclick = getAllPlanets;

//Вивести всі планети одразу:
// async function getAllPlanets(){
//     try{
//         document.querySelector('#content').innerHTML = '<span id="loading">loading...</span>';
//         let allPlanets = [];
//         for(let i = 1; i <= 6; i++){
//             let promisePlanets = await fetch(`https://swapi.dev/api/planets/?page=${i}`, {
//             method: 'GET',
//             });
//             let jsonPlanets = await promisePlanets.json();           
//             jsonPlanets.results.forEach(el => {
//                 allPlanets.push(el.name);               
//             });
//         };    
//         displayAllPlanets(allPlanets);   
//     } catch (err) {
//         alert(err);
//     };    
// };

// function displayAllPlanets(arr){
//     document.querySelector('#content').innerHTML = '';
//     arr.forEach(el => {
//         createDiv('planet').innerHTML = el;
//     });
// };
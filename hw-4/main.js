const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1
function getPairs(students){
    const girls = [];
    const boys = [];
    for(let i = 0; i < students.length; i++){
        (students[i][students[i].length-1] == 'а' || students[i][students[i].length-1] == 'я') ? girls.push(students[i]) : boys.push(students[i]);
    }
    const pairs = [];
    let i = 0;
    while (girls[i] || boys[i]){
        pairs.push([girls[i], boys[i]]);
        i++;
    }
    return pairs;
}

//2
function connectPairsAndThemes(pairs, themes){
    const pairsAndThemes = [];
    for(let i = 0; i < themes.length; i++){
        pairsAndThemes.push([pairs[i].join(' i '), themes[i]]);
    }
    return pairsAndThemes;
}

//3
function connectStudiensAndMarks(students, marks){
    const studiensAndMarks = [];
    for(let i = 0; i < students.length; i++){
        studiensAndMarks.push([students[i], marks[i]]);
    }
    return studiensAndMarks;
}

//4
function addMarksForProject(pairsAndThemes){
    const marksForProject = [];
    for(let i = 0; i < pairsAndThemes.length; i++){
        marksForProject.push(pairsAndThemes[i].concat(getRandomMark()));
    }
    return marksForProject;
}
function getRandomMark(min = 1, max = 5) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}


const pairs = getPairs(students);
console.log(pairs);

const pairsAndThemes = connectPairsAndThemes(pairs, themes);
console.log(pairsAndThemes);

console.log(connectStudiensAndMarks(students, marks));

console.log(addMarksForProject(pairsAndThemes));
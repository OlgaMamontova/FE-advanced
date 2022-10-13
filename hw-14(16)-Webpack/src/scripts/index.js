import "../styles/style.css";
import { getMaxDigit } from "../scripts/hw-3";
import { pairsAndThemes, addMarksForProject } from "../scripts/hw-4";
import { getMedian } from "../scripts/hw-5";
import { getBestStudent, students } from "../scripts/hw-6";
import { ukraine, getTotalTaxes } from "../scripts/hw-7";
import { student } from "../scripts/hw-8";
import { generateBlocksInterval } from "../scripts/hw-9(10)";
import "../styles/hw-9(10).css";
import {  } from "../scripts/hw-10(11)";
import bg_10 from "../assets/bg-10.jpg";
import "../styles/hw-10(11).css";
import { getRandomChinese } from "../scripts/hw-11(12)";
import { btn_allPlanets, btn_get_info, getAllPlanets, getInfo } from "../scripts/hw-12(13)";
import "../styles/hw-12(13).css";
import bg_12 from "../assets/bg-12.jpg";
import { fontGenerator } from "../scripts/hw-13(14)";
import "../styles/hw-13(14).css";

function createElementContent(parent){
    let element = document.createElement('div');
    parent.append(element);
    element.classList.add('content');
    return element;
};

createElementContent(document.body.querySelector('.hw-3')).innerHTML = `Найбільша цифра у числі 876 = ${getMaxDigit(876)}`;
createElementContent(document.body.querySelector('.hw-4')).innerHTML = `Випадкова оцінка за проект кожній парі: ${addMarksForProject(pairsAndThemes)}`;
createElementContent(document.body.querySelector('.hw-5')).innerHTML = `Медіана чисел: 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2 = ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`;
createElementContent(document.body.querySelector('.hw-6')).innerHTML = `Кращий студент по показнику середньої оцінки: ${getBestStudent(students)}`;
createElementContent(document.body.querySelector('.hw-7')).innerHTML = `Всього податків платять IT-спеціалісти в Україні: ${getTotalTaxes.call(ukraine)}$`;
createElementContent(document.body.querySelector('.hw-8')).innerHTML = `Інформація про студента: ${student.getInfo()}`;
generateBlocksInterval(document.body.querySelector('.hw-9'));
document.querySelector('.hw-10').style.background = `linear-gradient(rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url('${bg_10}') no-repeat center`;
getRandomChinese(4).then(res => createElementContent(document.body.querySelector('.hw-11')).innerHTML = `${res}`);
document.querySelector('.hw-12').style.background = `linear-gradient(rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url('${bg_12}') no-repeat center`;
btn_get_info.onclick = getInfo;
btn_allPlanets.onclick = getAllPlanets;
fontGenerator.next();
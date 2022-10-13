export const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  //1 повертає список предметів для конкретного студента
  function getSubjects(obj){
    let arrSubjects = Object.keys(obj.subjects).map((subject) => {
      subject = subject.replace('_', ' ');
      return subject[0].charAt(0).toUpperCase() + subject.slice(1);
    });
    return arrSubjects;
  };  

  //2 поверне середню оцінку по усім предметам для переданого студента
  function getAverageMark(obj){    
    let arrAllMarks = Object.values(obj.subjects).reduce((tmp, el, i, arr) => {
      return tmp.concat(arr[i]);
    }, []);
    let sum = arrAllMarks.reduce((sum, mark) => {
      return sum += mark;
    }, 0);
    return Math.round((sum / arrAllMarks.length) * 100) / 100;
  };

  //3 повертає інформацію загального виду по переданому студенту
  function getStudentInfo(obj){
    const {name, course} = obj;
    return {course, name, averageMark: getAverageMark(obj)};
  };

  //4 повертає імена студентів у алфавітному порядку
  function getStudentsNames(arr){
    return arr.reduce((tmp, student) => {
      return tmp.concat(student.name);
    }, []).sort();
  };

  //5 повертає кращого студента зі списку по показнику середньої оцінки
  export function getBestStudent(arr){
    let arrStudents = arr.map((student) => {
      student.averageMark = getAverageMark(student);
      return student;
    });
    arrStudents.sort((a, b) => {
      return b.averageMark - a.averageMark;
    });
    return arrStudents[0].name;
  };

  //6 повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень
  function calculateWordLetters(word){
    let obj = {};
    word.split('').forEach(letter => {      
      obj[letter] = (obj[letter] || 0) + 1;
    });
    return obj;
  };

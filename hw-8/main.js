class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.allMarks = [];
        this.dismissed = false;
    };
    getInfo() {
        return `Студент ${this.course}го курсу, університету -  ${this.university}, ${this.fullName}`
    };
    get marks(){
        if(this.dismissed === true || this.allMarks.length == 0){
            return null;
        }
        return this.allMarks;
    };
    set marks(mark) {
        if(this.dismissed === false){
            this.allMarks.push(mark);
        }        
    };
    getAverageMark(){
        if(this.allMarks.length > 0){
            return this.allMarks.reduce((sum, mark) => sum += mark, 0) / this.allMarks.length;
        } else {
            return null;
        }
    };
    dismiss() {
        this.dismissed = true;
        console.log('Студента виключено');
    };
    recover(){
        this.dismissed = false;
        console.log('Студента поновлено');
    };
};

 class BudgetStudent extends Student{
    constructor (university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 30000);
    }
    getScholarship(){
            if(this.getAverageMark() >= 4 && this.dismissed == false){
            console.log('Ви отримали 1400 грн. стипендії');
        }        
    }
 }

const student = new Student('КПІ', '1', 'Антон');
console.log(`Інформація про студента: ${student.getInfo()}`);
student.marks = 5;
student.marks = 4;
student.marks = 4;
student.marks = 5;
student.marks = 5;
console.log(`Оцінки: ${student.marks}`);
console.log(`Середня оцінка: ${student.getAverageMark()}`);
student.dismiss();
console.log(`Оцінки: ${student.marks}`);
student.recover();
console.log(`Оцінки: ${student.marks}`);

const budgetStudent = new BudgetStudent('НАУ', '3', 'Степан');
console.log(`Інформація про студента: ${budgetStudent.getInfo()}`);
budgetStudent.marks = 4;
budgetStudent.marks = 5;
budgetStudent.marks = 3;
console.log(`Оцінки: ${budgetStudent.marks}`);
console.log(`Середня оцінка: ${budgetStudent.getAverageMark()}`);
budgetStudent.dismiss();
console.log(`Оцінки: ${budgetStudent.marks}`);
budgetStudent.recover();
console.log(`Оцінки: ${budgetStudent.marks}`);
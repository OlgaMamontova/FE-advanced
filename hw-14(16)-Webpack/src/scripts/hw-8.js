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

export const student = new Student('КПІ', '1', 'Антон');

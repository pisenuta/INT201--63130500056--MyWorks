//63130500056 ธัญกร แถลงดี
//2.1
class Student{
    constructor(ID,firstname,lastname){ //สร้าง class Student เพื่อเก็บข้อมูลนักเรียน
        this._ID = ID; //เก็บรหัสนักศึกษา
        this._firstname = firstname; //เก็บชื่อจริง
        this._lastname = lastname; //เก็บนามสกุล
    }
}
let student1 = new Student(056,'Thanyakorn','Thalaengdi') //สร้าง object student1 จาก Class Student มีการส่ง parameter ID,firstname,lastname 

const term1 = [ //สร้าง object term1 เป็น Arrays เพื่อเก็บวิชาที่ลงทะเบียน โดยในแต่ละรายวิชาจะมีข้อมูลดังนี้ รหัสวิชา ชื่อวิชา หน่วยกิตและเกรดทีได้
    {
        code : 'INT201',
        courseName : 'Client-Side Web Programming I',
        credits : 2,
        grade : 'A'
    },
    {
        code : 'INT202',
        courseName : 'Server-Side Web Programming I',
        credits : 2,
        grade : 'C+'
    },
    {
        code : 'INT205',
        courseName : 'Database Management System',
        credits : 3,
        grade : 'B+'
    },
    {
        code : 'INT207',
        courseName : 'Network I',
        credits : 3,
        grade : 'B'
    },
    {
        code : 'INT214',
        courseName : 'Statistics for Information Technology',
        credits : 3,
        grade : 'B'
    },
    {
        code : 'GEN231',
        courseName : 'Miracle of Thinking',
        credits : 3,
        grade : 'A'
    },
    {
        code : 'LNG202',
        courseName : 'Basic Reading for Science and Technology',
        credits : 1,
        grade : 'A'
    }
]

//2.2
function enroll(){
    let num = 0;
    for(i = 0; i < Object.keys(term1).length; i++){ //วนลูปหา credits ของแต่ละวิชา
        num += term1[i].credits; // นำ num ไปบวกหน่วยกิตของแต่ละวิชา
    }
    return num;
}
/*console.log('The following are my source codes ans for 2.2');
console.log(enroll());
console.log('End of my ans.');*/

//2.3 หน่วยกิตที่คำนวณ
function countEnroll(){
    let num = 0
    for(i = 0; i < Object.keys(term1).length; i++){
        if(term1[i].grade != 'A','B+','B','C+','C','D+','D','F'){ //เช็คว่าเกรดเป็น 'A','B+','B','C+','C','D+','D','F' หรือไม่ ถ้าเป็นจะคำนวณหน่วยกิต แต่ถ้าไม่เป็นจะ return null
            return null;
        }
        num += term1[i].credits;
    }
    return num;
}
console.log(countEnroll());

//2.4 แต้มระดับคะแนน
function points(){
    let num = 0;
    let count = 0;
    for(i = 0; i < Object.keys(term1).length; i++){
        if(term1[i].grade == 'A'){ num = 4; num *= term1[i].credits;} //เช็คเกรด โดยถ้าเกรด A จะคำนวณ 4 * หน่วยกิตของวิชานั้น
        if(term1[i].grade = 'B+') {num = 3.5; num *= term1[i].credits; return num;}
        if(term1[i].grade = 'B') {num = 3 * term1[i].credits; return num;}
        if(term1[i].grade = 'C+') {num = 2.5 * term1[i].credits; return num;}
        if(term1[i].grade = 'C') {num = 2 * term1[i].credits; return num;}
        if(term1[i].grade = 'D+') {num = 1.5 * term1[i].credits; return num;}
        if(term1[i].grade = 'D+') {num = 1 * term1[i].credits; return num;}
        if(term1[i].grade = 'F') {num = 0 * term1[i].credits; return num;}
        num += count;
    }
}
console.log(points());
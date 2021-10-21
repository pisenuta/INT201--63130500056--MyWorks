
class Question{
    constructor(id,question='unknown'){
        this._id = id;
        this._question = question;
    }

    get id(){
        return this._id;
    }

    get question(){
        return this._question;
    }

    set id(id){
        this._id = id;
    }

    set question(question){
        if(question === 'unknown'||question === ''){
            this._question = 'unknown';
        }
    }
    displayQuestion(){
        return `id: ${this._id}, question: ${this._question} }`;
    }
}
let quest1 = new Question(1);
let quest2 = new Question(2,"what is ur name?");
//let quest3 = new Question(3,"");
quest2.question = '';
//console.log(quest1);
console.log(quest2);
//console.log(quest3);

Question.prototype.getQuestLength = function () {
    return this._question.length;
  };
  
  console.log(quest1.getQuestLength());
  console.log(quest2.getQuestLength());
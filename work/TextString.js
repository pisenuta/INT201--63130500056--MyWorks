let myString = 'Hello world';

function Reverse(myString){
    let result = ''; //string ว่าง เพราะถ้าเป็น null หรือ undifined มันจะเอาค่ามาต่อไม่ได้
    for(i = 0; i <= myString.length; i++){ //ใช้ <= เพราะจะได้นับตัวสุดท้ายพอดี
        result += myString.charAt(myString.length - i) //charAt = property แสดงผลที่เรากำหนด
    }
    console.log(result);
}

//Reverse(myString);


function Replace(myString){
    let result = '';
    for(i = 0; i < myString.length; i++){ //ใช้ < เพราะ <= จะไปนับ index ที่ 11 ซึ่งมันไม่มี *งง* หรือออ length = 11 ส่วน array = 10?
        if(myString[i] == 'A'||myString[i] == 'a'){
            result += '*';
        } else if(myString[i] == 'E'||myString[i] == 'e'){
            result += '*';
        } else if(myString[i] == 'I'||myString[i] == 'i'){
            result += '*';
        } else if(myString[i] == 'O'||myString[i] == 'o'){
            result += '*';
        } else if(myString[i] == 'U'||myString[i] == 'u'){
            result += '*';
        }
        else {
            result += myString[i];
        }
    }
    console.log(result);
}

/*Replace(myString);
Replace('fuck you');*/

function Replace2(myString){
    let result = '';
    for(i = 0; i < myString.length; i++){
        switch(myString[i]){
            case 'A','a':
                result += '*';
                break;
            case 'E','e':
                result += '*';
                break;
            case 'I','i' :
                result += '*';
                break;
            case 'O','o':
                result += '*';
                break;
            case 'U','u':
                result += '*';
                break;        
            default:
                result += myString[i];
                break;
        }
    }
    console.log(result);
}

/*Replace2(myString);
Replace2('fuck you');*/

function CountVowel(myString){
    let result = 0;
    for(i = 0; i < myString.length; i++){
        switch(myString[i]){
            case 'A','a':
                result++;
                break;
            case 'E','e':
                result++;
                break;
            case 'I','i':
                result++;
                break;
            case 'O','o' :
                result++;
                break;
            case 'U','u':
                result++
                break;    
            default:
                break;
        }
    }
    console.log(result);
} 
/*CountVowel(myString);
CountVowel('fuck you');*/


function menu(num , myString){
    switch(num){
        case 1:
            Reverse(myString);
            break;
        case 2:
            Replace2(myString);
            break;    
         case 3:
            CountVowel(myString);
            break;    
    }
}
menu(1,myString);
menu(2,'fuck you');
menu(3,myString);

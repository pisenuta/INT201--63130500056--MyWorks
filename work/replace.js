const vowels =['a','e','i','o','u'];
string = 'Hello world'
function Replace(string){
    let newString = '';
    string = string.toLowerCase();
    for(i = 0; i < string.length; i++){
        if(vowels.includes(string[i])){
            newString += '*';
        } else {
            newString += string[i];
        }
    }
    console.log(newString);
}
Replace(string);
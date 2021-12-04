let themeColor = localStorage.getItem('themeColor');
let theme = document.getElementById('theme');

var color = [['','var(--primary-color)'],
            ['#9f2d4b','#ce5374'],
            ['#694a6d','#966d9c'],
            ['#3f508d','#6477b9'], 
            ['#4e6a69','#729796'],
            ['#705448','#a07b6a'],
            ['#b84600','#ff8133']
];

var i = 0;

theme.addEventListener("click",() => {
    changeBG();
});

function changeBG(){
    themeColor = localStorage.getItem('themeColor');
    i = i < color.length ? ++i : 0;
    document.body.style.backgroundColor = color[i][1];
    theme.style.color = `${color[i][0]}`
    let button = document.getElementsByTagName('button')
    for(let bt of button){
        bt.setAttribute('style',`background-color: ${color[i][0]}; border-color: #fff`)
    }
    localStorage.setItem('themeColor',[color[i][1],color[i][0]]);
    if(themeColor === [color[i][1],color[i][0]]){
    document.body.style.backgroundColor = color[i][1];
    for(let bt of button){
        bt.setAttribute('style',`background-color: ${color[i][0]}; border-color: #fff`)
    }
    
}
};


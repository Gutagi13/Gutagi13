class Quiz{
    constructor(text,questions){
        this.text = text
        this.questions = questions
        this.questionIndex = 0
    }

    answer(isFirst){
        if(this.questionIndex>=this.questions.length-1){
            window.location.replace("https://gutagi13.github.io/Gutagi13/Site");
        }
        if(this.questions[this.questionIndex][1]==isFirst){
            this.questionIndex++
        }else{
            this.questionIndex=0
        }
        this.update()
    }

    update(){
        this.text.innerText = this.questionIndex+1 + "- "+this.questions[this.questionIndex][0]
    }
}

const one = document.querySelector('[data-one]')
const two = document.querySelector('[data-two]')
const text = document.querySelector('[data-text]')
const questions=[["Você é do grupo União Flasco?",true],
["Você joga LOL toda HORA!?",true],
["Para de ser viciado",true],
["O Andó é o melhor player de todos os jogos?",true],
["O geral é um canal usado para o uso correto?",false],
["Para de Fazer isso",true],
["Mentiroso! Responde \"Sim\" agora",true],
["Fim!",false],
["!!!!!",true],
["Ok, se chegou aqui fala BATATA",true]
]

const quiz = new Quiz(text,questions)
quiz.update()
one.addEventListener('click', button =>{
    quiz.answer(true)
})

two.addEventListener('click', button =>{
    quiz.answer(false)
})
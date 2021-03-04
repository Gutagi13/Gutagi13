class Quiz{
    constructor(text,questions){
        this.text = text
        this.questions = questions
        this.questionIndex = 0
    }

    answer(isFirst){
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
const questions=[["Você é o PH?",true],
["Você é ruim no quiz?",true],
["Você vai continuar ver One Piece?",false],
["Esse site é bom?",false],
["50% de Chance!",false],
["Para de Fazer isso",true],
["Mentiroso! Responde \"sim\" agora",true],
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
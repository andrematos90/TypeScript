interface curso{
    titulo:string;
    descricao:string;
    


}

interface cursoProgramacao extends curso{
    aulas: number;
    maxAlunos?:number;
}

interface cursoIngles extends curso{
    aulas: number;
    maxAlunos?:number;
}

let curso1 :cursoProgramacao={titulo:"Typescript", descricao: "curso de typescript", aulas:100, maxAlunos:50}
let curso2 :cursoProgramacao={titulo:"Javacript", descricao: "curso de javascript", aulas:200, maxAlunos:80}
let curso3 :cursoProgramacao={titulo:"java", descricao: "curso de java", aulas:100}
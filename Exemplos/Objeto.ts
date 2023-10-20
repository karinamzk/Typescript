interface TurmaModelo {
    nome: string
    qtd: number
    materia: string
    p_instrutora: string
}

const Turma: TurmaModelo = {
    nome: "Turma .NET",
    qtd: 32,
    materia: "FullStack C#",
    p_instrutora: "Jacque"
}

const Turma2: TurmaModelo = {
    nome: "Turma Js",
    qtd: 28,
    materia: "FullStack C#",
    p_instrutora: "Yuri"
}

console.log(Turma2)
console.log(Turma)
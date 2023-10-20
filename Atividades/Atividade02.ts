interface UsuarioModelo {
    id: number
    nome: string
    usuario: string
    senha: string
    telefone: string
}

const Usuario: UsuarioModelo ={
    id: 1,
    nome: "Sofia",
    usuario: "sofia123@gmail.com",
    senha: "admin1234",
    telefone: "+55 011 1234-5678"
}

const Usuario2: UsuarioModelo ={
    id: 2,
    nome: "Karina",
    usuario: "karina123@gmail.com",
    senha: "admin56789",
    telefone: "+55 011 5678-1234"
}

console.log(Usuario)

console.log(Usuario2)
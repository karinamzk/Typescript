interface Produto{
    nome: string
    preco: number
    categoria: string
}

const produto1: Produto = {
    nome: "Blusa",
    preco: 95.00,
    categoria: "Roupas"
}

const produto2: Produto = {
    nome: "'Samsung Smart TV 32' QLED The Frame 2023",
    preco: 2159.00 ,
    categoria: "Eletrônicos"
}

const listaProdutos: Produto[] = [produto1, produto2];

console.log(...listaProdutos);
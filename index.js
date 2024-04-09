const postgres = require('postgres')
require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
app.use(express.json())
app.use(cors())

const db = postgres('postgres://postgres.tetineicatwlrfnmgdgq:ZznWw6PNnRudyrE9@aws-0-sa-east-1.pooler.supabase.com:5432/postgres')

const itens = [
    {grupo: 'Fraldas', item: 'Fralda M', selecionado: false, nome: '', qtde: 1000000},
    {grupo: 'Fraldas', item: 'Fralda G', selecionado: false, nome: '', qtde: 1000000},
    {grupo: 'Quarto', item: 'Berço desmontável', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Quarto', item: 'Jogos de lençol para berço desmontável', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Quarto', item: 'Mantas', selecionado: false, nome: '', qtde: 3},
    {grupo: 'Quarto', item: 'Jogos de lençol para berço', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Quarto', item: 'Fronhas avulsas', selecionado: false, nome: '', qtde: 3},
    {grupo: 'Quarto', item: 'Travesseiro antirrefluxo', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Quarto', item: 'Travesseiros antissufocante', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Quarto', item: 'Posicionador para dormir', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Quarto', item: 'Mosquiteiro', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Quarto', item: 'Kits de fralda de boca', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Quarto', item: 'Ninho', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Quarto', item: 'Móbile', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Quarto', item: 'Kits de cabide', selecionado: false, nome: '', qtde: 3},
    {grupo: 'Maternidade', item: 'Tira-leite', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Maternidade', item: 'Potes para congelar leite materno', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Maternidade', item: 'Sacos para congelar leite materno', selecionado: false, nome: '', qtde: 3},
    {grupo: 'Higiene', item: 'Fraldas de tecido', selecionado: false, nome: '', qtde: 3},
    {grupo: 'Higiene', item: 'Pacotes de lenço umedecido', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Higiene', item: 'Cremes para assaduras', selecionado: false, nome: '', qtde: 3},
    {grupo: 'Higiene', item: 'Sabonetes líquidos', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Higiene', item: 'Colônia', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Higiene', item: 'Óleos', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Higiene', item: 'Kit escova e pente', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Higiene', item: 'Massageador de gengiva', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Higiene', item: 'Kit manicure', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Higiene', item: 'Garrafa térmica para higiene (avulsa)', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Roupinhas', item: 'Macacões tamanho RN', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'Macacões tamanho P', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'Macacões tamanho M', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Roupinhas', item: 'Macacões tamanho G', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Roupinhas', item: 'body manga longa RN', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'body manga longa P', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'body manga longa M', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Roupinhas', item: 'body manga longa G', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Roupinhas', item: 'Culotes (mijão) RN', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'Culotes (mijão) P', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'Culotes (mijão) M', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Roupinhas', item: 'Culotes (mijão) G', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Roupinhas', item: 'body manga curta RN', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'body manga curta P', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'body manga curta M', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Roupinhas', item: 'body manga curta G', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Roupinhas', item: 'Casaquinhos tamanho RN', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Roupinhas', item: 'Casaquinhos tamanho P', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Roupinhas', item: 'Casaquinhos tamanho M', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Roupinhas', item: 'Casaquinhos tamanho G', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Roupinhas', item: 'Conjuntos body/culote RN', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'Conjuntos body/culote P', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'Conjuntos body/culote M', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'Conjuntos body/culote G', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'Pares de meia', selecionado: false, nome: '', qtde: 6},
    {grupo: 'Roupinhas', item: 'Sapatinhos', selecionado: false, nome: '', qtde: 4},
    {grupo: 'Roupinhas', item: 'Luvas', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Roupinhas', item: 'Toucas', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Outros', item: 'Aspirador nasal', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Termômetro clínico', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Babá eletrônica', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Conta-gotas', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Prendedores de chupeta', selecionado: false, nome: '', qtde: 2},
    {grupo: 'Outros', item: 'Mordedor', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Tapete de atividades', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Cadeirinha de descanso', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Lixeira', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Livro diário do bebê', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Bolsa Térmica para Cólica', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Bebê conforto (cadeirinha para carro)', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Carrinho', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Jogos de lençol para carrinho', selecionado: false, nome: '', qtde: 3},
    {grupo: 'Outros', item: 'Colchonete para carrinho', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Travesseiro antirrefluxo para carrinho', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Capa de chuva para carrinho', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Trocador avulso de bolsa', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Banheira completa', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Rede para Banheira', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Almofada para banho', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Toalhas com capuz', selecionado: false, nome: '', qtde: 3},
    {grupo: 'Outros', item: 'Toalhas fralda', selecionado: false, nome: '', qtde: 3},
    {grupo: 'Outros', item: 'Trocador', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Termômetro para banho', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Banheira avulsa', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Suporte para banheira', selecionado: false, nome: '', qtde: 1},
    {grupo: 'Outros', item: 'Assento para banheira', selecionado: false, nome: '', qtde: 1}
]

const agruparItens = (array, chave) => {
    return array.reduce((agrupado, item) => {
        const valorChave = item[chave]
        agrupado[valorChave] = agrupado[valorChave] || { nome: valorChave, itens: [] }
        agrupado[valorChave].itens.push(item)
        return agrupado
    }, {})
}

const start = async () => {
    await db`CREATE TABLE IF NOT EXISTS itens (
        id SERIAL PRIMARY KEY,
        grupo TEXT,
        item TEXT,
        selecionado BOOLEAN,
        nome TEXT,
        qtde INTEGER,
        data DATE
    )`
    await db`CREATE TABLE IF NOT EXISTS pessoa (
        id SERIAL PRIMARY KEY,
        nome TEXT,
        itemId INTEGER,
        data DATE
    )`
    // let sql = 'INSERT INTO itens (grupo, item, selecionado, qtde, data)'
    // for (const [index, item] of itens.entries()) {
    //     sql += `
    //     select '${item.grupo}', '${item.item}', ${item.selecionado}, ${item.qtde}, '${new Date((new Date().setDate(index))).toISOString()}'
    //     where not exists (
    //         select 3
    //         from itens
    //         where item = '${item.item}'
    //     )
    //     union all`
    // }
    // sql = sql.substring(0, sql.length - 9)
    // console.log(sql)
}

start()

app.put('/itens', async (req, res) => {
    const { itensSelecionados } = req.body
    for (const selecionado of itensSelecionados) {
        await db`update itens set qtde = ${(selecionado.qtde - 1)} where id = ${selecionado.id}`
        await db`insert into pessoa(nome, itemId, data) values(${selecionado.nome}, ${selecionado.id}, ${new Date().toISOString()}::DATE)`
    }
    res.status(200).send('Lista de itens gravada com sucesso!');
});

app.get('/itens', async (req, res) => {
    const rows = await db`SELECT * FROM itens order by data`
    res.status(200).json(rows)
});

app.get('/pessoas', async (req, res) => {
    const rows = await db`SELECT p.nome, i.item presente FROM pessoa p join itens i on p.itemId = i.id order by p.data`
    const result = agruparItens(rows, 'nome')
    res.status(200).json(result)
});

app.listen(process.env.PORT, () => console.log(`Baboo Rodando na Porta ${process.env.PORT}`))
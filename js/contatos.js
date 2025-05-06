'use strict'


export async function getContatos() {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"
    const response = await fetch(url)

    const data = await response.json()
   
    return data
}

export async function getContatosPorNome(nome) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
    const response = await fetch(url)

    const data = await response.json()
    return data
}

export async function postContatos(contato) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok
}

async function putContato(contato, id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function deleteContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
       
    }
    const response = await fetch(url, options)
    return response.ok
}

const contato = {
        
    "nome": "Escola",
    "celular": "11 9 40028933",
    "foto": "123444.png",
    "email": "bestpart@gmail.com",
    "endereco": "Av. kkkadadawee 234",
    "cidade": "Jandira"
      
}

# NodeJS - O que é?
    Platafoorma que utiliza a engine do browser do chrome que entende JS no lado do backend.
    Utilizado para que possamos trabalhar o acesso a banco de dados e lógica da programação, servindo como uma APIRest para o frontEnd que poderá ser desenvolvido em Angular, React, etc...

## Instalar NodeJS
Utilizar o site [https://nodejs.org/en/]

Ou através do gerenciador de pacotes, conforme link abaixo. escolha a versão do seu SO.

[https://nodejs.org/en/download/package-manager/]

###### Verificar se está instalado

Abrir o terminal e verificar as versões do node e npm: 
    
    node -v

    npm -v
    

## Criando a estrutura
No terminal, dentro da pasta do projeto, iremos criar a api:
    
    mkdir node-api

###### Acessar a pasta
    
    cd node-api

###### Criar o **package.json**.
Utilizar o comando abaixo, permitindo trabalhar com dependências de outros fornecedores:
    
    npm init -y

###### Instalar a primeira dependência
Utilizar comando abaixo para instalar a primeira dependência chamada **express**:
    
    npm install express

O Express irá auxiliar na utilização de rotas.
Ele criou também um arquivo chamado **packge-lock.json**, que serve apenas para cache. Nao precisamos entende-lo.

###### Criar o arquivo principal 
Na raiz, criar o arquivo chamado: **server.js**.

###### Inserir o seguinte código: 
Começar com o código básico abaixo apenas para subir o server

    const express = require('express');

    const app = express();

    //Básicamente dizendo para a aplicação ouvir na porta 3001
    app.listen(3001);

###### Subir o server
    node server.js

###### Acesso ao server
Pronto. Podemos acessar através de **[http://localhost:3001/]**

## Configurando Rotas

###### Rota raiz /
Utilizar o comando abaixo dentro do arquivo **server.js** para retornar um resultado ao acessar a raiz do servidor via GET.

    app.get('/',(req, res) => {
        res.send('Hello RocketSeat');
    });

**req** receberá todos os parâmetros e **res** retornará um resutlado
Código final ficará assim: 

    const express = require('express');

    const app = express();

    app.get('/',(req, res) => {
        res.send('Hello RocketSeat');
    });

    app.listen(3001);

## Utilizando Nodemon
Faz utomaticamente a reinicialização do servidor sempre que alterarmos alguma coisa no código.

###### Instalar:
Código abaixo, utilizando **-D** para utilizar somente como dependência de desenvolviento.

    npm install -D nodemon

###### Config nodemon
Acessar o arquivo **package.json** e incluir a linha abaixo dentro da tag **scripts**.

    "dev" : "nodemon server.js"

Ficará assim o trecho: 

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev" : "nodemon server.js"
    },

###### Iniciar o server
A partir de agora utilizaremos o comando abaixo para iniciar o server

    npm run dev


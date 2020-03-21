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


    
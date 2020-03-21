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

## Instalando MongoDB
Próximo passo seria instalar o mongoDB (nosso banco de dados) na máquina. Porám, primeiramente instalaremos o **docker**.

## Instalar Docker
Permite fazer a conteinerização de recursos ou softwares dentro de nossa máquina.
O container servirá para que possamos fazer todas as instalações de desenvolvimento em uma máquina virtual, e quando precisarmos recuperar a mesma, estará prontinha. (em caso de formatação de PC por exemplo, não precisará instalar tudo novamente). O Mongo ficará instanciado dentro do container docker.

Baixar o docker através do site [https://docker.com] ou acesse diretamente a documentação em [https://docs.docker.com/]. Baixe a versão de seu SO.

**OBS:** Quando **Windows**, cuidado que no next-next ele questionará se deseja subir o servidor através de uma máquina virtual Windows ao invés de Lunux. Não marque esta opção, mantenha cmo Linux.

## Instalar o Mongo
Agora sim, instalaremos o MongDB dentro do container do Docker.

###### Start
Rodar o comando abaixo dentro do docker: 

    docker pull mongo

###### rodar o mongo
Comando abaixo:

    docker run --name mongodb -p 27017:27017 -d mongo

Comando **--name** é como chamaremos o mongo. Comando **-p** irá fazer o redirecionamento de portas (basicamente dissemos que quando acessarmos a porta 27017 de nossa máquina ele irá acessar a porta 27017 do mongoDB - sua porta padrão).

###### Verificar imagens (containers)
Rodar o comando abaixo para verificar quais imagens o docker está rodando e se está rodando o mongo

    docker ps

Observação: O comando abaixo também permite verificar outras imagens que possam não estar rodando no momento ou que estejam desligadas. Ex: Banco MariaBD, outra imagem do Mongo, etc...

    docker ps -a

Para **subir** uma aplicação que encontra-se desligada, utilizar o comando abaixo passando o nome da imagem:

    docker start mongodb

###### Verificar execução do MongoDB
Rodar o comando abaixo na máquina local e deverá acessar corretamente

    localhost:27017

##### Testar e verificar databases
Utilizar o software Robo3T que é um gerenciador SGDB.

##### Download Robo3T
Acessar [https://robomongo.org/download]

Instalar o Mongo3T e adicionar conexão ao banco de dados local.

**IMPORTANT!**
Não consegui instalar o docker em minha máquina, pois meu windows 10 é versão **Home** e não é suportado pelo Hiper-v. É comum que isto ocorra. 
1) Uma das possibilidades é criar no site do MongoDB um cloud gratuido, onde disponibilizam um container com MongoDB instalado e pronto para criar collections.
2) Porém, o ideal, seria pelo menos criar uma máquina virtual Linux utilizando Virtual Box por exemplo e fazer as instalações do Docker e MongoBD com os passos acima dentro desta máquina Linux mesmo, levantando um server de banco de dados local ou no servidor da rede interna.

## Conexão com Database


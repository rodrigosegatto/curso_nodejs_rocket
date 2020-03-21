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

```js
    const express = require('express');

    const app = express();

    //Básicamente dizendo para a aplicação ouvir na porta 3001
    app.listen(3001);
```

###### Subir o server
    node server.js

###### Acesso ao server
Pronto. Podemos acessar através de **[http://localhost:3001/]**

## Configurando Rotas

###### Rota raiz /
Utilizar o comando abaixo dentro do arquivo **server.js** para retornar um resultado ao acessar a raiz do servidor via GET.

```js
    app.get('/',(req, res) => {
        res.send('Hello RocketSeat');
    });
```

**req** receberá todos os parâmetros e **res** retornará um resutlado
Código final ficará assim: 

```js
    const express = require('express');

    const app = express();

    app.get('/',(req, res) => {
        res.send('Hello RocketSeat');
    });

    app.listen(3001);
```

## Utilizando Nodemon
Faz utomaticamente a reinicialização do servidor sempre que alterarmos alguma coisa no código.

###### Instalar:
Código abaixo, utilizando **-D** para utilizar somente como dependência de desenvolviento.

    npm install -D nodemon

###### Config nodemon
Acessar o arquivo **package.json** e incluir a linha abaixo dentro da tag **scripts**.

```js
    "dev" : "nodemon server.js"
```

Ficará assim o trecho: 

```js
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev" : "nodemon server.js"
    },
```

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

##### Instalar Mongoose
Mongose é um ORM que irá encapsular a lógica das operações do BD através do código.
Ao invés de utilizar querys com a linguagem natural do banco de dados (INSERT INTO....), utilizaremos apenas a linguagem JS para fazer Insert, update, delete, etc...

    npm install mongoose

##### Importar no arquivo server.js
Inserir a linha de código abaixo dentro do arquivo **server.js** para importar o mongoose.

```js
    const mongoose = require('mongoose');
```

##### Iniciando o Banco de Dados
Colocar linha de código com dados de conexão com banco:

```js
    mongoose.connect(
        'mongodb+srv://admin:admin@cluster0-nsbr3.mongodb.net/nodeapi?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
```

Substituir **nodeapi** pelo nome de seu banco de dados.
Substituir **admin:admin** pelo seu usuario e senha.

Arquivo ficará coomo abaixo e ao salvar não poderá retornar erro no console do terminal que está rodando o server nodeJs:
```js
    const express = require('express');
    const mongoose = require('mongoose');

    //Iniciando o App
    const app = express();

    //Iniciando o Banco de Dados
    mongoose.connect(
        'mongodb+srv://admin:admin@cluster0-nsbr3.mongodb.net/nodeapi?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    //Primeira Rota
    app.get('/',(req, res) => {
        res.send('Hello Segatto');
    });

    //Básicamente dizendo para a aplicação ouvir na porta 3001
    app.listen(3001);
```

## Criando Model
Model no padrão MVC é onde estarão contidas nossas classe de bancos de dados

###### Model Produto
Criar pasta:
    
    'src/models'

Criar um arquivo chamado **Product.js** dentro de **'src/models'**

###### Conteúdo Model Produto
Abaixo conteúdo do arquivo **Product.js**. É um modelo padrão para registro de um Model com mongoose.

```js
    const mongoose = require('mongoose');

    const ProductSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    mongoose.model('Product',ProductSchema);
```
##### Modulo require-dir
Instalar o módulo **require-dir** de maneira que a aplicação sempre inclua os Modules, por exemplo na aplicação, sem necessidade de incluirmos manualmente arquivo por arquivo Parecido com Autoloader do PHP que carrega classes automaticamente.

    npm install require-dir

##### RequireDir no arquivo server.js
Ajustar o arquivo server.js para que utilize o RequireDir e carregue os models

Incluir: 

    const requireDir = require('require-dir');

e: 

    requireDir('./src/models');

##### Arquivo server.js
Arquivo ficará como abaixo:

```js
    const express = require('express');
    const mongoose = require('mongoose');
    const requireDir = require('require-dir');

    //Iniciando o App
    const app = express();

    //Iniciando o Banco de Dados
    mongoose.connect(
        'mongodb+srv://admin:admin@cluster0-nsbr3.mongodb.net/nodeapi?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    //Carregando Modelos
    requireDir('./src/models');

    //Primeira Rota
    app.get('/',(req, res) => {
        res.send('Hello Segatto');
    });

    //Básicamente dizendo para a aplicação ouvir na porta 3001
    app.listen(3001);
```
## Restruturando os arquivos

##### Arquivo de Rotas
Criar o arquivo **routes.js** dentro de './src'

##### Conteúdo routes.js

```js
    const express = require('express');
    const routes = express.Router();

    //Rota raiz
    routes.get('/',(req, res) => {
        return res.send('Hello Segatto');
    });

    //Exportar as rotas
    module.exports = routes;
```
##### Conteúdo server.js
Restruturado código do **server.js** para que carregue o arquivo de rotas

```js
    const express = require('express');
    const mongoose = require('mongoose');
    const requireDir = require('require-dir');

    //Iniciando o App
    const app = express();

    //Iniciando o Banco de Dados
    mongoose.connect(
        'mongodb+srv://admin:admin@cluster0-nsbr3.mongodb.net/nodeapi?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    //Carregando Modelos
    requireDir('./src/models');

    // o Use é como um coringa que irá receber as requisições
    //Não é necessario o uso do 'api', somente se quisermos que usuário acesse /api/Products por exemplo.
    app.use('/api',require('./src/routes'));

    //Básicamente dizendo para a aplicação ouvir na porta 3001
    app.listen(3001);
```
##### Controllers
Criar pasta **controllers** em './src/';

##### Arquivo ProdutoController.js
Criar arquivo **ProdutoController.js** em './src/controllers'

##### Conteúdo ProdutoController.js

```js
    const mongoose = require('mongoose');
    const Product = mongoose.model('Product');

    module.exports = {
        //Método index
        async index(req, res) { 
            //Busca produtos
            const products = await Product.find();
            
            return res.json(products);
        }
    };
```

##### Rota para index de ProdutoController
Ajustar o arquivo de rotas para permitir que seja acessada o método index()

Incluir 

```js
    //Rota raiz de produtos
    routes.get('/products',ProductController.index);
```

```js 
    const express = require('express');
    const routes = express.Router();

    const ProductController = require('./controllers/ProductController');

    routes.get('/',(req, res) => {
        res.send('Hello Segatto');
    });

    //Rota raiz de produtos
    routes.get('/products',ProductController.index); 

    //Exportar as rotas
    module.exports = routes;
```

##### Acesso
Pronto. Pode ser acessada a rota através de [http://localhost:3001/api/products] ou [endereco:porta/api/products];

## Utilizando Insomnia



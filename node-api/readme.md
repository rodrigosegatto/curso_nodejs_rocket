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

Arquivo final:

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
Pronto. Pode ser acessada a rota através de [http://localhost:3001/api/products] ou [endereco:porta/api/products]

## Utilizando Insomnia 
Plugin para debug de ApI Rest (Semelhante ao POSTMAN)

Baixar em [https://insomnia.rest/]

Fazer uma requisição **GET** pelo Insomnia em: 

    http://localhost:3001/api/products

Deverá retornar um **JSON** com os Produtos cadastrados no Banco de Dados, se houver.

OU 

## Utilizando Postman 
Plugin para debug de ApI Rest (Semelhante ao INSOMNIA)

Baixar em [https://www.postman.com/]

Fazer uma requisição **GET** pelo POSTMAN em: 

    http://localhost:3001/api/products

Deverá retornar um **JSON** com os Produtos cadastrados no Banco de Dados, se houver.

## Criação de Registro BD

##### Método create
No arquivo **ProdutoController.js**, adicionar o método create após o index

```js
    const mongoose = require('mongoose');
    const Product = mongoose.model('Product');

    module.exports = {
        //Método index
        async index(req, res) { 
            //Busca produtos
            const products = await Product.find();
            
            return res.json(products);
        },

        //Método Create
        async create(req, res){
            //Cria o produto recebido via JSON
            const product = await Product.create(req.body);
            //Retorna um JSON com o produto criado
            return res.json(product);
        }
    };
```

##### Rota create
Adicionar dentro do arquivo **routes.js** a roda do create com método POST

```js
    routes.post('/products',ProductController.create);
```

##### Permitir receber JSON
No arquivo principal **server.js**, acrescentar a linha de código abaixo da inicialização do app.
Isto irá permitir que enviemos dados via JSON para a API

```js
    app.use(express.json());
```

##### Criando via POST
Através do Insomnia ou Postman, envie um JSON via post para o endereço abaixo, com o conteúdo que também encontra-se abaixo.

    [http://localhost:3001/api/products]

conteúdo Json Post:

```json
    {
        "title": "React Native 2",
        "description": "Build native with React",
        "url": "http://github.com/facebook/react-native"
    }
```
Deverá retornar um JSON com produto criado no Banco conforme retorno do nosso método create()
Para verificar envie uma nova requisição via GET e receba os produtos cadastrados.

## CRUD
Criar todas as rotas para formar um CRUD completo

##### Adicionar o método View
No arquivo **ProductController.js**, adicionar o método abaixo, junto com os demais para que seja possível consultar e retornar um produto pelo ID.

```js
    //Método View
    async view(req,res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
```
##### Rota view
Adicionar dentro do arquivo **routes.js** a roda do view com método GET

```js
    routes.get('/products/:id',ProductController.view);
```
##### Visualizando Produto via GET
Através do Insomnia ou Postman, envie GET com :ID do produto para o endereço abaixo.

    [http://localhost:3001/api/products/:id] 

ou já completo

    [http://localhost:3001/api/products/5e766094afc03b35d091ced6]

Deverá retornar o produto cadastrado no Banco com o ID passado

##### Adicionar o método Update
No arquivo **ProductController.js**, adicionar o método abaixo, junto com os demais para que seja possível realizar a atualização de um produto pelo ID passado e retornar o novo produto.

```js
    //Método update - atualizar produto
    async update(req,res){
        //Atualiza produto pelo ID e os dados recebidos no Body. New é para retornar novo produto atualizado
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    }
```
##### Rota update
Adicionar dentro do arquivo **routes.js** a rota do update com método PUT

```js
    routes.put('/products/:id',ProductController.update);
```
##### Atualizar Produto via GET
Através do Insomnia ou Postman, envie PUT passando :ID do produto  e também um JSON no body contendo o conteúdo a ser atualizado.

**Endereço**
    [http://localhost:3001/api/products/:id] 
    ou
    [http://localhost:3001/api/products/5e766094afc03b35d091ced6]

**conteúdo**

```json    
    {
        "title": "Empresa Rodrigo"
    }
```

Deverá retornar o produto atualizado no Banco com o ID passado e novo conteúdo

##### Adicionar o método delete
No arquivo **ProductController.js**, adicionar o método abaixo, junto com os demais para que seja possível realizar a remoção de um produto pelo ID passado.

```js
    //Método delete - remover produto
    async delete(req,res){
        //Remove produto pelo ID 
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
```
##### Rota Delete
Adicionar dentro do arquivo **routes.js** a rota do delete com método DELETE

```js
    routes.delete('/products/:id',ProductController.delete);
```
##### Deletar Produto via DELETE
Através do Insomnia ou Postman, envie DELETE passando :ID do produto.

    [http://localhost:3001/api/products/:id] 
    ou
    [http://localhost:3001/api/products/5e766094afc03b35d091ced6]

Deverá remover o produto do banco

## Paginação em Lista

##### Mongoose-paginate
Instalar mongoose-paginate para que os models retornem dados paginados

    npm install mongoose-paginate

##### Requerer mongoose-paginate no model
No arquivo **Product.js** do model

Na segunda linha adicionar:

```js    
    const mongoosePaginate = require('mongoose-paginate');
```

E ao final:

```js
    ProductSchema.plugin(mongoosePaginate);
```
Ficando o arquivo ao final desta forma: 

```js
    const mongoose = require('mongoose');
    const mongoosePaginate = require('mongoose-paginate');

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

    //Plugin de paginação
    ProductSchema.plugin(mongoosePaginate);

    mongoose.model('Product',ProductSchema);

```
##### Ajustar método index() com Paginate
Alterar método dentro do arquivo **ProductController.js**

```js
    async index(req, res) { 
        //Busca produtos normal
        //const products = await Product.find();

        //Busca de produtos com paginate
        const {page = 1} = req.query; //Se não receber query (parâmetros GET), page é 1 por padrão
        const products = await Product.paginate({}, {page, limit: 10}); //page (desestruturação) = page: page

        return res.json(products);
    }
```
Após, é possível fazer a requisição GET conforme já fizemos anteriormente, porém, agora passando parâmetros de paginação. 

    http://localhost:3001/api/products?page=1

## Adicionando CORS
Permitir que a aplicação seja acessada por outros aplicativos (Allow). 
Permitir outros domínios, diferentes de nosso servidor consultarem nossa API

##### Instalando CORS
Rodar comando no terminal:

    npm install cors

##### INstanciar cors
No arquivo **server.js** chamar o cors 
Incluir estas duas linhas dentro do arquivo.

```js
    const cors = require('cors'); // Primeiras linhas
    app.use(cors()); //Após Iniciar App
```

Desta forma está sendo liberado acesso a qualquer domínio. 
Pode-se ler a docuentação e dentro do cors() utilizar especificações para limitar o domínio que terá acesso a API. 

Veja o arquivo **server.js** ao final: 

```js 
    const express = require('express');
    const mongoose = require('mongoose');
    const requireDir = require('require-dir');
    const cors = require('cors');

    //Iniciando o App
    const app = express();
    app.use(express.json());
    app.use(cors());

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


# PRONTO
Curso finalizado, e foi possível aprender a criar uma API no padrão MVC utilizando NodeJS e alguns plugins.
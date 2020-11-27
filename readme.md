# Pontos de coleta

[![node version](https://img.shields.io/node/v/react)](https://img.shields.io/node/v/react)
![npm](https://img.shields.io/npm/v/react?label=react)
![npm](https://img.shields.io/npm/v/pg?label=Postgres)
<img src="https://img.shields.io/github/languages/top/tsunodajapa/square_of_squares">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Square%20of%20Squares&uri=https%3A%2F%2Fgithub.com%2Ftsunodajapa%2Fsquare_of_squares%2Fblob%2Fmain%2FInsomnia.json)

#### O Sistema square of Squares, permite cadastrar territórios passando algumas coordenadas, para cada território é possível pintar um 'quadrado' dentro especificando também as coordenadas. É possível acessar interações na aplicação através de uma Dashboard WEB.

### Funcionalidades e Padrões de Arquitetura Utilizada:

    1. Arquitetura SOLID;
    2. ORM para comunicação com banco de dados;
    3. MongoDB para log de erros;
    4. UUID como identificador de cada tabela.
    5. TypeScript
    6. Styles-Component

## Requisitos de instalação

- React >= 17.0.1
- npm >= 6.0.0
- node >= 10.0
- Postgres
- MongoDB


## Como utilizar

#### Dentro da API (cd API), existe um arquivo <b>ormconfig.example.json</b> na raiz do projeto. crie um arquivo no mesmo padrão dele porém sem o example (ormconfig.example.json -> ormconfig.json) e altere os seguintes dados de acordo com o seu banco POSTGRES: host, port, username, password, database e a port do mongodb caso não seja a 27017. As demais informações desse arquivo já está configurado.

> Sem a configuração desse arquivo corretamente, a api não funcionará.

<br>

## Iniciando a API

#### Primeiro alterne para o diretório da API:
```
cd api
```

#### Execute o comando para instalações de dependências da API:

```
yarn

ou

npm install
```

#### Execute o comando para rodar as Migrations, que criará as tabelas no banco:
> É importante que o passo primeiro passo da sessão "Como Utilizar" esteje apontando para o banco corretamente.

```
npm run typeorm migration:run

ou

yarn typeorm migration:run
```

#### Se tudo ocorreu bem até aqui, basta iniciar a API com o seguinte comando:

```
npm run dev:server

ou

yarn dev:server
```

## Iniciando o Web

#### Primeiro alterne para o diretório WEB:
> Caso esteja na pasta da API, não esqueça de retornar uma pasta primeiro (cd..)

```
cd web
```

#### Execute o comando para instalações de dependências da web:

```
yarn

ou

npm install
```

#### Execute o comando para iniciar o site:

```
yarn start

ou

npm start
```

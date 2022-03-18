# challenge-node-fullcycle-course

Desafio do curso **Full Cycle** da **Code Education** que consiste em criar um docker-compose que contenha:

- uma aplicação nodejs
- banco de dados mysql
- nginx como proxy reverso

## App

Aplicação nodejs que lista os nomes cadastrados no banco de dados.

| Endpoints disponíveis | método |                                |
| --------------------- | ------ | ------------------------------ |
| localhost:8080        | GET    | lista nomes                    |
| localhost:8080/{name} | POST   | insere o name na tabela people |

A tabela já vem preenchida com alguns nomes.

## Banco de dados

Banco mysql com scripts para criação da tabela **people** e inserção inicial de nomes no database **challenge**.

O docker-compose cria dois bind mounts:
|||
|---|---|
|./mysql/data:/var/lib/mysql | diretório de dados do mysql|
|/mysql/scripts:/docker-entrypoint-initdb.d|diretório com scripts que serão executados ao subir o container pela primeira vez|

## nginx

Proxy reverso, escutando a porta 8080. O arquivo nginx.conf contém as configurações do nginx usadas ao fazer o build

## Uso

`docker-compose up -d`

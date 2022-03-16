# challenge-node-fullcycle-course

Desafio do curso **Full Cycle** da **Code Education** que consiste em criar um docker-compose que contenha:

- uma aplicação nodejs
- banco de dados mysql
- nginx como proxy reverso

## App

Aplicação nodejs que lista os nomes cadastrados no banco de dados.

## Banco de dados

Banco mysql com script para criação da tabela **people** no database **challenge**.

O docker-compose cria dois bind mounts:
|||
|---|---|
|./mysql/data:/var/lib/mysql | diretório de dados do mysql|
|/mysql/scripts:/docker-entrypoint-initdb.d|diretório com scripts que serão executados ao subir o container pela primeira vez|

## nginx

Proxy reverso, escutando as portas 80 e 8080. O arquivo nginx.conf contém as configurações do nginx usadas ao fazer o build

## Uso

`docker-compose up -d`

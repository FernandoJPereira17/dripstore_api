# dripstore_api

criação do projeto no Github
criação do server.js

Instalações de dependências:

npm init -y
npm i express nodemon pg sequelize cors dotenv cypress


site: neon.tech
criação do banco de dados...
arquivo de configuração e arquivo dotenv

package conferir se foi criado todas as dependências...
configurar  "type":"module",
            "start":"nodemon server.js"

Sequelize
Evita sql injection...
Manuntenção...
A nível de segurança...

#Arquivo env... para teste

PGHOST='ep-ancient-mouse-a5cwwz70-pooler.us-east-2.aws.neon.tech'
PGDATABASE='dripstore_db'
PGUSER='dripstore_db_owner'
PGPASSWORD='YJevD5IGE2Qr'

https://dontpad.com/dc_20234
Teste do Recruit Day

Amazon WebServices - Elastic Load Balancer (ELB)

JWT - Autenticar API

Autorização ( Fazer Cadastro ) 

Autenticação ( Login e Senha )

API gera um JWT (Json Web Token) -> 

Criacao das Tabelas - (Banco Postgres - Render - NeonTech)

CREATE TABLE IF NOT EXISTS public.usuario
(
    id SERIAL primary key,
    nome varchar (255) NOT NULL,
    email varchar (100) NOT NULL UNIQUE,
	senha varchar (100) NOT NULL,
	data_cadastro timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
	data_atualizacao timestamp without time zone DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS public.perfil
(
    id SERIAL primary key,
    nome varchar (255) NOT NULL,
    codigo varchar (255) NOT NULL
)

CREATE TABLE IF NOT EXISTS public.usuario_perfil
(
    id SERIAL primary key,
    id_usuario,
    id_perfil
)

CREATE TABLE IF NOT EXISTS public.produtos
(
    id integer NOT NULL DEFAULT nextval('produtos_id_seq'::regclass),
    nome character varying(50) COLLATE pg_catalog."default" NOT NULL,
    descricao text COLLATE pg_catalog."default",
    desconto numeric DEFAULT 0,
    preco numeric NOT NULL,
    ativo boolean DEFAULT true,
    categoria character varying(50) COLLATE pg_catalog."default",
    data_cadastro timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT produtos_pkey PRIMARY KEY (id)
)

select * from produtos;
select * from produtos where id=1;

___________________________________________________________________________

JWT - JSON WEB TOKEN

npm i bcryptjs -S


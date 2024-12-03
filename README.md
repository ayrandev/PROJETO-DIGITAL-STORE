1.	Visão Geral e Objetivo:
Este projeto é um aplicativo full stack desenvolvido em react js e mysql com o intuito de colocar em prática todos conhecimentos adquirido no curso de desenvolvedor web full stack. 
•	Front-end: seguimos o modelo disponibilizado no figma, de acordo com os critérios de avaliação do curso, com os objetivo de recriar uma interface de usuário interativa simulando uma loja de sapatos onde o que o cliente pode visualizar uma Home Page que contem, produtos em alta, promoções, caixa de busca, menu interativo, área de login e cadastro, uma página renderizando todos os produtos disponibilizado pela loja, onde, o usuário pode filtrar os produtos em diversos aspectos, como menor e maior preço, uma página que disponibiliza os detalhes do produto escolhido, juntamente com suas opções disponíveis, como, cor e tamanho.
•	Back-end:  Foi criado o para gerenciamento de produtos da loja de sapatos. Ele permite cadastrar, atualizar e excluir produtos no banco de dados MySQL, já configurado para conexão com o front-end.
1.1	Tecnologias:

  •	Front-end: 
o	React - Biblioteca JavaScript – 
o	Tailwind CSS - Framework de estilização

  •	Back-end: 
o	MySQL: Banco de dados relacional.
o	Sequelize: ORM para interação com o banco de dados.
o	Insomnia: Testes e validação de endpoints.
o	Encrypt (bcrypt): Para criptografar informações sensíveis.

2.	Instalação e Configuração:

  •	Front-end: 
Antes de iniciar, verifique se você já possui as seguintes ferramentas instalados na sua máquina: - Node.js - NPM - Gerenciador de pacote

2.1 Clonando o Repositório:
No seu CMD, clone o repositório para a sua máquina local usando o comando: "git clone https://github.com/ayrandev/PROJETO-DIGITAL-STORE.git" - Passo 2: Use o comando  "cd PROJETO-DIGITAL-STORE " e "cd FRONT-END"  para entrar na pasta do projeto e em seguida use o comando "code" para abrir no seu versionador de código.

2.3 Instalando dependências:
Com seu versionador aberto, acesse o CMD do mesmo e use o comando "npm install"

2.4 Executando o Projeto:
No CMD use o comando "npm run dev", o aplicativo estará disponível no link http://localhost:3000 que aparecerá no CMD.

2.5 Estrutura de Diretórios:
A estrutura de diretórios e arquivos do projeto é a seguinte:
/node_modules
/public
/src
    /assets               # Imagens, ícones.
    /components           # Componentes reutilizáveis
    /pages                # Componentes de páginas
  App.jsx                 # Arquivo central da aplicação
  main.jsx                # Arquivo responsável por renderizar o componente principal (App.jsx)
  routes.jsx              # Arquivo responsável por todas as rotas disponíveis no projeto
index.html                # Arquivo HTML principal
package.json              # Configurações do projeto e dependências
READE.me                  # Documentação do projeto front-end


  •	Back-end: 

2.6 Clonando o Repositório:
No seu CMD, clone o repositório para a sua máquina local usando o comando: "git clone https://github.com/ayrandev/PROJETO-DIGITAL-STORE.git" - Passo 2: Use o comando "cd PROJETO-DIGITAL-STORE " e "cd BACK-END" para entrar na pasta do projeto e em seguida use o comando "code" para abrir no seu versionador de código.
Obs: Se já tiver clonado o projeto a partir do FRONT-END basta entrar na pasta do BACK-END.

2.7 Instalando dependências:
Com seu versionador aberto, acesse o CMD do mesmo e use o comando "npm install"

2.8 Configure as variáveis de ambiente no arquivo:

 
# DATABASE CONFIG
DB_DIALECT=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=


# DIRECTORIES
UPLOAD_BASE_DIR=public

# APP CONFIGS
APP_HOSTNAME=localhost
APP_POST=3000
APP_SCHEMA=http 
SECRET=
SALT=10PORT=3000
 

2.9 Inicialize o servidor para testar:

No CMD use o comando "npm run server", o aplicativo estará disponível para testar e validar os endpoints no insomnia de  que aparecerá no CMD.

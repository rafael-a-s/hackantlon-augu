📘 Projeto Next.js
Este projeto é uma aplicação desenvolvida com Next.js. Abaixo estão as instruções para configurar, executar e acessar tanto a aplicação quanto o servidor JSON localmente.

🛠️ Pré-requisitos
Certifique-se de ter os seguintes itens instalados:

Node.js (recomendado: LTS)
NPM (gerenciador de pacotes que acompanha o Node.js) ou Yarn
🚀 Como Executar o Projeto Next.js
1. Clone o Repositório
Abra o terminal e execute o seguinte comando para clonar o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
2. Acesse a Pasta do Projeto
bash
Copiar código
cd seu-repositorio
3. Instale as Dependências
Se você está usando NPM:

bash
Copiar código
npm install
Se você está usando Yarn:

bash
Copiar código
yarn install
4. Execute o Projeto
Para iniciar o servidor de desenvolvimento:

bash
Copiar código
npm run dev
# ou
yarn dev
🌐 Acessar a Aplicação
Após executar o comando acima, o servidor estará disponível na seguinte URL:

http://localhost:3000

Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.

⚙️ Executando o JSON Server
Se o projeto depende de uma API JSON Server para simular um backend local, siga os passos abaixo para configurar e executar o JSON Server.

1. Acesse a Pasta do Servidor JSON
Navegue até a pasta onde o JSON Server está configurado (por exemplo, uma pasta jsonserver):

bash
Copiar código
cd json-server
2. Instale as Dependências
Se você está usando NPM:

bash
Copiar código
npm install
Se você está usando Yarn:

bash
Copiar código
yarn install
3. Execute o JSON Server
Inicie o servidor JSON com o seguinte comando:

bash
Copiar código
json-server --watch db.json --port 3001
Isso fará com que o JSON Server escute as alterações no arquivo db.json e disponibilize a API localmente na porta 8080.

4. Acessar a API JSON
Depois de iniciar o JSON Server, você pode acessar os dados na seguinte URL:

http://localhost:8080

🔧 Comandos Disponíveis
npm run dev / yarn dev: Executa o servidor de desenvolvimento Next.js.
npm run build / yarn build: Cria uma versão otimizada para produção.
npm start / yarn start: Executa a aplicação em modo produção (após o build).
npm run lint / yarn lint: Verifica a aplicação em busca de problemas com linting.
npx json-server --watch db.json --port 8080: Inicia o servidor JSON na porta 8080.
🛑 Como Parar o Servidor
Servidor Next.js: Pressione CTRL + C no terminal para interromper.
JSON Server: Pressione CTRL + C no terminal para interromper.
📝 Licença
Este projeto está licenciado sob a licença MIT.

📄 Contato
Caso tenha alguma dúvida ou sugestão, entre em contato:

Seu Nome: seu-email@exemplo.com
GitHub: https://github.com/seu-usuario

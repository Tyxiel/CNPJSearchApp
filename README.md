# CNPJ Finder - Consultor de Empresas Brasileiras

Uma aplicação web simples para consultar informações públicas de empresas brasileiras utilizando o número do CNPJ. Os dados são obtidos através da BrasilAPI.

## Sobre o Projeto

O CNPJ Finder é uma ferramenta desenvolvida para facilitar a busca por dados cadastrais de empresas. Ao inserir um número de CNPJ válido, a aplicação se conecta à BrasilAPI, recupera as informações correspondentes e as exibe de forma organizada na interface, separando-as em "Situação Cadastral" e "Localização".

## Funcionalidades

* Input para inserção do número de CNPJ.
* Consulta de dados da empresa em tempo real via BrasilAPI.
* Exibição de informações como:
    * CNPJ formatado
    * Razão Social
    * Nome Fantasia
    * Situação Cadastral e data da verificação
    * CNAE Fiscal e descrição
    * Telefone
    * Endereço completo (CEP, Logradouro, Bairro, Município, UF)
* Navegação interna suave entre as seções de informação.
* Destaque do link ativo na barra de navegação.

## Tecnologias Utilizadas

* **HTML5**: Estrutura da página de consulta e exibição de dados.
* **CSS3**: Estilização e layout.
* **JavaScript (ES6+)**: Lógica para realizar a requisição à API (usando `Workspace`), manipular o DOM para exibir os dados, e interatividade da navegação.
* **BrasilAPI**: API pública para consulta de dados de CNPJ. (https://brasilapi.com.br/)
* **Boxicons**: Para os ícones utilizados na interface. (https://boxicons.com/)

## Como Usar/Testar

1.  Clone este repositório: `git clone https://github.com/Tyxiel/CNPJSearchApp.git`
2.  Navegue até o diretório do projeto.
3.  Abra o arquivo `index.html` no seu navegador.
4.  Digite um número de CNPJ válido (apenas números) no campo indicado e aguarde o carregamento das informações.

Ou acesse a demonstração online: [CNPJ Search App](https://tyxiel.github.io/CNPJSearchApp/)

## Licença

Este projeto é licenciado sob a **GNU Affero General Public License v3.0**.

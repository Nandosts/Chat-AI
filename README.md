# Projeto OpenAI Rails

Projeto em Ruby on Rails 7 que implementa algumas funcionalidades do OpenAI.

- `figaro` - Para gerenciamento de configurações
- `httparty` - Para requisições HTTP
- `ruby-openai` - Para acesso à API do OpenAI
- `rails-assets-axios` - Para requisições HTTP assíncronas

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- **Geração de imagem a partir de texto**: utiliza a API GPT-3 do OpenAI para gerar uma imagem a partir de um texto inserido pelo usuário.
- **Geração de variantes de imagens**: utiliza a API DALL-E do OpenAI para gerar variantes de uma imagem inserida pelo usuário.
- **Chat de inteligência artificial**: implementa um chat com uma inteligência artificial treinada com a API GPT-3 do OpenAI, permitindo ao usuário conversar com a IA.

## Uso
### **Geração de imagem a partir de texto**
Digite um texto na página de geração de imagem e clique no botão "Gerar imagem". A imagem será exibida abaixo do formulário.

### **Geração de variantes de imagens**
Faça upload de uma imagem na página de variantes de imagem e clique no botão "Gerar variações". As imagens geradas serão exibidas abaixo do formulário.

### **Chat de inteligência artificial**
Acesse a página de chat para conversar com a inteligência artificial.
## Configuração

Antes de iniciar o projeto, você deve adicionar sua chave de API do OpenAI ao arquivo `application.yml`, utilizando a variável de ambiente `OPENAI_API_KEY`. Exemplo:

```
OPENAI_API_KEY: sua_chave_de_api_aqui
```

## Como executar o projeto

1. Clone o repositório: `git clone https://github.com/seu-usuario/openai-rails.git`
2. Instale as dependências: `bundle install`
3. Configure as variáveis de ambiente: `bundle exec figaro install`
4. Adicione sua chave de API do OpenAI ao arquivo `application.yml` (veja a seção de configuração acima)
5. Inicie o servidor: `rails server`
6. Acesse o projeto em `http://localhost:3000`

## Contribuindo

Contribuições são sempre bem-vindas! Caso queira contribuir com este projeto, siga os seguintes passos:

1. Faça um fork do repositório
2. Crie um branch para sua feature: `git checkout -b minha-feature`
3. Faça suas alterações
4. Envie suas alterações: `git push origin minha-feature`
5. Crie um Pull Request

## Licença

Este projeto está sob a licença MIT.

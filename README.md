# 🌱Quer Plantar
Este é o repositório oficial do projeto Quer Plantar, desenvolvido pelo curso de BCC do IFSP Campus Salto. Aqui, compartilhamos os resultados das nossas pesquisas, cultivos e dicas de plantio. O projeto é open-source, e estamos sempre abertos a novas colaborações. Participe e contribua com suas próprias pesquisas e melhorias diretamente no site. Junte-se a nós e venha desenvolver conosco!
### ⭐⭐⭐Lembre-se de favoritar o projeto!⭐⭐⭐

# Como Contribuir com este Projeto

Este guia fornece as etapas para contribuir com este projeto a partir de um fork no GitHub.

## Passo a Passo

### 1. 🍴Fazer um Fork do Repositório
Primeiro, você precisa fazer um fork deste repositório:

- Vá até a página principal do repositório.
- Clique no botão **"Fork"** no canto superior direito.
- Isso criará uma cópia do repositório na sua conta do GitHub.

### 2. ⚔Clonar o Repositório (Fork) Localmente
Agora que você fez o fork, é hora de clonar o repositório para o seu computador:

- No repositório forkado, clique no botão verde **"Code"**.
- Copie a URL fornecida (HTTPS ou SSH).
- No seu terminal, digite o comando abaixo para clonar o repositório:

```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
- Entre na pasta do repositório:
```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
### 3. 🌿Criar uma Branch para suas Alterações
Sempre trabalhe em uma nova branch para manter as alterações organizadas:

-Crie uma nova branch com o seguinte comando:

```bash
git checkout -b minha-nova-branch
```
### 4. 👩‍💻Editar o Código
Agora, você pode abrir os arquivos do projeto no seu editor de código preferido (por exemplo, Visual Studio Code) e fazer as alterações desejadas.

### 5. 📑Commitar as Alterações
Após fazer as alterações, siga estas etapas para salvar as mudanças localmente:

- Adicione as alterações ao Git:

```bash
git add .
```
- Faça um commit com uma mensagem descritiva:

```bash
git commit -m "Descreva as alterações que você fez"
```
### 6. 📩Enviar as Alterações para o Repositório no GitHub (Push)
Agora que suas alterações estão salvas localmente, envie-as para o GitHub:

-Use o comando push para enviar suas alterações para a branch recém-criada:

```bash
git push origin minha-nova-branch
```
### 7. 🏁Criar um Pull Request
Depois de enviar suas mudanças para o GitHub, você precisa criar um Pull Request para solicitar que suas alterações sejam incorporadas ao projeto original.

- Vá até a página do seu repositório no GitHub.
- Clique no botão "Compare & pull request" que aparece após o push.
- Adicione uma descrição clara e concisa do que você alterou.
- Clique em "Create pull request".

## Revisão e Aprovação
Agora, o mantenedor do repositório original irá revisar seu Pull Request. Se as mudanças estiverem corretas, ele fará o merge e suas contribuições farão parte do projeto.

# 🔃Atualizar o Seu Fork com o Repositório Original
Se o repositório original for atualizado enquanto você trabalha, é importante manter o seu fork atualizado.

Adicione o repositório original como um "remote" (controle remoto) no seu projeto:

```bash
git remote add upstream https://github.com/usuario-original/nome-do-repositorio.git
```
Busque as atualizações do repositório original:
```bash
git fetch upstream
```

Faça o merge das atualizações na sua branch main ou master:
```bash
git checkout main
git merge upstream/main
```
Envie essas atualizações para o seu fork no GitHub:
```bash
git push origin main
```
Com isso, seu fork estará sincronizado com o repositório original.


# Landing Page com Encurtador de URL

Esse é um projeto que faz parte do catálogo de desafios do site [Frontend Mentor](https://www.frontendmentor.io/). O desafio é criar uma landing page responsiva que tem a funcionalidade de encurtar URLs usando a API [Shrtcode API](https://shrtco.de/docs).

Acesse por aqui e faça um teste: https://site-encurtador-url.vercel.app/
## Funcionalidades

- Responsividade
- Consumo de API
- Encurtamento de URL
- Armazenamento em Local Storage (Armazenamento do navegador)
- Botão para copiar a url encurtada


## Tecnologias utilizadas

**Frontend:** React, Typescript e Styled Components

**Backend:** API [Shrtcode](https://shrtco.de/docs)


# Funcionalidades explicadas


## Consumo da API e Armazenamento em Local Storage

Componente: ShortenCard

Caminho: `\src\components\ShortenCard\index.tsx`

```javascript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
        setError(value ? "" : "Please add a link");
        return null;
    }

    const url = "https://api.shrtco.de/v2/shorten?url=" + value;
    const res = await fetch(url, {method: "POST"});
    const shortLink = await res.json();
        
    if (!shortLink.ok) {
        setError(shortLink.error);
    } else {
        const linksArray: ILinks[] = JSON.parse(
            localStorage.getItem("links") || "[]"
        );
        linksArray.push({
            link: value,
            shortLink: shortLink.result.full_short_link
        });
        setLinks(linksArray);
        localStorage.setItem("links", JSON.stringify(linksArray));
    }
}

useEffect(() => {
    const linksStoraged: ILinks[] = JSON.parse(
        localStorage.getItem("links") || "[]"
    );

    setLinks(linksStoraged);
    setLoading(false);
}, []);
```

A função `handleSubmit` faz o envio do formulário e armazena a resposta no `localStorage`.

### Validar dados

```javascript
if (!value) {
    setError(value ? "" : "Please add a link");
    return null;
}
```

Esse trecho faz uma simples validação para verificar se um valor foi enviado no input.

### Consumo da API

```javascript
const url = "https://api.shrtco.de/v2/shorten?url=" + value;
const res = await fetch(url, {method: "POST"});
const shortLink = await res.json();
```

Esse trecho faz a requisição para a API usando a url que será encurtada e converte o resultado (url encurtada) de JSON para objeto javascript.

### Armazenamento no Local Storage

```javascript
if (!shortLink.ok) {
    setError(shortLink.error);
} else {
    const linksArray: ILinks[] = JSON.parse(
        localStorage.getItem("links") || "[]"
    );
    linksArray.push({
        link: value,
        shortLink: shortLink.result.full_short_link
    });
    setLinks(linksArray);
    localStorage.setItem("links", JSON.stringify(linksArray));
}
```

Esse trecho verifica as informações recebidas se estão ok. E então caso estejam, o programa puxa o que está no `localStorage` e caso não tenha nada retorna um array vazio.

Então ele adiciona o objeto que contém o link original e o link encurtado no array de objetos e adiciona no `localStorage`.

### Carregar os dados do Local Storage

```javascript
useEffect(() => {
    const linksStoraged: ILinks[] = JSON.parse(
        localStorage.getItem("links") || "[]"
    );

    setLinks(linksStoraged);
    setLoading(false);
}, []);
```

Por fim eu utilizo o hook `useEffect` para carregar os links que estão no `localStorage` e mostrar na tela.
## Copiar link encurtado

Componente: ShortenedCard

Caminho: `\src\components\ShortenedCard\index.tsx`

```javascript
const inputShortLink = useRef<null | HTMLInputElement>(null);
const copyToClipboard = () => {
    inputShortLink.current?.select();
    inputShortLink.current?.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputShortLink.current?.value || "");
}
```

A função `copyToClipboard` é a responsável pela funcionalidade de copiar. Eu criei ela com base na documentação do W3CSchools [How to copy to clipboard](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp) porém com adaptações para React e para o Typescript.

Para selecionar o `input` utilizei o hook `useRef` que pode ser usado para acessar um elemento DOM facilmente. Ele faz referência ao seguinte elemento:

`<input ref={inputShortLink} type="url" defaultValue={shortLink}/>`

O objeto `current` me dá acesso ao input e seu valor. E o `navigator` me permite acessar opções do navegador.

## Aprendizado

Com esse projeto pude exercitar meus conhecimentos em React como:

- Hooks
- React com Typescript
- Props
- Componentização

Também pude aprender conceitos do Styled Components como:

- Extender estilos de componentes
- Passar props para o componente de estilo


## Instalação

Clone esse projeto para sua máquina e instale.

```bash
  git clone https://github.com/AlvaroEmanuel20/site-encurtador-url.git
  npm install
  npm start
```
    
## 🚀 Autor
Olá me chamo Álvaro e sou um Desenvolvedor Web e estudante de Engenharia de Software. Redes sociais:

- Github: [AlvaroEmanuel20](https://github.com/AlvaroEmanuel20)
- Linkedin: [@alvaroemanuel20](https://www.linkedin.com/in/alvaroemanuel20)
- Instagram: [@alvaro1dias](https://instagram.com/alvaro1dias)
- Twitter: [@alvaro1dias](https://twitter.com/alvaro1dias)

### Contato

- E-mail: contato@alvaroemanuel.com
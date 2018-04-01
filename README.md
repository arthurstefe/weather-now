# Weather Now

Esse projeto foi gerado com  [Angular CLI](https://github.com/angular/angular-cli) versão 1.2.6.
Para consultas sobre o tempo foi utilizada a api [OpenWeatherMap](https://openweathermap.org/)

## Development server

Execute `ng serve` na pasta raiz do projeto. Navegue até `http://localhost:4200/`.

## Build

Execute `ng build` para gerar a distribuição. Os arquivos estarão em  `dist/`. Use o `-prod` flag para um build de produção.

## Uso

O aplicativo Weather Now foi desenvolvido para exibição de informações sobre o tempo de 3 cidades, Nuuk - Gl, Urubici - BR e Nairobi - KE, na versão desktop ao passar o mouse sobre um dos cards serão exibidas as informações de umidade e pressão. Na versão mobile, basta tocar o o card para que as informações sejam exibidas. 

As informações do tempo serão atualizadas a cada 10 minutos e também será mantido um cache no navegador por 10 minutos.


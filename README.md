Este repositório contém o **aplicativo mobile** do projeto de TCC “Plataforma de Artes Marciais”, desenvolvido utilizando **React Native com Expo**.  
O app funciona como uma versão mobile do site oficial, carregando o conteúdo via **WebView** e conectando diretamente com o **backend hospedado na Vercel**.

---

## 📌 Clonar o repositório

Antes de instalar as dependências, você precisa clonar o projeto:

```bash
git clone https://github.com/helio000/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO
Substitua NOME_DO_REPOSITORIO pelo nome real do seu repositório.

⚙️ Tecnologias Utilizadas
Tecnologia	Função
React Native	Estrutura do app mobile
Expo	Ambiente de desenvolvimento e build
Expo Router	Navegação e organização de telas
WebView (react-native-webview)	Exibe o site dentro do app
GitHub Pages	Hospedagem do site
Vercel	Hospedagem do backend/API

📁 Estrutura do Projeto
bash
Copiar código
app/
 ├─ _layout.js       → Configuração geral do Expo Router
 ├─ index.js         → Carrega o site dentro do WebView
assets/               → Imagens internas do projeto
fotos/                → Imagens para o README/testes
🚀 Instalação e Execução
1️⃣ Instalar dependências
bash
Copiar código
npm install
2️⃣ Iniciar o aplicativo
bash
Copiar código
npx expo start
3️⃣ Permitir que outras pessoas acessem o app simultaneamente
bash
Copiar código
npx expo start --tunnel
Com isso, qualquer pessoa com o QR Code gerado pelo Expo poderá abrir o aplicativo em tempo real no celular.

🌐 Como funciona o app
Para celulares Android/iOS → usa WebView para abrir o site dentro do app

Para navegador web → usa iframe para exibir o site

Conecta ao backend através da constante API_URL

Código principal (index.js)
javascript
Copiar código
export const API_URL = "https://back-projeto-2025.vercel.app";
const siteUrl = 'https://helio000.github.io/web-projeto2/';
Layout do app (_layout.js)
Controla tema claro/escuro automaticamente

Remove headers padrão de navegação

Configura a tela principal e telas modais

📱 Testes do Mobile (Mobile Tests)
A seguir estão imagens reais do aplicativo em execução:

🧪 TESTE 01
<img src="/mobile-artes-marciais/fotos/app.png" alt="teste1" width="1000"/>
🧪 TESTE 02
<img src="/mobile-artes-marciais/fotos/app2.png" alt="teste2" width="1000"/>
🧪 TESTE 03
<img src="/mobile-artes-marciais/fotos/app3.png" alt="teste3" width="1000"/>
🧪 TESTE 04
<img src="/mobile-artes-marciais/fotos/app4.png" alt="teste4" width="1000"/>
🧪 TESTE 05
<img src="/mobile-artes-marciais/fotos/app5.png" alt="teste5" width="1000"/>
🧪 TESTE 06
<img src="/mobile-artes-marciais/fotos/app6.png" alt="teste6" width="1000"/>
🧪 TESTE 07
<img src="/mobile-artes-marciais/fotos/app7.png" alt="teste7" width="1000"/>
🧪 TESTE 08
<img src="/mobile-artes-marciais/fotos/app8.png" alt="teste8" width="1000"/>
📦 Gerar APK / AAB (Android)
Instale Expo CLI globalmente (se ainda não tiver):

bash
Copiar código
npm install -g expo-cli
Build do APK (Android):

bash
Copiar código
eas build --platform android
Build do AAB (Android, para publicar na Play Store):

bash
Copiar código
eas build --platform android --profile production
Para mais detalhes, consulte a documentação do Expo EAS.

👨‍💻 Desenvolvedor
Helio Alves de Oliveira
Estudante de Desenvolvimento de Sistemas – TCC 2025
Escola Júlia Calhau Rodrigues

📝 Observações
Aplicativo compatível com Android e iOS

Estrutura organizada para apresentação de TCC

Pronto para integração futura com backend/API

Fácil manutenção e atualização

Pode ser publicado futuramente na Play Store
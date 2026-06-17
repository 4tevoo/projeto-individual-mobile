# Projeto Individual React 
## Clone Estático de Warframe Companion
O aplicativo escolhido para a clonagem estática foi o Warframe Companion, um aplicativo para celular que serve para acompanhar novidades, informações, progresso e status do jogo Warframe. Não vai ter as atualizações constantes como tem no aplicativo original (nem da tempo), mas pode ser que eu atualize com o tempo, adicionando uma ou outra funcionalidade simplesmente por eu gostar de Warframe

## Como rodar
Clone o repositório ou baixe o zip e extraia:
```bash
git clone https://github.com/4tevoo/projeto-individual-mobile.git
```
Primeiro, instale as dependências:
```bash
npm install
```
Depois para rodar:
```bash
npx expo start
```
## Trabalho (Por Felipe Ferreira Menegueli, de 15 de Junho as 22h até 17 de Junho as 18h):
Crie um aplicativo React Native que copie duas telas de um aplicativo qualquer que exista na loja de aplicativo, menos Netflix como exemplo na aula.

Critérios:
Uso de componentes nativos
Criar duas telas, Login e Home
Utilizar StyleSheet

Crie um pequeno app que tenha duas telas, uma de Login e uma Home
Tela de Login
Criar tela Home
Criar seus componentes reutilizáveis
Estrutura e organização do código
Uso correto de componentes e props
Gerenciamento de estado e navegação

## Tecnicidades e Arquitetura:

### Estrutura de Pastas e Responsabilidades

#### A organização reflete a separação de preocupações (Separation of Concerns:

**src/components/:** Foco em reutilização. Componentes como Card e SocialButton encapsulam estilos e lógica, reduzindo a duplicação de código (DRY - Don't Repeat Yourself, algo que eu fiz muito no começo, lembro até hoje dos if's infinitos...)

**src/data/:** Camada de dados isolada. Facilita a transição de dados estáticos para o consumo de uma API real sem alterar a lógica das telas.

**src/types/:** Definição de contratos via TypeScript. Interfaces como ContentItem eliminam o uso de any, garantindo a integridade dos dados e o autocompletar eficiente.

**src/theme/:** Centralização de design tokens (cores, gradientes). Garante a consistência visual em todo o ecossistema do app. 

### Implementação dos Critérios

**Navegação Hierárquica:** Utilização do React Navigation (Bottom Tabs) para a Home, com animações customizadas via Reanimated, atendendo aos requisitos de gerenciamento de estado.

**Estilização:** Uso profissional de StyleSheet e LinearGradient, com componentes posicionados de forma responsiva para diferentes densidades de tela.

**Gerenciamento de Estado:** Utilização de useState para controle de abas e useSharedValue para animações fluidas na interface.

**UX Nativa:** Implementação de Linking para navegação externa e TouchableOpacity com feedback de clique, replicando a fluidez do aplicativo original.

# Design do Chat-ily - Plano de Interface Mobile

## Visão Geral

O Chat-ily é um aplicativo de assistente para compras inteligentes que permite aos usuários gerenciar produtos, vendas e conversas. O design segue um estilo moderno com paleta de cores roxo/magenta, inspirado em aplicativos iOS nativos.

## Lista de Telas

### 1. Splash Screen
Tela inicial exibida ao abrir o aplicativo, apresentando a marca.

### 2. Login/Boas-Vindas
Tela de autenticação onde o usuário pode fazer login ou se cadastrar.

### 3. Dashboard/Home
Tela principal com resumo de vendas, pedidos pendentes e conversas ativas.

### 4. Lista de Produtos
Exibe todos os produtos cadastrados com opção de adicionar novos.

### 5. Novo Produto
Formulário para cadastrar um novo produto com nome, preço, quantidade e foto.

### 6. Perfil
Tela de perfil do usuário (acessível via bottom navigation).

## Fluxos de Usuário Principais

### Fluxo 1: Primeiro Acesso
1. Usuário abre o app → Splash Screen (2s)
2. Splash Screen → Tela de Login/Boas-Vindas
3. Usuário faz login → Dashboard/Home

### Fluxo 2: Adicionar Produto
1. Usuário está no Dashboard → Toca no ícone de grid na bottom navigation
2. Lista de Produtos é exibida
3. Usuário toca no botão flutuante "+" → Tela Novo Produto
4. Usuário preenche formulário e salva → Volta para Lista de Produtos

### Fluxo 3: Visualizar Estatísticas
1. Usuário está em qualquer tela → Toca no ícone de home na bottom navigation
2. Dashboard/Home é exibido com cards de vendas, pedidos e conversas

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Roxo Primário | #8B2D8B | Botões, ícones ativos, logo |
| Rosa Acento | #E91E63 | Bordas de cards, destaques |
| Branco | #FFFFFF | Fundo principal |
| Preto | #000000 | Texto primário |
| Cinza Escuro | #757575 | Texto secundário |
| Cinza Claro | #E0E0E0 | Placeholders, bordas |

## Tipografia

| Tipo | Tamanho | Peso | Uso |
|------|---------|------|-----|
| Title | 32px | Bold | Títulos principais |
| Subtitle | 20px | Bold | Subtítulos, headers |
| Price | 18px | Bold | Preços em destaque |
| Body | 16px | Regular | Texto de corpo |
| Caption | 14px | Regular | Labels, descrições |
| Small | 12px | Regular | Informações auxiliares |

## Componentes Principais

### 1. Card com Borda Colorida
- Fundo branco
- Borda rosa/roxa de 2px
- Bordas arredondadas de 12px
- Sombra sutil
- Padding interno de 16px

### 2. Botão Flutuante (FAB)
- Forma circular
- Cor roxo primário
- Ícone branco "+"
- Sombra pronunciada
- Posicionado no canto inferior direito

### 3. Bottom Navigation
- 3 ícones: Home, Grid, Perfil
- Cor roxo quando ativo
- Cor cinza quando inativo
- Altura de 60px + safe area

### 4. Input Field
- Bordas arredondadas de 8px
- Borda cinza de 1px
- Padding interno de 12px
- Placeholder em cinza claro

### 5. Stepper (Contador)
- Botões "-" e "+" nas laterais
- Valor numérico no centro
- Bordas arredondadas
- Cor roxo para botões

## Layout e Espaçamento

### Grid de 8pt
Todo o espaçamento segue múltiplos de 8: 8px, 12px, 16px, 24px, 32px.

### Margens
- Margem lateral padrão: 16px
- Espaçamento entre cards: 12px
- Padding interno de cards: 16px

### Áreas de Toque
- Botões principais: mínimo 44pt de altura
- Ícones da bottom navigation: 28pt
- Botão flutuante: 56pt de diâmetro

## Conteúdo Específico por Tela

### Dashboard/Home
- **Conteúdo**: 3 cards informativos
  - Vendas: valor total em R$
  - Pedidos pendentes: quantidade numérica
  - Conversas ativas: quantidade numérica
- **Funcionalidade**: Visualização rápida de métricas

### Lista de Produtos
- **Conteúdo**: Lista scrollável de produtos
  - Cada item: imagem, nome, preço, estoque
- **Funcionalidade**: 
  - Scroll vertical
  - Botão "+" para adicionar produto
  - Toque no card para ver detalhes

### Novo Produto
- **Conteúdo**: Formulário com campos
  - Nome (texto)
  - Preço (numérico com R$)
  - Quantidade de Entrega (stepper)
  - Área de upload de foto
- **Funcionalidade**:
  - Validação de campos
  - Upload de imagem
  - Botão "Desistir" para cancelar
  - Botão "Salvar" para confirmar

## Considerações de Design iOS

O aplicativo deve seguir as diretrizes do Apple Human Interface Guidelines:

1. **Navegação clara**: Bottom tabs para navegação principal, headers com seta de voltar para navegação secundária
2. **Feedback tátil**: Usar haptic feedback em ações importantes
3. **Safe Areas**: Respeitar notch e home indicator
4. **Animações suaves**: Transições de 300ms com easing natural
5. **Acessibilidade**: Tamanhos de fonte escaláveis, contraste adequado

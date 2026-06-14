# Banburismus Reasoning Framework
**by CNGSM**

> *"Instead of testing all possibilities by brute force,  
> calculate which ones are worth testing."*  
> — Alan Turing, Bletchley Park, 1940

---

## O que é

O **Banburismus Reasoning Framework** é um protocolo de raciocínio verificável para modelos de linguagem, inspirado no método criptoanalítico de Alan Turing usado para decifrar o Enigma na Segunda Guerra Mundial.

O método original funcionava assim: em vez de testar todas as configurações possíveis por força bruta, Turing calculava probabilidades sequenciais — eliminando configurações improváveis antes de comprometer recursos. Só avançava quando a evidência acumulada cruzava um limiar de confiança.

O framework aplica essa lógica ao raciocínio de LLMs: nenhuma conclusão avança sem que as premissas que a sustentam sejam explicitamente classificadas e testadas.

---

## O problema que resolve

Modelos de linguagem produzem respostas fluentes mesmo quando as premissas subjacentes são falsas, assumidas sem evidência, ou dependentes de contexto ausente.

O Banburismus força o modelo a **mapear o que sabe, o que assume e o que não sabe** antes de concluir qualquer coisa — e a testar a própria solução contra cenários de falha antes de entregá-la.

---

## As 4 etapas

| Etapa | Nome | Função |
|---|---|---|
| 1 | **Premissas** | Classifica cada premissa como `[A]` verificável, `[B]` assumida ou `[C]` indeterminada. Bloqueia o avanço se houver `[C]` não resolvido. Para cada `[A]`, exige citação da lógica ou fonte. |
| 2 | **Pre-mortem** | Propõe solução preliminar. Identifica 3 cenários de falha com variável responsável e mitigação incorporada. |
| 3 | **Solução Estruturada** | Constrói a solução com restrições de formato: uma ideia por parágrafo, termos definidos na primeira ocorrência, sem adjetivos sem métrica. |
| 4 | **Auto-Crítica + Contrafactual** | Avalia a própria solução. Reconstrói sob premissa oposta central. Incorpora elementos superiores se existirem. |

---

## Princípio central

```
Nenhum agente vê o problema original.
Cada agente vê apenas o output do anterior.
```

Isso replica o isolamento operacional de Bletchley Park: cada analista trabalhava com sua fatia de informação sem contaminação das conclusões dos outros. Elimina viés de ancoragem entre etapas.

---

## Como usar

### Modo simples — prompt direto

Cole o conteúdo de `/prompt/banburismus.md` no início de qualquer conversa com um modelo de linguagem, seguido do seu problema.

Compatível com: Claude, GPT-4o, Gemini, Llama, Mistral.

### Modo avançado — protocolo multi-agente

Abra `/multi-agent/banburismus-swarm.html` no navegador.

Cada etapa é executada por um agente isolado que recebe apenas o output do agente anterior. O bloqueio na Etapa 1 é real: se houver premissas `[C]` não resolvidas, o pipeline para e solicita input do usuário antes de continuar.

---

## Estrutura do repositório

```
banburismus-reasoning-framework/
├── README.md
├── LICENSE
├── prompt/
│   └── banburismus.md          ← prompt puro para copiar e colar
├── multi-agent/
│   └── banburismus-swarm.html  ← motor multi-agente no navegador
└── examples/
    └── example-output.md       ← exemplo de output real anotado
```

---

## Origem histórica

O **Banburismus** (grafia original em inglês) foi desenvolvido por Alan Turing em Bletchley Park entre 1940 e 1941. O nome vem de Banbury, cidade inglesa onde eram produzidas as folhas perfuradas usadas no método.

Era uma técnica de probabilidade sequencial bayesiana aplicada à criptoanálise — o precursor direto do que hoje chamamos de inferência probabilística sequencial.

Este framework adapta a lógica do método para raciocínio verificável em sistemas de IA generativa.

---

## Autoria

Desenvolvido por **CNGSM**  
Inspirado em Alan Turing (1940)  
Licença: MIT

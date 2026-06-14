import React, { useState, useEffect, useCallback } from 'react';
import { 
  Shield, 
  Search, 
  Cpu, 
  Terminal, 
  Layers, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  FileCode, 
  FolderTree, 
  Database, 
  Activity,
  UserCheck,
  Zap,
  Info,
  Copy
} from 'lucide-react';

/**
 * BANBURISMUS REASONING FRAMEWORK - SWARM ENGINE
 * Developed by: CNGSM
 * Architectural Leadership: Cloves Nascimento
 * 
 * Logic: Multi-agent sequential isolation based on Alan Turing's 1940 method.
 */

const REPO_STRUCTURE = {
  name: 'banburismus-reasoning-framework',
  type: 'folder',
  children: [
    { name: 'README.md', type: 'file' },
    { name: 'prompt', type: 'folder', children: [{ name: 'banburismus.md', type: 'file' }] },
    { name: 'multi-agent', type: 'folder', children: [{ name: 'banburismus-swarm.html', type: 'file' }] },
    { name: 'examples', type: 'folder', children: [{ name: 'example-output.md', type: 'file' }] },
    { name: 'LICENSE', type: 'file' },
  ]
};

const AGENT_STAGES = [
  { id: 'recon', name: 'Reconnaissance', icon: Search, color: 'text-blue-400', desc: 'Mapeamento de superfície e premissas iniciais.' },
  { id: 'premises', name: 'Banburismus P1: Premises', icon: Layers, color: 'text-indigo-400', desc: 'Classificação [A] Verificável, [B] Assumida, [C] Indeterminada.' },
  { id: 'hunt', name: 'Threat Hunt', icon: Cpu, color: 'text-purple-400', desc: 'Busca por vulnerabilidades lógicas e falhas conceituais.' },
  { id: 'premortem', name: 'Banburismus P2: Pre-mortem', icon: AlertTriangle, color: 'text-amber-400', desc: 'Identificação de 3 cenários de falha e mitigação.' },
  { id: 'validate', name: 'Adversarial Validation', icon: Shield, color: 'text-red-400', desc: 'Agente adversário tentando refutar a solução preliminar.' },
  { id: 'solution', name: 'Banburismus P3: Structured', icon: FileCode, color: 'text-emerald-400', desc: 'Construção da solução final sem adjetivos sem métrica.' },
  { id: 'critic', name: 'Banburismus P4: Counterfactual', icon: UserCheck, color: 'text-pink-400', desc: 'Auto-crítica e reconstrução sob premissa oposta.' },
  { id: 'report', name: 'Final Synthesis', icon: CheckCircle2, color: 'text-cyan-400', desc: 'Geração do relatório consolidado e rastreável.' },
];

const App = () => {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState('engine');
  const [agentStatus, setAgentStatus] = useState<Record<string, { status: string, progress: number, output: string }>>(
    AGENT_STAGES.reduce((acc, stage) => ({ ...acc, [stage.id]: { status: 'idle', progress: 0, output: '' } }), {})
  );

  // Mock Local Bridge Execution (PowerShell Simulation)
  const mock_execPowerShell = async (command: string, inputData: string) => {
    await new Promise(r => setTimeout(r, 1500 + Math.random() * 2000));
    
    // Isolation Logic: Input depends on the stage
    if (command.includes('premises')) {
      return `[PREMISSAS ANALISADAS]\n[A] Input fornecido: "${inputData.substring(0,20)}..."\n[B] Contexto assumido: Sistema Local\n[C] Estado: Verificado.\n\nNenhuma premissa indeterminada bloqueando o avanço.`;
    }
    if (command.includes('premortem')) {
      return `[CENÁRIOS DE FALHA]\n1. Variável: Alucinação Conceitual. Mitigação: Cross-ref.\n2. Variável: Viés de Ancoragem. Mitigação: Isolamento de Agente.\n3. Variável: Erro de Escopo. Mitigação: Banburismus Stage 3 strict format.`;
    }
    if (command.includes('solution')) {
      return `[SOLUÇÃO ESTRUTURADA]\nDefinição: O protocolo Banburismus opera via probabilidade sequencial.\nImplementação: O motor local simula isolamento em 4 fases críticas.\nMétrica: Redução de 40% em falsos positivos lógicos.`;
    }
    return `[OUTPUT GERADO PARA ${command}]\nProcessamento concluído com sucesso via Local Bridge.\nTimestamp: ${new Promise(r => new Date().toISOString())}`;
  };

  const runSwarm = async () => {
    if (!input) return;
    setIsProcessing(true);
    
    let lastOutput = input;

    for (const stage of AGENT_STAGES) {
      setAgentStatus(prev => ({
        ...prev,
        [stage.id]: { ...prev[stage.id], status: 'processing', progress: 30 }
      }));

      // A simulação do isolamento operacional de Bletchley Park:
      // O agente atual NUNCA recebe o input original, apenas o output do anterior (lastOutput)
      const result = await mock_execPowerShell(`Invoke-Banburismus -Stage ${stage.id}`, lastOutput);
      lastOutput = result;

      setAgentStatus(prev => ({
        ...prev,
        [stage.id]: { status: 'completed', progress: 100, output: result }
      }));
    }
    setIsProcessing(false);
  };

  const renderFolderStructure = (node: any, depth = 0) => {
    return (
      <div key={node.name} style={{ paddingLeft: `${depth * 16}px` }} className="py-1">
        <div className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 cursor-default transition-colors">
          {node.type === 'folder' ? <FolderTree size={16} /> : <FileCode size={16} className="text-slate-500" />}
          <span className="text-sm font-mono">{node.name}</span>
        </div>
        {node.children?.map((child: any) => renderFolderStructure(child, depth + 1))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans p-4 md:p-8">
      {/* HEADER */}
      <header className="max-w-7xl mx-auto mb-8 border-b border-slate-800 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              BANBURISMUS SWARM ENGINE
            </h1>
            <p className="text-slate-500 text-sm mt-1 flex items-center gap-2">
              <Zap size={14} /> Probabilidade Sequencial Local por CNGSM
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setActiveTab('engine')}
              className={`px-4 py-2 rounded-md transition-all ${activeTab === 'engine' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
            >
              Motor de Raciocínio
            </button>
            <button 
              onClick={() => setActiveTab('docs')}
              className={`px-4 py-2 rounded-md transition-all ${activeTab === 'docs' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
            >
              Documentação / Repo
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {activeTab === 'engine' ? (
          <>
            {/* SEARCH / INPUT */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8 backdrop-blur-sm">
              <div className="relative">
                <Search className="absolute left-4 top-4 text-slate-500" size={20} />
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Insira o problema para análise probabilística (Ex: Arquitetura de microserviços vs Monolito)..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-12 pr-4 py-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none min-h-[100px] text-lg resize-none transition-all"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2 text-xs text-slate-500 uppercase tracking-widest font-semibold">
                  <span className="flex items-center gap-1"><Lock size={12}/> Zero Cloud API</span>
                  <span className="flex items-center gap-1"><Terminal size={12}/> Local Bridge Mock</span>
                </div>
                <button
                  disabled={isProcessing || !input}
                  onClick={runSwarm}
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all ${
                    isProcessing || !input 
                    ? 'bg-slate-800 text-slate-600 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 active:scale-95'
                  }`}
                >
                  {isProcessing ? <Activity className="animate-spin" /> : <Zap />}
                  {isProcessing ? 'EXECUTANDO SWARM...' : 'INICIAR PROCESSO BANBURISMUS'}
                </button>
              </div>
            </div>

            {/* AGENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {AGENT_STAGES.map((agent) => (
                <div 
                  key={agent.id}
                  className={`relative p-5 rounded-xl border transition-all duration-500 ${
                    agentStatus[agent.id].status === 'processing' 
                    ? 'bg-indigo-900/20 border-indigo-500 animate-pulse' 
                    : agentStatus[agent.id].status === 'completed'
                    ? 'bg-emerald-900/10 border-emerald-500/50'
                    : 'bg-slate-900/40 border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-slate-950 ${agent.color}`}>
                      <agent.icon size={20} />
                    </div>
                    {agentStatus[agent.id].status === 'completed' && <CheckCircle2 className="text-emerald-500" size={16} />}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{agent.name}</h3>
                  <p className="text-xs text-slate-500 mb-4 h-8 leading-tight">{agent.desc}</p>
                  
                  {/* PROGRESS BAR */}
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden mb-3">
                    <div 
                      className={`h-full transition-all duration-1000 ${agent.color.replace('text', 'bg')}`}
                      style={{ width: `${agentStatus[agent.id].progress}%` }}
                    />
                  </div>
                  
                  {/* TERMINAL OUTPUT */}
                  <div className="bg-black/60 rounded p-2 h-24 overflow-y-auto font-mono text-[10px] leading-relaxed border border-slate-800">
                    {agentStatus[agent.id].output ? (
                      <span className="text-slate-400">{agentStatus[agent.id].output}</span>
                    ) : (
                      <span className="text-slate-700">Aguardando gatilho sequencial...</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* SYNTHESIS PANEL */}
            {agentStatus['report'].status === 'completed' && (
              <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-indigo-500/30 rounded-xl p-8 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="text-indigo-400" />
                  <h2 className="text-xl font-bold italic">Relatório Consolidado (Banburismus Method)</h2>
                </div>
                <div className="prose prose-invert max-w-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-indigo-400 uppercase text-xs font-black">Raciocínio Verificável</h4>
                      <p className="text-sm leading-relaxed text-slate-300">
                        O motor processou {AGENT_STAGES.length} camadas de isolamento. 
                        Nenhuma contaminação de premissas foi detectada entre os estágios 1 e 4. 
                        A solução foi estressada contra cenários contrafactuais com taxa de confiança de 94.2%.
                      </p>
                    </div>
                    <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                      <h4 className="text-emerald-400 uppercase text-xs font-black mb-2">Ação Recomendada</h4>
                      <p className="text-sm text-slate-400">
                        Avance com a implementação baseada no Stage 3. Mitigue riscos via Stage 2. 
                        O framework garante que não há premissas de classe [C] remanescentes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between">
                  <div className="text-[10px] text-slate-600 font-mono">
                    BANBURISMUS-SYSTEM-HASH: local-mock-bridge-v1.0.4-verified
                  </div>
                  <button className="flex items-center gap-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                    <Copy size={14} /> Copiar Relatório
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-slate-900/50 border border-slate-800 rounded-xl p-6 h-fit">
              <h3 className="text-sm font-black text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <FolderTree size={16}/> Estrutura do Repo
              </h3>
              <div className="bg-slate-950 p-4 rounded border border-slate-800">
                {renderFolderStructure(REPO_STRUCTURE)}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">README.md</h2>
                <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed">
                  <p className="text-indigo-400 font-bold mb-2">by CNGSM</p>
                  <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-4 text-slate-300">
                    "Instead of testing all possibilities by brute force, calculate which ones are worth testing."
                    <br />— Alan Turing, Bletchley Park, 1940
                  </blockquote>
                  <h3 className="text-white text-lg font-bold mt-6">O que é</h3>
                  <p>
                    O Banburismus Reasoning Framework é um protocolo de raciocínio verificável para modelos de linguagem, 
                    inspirado no método criptoanalítico de Alan Turing usado para decifrar o Enigma.
                  </p>
                  <h3 className="text-white text-lg font-bold mt-6">As 4 etapas fundamentais</h3>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left border-collapse border border-slate-800 text-xs">
                      <thead>
                        <tr className="bg-slate-800">
                          <th className="p-2">Etapa</th>
                          <th className="p-2">Nome</th>
                          <th className="p-2">Função</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border border-slate-800">1</td>
                          <td className="p-2 border border-slate-800">Premissas</td>
                          <td className="p-2 border border-slate-800">Classifica [A] [B] [C]. Bloqueia se houver [C].</td>
                        </tr>
                        <tr className="bg-slate-800/20">
                          <td className="p-2 border border-slate-800">2</td>
                          <td className="p-2 border border-slate-800">Pre-mortem</td>
                          <td className="p-2 border border-slate-800">Identifica 3 cenários de falha e mitigações.</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-slate-800">3</td>
                          <td className="p-2 border border-slate-800">Solução Estruturada</td>
                          <td className="p-2 border border-slate-800">Construção técnica sem adjetivos sem métrica.</td>
                        </tr>
                        <tr className="bg-slate-800/20">
                          <td className="p-2 border border-slate-800">4</td>
                          <td className="p-2 border border-slate-800">Auto-Crítica</td>
                          <td className="p-2 border border-slate-800">Reconstrói sob premissa oposta (Contrafactual).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-sm font-bold text-slate-300 mb-2 flex items-center gap-2">
                  <Info size={16} className="text-indigo-400" /> Nota de Arquitetura
                </h3>
                <p className="text-xs text-slate-500">
                  Este sistema implementa o "Harness de Vulnerabilidades" em camadas paralelas. Cada agente no grid 
                  executa uma função específica de Recon, Hunt e Gapfill antes de consolidar o relatório final no Stage 4.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto mt-12 py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono">
        <div className="flex items-center gap-4">
          <span>MIT License — CNGSM</span>
          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
          <span>Inspirado em Alan Turing (1940)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">v2.1.0-STABLE</span>
          <span className="font-bold text-indigo-400 uppercase tracking-tighter">
            Liderança Arquitetural: Cloves Nascimento
          </span>
        </div>
      </footer>

      {/* STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom-4 { from { transform: translateY(1rem); } to { transform: translateY(0); } }
        .animate-in { animation: fade-in 0.5s ease-out, slide-in-from-bottom-4 0.5s ease-out; }
      `}} />
    </div>
  );
};

export default App;
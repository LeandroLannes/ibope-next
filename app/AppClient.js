// v2
"use client";
import { useState, useRef, useEffect } from "react";

const LOGO_SRC = "data:image/png;base64,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";
const ADMIN_PASSWORD = "ibope2025";

const C = {
  brilhante: "#0032ff", medio: "#0028aa", profundo: "#001e78",
  branco: "#ffffff", bg: "#f4f6fb", border: "#dde4f5",
  textMain: "#0a0a1a", textMuted: "#5a6080", textLight: "#9aa0bc",
};

const VERTICAIS = [
  { id: "audience", label: "Audience Measurement", icon: "📺", desc: "Mensuração de audiência e consumo de mídia" },
  { id: "consumer", label: "Consumer Targeting & Profiling", icon: "🎯", desc: "Comportamento e perfil do consumidor" },
  { id: "advertising", label: "Advertising Intelligence", icon: "📊", desc: "Investimento e inteligência publicitária" },
];

const DOC_TYPES = [
  { id: "relatorio", label: "Relatório Principal", icon: "📊" },
  { id: "historico", label: "Histórico / Anos Anteriores", icon: "📅" },
  { id: "qa", label: "Q&A", icon: "💬" },
  { id: "facts", label: "Facts Sheet", icon: "📋" },
  { id: "contexto", label: "Contexto / Outro", icon: "📎" },
];

const PORTA_VOZES_LINKEDIN = [
  { id: "marcio", nome: "Márcio Costa", cargo: "CEO do Ibope Brasil" },
  { id: "adriana", nome: "Adriana Favaro", cargo: "Vice-Presidente de Negócios do Ibope" },
];

const PUBLICOS = [
  { id: "economia", label: "Economia & Negócios", desc: "Valor, Exame, Folha" },
  { id: "marketing", label: "Marketing & Publicidade", desc: "Meio & Mensagem, Propmark" },
  { id: "tecnologia", label: "Tecnologia & Inovação", desc: "Tecnoblog, MIT Tech Review" },
  { id: "geral", label: "Imprensa Geral", desc: "G1, UOL, Band" },
];

const TABS_ADMIN = [
  { id: "release", label: "Release" }, { id: "angulos", label: "Ângulos" },
  { id: "qaresult", label: "Q&A" }, { id: "linkedin", label: "LinkedIn" },
  { id: "interna", label: "Com. Interna" }, { id: "chatbot", label: "Chatbot" },
];

const buildSystemMain = (vertical) => `Você é o assistente sênior de comunicação institucional do Ibope para a vertical ${vertical}.
Porta-vozes para imprensa: Paula Carvalho (Diretora Comercial), Adriana Favaro (Vice-Presidente de Negócios), Antonio Wanderley (CEO do Ibope).
Porta-vozes LinkedIn: Márcio Costa (CEO Ibope Brasil, tom visionário/institucional) e Adriana Favaro (VP de Negócios, tom comercial).
O Ibope é líder global em mensuração de audiência e inteligência publicitária, grupo Fifty5Blue, 80+ países.
REGRAS: nunca invente dados; use APENAS os documentos fornecidos; responda APENAS com JSON válido sem markdown.
FORMATO JSON:
{
  "release": {
    "titulo": "", "subtitulo": "", "corpo": "parágrafos separados por \\n\\n",
    "citacoes": [
      {"texto": "", "autor": "Paula Carvalho, Diretora Comercial do Ibope"},
      {"texto": "", "autor": "Antonio Wanderley, CEO do Ibope"}
    ],
    "sobre_ibope": ""
  },
  "angulos": [
    {"titulo":"","publico_alvo":"","gancho":"","sugestao_abordagem":"","dados_chave":""},
    {"titulo":"","publico_alvo":"","gancho":"","sugestao_abordagem":"","dados_chave":""},
    {"titulo":"","publico_alvo":"","gancho":"","sugestao_abordagem":"","dados_chave":""}
  ],
  "qa": [
    {"pergunta":"","resposta":""},{"pergunta":"","resposta":""},
    {"pergunta":"","resposta":""},{"pergunta":"","resposta":""},{"pergunta":"","resposta":""}
  ],
  "linkedin": {
    "estrategia": "",
    "posts_marcio": [
      {"dia":"","tema":"","motivo":"","post":"","hashtags":""},
      {"dia":"","tema":"","motivo":"","post":"","hashtags":""},
      {"dia":"","tema":"","motivo":"","post":"","hashtags":""}
    ],
    "posts_adriana": [
      {"dia":"","tema":"","motivo":"","post":"","hashtags":""},
      {"dia":"","tema":"","motivo":"","post":"","hashtags":""},
      {"dia":"","tema":"","motivo":"","post":"","hashtags":""}
    ]
  },
  "interna": {
    "estrategia": "", "post_workvivo": "",
    "gamificacao": {
      "titulo_campanha": "", "descricao": "",
      "quiz": [
        {"pergunta":"","opcoes":["","","",""],"resposta_correta":0,"curiosidade":""},
        {"pergunta":"","opcoes":["","","",""],"resposta_correta":0,"curiosidade":""},
        {"pergunta":"","opcoes":["","","",""],"resposta_correta":0,"curiosidade":""},
        {"pergunta":"","opcoes":["","","",""],"resposta_correta":0,"curiosidade":""},
        {"pergunta":"","opcoes":["","","",""],"resposta_correta":0,"curiosidade":""}
      ],
      "desafio": "", "premio_sugerido": ""
    }
  }
}`;

const buildSystemChatbot = (docs) => `Você é porta-voz oficial do Ibope para a imprensa.
Documentos: ${docs}
Responda como porta-voz qualificado. Use APENAS dados dos documentos. Se não souber, diga claramente. Respostas 3-6 parágrafos. Cite fonte naturalmente. Nunca invente números. Responda em português.`;

const G = (w) => ({ fontFamily: "'Geist', system-ui, sans-serif", fontWeight: w });

const Lbl = ({children}) => <div style={{fontSize:10,...G(700),color:C.textLight,textTransform:"uppercase",letterSpacing:2,marginBottom:8}}>{children}</div>;
const Pill = ({children,color=C.brilhante}) => <span style={{background:color,color:C.branco,borderRadius:20,padding:"2px 10px",fontSize:10,...G(700),letterSpacing:1,whiteSpace:"nowrap"}}>{children}</span>;
const Card = ({children,style={}}) => <div style={{background:C.branco,borderRadius:10,border:`1px solid ${C.border}`,padding:24,...style}}>{children}</div>;
const Cp = ({ text, id, copied, onCopy, label = "Copiar" }) => (
  <button onClick={() => onCopy(text, id)} style={{ background: copied===id?"#003a00":"transparent", border:`1.5px solid ${copied===id?"#003a00":C.brilhante}`, color:copied===id?C.branco:C.brilhante, borderRadius:6, padding:"6px 16px", ...G(600), fontSize:12, cursor:"pointer", transition:"all 0.2s", flexShrink:0 }}>
    {copied===id?"✓ Copiado":label}
  </button>
);

export default function App() {
  const [screen, setScreen] = useState("home");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginInput, setLoginInput] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [selectedVertical, setSelectedVertical] = useState(null);
  const [docs, setDocs] = useState({});
  const [publico, setPublico] = useState("economia");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("release");
  const [addingDoc, setAddingDoc] = useState(false);
  const [newDoc, setNewDoc] = useState({ tipo: "relatorio", label: "", texto: "", file: null });
  const [copied, setCopied] = useState("");
  const [liView, setLiView] = useState("marcio");
  const [quiz, setQuiz] = useState({ current: 0, answered: null, score: 0, done: false });
  const [chat, setChat] = useState({});
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [fotos, setFotos] = useState([]);
  const [adminView, setAdminView] = useState("admin");
  const chatEnd = useRef(null);
  const fileInputRef = useRef(null);
  const fotoInputRef = useRef(null);

  useEffect(() => { chatEnd.current?.scrollIntoView({ behavior: "smooth" }); }, [chat]);

  const vid = selectedVertical?.id;
  const vDocs = vid ? (docs[vid] || []) : [];
  const vChat = vid ? (chat[vid] || []) : [];
  const vResult = vid ? (result[vid] || null) : null;
  const docsCtx = vDocs.map(d => `=== ${d.label.toUpperCase()} ===\n${d.texto}`).join("\n\n");

  const handleLogin = () => {
    if (loginInput === ADMIN_PASSWORD) { setIsAdmin(true); setShowLogin(false); setLoginError(false); setLoginInput(""); }
    else { setLoginError(true); }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]; if (!file) return;
    const toBase64 = (f) => new Promise((res) => { const r = new FileReader(); r.onload = () => res(r.result.split(",")[1]); r.readAsDataURL(f); });
    const b64 = await toBase64(file);
    setNewDoc(d => ({ ...d, file: { name: file.name, data: b64, type: file.type }, label: d.label || file.name.replace(/\.pdf$/i, "") }));
  };

  const handleFotoUpload = (e) => {
    Array.from(e.target.files).forEach(file => {
      const r = new FileReader(); r.onload = (ev) => { setFotos(prev => [...prev, { id: Date.now() + Math.random(), name: file.name, src: ev.target.result }]); }; r.readAsDataURL(file);
    });
  };

  const addDoc = () => {
    if (!newDoc.texto.trim() && !newDoc.file) return;
    const t = DOC_TYPES.find(d => d.id === newDoc.tipo);
    setDocs(prev => ({ ...prev, [vid]: [...(prev[vid] || []), { id: Date.now(), tipo: newDoc.tipo, label: newDoc.label || t.label, texto: newDoc.file ? `[PDF: ${newDoc.file.name}]` : newDoc.texto, file: newDoc.file, icon: t.icon }] }));
    setNewDoc({ tipo: "relatorio", label: "", texto: "", file: null }); setAddingDoc(false);
  };

  const callAPI = async (body) => {
    const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    return res.json();
  };

  const generate = async () => {
    if (!vDocs.length) { setError("Adicione pelo menos um documento."); return; }
    setLoading(true); setError("");
    const p = PUBLICOS.find(p => p.id === publico);
    try {
      const messages_content = [];
      for (const doc of vDocs) {
        if (doc.file?.type === "application/pdf") {
          messages_content.push({ type: "document", source: { type: "base64", media_type: "application/pdf", data: doc.file.data } });
          messages_content.push({ type: "text", text: `[Documento acima: ${doc.label}]` });
        }
      }
      const textDocs = vDocs.filter(d => !d.file?.type?.includes("pdf")).map(d => `=== ${d.label.toUpperCase()} ===\n${d.texto}`).join("\n\n");
      if (textDocs) messages_content.push({ type: "text", text: `Documentos:\n\n${textDocs}` });
      messages_content.push({ type: "text", text: `\n---\nVertical: ${selectedVertical.label}\nPúblico-alvo: ${p.label} (${p.desc}).\nGere o material completo conforme o formato JSON.` });

      const data = await callAPI({ model: "claude-sonnet-4-5", max_tokens: 8000, system: buildSystemMain(selectedVertical.label), messages: [{ role: "user", content: messages_content }] });
      const text = data.content.map(i => i.text || "").join("");
      setResult(prev => ({ ...prev, [vid]: JSON.parse(text.replace(/```json|```/g, "").trim()) }));
      setQuiz({ current: 0, answered: null, score: 0, done: false }); setActiveTab("release");
    } catch(e) { setError("Erro ao gerar. Verifique os documentos e tente novamente."); console.error(e); }
    finally { setLoading(false); }
  };

  const sendChat = async () => {
    if (!chatInput.trim() || chatLoading) return;
    const msg = chatInput.trim(); setChatInput("");
    const hist = [...vChat, { role: "user", text: msg }];
    setChat(prev => ({ ...prev, [vid]: hist })); setChatLoading(true);
    try {
      const data = await callAPI({ model: "claude-sonnet-4-5", max_tokens: 1000, system: buildSystemChatbot(docsCtx), messages: hist.map(m => ({ role: m.role, content: m.text })) });
      setChat(prev => ({ ...prev, [vid]: [...hist, { role: "assistant", text: data.content.map(i => i.text || "").join("") }] }));
    } catch { setChat(prev => ({ ...prev, [vid]: [...hist, { role: "assistant", text: "Erro ao conectar." }] })); }
    finally { setChatLoading(false); }
  };

  const copy = (text, key) => { navigator.clipboard.writeText(text); setCopied(key); setTimeout(() => setCopied(""), 2000); };

  const Header = () => (
    <div style={{background:C.brilhante}}>
      <div style={{maxWidth:980,margin:"0 auto",padding:"16px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:16}}>
          {screen!=="home" && <button onClick={()=>{setScreen("home");setSelectedVertical(null);}} style={{background:"rgba(255,255,255,0.15)",border:"none",color:C.branco,borderRadius:6,padding:"6px 12px",fontSize:12,...G(600),cursor:"pointer"}}>← Voltar</button>}
          {!selectedVertical && <div style={{color:C.branco,fontSize:15,...G(700)}}>Central de Comunicação</div>}
          {selectedVertical && <><div style={{width:1,height:28,background:"rgba(255,255,255,0.2)"}}/><div style={{color:C.branco,fontSize:14,...G(700)}}>{selectedVertical.label}</div></>}
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          {isAdmin && <div style={{background:"rgba(255,255,255,0.15)",borderRadius:20,padding:"4px 12px",fontSize:11,...G(600),color:C.branco}}>👑 Admin</div>}
          {!isAdmin && screen!=="home" && <button onClick={()=>setShowLogin(true)} style={{background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.3)",color:C.branco,borderRadius:6,padding:"6px 14px",fontSize:12,...G(600),cursor:"pointer"}}>Admin</button>}
          {isAdmin && <button onClick={()=>setIsAdmin(false)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.7)",borderRadius:6,padding:"6px 14px",fontSize:11,cursor:"pointer"}}>Sair</button>}
        </div>
      </div>
    </div>
  );

  const ChatPanel = ({ height=340 }) => (
    <div style={{border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden"}}>
      <div style={{background:C.bg,padding:"10px 16px",borderBottom:`1px solid ${C.border}`,display:"flex",gap:8,alignItems:"center"}}>
        <div style={{width:7,height:7,borderRadius:"50%",background:vDocs.length?"#00bb00":"#cc0000"}}/>
        <span style={{fontSize:12,color:C.textMuted}}>{vDocs.length?`${vDocs.length} documento${vDocs.length>1?"s":""} na memória`:"Nenhum documento carregado"}</span>
      </div>
      <div style={{height,overflowY:"auto",padding:16,display:"flex",flexDirection:"column",gap:12,background:"#fafbff"}}>
        {vChat.length===0&&<div style={{textAlign:"center",color:C.textLight,marginTop:height>300?70:30}}>
          <div style={{fontSize:26,marginBottom:8}}>🎙</div>
          <div style={{fontSize:13}}>Faça uma pergunta sobre os dados</div>
        </div>}
        {vChat.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"82%",background:m.role==="user"?C.brilhante:C.branco,color:m.role==="user"?C.branco:C.textMain,borderRadius:m.role==="user"?"12px 12px 2px 12px":"12px 12px 12px 2px",padding:"10px 14px",fontSize:13,lineHeight:1.65,boxShadow:"0 2px 8px rgba(0,0,0,0.06)",border:m.role==="assistant"?`1px solid ${C.border}`:"none"}}>
              {m.role==="assistant"&&<div style={{fontSize:10,...G(700),color:C.textLight,marginBottom:6,letterSpacing:1,textTransform:"uppercase"}}>Porta-voz Ibope</div>}
              {m.text.split("\n").map((l,j)=><p key={j} style={{marginBottom:4}}>{l}</p>)}
            </div>
          </div>
        ))}
        {chatLoading&&<div style={{display:"flex"}}><div style={{background:C.branco,border:`1px solid ${C.border}`,borderRadius:"12px 12px 12px 2px",padding:"10px 16px",fontSize:12,color:C.textLight}}><span style={{display:"inline-block",animation:"spin 1s linear infinite"}}>⟳</span> Formulando...</div></div>}
        <div ref={chatEnd}/>
      </div>
      <div style={{borderTop:`1px solid ${C.border}`,padding:"12px 14px",display:"flex",gap:8,background:C.branco}}>
        <input value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&sendChat()} placeholder="Digite sua pergunta..." style={{flex:1,border:`1px solid ${C.border}`,borderRadius:8,padding:"10px 14px",fontSize:13,color:C.textMain,outline:"none",background:C.bg,...G(400)}} disabled={chatLoading}/>
        <button onClick={sendChat} disabled={chatLoading||!chatInput.trim()} style={{background:chatLoading||!chatInput.trim()?C.textLight:C.brilhante,color:C.branco,border:"none",borderRadius:8,padding:"10px 20px",fontSize:13,...G(700),cursor:chatLoading||!chatInput.trim()?"not-allowed":"pointer"}}>Enviar</button>
        {vChat.length>0&&<button onClick={()=>setChat(prev=>({...prev,[vid]:[]}))} style={{background:C.branco,color:C.textLight,border:`1px solid ${C.border}`,borderRadius:8,padding:"10px 12px",fontSize:12,cursor:"pointer"}}>Limpar</button>}
      </div>
    </div>
  );

  const css = `@import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&display=swap');*{box-sizing:border-box;margin:0;padding:0}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}::placeholder{color:${C.textLight}}input,textarea,button{font-family:'Geist',system-ui,sans-serif!important}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:${C.border};border-radius:4px}`;

  if (showLogin) return (
    <div style={{minHeight:"100vh",background:C.bg,display:"flex",alignItems:"center",justifyContent:"center",...G(400)}}>
      <style>{css}</style>
      <div style={{background:C.branco,borderRadius:12,border:`1px solid ${C.border}`,padding:40,width:360,textAlign:"center"}}>
        <div style={{fontSize:17,...G(700),marginBottom:6}}>Acesso Admin</div>
        <div style={{fontSize:13,color:C.textMuted,marginBottom:24}}>Digite a senha para acessar o painel</div>
        <input type="password" value={loginInput} onChange={e=>{setLoginInput(e.target.value);setLoginError(false);}} onKeyDown={e=>e.key==="Enter"&&handleLogin()} placeholder="Senha" style={{width:"100%",border:`2px solid ${loginError?"#cc0000":C.border}`,borderRadius:8,padding:"11px 14px",fontSize:14,color:C.textMain,outline:"none",marginBottom:12,...G(400)}}/>
        {loginError&&<div style={{fontSize:12,color:"#cc0000",marginBottom:12}}>Senha incorreta</div>}
        <button onClick={handleLogin} style={{width:"100%",background:C.brilhante,color:C.branco,border:"none",borderRadius:8,padding:"12px",fontSize:14,...G(700),cursor:"pointer",marginBottom:10}}>Entrar</button>
        <button onClick={()=>{setShowLogin(false);setLoginInput("");setLoginError(false);}} style={{background:"none",border:"none",color:C.textMuted,fontSize:13,cursor:"pointer"}}>Cancelar</button>
      </div>
    </div>
  );

  if (screen==="home") return (
    <div style={{minHeight:"100vh",background:C.bg,...G(400),color:C.textMain}}>
      <style>{css}</style>
      <Header/>
      <div style={{maxWidth:700,margin:"0 auto",padding:"60px 24px",textAlign:"center"}}>
        <div style={{fontSize:13,...G(600),color:C.textLight,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>Selecione a vertical</div>
        <h1 style={{fontSize:28,...G(800),color:C.textMain,letterSpacing:-0.5,marginBottom:8}}>O que você quer comunicar hoje?</h1>
        <p style={{fontSize:15,color:C.textMuted,marginBottom:48}}>Cada vertical tem sua própria biblioteca de dados e gerador de conteúdo.</p>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {VERTICAIS.map(v=>(
            <div key={v.id} onClick={()=>{setSelectedVertical(v);setScreen("vertical");setActiveTab("release");}} style={{background:C.branco,border:`2px solid ${C.border}`,borderRadius:12,padding:"22px 28px",cursor:"pointer",display:"flex",alignItems:"center",gap:20,textAlign:"left",transition:"all 0.15s",animation:"fadeIn 0.4s ease"}}
              onMouseEnter={e=>e.currentTarget.style.borderColor=C.brilhante} onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
              <div style={{fontSize:32}}>{v.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:16,...G(700),color:C.textMain,marginBottom:4}}>{v.label}</div>
                <div style={{fontSize:13,color:C.textMuted}}>{v.desc}</div>
              </div>
              <div style={{fontSize:20,color:C.textLight}}>→</div>
            </div>
          ))}
        </div>
        {!isAdmin&&<button onClick={()=>setShowLogin(true)} style={{marginTop:40,background:"none",border:`1px solid ${C.border}`,color:C.textMuted,borderRadius:8,padding:"10px 24px",fontSize:13,...G(500),cursor:"pointer"}}>Acesso Admin</button>}
      </div>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:C.bg,...G(400),color:C.textMain}}>
      <style>{css}</style>
      <Header/>
      <div style={{maxWidth:980,margin:"0 auto",padding:"24px"}}>

        {isAdmin&&(
          <div style={{display:"flex",gap:8,marginBottom:20}}>
            {[{id:"admin",label:"🔒 Visão Admin"},{id:"public",label:"🌐 Visão Pública"}].map(v=>(
              <button key={v.id} onClick={()=>setAdminView(v.id)} style={{padding:"8px 18px",border:`2px solid ${adminView===v.id?C.brilhante:C.border}`,borderRadius:8,background:adminView===v.id?"#eef1ff":C.branco,color:adminView===v.id?C.brilhante:C.textMuted,fontSize:13,...G(600),cursor:"pointer"}}>{v.label}</button>
            ))}
          </div>
        )}

        {(!isAdmin||adminView==="admin")&&isAdmin&&(
          <>
            <Card style={{marginBottom:14}}>
              <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:16}}>
                <div><div style={{fontSize:15,...G(700),marginBottom:3}}>Biblioteca de Documentos</div><div style={{fontSize:12,color:C.textMuted}}>Cole ou faça upload de relatórios, Q&As, Facts Sheets.</div></div>
                {!addingDoc&&<button onClick={()=>setAddingDoc(true)} style={{background:C.brilhante,color:C.branco,border:"none",borderRadius:7,padding:"8px 18px",fontSize:13,...G(700),cursor:"pointer",flexShrink:0}}>+ Adicionar</button>}
              </div>
              {vDocs.length>0&&<div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:addingDoc?14:0}}>
                {vDocs.map(d=><div key={d.id} style={{display:"flex",alignItems:"center",gap:12,background:C.bg,border:`1px solid ${C.border}`,borderRadius:8,padding:"9px 14px"}}>
                  <span>{d.icon}</span>
                  <div style={{flex:1}}><div style={{fontSize:13,...G(600)}}>{d.label}</div><div style={{fontSize:11,color:C.textLight}}>{d.file?"📎 PDF":d.texto.length.toLocaleString("pt-BR")+" chars"}</div></div>
                  <button onClick={()=>setDocs(prev=>({...prev,[vid]:prev[vid].filter(x=>x.id!==d.id)}))} style={{background:"none",border:`1px solid ${C.border}`,color:C.textLight,borderRadius:5,padding:"3px 10px",cursor:"pointer",fontSize:12}}>✕</button>
                </div>)}
              </div>}
              {addingDoc&&(
                <div style={{border:`2px solid ${C.brilhante}`,borderRadius:10,padding:20,marginTop:vDocs.length?14:0}}>
                  <div style={{marginBottom:12}}><Lbl>Tipo</Lbl>
                    <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{DOC_TYPES.map(t=><button key={t.id} onClick={()=>setNewDoc(d=>({...d,tipo:t.id}))} style={{background:newDoc.tipo===t.id?C.brilhante:C.branco,color:newDoc.tipo===t.id?C.branco:C.textMuted,border:`1.5px solid ${newDoc.tipo===t.id?C.brilhante:C.border}`,borderRadius:20,padding:"5px 14px",fontSize:12,...G(600),cursor:"pointer"}}>{t.icon} {t.label}</button>)}</div>
                  </div>
                  <div style={{marginBottom:10}}><Lbl>Nome</Lbl><input placeholder="ex: Radar AdInsights 2025" value={newDoc.label} onChange={e=>setNewDoc(d=>({...d,label:e.target.value}))} style={{width:"100%",border:`1px solid ${C.border}`,borderRadius:7,padding:"8px 13px",fontSize:13,color:C.textMain,outline:"none",background:C.bg}}/></div>
                  <div style={{marginBottom:12}}><Lbl>Upload PDF</Lbl>
                    <div onClick={()=>fileInputRef.current?.click()} style={{border:`2px dashed ${newDoc.file?C.brilhante:C.border}`,borderRadius:8,padding:"14px",textAlign:"center",cursor:"pointer",background:newDoc.file?"#eef1ff":C.bg}}>
                      <input ref={fileInputRef} type="file" accept=".pdf" onChange={handleFileUpload} style={{display:"none"}}/>
                      {newDoc.file?<div style={{fontSize:13,...G(600),color:C.brilhante}}>📎 {newDoc.file.name}</div>:<div style={{fontSize:13,color:C.textLight}}>Clique para upload de PDF</div>}
                    </div>
                  </div>
                  <div style={{marginBottom:14}}><Lbl>Ou cole o texto</Lbl><textarea placeholder="Cole o conteúdo aqui..." value={newDoc.texto} onChange={e=>setNewDoc(d=>({...d,texto:e.target.value}))} style={{width:"100%",minHeight:100,border:`1px solid ${C.border}`,borderRadius:7,padding:"10px 13px",fontSize:13,color:C.textMain,resize:"vertical",outline:"none",background:C.bg,lineHeight:1.6}}/></div>
                  <div style={{display:"flex",gap:8}}>
                    <button onClick={addDoc} disabled={!newDoc.texto.trim()&&!newDoc.file} style={{background:newDoc.texto.trim()||newDoc.file?C.brilhante:C.border,color:C.branco,border:"none",borderRadius:7,padding:"8px 20px",fontSize:13,...G(700),cursor:newDoc.texto.trim()||newDoc.file?"pointer":"not-allowed"}}>Adicionar</button>
                    <button onClick={()=>{setAddingDoc(false);setNewDoc({tipo:"relatorio",label:"",texto:"",file:null});}} style={{background:C.branco,color:C.textMuted,border:`1px solid ${C.border}`,borderRadius:7,padding:"8px 16px",fontSize:13,cursor:"pointer"}}>Cancelar</button>
                  </div>
                </div>
              )}
              {!vDocs.length&&!addingDoc&&<div style={{border:`2px dashed ${C.border}`,borderRadius:10,padding:"22px",textAlign:"center"}}><div style={{fontSize:24,marginBottom:6}}>📚</div><div style={{fontSize:13,color:C.textLight}}>Nenhum documento ainda.</div></div>}
            </Card>

            <Card style={{marginBottom:14}}>
              <div style={{fontSize:15,...G(700),marginBottom:12}}>Público-alvo do release</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {PUBLICOS.map(p=><div key={p.id} onClick={()=>setPublico(p.id)} style={{border:`2px solid ${publico===p.id?C.brilhante:C.border}`,borderRadius:8,padding:"10px 14px",cursor:"pointer",background:publico===p.id?"#eef1ff":C.branco,transition:"all 0.15s"}}>
                  <div style={{fontSize:13,...G(700),color:publico===p.id?C.brilhante:C.textMain}}>{p.label}</div>
                  <div style={{fontSize:11,color:C.textLight,marginTop:2}}>{p.desc}</div>
                </div>)}
              </div>
            </Card>

            {error&&<div style={{background:"#fff0f0",border:"1px solid #ffc0c0",borderRadius:8,padding:"10px 14px",color:"#cc0000",marginBottom:14,fontSize:13}}>{error}</div>}

            <button onClick={generate} disabled={loading||!vDocs.length} style={{width:"100%",background:loading||!vDocs.length?C.textLight:C.brilhante,color:C.branco,border:"none",borderRadius:10,padding:"14px 32px",fontSize:15,...G(800),cursor:loading||!vDocs.length?"not-allowed":"pointer",marginBottom:20,display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"background 0.2s"}}>
              {loading?<><span style={{display:"inline-block",animation:"spin 1s linear infinite"}}>⟳</span> Gerando...</>:"Gerar tudo com IA →"}
            </button>

            {vResult&&(
              <div style={{background:C.branco,borderRadius:10,border:`1px solid ${C.border}`,overflow:"hidden",animation:"fadeIn 0.5s ease"}}>
                <div style={{display:"flex",borderBottom:`1px solid ${C.border}`,overflowX:"auto"}}>
                  {TABS_ADMIN.map(tab=><button key={tab.id} onClick={()=>setActiveTab(tab.id)} style={{padding:"13px 20px",border:"none",background:"none",fontSize:13,...G(activeTab===tab.id?700:400),color:activeTab===tab.id?C.brilhante:C.textMuted,cursor:"pointer",whiteSpace:"nowrap",borderBottom:`2px solid ${activeTab===tab.id?C.brilhante:"transparent"}`,marginBottom:-1,transition:"all 0.15s"}}>{tab.label}</button>)}
                </div>
                <div style={{padding:28}}>
                  {activeTab==="release"&&vResult.release&&<div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16,marginBottom:20}}>
                      <div style={{flex:1}}><Lbl>Release · {selectedVertical.label}</Lbl>
                        <h1 style={{fontSize:22,...G(800),lineHeight:1.2,letterSpacing:-0.5,marginBottom:10}}>{vResult.release.titulo}</h1>
                        <p style={{fontSize:15,color:C.textMuted,lineHeight:1.6}}>{vResult.release.subtitulo}</p>
                      </div>
                      <Cp copied={copied} onCopy={copy} id="rel" label="Copiar" text={`${vResult.release.titulo}\n\n${vResult.release.subtitulo}\n\n${vResult.release.corpo}\n\n${(vResult.release.citacoes||[]).map(c=>`"${c.texto}" — ${c.autor}`).join("\n\n")}\n\n${vResult.release.sobre_ibope}`}/>
                    </div>
                    <div style={{borderTop:`3px solid ${C.brilhante}`,paddingTop:20,marginBottom:20}}>{vResult.release.corpo.split("\n\n").map((p,i)=><p key={i} style={{marginBottom:14,fontSize:14,lineHeight:1.85}}>{p}</p>)}</div>
                    <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:20}}>
                      {(vResult.release.citacoes||[]).map((c,i)=><div key={i} style={{borderLeft:`3px solid ${[C.brilhante,C.medio,C.profundo][i%3]}`,paddingLeft:16}}>
                        <p style={{fontSize:13,lineHeight:1.7,fontStyle:"italic",marginBottom:5}}>"{c.texto}"</p>
                        <p style={{fontSize:11,color:C.textLight,...G(600)}}>{c.autor}</p>
                      </div>)}
                    </div>
                    <div style={{background:C.bg,borderRadius:8,padding:"12px 16px"}}><Lbl>Sobre o Ibope</Lbl><p style={{fontSize:12,lineHeight:1.7,color:C.textMuted}}>{vResult.release.sobre_ibope}</p></div>
                  </div>}

                  {activeTab==="angulos"&&vResult.angulos&&<div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
                      <div style={{fontSize:15,...G(700)}}>3 ângulos editoriais distintos</div>
                      <Cp copied={copied} onCopy={copy} id="ang" label="Copiar" text={vResult.angulos.map((a,i)=>`ÂNGULO ${i+1}: ${a.titulo}\nGancho: ${a.gancho}\nAbordagem: ${a.sugestao_abordagem}`).join("\n\n")}/>
                    </div>
                    {vResult.angulos.map((a,i)=><div key={i} style={{border:`1px solid ${C.border}`,borderRadius:10,padding:20,marginBottom:12,position:"relative",overflow:"hidden"}}>
                      <div style={{position:"absolute",top:0,left:0,width:3,height:"100%",background:[C.brilhante,C.medio,C.profundo][i]}}/>
                      <div style={{marginLeft:14}}>
                        <div style={{display:"flex",justifyContent:"space-between",marginBottom:10,flexWrap:"wrap",gap:6}}><Pill color={[C.brilhante,C.medio,C.profundo][i]}>ÂNGULO {i+1}</Pill><span style={{fontSize:11,color:C.textLight}}>🎯 {a.publico_alvo}</span></div>
                        <div style={{fontSize:15,...G(700),marginBottom:12}}>{a.titulo}</div>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                          {[["Gancho",a.gancho,"#fff8f0","#cc6600"],["Dados-chave",a.dados_chave,"#eef1ff",C.brilhante]].map(([l,v,bg,col])=><div key={l} style={{background:bg,borderRadius:7,padding:"10px 12px"}}><div style={{fontSize:10,...G(700),color:col,textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>{l}</div><div style={{fontSize:12,lineHeight:1.6}}>{v}</div></div>)}
                        </div>
                        <div style={{marginTop:10,background:C.bg,borderRadius:7,padding:"10px 12px"}}><div style={{fontSize:10,...G(700),color:C.textLight,textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>Abordagem</div><div style={{fontSize:12,lineHeight:1.6}}>{a.sugestao_abordagem}</div></div>
                      </div>
                    </div>)}
                  </div>}

                  {activeTab==="qaresult"&&vResult.qa&&<div>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}><div style={{fontSize:15,...G(700)}}>Q&A para Imprensa</div><Cp copied={copied} onCopy={copy} id="qa" label="Copiar" text={vResult.qa.map((q,i)=>`P${i+1}: ${q.pergunta}\nR: ${q.resposta}`).join("\n\n")}/></div>
                    {vResult.qa.map((item,i)=><div key={i} style={{border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden",marginBottom:10}}>
                      <div style={{background:"#eef1ff",padding:"10px 16px",display:"flex",gap:10,alignItems:"flex-start"}}><Pill>P {i+1}</Pill><p style={{fontSize:14,...G(700),lineHeight:1.5}}>{item.pergunta}</p></div>
                      <div style={{padding:"12px 16px 14px 46px"}}><p style={{fontSize:13,color:C.textMuted,lineHeight:1.75}}>{item.resposta}</p></div>
                    </div>)}
                  </div>}

                  {activeTab==="linkedin"&&vResult.linkedin&&<div>
                    <div style={{marginBottom:18}}><div style={{fontSize:15,...G(700),marginBottom:10}}>Estratégia editorial</div>
                      <div style={{borderLeft:`3px solid ${C.brilhante}`,paddingLeft:16}}>{vResult.linkedin.estrategia.split("\n\n").map((p,i)=><p key={i} style={{fontSize:13,lineHeight:1.75,color:C.textMuted,marginBottom:8}}>{p}</p>)}</div>
                    </div>
                    <div style={{display:"flex",gap:8,marginBottom:16}}>{PORTA_VOZES_LINKEDIN.map(v=><button key={v.id} onClick={()=>setLiView(v.id)} style={{padding:"8px 18px",border:`2px solid ${liView===v.id?C.brilhante:C.border}`,borderRadius:7,background:liView===v.id?"#eef1ff":C.branco,color:liView===v.id?C.brilhante:C.textMuted,fontSize:13,...G(liView===v.id?700:400),cursor:"pointer"}}>{v.nome}</button>)}</div>
                    {(liView==="marcio"?vResult.linkedin.posts_marcio:vResult.linkedin.posts_adriana)?.map((post,i)=><div key={i} style={{border:`1px solid ${C.border}`,borderRadius:10,marginBottom:12,overflow:"hidden"}}>
                      <div style={{background:C.bg,padding:"10px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`1px solid ${C.border}`}}>
                        <div style={{display:"flex",gap:10}}><span style={{fontSize:12,...G(700),color:C.brilhante}}>{post.dia}</span><span style={{fontSize:11,color:C.textLight}}>· {post.tema}</span></div>
                        <Cp copied={copied} onCopy={copy} id={`li-${liView}-${i}`} label="Copiar" text={`${post.post}\n\n${post.hashtags}`}/>
                      </div>
                      <div style={{padding:"7px 16px",background:"#fffbeb",borderBottom:"1px solid #f5e8b0"}}><span style={{fontSize:11,color:"#8a6000"}}>💡 {post.motivo}</span></div>
                      <div style={{padding:"14px 16px"}}>{post.post.split("\n").map((line,j)=><p key={j} style={{fontSize:14,lineHeight:1.65,marginBottom:8}}>{line}</p>)}<p style={{fontSize:13,color:"#0077B5",marginTop:10}}>{post.hashtags}</p></div>
                    </div>)}
                  </div>}

                  {activeTab==="interna"&&vResult.interna&&<div>
                    <div style={{marginBottom:20}}><div style={{fontSize:15,...G(700),marginBottom:10}}>Estratégia de engajamento</div><div style={{borderLeft:`3px solid ${C.brilhante}`,paddingLeft:16}}><p style={{fontSize:13,lineHeight:1.75,color:C.textMuted}}>{vResult.interna.estrategia}</p></div></div>
                    <div style={{marginBottom:20}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}><div style={{fontSize:15,...G(700)}}>Post Workvivo</div><Cp copied={copied} onCopy={copy} id="wv" label="Copiar" text={vResult.interna.post_workvivo}/></div>
                      <div style={{border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden"}}>
                        <div style={{background:C.bg,padding:"10px 16px",borderBottom:`1px solid ${C.border}`}}><span style={{fontSize:11,color:C.textMuted}}>📣 Workvivo</span></div>
                        <div style={{padding:"16px 18px"}}>{vResult.interna.post_workvivo.split("\n").map((l,i)=><p key={i} style={{fontSize:14,lineHeight:1.65,marginBottom:8}}>{l}</p>)}</div>
                      </div>
                    </div>
                    {vResult.interna.gamificacao&&<div>
                      <div style={{fontSize:15,...G(700),marginBottom:10}}>Gamificação — {vResult.interna.gamificacao.titulo_campanha}</div>
                      <div style={{background:"#fffbeb",border:"1px solid #f5e8b0",borderRadius:10,padding:"14px 18px",marginBottom:14}}>
                        <p style={{fontSize:13,lineHeight:1.7,color:C.textMuted,marginBottom:10}}>{vResult.interna.gamificacao.descricao}</p>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                          {[["Desafio",vResult.interna.gamificacao.desafio],["Prêmio",vResult.interna.gamificacao.premio_sugerido]].map(([l,v])=><div key={l}><div style={{fontSize:10,...G(700),color:"#8a6000",textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>{l}</div><div style={{fontSize:12}}>{v}</div></div>)}
                        </div>
                      </div>
                      <div style={{border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden"}}>
                        <div style={{background:C.brilhante,padding:"12px 20px",display:"flex",justifyContent:"space-between"}}>
                          <span style={{color:C.branco,...G(700),fontSize:14}}>Quiz Interativo</span>
                          {!quiz.done&&<span style={{color:"rgba(255,255,255,0.7)",fontSize:12}}>{quiz.current+1}/{vResult.interna.gamificacao.quiz.length} · {quiz.score} pts</span>}
                        </div>
                        <div style={{padding:"20px 22px"}}>
                          {!quiz.done?(()=>{
                            const q=vResult.interna.gamificacao.quiz[quiz.current];
                            return <div>
                              <p style={{fontSize:15,...G(700),lineHeight:1.5,marginBottom:16}}>{q.pergunta}</p>
                              <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:14}}>
                                {q.opcoes.map((op,oi)=>{let bg=C.branco,brd=C.border,col=C.textMain,fw=400;if(quiz.answered!==null){if(oi===q.resposta_correta){bg="#e8ffe8";brd="#00aa00";col="#006600";fw=700;}else if(oi===quiz.answered){bg="#ffe8e8";brd="#cc0000";col="#880000";}}return <button key={oi} onClick={()=>{if(quiz.answered!==null)return;setQuiz(s=>({...s,answered:oi,score:s.score+(oi===q.resposta_correta?1:0)}));}} style={{background:bg,border:`2px solid ${brd}`,color:col,borderRadius:8,padding:"10px 16px",fontSize:13,...G(fw),textAlign:"left",cursor:quiz.answered!==null?"default":"pointer"}}>{op}</button>;})}
                              </div>
                              {quiz.answered!==null&&<div><div style={{background:"#eef1ff",borderRadius:7,padding:"10px 14px",fontSize:12,lineHeight:1.6,marginBottom:12}}>💡 {q.curiosidade}</div>
                                <button onClick={()=>{const next=quiz.current+1;if(next>=vResult.interna.gamificacao.quiz.length)setQuiz(s=>({...s,done:true}));else setQuiz(s=>({...s,current:next,answered:null}));}} style={{background:C.brilhante,color:C.branco,border:"none",borderRadius:7,padding:"8px 20px",fontSize:13,...G(700),cursor:"pointer"}}>{quiz.current+1<vResult.interna.gamificacao.quiz.length?"Próxima →":"Ver resultado"}</button>
                              </div>}
                            </div>;
                          })():<div style={{textAlign:"center",padding:"16px 0"}}>
                            <div style={{fontSize:36,marginBottom:10}}>{quiz.score===vResult.interna.gamificacao.quiz.length?"🏆":quiz.score>=3?"🥈":"📚"}</div>
                            <div style={{fontSize:22,...G(800),color:C.brilhante,marginBottom:6}}>{quiz.score}/{vResult.interna.gamificacao.quiz.length}</div>
                            <button onClick={()=>setQuiz({current:0,answered:null,score:0,done:false})} style={{background:C.brilhante,color:C.branco,border:"none",borderRadius:7,padding:"8px 20px",fontSize:13,...G(700),cursor:"pointer"}}>Jogar novamente</button>
                          </div>}
                        </div>
                      </div>
                    </div>}
                  </div>}

                  {activeTab==="chatbot"&&<div>
                    <div style={{marginBottom:14}}><div style={{fontSize:15,...G(700),marginBottom:4}}>Chatbot de Imprensa</div><div style={{fontSize:12,color:C.textMuted}}>Simule perguntas de repórteres.</div></div>
                    <ChatPanel height={360}/>
                  </div>}
                </div>
              </div>
            )}
          </>
        )}

        {(!isAdmin||adminView==="public")&&(
          <div>
            {isAdmin&&<Card style={{marginBottom:14}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                <div><div style={{fontSize:15,...G(700),marginBottom:3}}>Fotos dos Porta-vozes</div><div style={{fontSize:12,color:C.textMuted}}>Disponíveis para download pela imprensa.</div></div>
                <button onClick={()=>fotoInputRef.current?.click()} style={{background:C.brilhante,color:C.branco,border:"none",borderRadius:7,padding:"8px 18px",fontSize:13,...G(700),cursor:"pointer"}}>+ Fotos</button>
              </div>
              <input ref={fotoInputRef} type="file" accept="image/*" multiple onChange={handleFotoUpload} style={{display:"none"}}/>
              {fotos.length>0?<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
                {fotos.map(f=><div key={f.id} style={{position:"relative"}}>
                  <img src={f.src} alt={f.name} style={{width:"100%",height:100,objectFit:"cover",borderRadius:8,border:`1px solid ${C.border}`}}/>
                  <button onClick={()=>setFotos(p=>p.filter(x=>x.id!==f.id))} style={{position:"absolute",top:4,right:4,background:"rgba(0,0,0,0.5)",border:"none",color:"white",borderRadius:"50%",width:20,height:20,fontSize:11,cursor:"pointer"}}>✕</button>
                </div>)}
              </div>:<div style={{border:`2px dashed ${C.border}`,borderRadius:8,padding:"16px",textAlign:"center",color:C.textLight,fontSize:13}}>Nenhuma foto adicionada</div>}
            </Card>}

            <div style={{display:"flex",borderBottom:`1px solid ${C.border}`,marginBottom:20,background:C.branco,borderRadius:"10px 10px 0 0",overflow:"hidden"}}>
              {[{id:"release_pub",label:"📰 Release"},{id:"fotos_pub",label:"📸 Fotos"},{id:"chatbot_pub",label:"💬 Fale com o Ibope"}].map(tab=>(
                <button key={tab.id} onClick={()=>setActiveTab(tab.id)} style={{padding:"13px 20px",border:"none",background:"none",fontSize:13,...G(activeTab===tab.id?700:400),color:activeTab===tab.id?C.brilhante:C.textMuted,cursor:"pointer",whiteSpace:"nowrap",borderBottom:`2px solid ${activeTab===tab.id?C.brilhante:"transparent"}`,marginBottom:-1,transition:"all 0.15s"}}>{tab.label}</button>
              ))}
            </div>

            {activeTab==="release_pub"&&<Card>
              {vResult?.release?<div>
                <div style={{display:"flex",justifyContent:"space-between",gap:16,marginBottom:20}}>
                  <div style={{flex:1}}><Lbl>Release de Imprensa · Ibope</Lbl>
                    <h1 style={{fontSize:22,...G(800),lineHeight:1.2,letterSpacing:-0.5,marginBottom:10}}>{vResult.release.titulo}</h1>
                    <p style={{fontSize:15,color:C.textMuted,lineHeight:1.6}}>{vResult.release.subtitulo}</p>
                  </div>
                  <Cp copied={copied} onCopy={copy} id="rel_pub" label="Copiar" text={`${vResult.release.titulo}\n\n${vResult.release.subtitulo}\n\n${vResult.release.corpo}\n\n${(vResult.release.citacoes||[]).map(c=>`"${c.texto}" — ${c.autor}`).join("\n\n")}\n\n${vResult.release.sobre_ibope}`}/>
                </div>
                <div style={{borderTop:`3px solid ${C.brilhante}`,paddingTop:20,marginBottom:20}}>{vResult.release.corpo.split("\n\n").map((p,i)=><p key={i} style={{marginBottom:14,fontSize:14,lineHeight:1.85}}>{p}</p>)}</div>
                <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:20}}>
                  {(vResult.release.citacoes||[]).map((c,i)=><div key={i} style={{borderLeft:`3px solid ${[C.brilhante,C.medio,C.profundo][i%3]}`,paddingLeft:16}}>
                    <p style={{fontSize:13,lineHeight:1.7,fontStyle:"italic",marginBottom:5}}>"{c.texto}"</p>
                    <p style={{fontSize:11,color:C.textLight,...G(600)}}>{c.autor}</p>
                  </div>)}
                </div>
                <div style={{background:C.bg,borderRadius:8,padding:"12px 16px"}}><Lbl>Sobre o Ibope</Lbl><p style={{fontSize:12,lineHeight:1.7,color:C.textMuted}}>{vResult.release.sobre_ibope}</p></div>
              </div>:<div style={{textAlign:"center",padding:"40px 0",color:C.textLight}}><div style={{fontSize:32,marginBottom:10}}>📰</div><div style={{fontSize:14}}>Release ainda não disponível</div></div>}
            </Card>}

            {activeTab==="fotos_pub"&&<Card>
              <div style={{fontSize:15,...G(700),marginBottom:16}}>Fotos para Imprensa</div>
              {fotos.length>0?<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:16}}>
                {fotos.map(f=><div key={f.id} style={{border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden"}}>
                  <img src={f.src} alt={f.name} style={{width:"100%",height:180,objectFit:"cover"}}/>
                  <div style={{padding:"10px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{fontSize:12,color:C.textMuted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1}}>{f.name}</div>
                    <a href={f.src} download={f.name} style={{background:C.brilhante,color:C.branco,borderRadius:6,padding:"5px 10px",fontSize:11,...G(700),textDecoration:"none",marginLeft:8,flexShrink:0}}>⬇</a>
                  </div>
                </div>)}
              </div>:<div style={{textAlign:"center",padding:"40px 0",color:C.textLight}}><div style={{fontSize:32,marginBottom:10}}>📸</div><div style={{fontSize:14}}>Nenhuma foto disponível</div></div>}
            </Card>}

            {activeTab==="chatbot_pub"&&<Card>
              <div style={{marginBottom:14}}><div style={{fontSize:15,...G(700),marginBottom:4}}>Fale com o Ibope</div><div style={{fontSize:12,color:C.textMuted}}>Tire dúvidas sobre os dados desta pesquisa.</div></div>
              <ChatPanel height={380}/>
            </Card>}
          </div>
        )}


      </div>
    </div>
  );
}

import { useState, useMemo, useRef } from "react";

const RAW = [{"d":"2026-01-10","ml":435,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":4,"ls":185,"ga":1},{"d":"2026-01-11","ml":310,"fc":3,"fm":1,"bm":4,"po":3,"na":4,"wu":2,"ls":205,"ga":4},{"d":"2026-01-12","ml":410,"fc":4,"fm":1,"bm":3,"po":8,"na":4,"wu":11,"ls":235,"ga":10},{"d":"2026-01-13","ml":360,"fc":3,"fm":1,"bm":2,"po":4,"na":5,"wu":7,"ls":117,"ga":5},{"d":"2026-01-14","ml":500,"fc":4,"fm":3,"bm":1,"po":3,"na":5,"wu":6,"ls":100,"ga":5},{"d":"2026-01-15","ml":460,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":5,"ls":140,"ga":7},{"d":"2026-01-16","ml":480,"fc":4,"fm":1,"bm":3,"po":5,"na":6,"wu":6,"ls":157,"ga":5},{"d":"2026-01-17","ml":230,"fc":2,"fm":0,"bm":2,"po":4,"na":4,"wu":5,"ls":285,"ga":6},{"d":"2026-01-18","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":4,"wu":6,"ls":210,"ga":2},{"d":"2026-01-19","ml":420,"fc":4,"fm":2,"bm":2,"po":2,"na":7,"wu":2,"ls":110,"ga":4},{"d":"2026-01-20","ml":260,"fc":2,"fm":1,"bm":1,"po":2,"na":5,"wu":8,"ls":135,"ga":5},{"d":"2026-01-21","ml":480,"fc":4,"fm":2,"bm":2,"po":3,"na":4,"wu":3,"ls":160,"ga":2},{"d":"2026-01-22","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":6,"wu":6,"ls":159,"ga":5},{"d":"2026-01-23","ml":470,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":5,"ls":173,"ga":2},{"d":"2026-01-24","ml":360,"fc":3,"fm":0,"bm":3,"po":1,"na":3,"wu":3,"ls":220,"ga":5},{"d":"2026-01-26","ml":425,"fc":4,"fm":2,"bm":2,"po":2,"na":5,"wu":5,"ls":115,"ga":7},{"d":"2026-01-27","ml":380,"fc":3,"fm":3,"bm":0,"po":3,"na":4,"wu":10,"ls":222,"ga":5},{"d":"2026-01-28","ml":360,"fc":3,"fm":0,"bm":3,"po":0,"na":5,"wu":4,"ls":205,"ga":7},{"d":"2026-01-29","ml":440,"fc":5,"fm":1,"bm":4,"po":1,"na":6,"wu":5,"ls":208,"ga":5},{"d":"2026-01-30","ml":370,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":8,"ls":202,"ga":9},{"d":"2026-01-31","ml":470,"fc":4,"fm":1,"bm":3,"po":0,"na":5,"wu":5,"ls":110,"ga":6},{"d":"2026-02-01","ml":360,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":165,"ga":6},{"d":"2026-02-04","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":4,"wu":6,"ls":280,"ga":3},{"d":"2026-02-05","ml":390,"fc":4,"fm":0,"bm":4,"po":0,"na":2,"wu":4,"ls":208,"ga":4},{"d":"2026-02-06","ml":430,"fc":4,"fm":3,"bm":1,"po":1,"na":6,"wu":7,"ls":205,"ga":4},{"d":"2026-02-07","ml":480,"fc":4,"fm":1,"bm":3,"po":0,"na":4,"wu":5,"ls":180,"ga":3},{"d":"2026-02-09","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":233,"ga":3},{"d":"2026-02-10","ml":262,"fc":3,"fm":2,"bm":1,"po":2,"na":4,"wu":5,"ls":300,"ga":1},{"d":"2026-02-11","ml":290,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":6,"ls":255,"ga":4},{"d":"2026-02-12","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":7,"ls":205,"ga":2},{"d":"2026-02-13","ml":500,"fc":5,"fm":4,"bm":1,"po":0,"na":4,"wu":8,"ls":240,"ga":1},{"d":"2026-02-14","ml":330,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":4,"ls":190,"ga":0},{"d":"2026-02-15","ml":290,"fc":4,"fm":1,"bm":3,"po":1,"na":5,"wu":7,"ls":232,"ga":1},{"d":"2026-02-16","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":5,"wu":7,"ls":160,"ga":5},{"d":"2026-02-17","ml":240,"fc":2,"fm":0,"bm":2,"po":0,"na":4,"wu":7,"ls":130,"ga":4},{"d":"2026-02-18","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":3,"ls":193,"ga":3},{"d":"2026-02-19","ml":430,"fc":4,"fm":3,"bm":1,"po":0,"na":4,"wu":5,"ls":218,"ga":2},{"d":"2026-02-20","ml":410,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":8,"ls":162,"ga":2},{"d":"2026-02-21","ml":350,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":5,"ls":145,"ga":1},{"d":"2026-02-23","ml":310,"fc":4,"fm":1,"bm":3,"po":0,"na":3,"wu":4,"ls":205,"ga":0},{"d":"2026-02-24","ml":380,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":5,"ls":173,"ga":2},{"d":"2026-02-25","ml":380,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":4,"ls":217,"ga":4},{"d":"2026-02-26","ml":510,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":7,"ls":115,"ga":2},{"d":"2026-02-27","ml":440,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":6,"ls":143,"ga":3},{"d":"2026-02-28","ml":380,"fc":4,"fm":3,"bm":1,"po":1,"na":4,"wu":7,"ls":328,"ga":2},{"d":"2026-03-01","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":5,"wu":7,"ls":190,"ga":1},{"d":"2026-03-03","ml":390,"fc":5,"fm":4,"bm":1,"po":2,"na":4,"wu":2,"ls":112,"ga":3},{"d":"2026-03-04","ml":390,"fc":4,"fm":1,"bm":3,"po":4,"na":5,"wu":3,"ls":325,"ga":7},{"d":"2026-03-05","ml":270,"fc":3,"fm":3,"bm":0,"po":3,"na":5,"wu":3,"ls":205,"ga":1},{"d":"2026-03-06","ml":310,"fc":5,"fm":1,"bm":4,"po":3,"na":4,"wu":5,"ls":155,"ga":3},{"d":"2026-03-07","ml":280,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":130,"ga":3},{"d":"2026-03-09","ml":300,"fc":3,"fm":0,"bm":3,"po":2,"na":4,"wu":7,"ls":157,"ga":3},{"d":"2026-03-10","ml":390,"fc":4,"fm":3,"bm":1,"po":4,"na":4,"wu":6,"ls":225,"ga":2},{"d":"2026-03-11","ml":180,"fc":2,"fm":1,"bm":1,"po":3,"na":5,"wu":5,"ls":138,"ga":3},{"d":"2026-03-12","ml":400,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":3,"ls":133,"ga":0},{"d":"2026-03-13","ml":450,"fc":5,"fm":1,"bm":4,"po":4,"na":6,"wu":5,"ls":190,"ga":3},{"d":"2026-03-14","ml":350,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":205,"ga":3},{"d":"2026-03-15","ml":440,"fc":4,"fm":2,"bm":2,"po":5,"na":6,"wu":4,"ls":260,"ga":1},{"d":"2026-03-16","ml":430,"fc":5,"fm":2,"bm":3,"po":2,"na":3,"wu":3,"ls":353,"ga":2},{"d":"2026-03-17","ml":450,"fc":4,"fm":2,"bm":2,"po":3,"na":5,"wu":4,"ls":225,"ga":1},{"d":"2026-03-19","ml":410,"fc":4,"fm":3,"bm":1,"po":3,"na":3,"wu":5,"ls":330,"ga":2},{"d":"2026-03-20","ml":485,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":8,"ls":155,"ga":2}];

/* helpers */
const avg = a => a.length ? Math.round(a.reduce((s,v)=>s+v,0)/a.length*10)/10 : 0;
const sum = a => a.reduce((s,v)=>s+v,0);
const fmtMin = m => `${Math.floor(m/60)}h ${Math.round(m%60)}m`;
const byMonth = (d, m) => d.filter(r => r.d.startsWith(m));
const MN = {"2026-01":"Jan","2026-02":"Feb","2026-03":"Mar"};
const MF = {"2026-01":"January","2026-02":"February","2026-03":"March"};
const MK = ["2026-01","2026-02","2026-03"];

/* ── Spark line ── */
function Spark({ data, color, h = 44 }) {
  if (!data.length) return null;
  const mn = Math.min(...data), mx = Math.max(...data), rng = mx-mn||1, w = 200, p = 6;
  const pts = data.map((v,i) => {
    const x = data.length>1 ? i/(data.length-1)*(w-p*2)+p : w/2;
    const y = h-p-((v-mn)/rng)*(h-p*2);
    return `${x},${y}`;
  });
  const area = [...pts,`${data.length>1?w-p:w/2},${h}`,`${p},${h}`];
  const id = `g${color.replace(/[^a-z0-9]/gi,'')}${h}`;
  return <svg viewBox={`0 0 ${w} ${h}`} style={{width:"100%",height:h,display:"block"}} preserveAspectRatio="none">
    <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.25"/><stop offset="100%" stopColor={color} stopOpacity="0.02"/></linearGradient></defs>
    <polygon points={area.join(' ')} fill={`url(#${id})`}/>
    <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}

/* ── Bar chart ── */
function Bars({ data, color, mx, h = 100 }) {
  return <div>
    <div style={{display:"flex",alignItems:"flex-end",gap:1,height:h}}>
      {data.map((v,i)=>{
        const bh = mx>0?(v.v/mx)*(h-16):0;
        const c = typeof color==='function'?color(v.v):color;
        return <div key={i} title={`${v.l}: ${v.v}`} style={{flex:1,minWidth:0,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
          <div style={{width:"100%",maxWidth:14,height:Math.max(2,bh),background:c,borderRadius:3,opacity:0.85}}/>
        </div>;
      })}
    </div>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:6}}>
      <span style={{fontSize:10,color:"rgba(255,255,255,0.22)"}}>{data[0]?.l}</span>
      <span style={{fontSize:10,color:"rgba(255,255,255,0.22)"}}>{data[data.length-1]?.l}</span>
    </div>
  </div>;
}

/* ── Progress bar ── */
function PBar({ value, max, color, h = 10 }) {
  const pct = max>0?Math.min(value/max*100,100):0;
  return <div style={{width:"100%",height:h,background:"rgba(255,255,255,0.06)",borderRadius:h/2,overflow:"hidden"}}>
    <div style={{width:`${pct}%`,height:"100%",background:color,borderRadius:h/2,transition:"width 0.5s ease"}}/>
  </div>;
}

/* ── Stacked bar chart for BM/FM ── */
function FeedMixBars({ data }) {
  const md = MK.map(m=>{const d=byMonth(data,m);const tf=sum(d.map(r=>r.fm)),tb=sum(d.map(r=>r.bm)),t=tf+tb;return{month:MN[m],bm:t>0?Math.round(tb/t*100):0,fm:t>0?Math.round(tf/t*100):0};});
  return <div style={{display:"flex",gap:12,alignItems:"flex-end"}}>
    {md.map((m,i)=><div key={i} style={{flex:1,textAlign:"center"}}>
      <div style={{height:110,display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:"1px solid rgba(255,255,255,0.06)"}}>
        <div style={{flex:m.bm,background:"linear-gradient(180deg,#818cf8,#6366f1)",display:"flex",alignItems:"center",justifyContent:"center"}}>{m.bm>12&&<span style={{fontSize:13,fontWeight:700,color:"white"}}>{m.bm}%</span>}</div>
        <div style={{flex:m.fm,background:"linear-gradient(180deg,#fb923c,#ea580c)",display:"flex",alignItems:"center",justifyContent:"center"}}>{m.fm>12&&<span style={{fontSize:13,fontWeight:700,color:"white"}}>{m.fm}%</span>}</div>
      </div>
      <div style={{fontSize:12,color:"rgba(255,255,255,0.5)",marginTop:8,fontWeight:600}}>{m.month}</div>
    </div>)}
    <div style={{display:"flex",flexDirection:"column",gap:8,paddingBottom:28,marginLeft:6}}>
      <div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:12,height:12,borderRadius:3,background:"#818cf8"}}/><span style={{fontSize:12,color:"rgba(255,255,255,0.45)"}}>Breast Milk</span></div>
      <div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:12,height:12,borderRadius:3,background:"#fb923c"}}/><span style={{fontSize:12,color:"rgba(255,255,255,0.45)"}}>Formula</span></div>
    </div>
  </div>;
}

/* ── Clickable summary section ── */
function Section({ icon, title, badge, badgeColor, onClick, children }) {
  return <div onClick={onClick} style={{
    background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:16,padding:"18px 20px",
    cursor:onClick?"pointer":"default",transition:"border-color 0.2s",WebkitTapHighlightColor:"transparent",
  }}
  onPointerEnter={e=>{if(onClick) e.currentTarget.style.borderColor="rgba(99,102,241,0.25)";}}
  onPointerLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";}}
  >
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"}}>
      <span style={{fontSize:22}}>{icon}</span>
      <span style={{fontSize:15,fontWeight:700,color:"rgba(255,255,255,0.85)",flex:1,lineHeight:1.3}}>{title}</span>
      <span style={{fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:20,background:`${badgeColor}18`,color:badgeColor,whiteSpace:"nowrap"}}>{badge}</span>
      {onClick && <span style={{fontSize:14,color:"rgba(255,255,255,0.2)",marginLeft:-4}}>›</span>}
    </div>
    {children}
  </div>;
}

/* ── Benchmark tip ── */
function Tip({ color, children }) {
  return <div style={{marginTop:12,padding:"12px 14px",background:`${color}0a`,borderRadius:10,border:`1px solid ${color}15`}}>
    <p style={{fontSize:12.5,color:"rgba(255,255,255,0.42)",lineHeight:1.7,margin:0}}>{children}</p>
  </div>;
}

/* ═══════════════════════════════════════════ */
/*               MAIN DASHBOARD               */
/* ═══════════════════════════════════════════ */
export default function LeoDashboard() {
  const [tab, setTab] = useState("overview");
  const data = RAW;
  const topRef = useRef(null);
  const goTo = t => { setTab(t); setTimeout(()=>topRef.current?.scrollIntoView({behavior:"smooth"}),50); };

  const ms = useMemo(() => {
    const o = {};
    MK.forEach(m => {
      const d = byMonth(data,m);
      const totalFm = sum(d.map(r=>r.fm)), totalBm = sum(d.map(r=>r.bm)), totalFeeds = totalFm+totalBm;
      o[m] = {
        n:d.length, avgMl:avg(d.map(r=>r.ml)), avgFeeds:avg(d.map(r=>r.fc)),
        avgPerFeed: totalFeeds>0?Math.round(sum(d.map(r=>r.ml))/totalFeeds):0,
        fmPct:totalFeeds>0?Math.round(100*totalFm/totalFeeds):0, bmPct:totalFeeds>0?Math.round(100*totalBm/totalFeeds):0,
        avgSleep:avg(d.filter(r=>r.ls>0).map(r=>r.ls)), bestSleep:Math.max(...d.map(r=>r.ls)),
        over4h:d.filter(r=>r.ls>=240).length, avgWu:avg(d.map(r=>r.wu)),
        avgPoo:avg(d.map(r=>r.po)), pooFree:d.filter(r=>r.po===0).length,
        avgGas:avg(d.map(r=>r.ga)), avgNap:avg(d.map(r=>r.na)),
      };
    });
    return o;
  }, []);

  const tabs = [{id:"overview",label:"Overview",icon:"📊"},{id:"sleep",label:"Sleep",icon:"🌙"},{id:"feeding",label:"Feeding",icon:"🍼"},{id:"digestion",label:"Digestion",icon:"💩"}];
  const sleepCol = v=>v>=240?"#4ade80":v>=180?"#818cf8":v>=120?"#fbbf24":"#f87171";
  const wakeCol = v=>v<=3?"#4ade80":v<=5?"#fbbf24":"#f87171";
  const gasCol = v=>v>=7?"#f87171":v>=4?"#fbbf24":"#4ade80";
  const P = {fontSize:13.5,color:"rgba(255,255,255,0.5)",lineHeight:1.75,margin:0};
  const C = {background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:16,padding:"18px 20px"};
  const H3 = {fontSize:16,fontWeight:700,margin:"0 0 14px",color:"rgba(255,255,255,0.75)",lineHeight:1.3};
  const LBL = {fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.07em",color:"rgba(255,255,255,0.35)"};

  return (
    <div style={{fontFamily:"'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",background:"#0b0b12",color:"rgba(255,255,255,0.85)",minHeight:"100vh",maxWidth:540,margin:"0 auto",paddingBottom:60,WebkitFontSmoothing:"antialiased"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>

      {/* HEADER */}
      <div ref={topRef} style={{padding:"28px 20px 20px",background:"linear-gradient(180deg,rgba(99,102,241,0.07) 0%,transparent 100%)",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <span style={{fontSize:28}}>👶</span>
          <div>
            <h1 style={{fontSize:22,fontWeight:700,margin:0,letterSpacing:"-0.02em",background:"linear-gradient(135deg,#e0e7ff,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Leo's Night Report</h1>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.3)",margin:"4px 0 0",fontWeight:500}}>Jan 10 – Mar 20, 2026 · {data.length} nights · 7 PM – 7 AM</p>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div style={{display:"flex",gap:4,padding:"10px 20px",overflowX:"auto",borderBottom:"1px solid rgba(255,255,255,0.04)",WebkitOverflowScrolling:"touch"}}>
        {tabs.map(t=><button key={t.id} onClick={()=>goTo(t.id)} style={{
          padding:"10px 18px",borderRadius:10,cursor:"pointer",fontSize:14,fontWeight:600,fontFamily:"inherit",
          whiteSpace:"nowrap",transition:"all 0.15s",border:"none",minHeight:44,
          background:tab===t.id?"rgba(99,102,241,0.15)":"transparent",
          color:tab===t.id?"#a5b4fc":"rgba(255,255,255,0.35)",
          outline:tab===t.id?"1px solid rgba(99,102,241,0.2)":"1px solid transparent",
        }}>{t.icon} {t.label}</button>)}
      </div>

      <div style={{padding:"16px 20px"}}>

      {/* ═══════════════ OVERVIEW ═══════════════ */}
      {tab==="overview" && <div style={{display:"flex",flexDirection:"column",gap:16}}>

        {/* VERDICT */}
        <div style={{background:"linear-gradient(135deg,rgba(74,222,128,0.06),rgba(99,102,241,0.04))",border:"1px solid rgba(74,222,128,0.15)",borderRadius:16,padding:"18px 20px"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
            <div style={{width:32,height:32,borderRadius:10,background:"rgba(74,222,128,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>✅</div>
            <h3 style={{fontSize:16,fontWeight:700,margin:0,color:"#4ade80",lineHeight:1.3}}>Overall: Healthy, On Track</h3>
          </div>
          <p style={P}>Across {data.length} tracked nights, Leo is showing steady, age-appropriate progress. Sleep is consolidating, his gut is maturing, and feeding patterns are stable. For a baby in the 1–3 month range, all of this falls well within normal developmental expectations. No red flags. Tap any section below to explore the full data.</p>
        </div>

        {/* ── SLEEP ── */}
        <Section icon="🌙" title="Sleep" badge="Improving" badgeColor="#4ade80" onClick={()=>goTo("sleep")}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}>
            {MK.map(m=><div key={m} style={{textAlign:"center",padding:"12px 6px",background:"rgba(255,255,255,0.03)",borderRadius:10}}>
              <div style={{...LBL,fontSize:10,marginBottom:6}}>{MN[m]}</div>
              <div style={{fontSize:18,fontWeight:700,color:"#818cf8",lineHeight:1.1}}>{fmtMin(ms[m].avgSleep)}</div>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.28)",marginTop:4}}>avg longest stretch</div>
            </div>)}
          </div>
          <p style={P}>Longest uninterrupted stretch grew from {fmtMin(ms["2026-01"].avgSleep)} avg in January to {fmtMin(ms["2026-03"].avgSleep)} in March. Personal best was {fmtMin(ms["2026-03"].bestSleep)} on Mar 16. Nights with 4+ hour stretches went from {Math.round(ms["2026-01"].over4h/ms["2026-01"].n*100)}% to {Math.round(ms["2026-03"].over4h/ms["2026-03"].n*100)}%. Wake-ups eased from {ms["2026-01"].avgWu} to {ms["2026-03"].avgWu} per night.</p>
          <Tip color="#818cf8"><strong style={{color:"rgba(255,255,255,0.55)"}}>vs. Typical: </strong>At 1–3 months, most babies sleep in 2–4 hour stretches and wake 2–4 times for feeds. Leo's 3+ hour blocks with occasional 4–5 hour stretches are right on target. Consolidated 5–6 hour stretches typically emerge around 3–4 months, and he's already showing flashes of that.</Tip>
        </Section>

        {/* ── FEEDING ── */}
        <Section icon="🍼" title="Feeding" badge="Stable" badgeColor="rgba(255,255,255,0.4)" onClick={()=>goTo("feeding")}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:14}}>
            {MK.map(m=><div key={m} style={{padding:"12px 8px",background:"rgba(255,255,255,0.03)",borderRadius:10}}>
              <div style={{...LBL,fontSize:10,marginBottom:8,textAlign:"center"}}>{MN[m]}</div>
              <div style={{fontSize:18,fontWeight:700,color:"#38bdf8",textAlign:"center"}}>{Math.round(ms[m].avgMl)}<span style={{fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.3)"}}> ml</span></div>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.28)",textAlign:"center",marginTop:2}}>per night avg</div>
              <div style={{borderTop:"1px solid rgba(255,255,255,0.05)",marginTop:10,paddingTop:8,display:"flex",flexDirection:"column",gap:5}}>
                {[["Feeds/night",ms[m].avgFeeds,"rgba(255,255,255,0.6)"],["Per feed",ms[m].avgPerFeed+" ml","rgba(255,255,255,0.6)"],["BM",ms[m].bmPct+"%","#818cf8"],["FM",ms[m].fmPct+"%","#fb923c"]].map(([l,v,c])=>
                  <div key={l} style={{display:"flex",justifyContent:"space-between",fontSize:12,padding:"0 2px"}}>
                    <span style={{color:"rgba(255,255,255,0.32)"}}>{l}</span>
                    <span style={{color:c,fontWeight:600}}>{v}</span>
                  </div>
                )}
              </div>
            </div>)}
          </div>
          <p style={P}>Total nightly intake has held steady at 370–400 ml. Volume per feed is consistent at 97–115 ml, meaning Leo feeds efficiently. The breast milk to formula ratio shifted gradually from {ms["2026-01"].bmPct}/{ms["2026-01"].fmPct} in Jan to {ms["2026-03"].bmPct}/{ms["2026-03"].fmPct} in Mar.</p>
          <Tip color="#38bdf8"><strong style={{color:"rgba(255,255,255,0.55)"}}>vs. Typical: </strong>At 1–3 months, babies consume 120–180 ml per feed every 2–4 hours. Leo's ~370–400 ml during the 12-hour night shift likely puts his total daily intake in the normal 600–900 ml/day range. The gradual formula shift is very common. Stable per-feed volume is a positive sign.</Tip>
        </Section>

        {/* ── DIGESTION ── */}
        <Section icon="💩" title="Digestion & Bowel" badge="Maturing" badgeColor="#4ade80" onClick={()=>goTo("digestion")}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:14}}>
            {MK.map(m=><div key={m} style={{padding:"12px 8px",background:"rgba(255,255,255,0.03)",borderRadius:10}}>
              <div style={{...LBL,fontSize:10,marginBottom:8,textAlign:"center"}}>{MN[m]}</div>
              {[["💩 Poops",ms[m].avgPoo+"/n","#fbbf24"],["💨 Gas",ms[m].avgGas+"/n","#94a3b8"],["👶 Nappies",ms[m].avgNap+"/n","#f472b6"]].map(([l,v,c])=>
                <div key={l} style={{display:"flex",justifyContent:"space-between",fontSize:12,padding:"3px 4px"}}>
                  <span style={{color:"rgba(255,255,255,0.32)"}}>{l}</span>
                  <span style={{color:c,fontWeight:700}}>{v}</span>
                </div>
              )}
            </div>)}
          </div>
          <p style={P}>Gassy events dropped 53%, from {ms["2026-01"].avgGas}/night in Jan to {ms["2026-03"].avgGas}/night in Mar. This is the single biggest improvement and directly contributes to better sleep. Poops averaged {ms["2026-01"].avgPoo}/night in Jan, dropped to {ms["2026-02"].avgPoo}/night in Feb (71% poop-free nights), then rose to {ms["2026-03"].avgPoo}/night in Mar.</p>
          <Tip color="#fbbf24"><strong style={{color:"rgba(255,255,255,0.55)"}}>vs. Typical: </strong>Infant gas and colic peak around 2–6 weeks and resolve by 3–4 months as the gut matures. Leo's 53% gas drop is textbook. Newborns commonly poop 3–5+ times/day, dropping as the gut matures around 6–8 weeks. The Feb dip aligns perfectly. The Mar uptick can happen when formula ratios change. As long as stools are soft and Leo isn't distressed, this is all normal.</Tip>
        </Section>

        {/* ── DEVELOPMENT ── */}
        <Section icon="🧒" title="Development & Independence" badge="On Track" badgeColor="#4ade80">
          <p style={P}>Tummy time was introduced mid-Feb and became regular in March. On Mar 17, the nurse noted Leo "started to crawl" during tummy time. He actively changes his own head position during sleep from late Jan onward, showing growing neck strength. Cooing, smiling, and responding to voices were observed. A consistent bedtime routine (bath/massage) became standard by late Feb.</p>
          <Tip color="#f472b6"><strong style={{color:"rgba(255,255,255,0.55)"}}>vs. Typical: </strong>Head control and repositioning is expected at 2–3 months. Cooing and social smiling emerge at 6–8 weeks. The "crawling" at ~10 weeks is likely early scooting/pushing during tummy time, which is great. True crawling comes at 6–10 months. The fact that Leo engages with tummy time and shows these early movements is excellent progress.</Tip>
        </Section>

        {/* TIMELINE */}
        <div style={C}>
          <h3 style={H3}>Nightly Sleep Stretches</h3>
          <Bars data={data.map(r=>({v:r.ls,l:r.d.slice(5)}))} color={sleepCol} mx={400} h={90}/>
          <div style={{display:"flex",gap:12,marginTop:10,flexWrap:"wrap"}}>
            {[["#4ade80","4+ hrs"],["#818cf8","3–4 hrs"],["#fbbf24","2–3 hrs"],["#f87171","< 2 hrs"]].map(([c,l])=>
              <div key={l} style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:8,height:8,borderRadius:2,background:c}}/><span style={{fontSize:11,color:"rgba(255,255,255,0.3)"}}>{l}</span></div>
            )}
          </div>
        </div>
      </div>}

      {/* ═══════════════ SLEEP ═══════════════ */}
      {tab==="sleep" && <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {MK.map((m,i)=>{
          const c = ["#fb923c","#818cf8","#4ade80"][i];
          const md = byMonth(data,m);
          return <div key={m} style={{...C,display:"flex",gap:16,alignItems:"center"}}>
            <div style={{flex:1}}>
              <div style={{...LBL,marginBottom:4}}>{MF[m]} ({ms[m].n} nights)</div>
              <div style={{fontSize:28,fontWeight:700,color:c,lineHeight:1.1}}>{fmtMin(ms[m].avgSleep)}</div>
              <div style={{fontSize:12,color:"rgba(255,255,255,0.3)",marginTop:2}}>avg longest stretch</div>
              <div style={{display:"flex",gap:16,marginTop:10,fontSize:13}}>
                <span style={{color:"rgba(255,255,255,0.4)"}}>Best <strong style={{color:c}}>{fmtMin(ms[m].bestSleep)}</strong></span>
                <span style={{color:"rgba(255,255,255,0.4)"}}>Wakes <strong style={{color:"rgba(255,255,255,0.65)"}}>{ms[m].avgWu}/n</strong></span>
              </div>
            </div>
            <div style={{width:"38%"}}><Spark data={md.map(r=>r.ls)} color={c}/></div>
          </div>;
        })}

        <div style={C}>
          <h3 style={H3}>Wake-ups per Night</h3>
          <Bars data={data.map(r=>({v:r.wu,l:r.d.slice(5)}))} color={wakeCol} mx={12} h={80}/>
          <div style={{display:"flex",gap:12,marginTop:10,flexWrap:"wrap"}}>
            {[["#4ade80","≤ 3"],["#fbbf24","4–5"],["#f87171","6+"]].map(([c,l])=>
              <div key={l} style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:8,height:8,borderRadius:2,background:c}}/><span style={{fontSize:11,color:"rgba(255,255,255,0.3)"}}>{l} wake-ups</span></div>
            )}
          </div>
        </div>

        <div style={C}>
          <h3 style={H3}>Nights with 4+ Hour Stretches</h3>
          {MK.map(m=>{const pct=Math.round(ms[m].over4h/ms[m].n*100);return <div key={m} style={{marginBottom:16}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:14,marginBottom:6}}>
              <span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[m]}</span>
              <span style={{color:"#818cf8",fontWeight:700}}>{ms[m].over4h} of {ms[m].n} nights ({pct}%)</span>
            </div>
            <PBar value={pct} max={100} color="#818cf8"/>
          </div>;})}
        </div>
      </div>}

      {/* ═══════════════ FEEDING ═══════════════ */}
      {tab==="feeding" && <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {MK.map(m=><div key={m} style={C}>
          <div style={{...LBL,marginBottom:12}}>{MF[m]} ({ms[m].n} nights)</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <div><div style={{fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:2}}>Avg intake/night</div><div style={{fontSize:22,fontWeight:700,color:"#38bdf8"}}>{Math.round(ms[m].avgMl)} ml</div></div>
            <div><div style={{fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:2}}>Avg feeds/night</div><div style={{fontSize:22,fontWeight:700,color:"#a78bfa"}}>{ms[m].avgFeeds}</div></div>
            <div><div style={{fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:2}}>Avg per feed</div><div style={{fontSize:22,fontWeight:700,color:"rgba(255,255,255,0.7)"}}>{ms[m].avgPerFeed} ml</div></div>
            <div><div style={{fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:2}}>BM / FM split</div><div style={{fontSize:22,fontWeight:700}}><span style={{color:"#818cf8"}}>{ms[m].bmPct}</span><span style={{color:"rgba(255,255,255,0.2)"}}> / </span><span style={{color:"#fb923c"}}>{ms[m].fmPct}%</span></div></div>
          </div>
        </div>)}

        <div style={C}>
          <h3 style={H3}>Nightly Milk Volume</h3>
          <Bars data={data.map(r=>({v:r.ml,l:r.d.slice(5)}))} color="#38bdf8" mx={550} h={90}/>
          <div style={{marginTop:10}}><Spark data={data.map(r=>r.ml)} color="#38bdf8" h={30}/></div>
        </div>

        <div style={C}>
          <h3 style={H3}>Breast Milk vs Formula</h3>
          <FeedMixBars data={data}/>
          <p style={{...P,fontSize:13,marginTop:14}}>Formula share increased from {ms["2026-01"].fmPct}% in Jan to {ms["2026-03"].fmPct}% in Mar. Total intake remained stable, so the shift in source has not affected overall volume.</p>
        </div>

        <div style={C}>
          <h3 style={H3}>Volume per Feed</h3>
          {MK.map(m=><div key={m} style={{marginBottom:16}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:14,marginBottom:6}}>
              <span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[m]}</span>
              <span style={{color:"#38bdf8",fontWeight:700}}>{ms[m].avgPerFeed} ml / feed</span>
            </div>
            <PBar value={ms[m].avgPerFeed} max={140} color="#38bdf8"/>
          </div>)}
        </div>
      </div>}

      {/* ═══════════════ DIGESTION ═══════════════ */}
      {tab==="digestion" && <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {MK.map(m=><div key={m} style={C}>
          <div style={{...LBL,marginBottom:12}}>{MF[m]} ({ms[m].n} nights)</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
            <div><div style={{fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:2}}>Poops/night</div><div style={{fontSize:22,fontWeight:700,color:"#fbbf24"}}>{ms[m].avgPoo}</div></div>
            <div><div style={{fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:2}}>Gas events/n</div><div style={{fontSize:22,fontWeight:700,color:"#94a3b8"}}>{ms[m].avgGas}</div></div>
            <div><div style={{fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:2}}>Nappy chg/n</div><div style={{fontSize:22,fontWeight:700,color:"#f472b6"}}>{ms[m].avgNap}</div></div>
          </div>
          <div style={{marginTop:10,display:"flex",justifyContent:"space-between",fontSize:13}}>
            <span style={{color:"rgba(255,255,255,0.35)"}}>Poop-free nights</span>
            <span style={{color:"#fbbf24",fontWeight:700}}>{ms[m].pooFree}/{ms[m].n} ({Math.round(ms[m].pooFree/ms[m].n*100)}%)</span>
          </div>
        </div>)}

        <div style={C}>
          <h3 style={H3}>Poops per Night</h3>
          <Bars data={data.map(r=>({v:r.po,l:r.d.slice(5)}))} color="#fbbf24" mx={9} h={80}/>
        </div>

        <div style={C}>
          <h3 style={H3}>Gassiness Trend</h3>
          <Bars data={data.map(r=>({v:r.ga,l:r.d.slice(5)}))} color={gasCol} mx={11} h={80}/>
          <div style={{display:"flex",gap:12,marginTop:10,flexWrap:"wrap"}}>
            {[["#4ade80","0–3"],["#fbbf24","4–6"],["#f87171","7+"]].map(([c,l])=>
              <div key={l} style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:8,height:8,borderRadius:2,background:c}}/><span style={{fontSize:11,color:"rgba(255,255,255,0.3)"}}>{l} events</span></div>
            )}
          </div>
          <p style={{...P,fontSize:13,marginTop:14}}>Gassiness dropped from {ms["2026-01"].avgGas} events/night in Jan to {ms["2026-03"].avgGas} in Mar. This 53% reduction is a clear sign of digestive maturation and directly contributes to less disrupted sleep.</p>
        </div>

        <div style={C}>
          <h3 style={H3}>Poop-Free Nights</h3>
          <p style={{...P,fontSize:13,marginBottom:14}}>Nights with zero poops tend to be less disruptive.</p>
          {MK.map(m=>{const pct=Math.round(ms[m].pooFree/ms[m].n*100);return <div key={m} style={{marginBottom:16}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:14,marginBottom:6}}>
              <span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[m]}</span>
              <span style={{color:"#fbbf24",fontWeight:700}}>{ms[m].pooFree}/{ms[m].n} ({pct}%)</span>
            </div>
            <PBar value={pct} max={100} color="#fbbf24"/>
          </div>;})}
          <p style={{...P,fontSize:13,marginTop:4}}>Feb saw a notable spike in poop-free nights (71%), while Mar returned to more frequent nighttime pooping. This may be linked to the higher formula share, since formula is digested differently. Worth monitoring but not a concern as long as stools stay soft.</p>
        </div>
      </div>}

      </div>
    </div>
  );
}

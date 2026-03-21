import { useState, useMemo } from "react";

const RAW = [{"d":"2026-01-10","ml":435,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":4,"ls":185,"ga":1},{"d":"2026-01-11","ml":310,"fc":3,"fm":1,"bm":4,"po":3,"na":4,"wu":2,"ls":205,"ga":4},{"d":"2026-01-12","ml":410,"fc":4,"fm":1,"bm":3,"po":8,"na":4,"wu":11,"ls":235,"ga":10},{"d":"2026-01-13","ml":360,"fc":3,"fm":1,"bm":2,"po":4,"na":5,"wu":7,"ls":117,"ga":5},{"d":"2026-01-14","ml":500,"fc":4,"fm":3,"bm":1,"po":3,"na":5,"wu":6,"ls":100,"ga":5},{"d":"2026-01-15","ml":460,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":5,"ls":140,"ga":7},{"d":"2026-01-16","ml":480,"fc":4,"fm":1,"bm":3,"po":5,"na":6,"wu":6,"ls":157,"ga":5},{"d":"2026-01-17","ml":230,"fc":2,"fm":0,"bm":2,"po":4,"na":4,"wu":5,"ls":285,"ga":6},{"d":"2026-01-18","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":4,"wu":6,"ls":210,"ga":2},{"d":"2026-01-19","ml":420,"fc":4,"fm":2,"bm":2,"po":2,"na":7,"wu":2,"ls":110,"ga":4},{"d":"2026-01-20","ml":260,"fc":2,"fm":1,"bm":1,"po":2,"na":5,"wu":8,"ls":135,"ga":5},{"d":"2026-01-21","ml":480,"fc":4,"fm":2,"bm":2,"po":3,"na":4,"wu":3,"ls":160,"ga":2},{"d":"2026-01-22","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":6,"wu":6,"ls":159,"ga":5},{"d":"2026-01-23","ml":470,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":5,"ls":173,"ga":2},{"d":"2026-01-24","ml":360,"fc":3,"fm":0,"bm":3,"po":1,"na":3,"wu":3,"ls":220,"ga":5},{"d":"2026-01-26","ml":425,"fc":4,"fm":2,"bm":2,"po":2,"na":5,"wu":5,"ls":115,"ga":7},{"d":"2026-01-27","ml":380,"fc":3,"fm":3,"bm":0,"po":3,"na":4,"wu":10,"ls":222,"ga":5},{"d":"2026-01-28","ml":360,"fc":3,"fm":0,"bm":3,"po":0,"na":5,"wu":4,"ls":205,"ga":7},{"d":"2026-01-29","ml":440,"fc":5,"fm":1,"bm":4,"po":1,"na":6,"wu":5,"ls":208,"ga":5},{"d":"2026-01-30","ml":370,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":8,"ls":202,"ga":9},{"d":"2026-01-31","ml":470,"fc":4,"fm":1,"bm":3,"po":0,"na":5,"wu":5,"ls":110,"ga":6},{"d":"2026-02-01","ml":360,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":165,"ga":6},{"d":"2026-02-04","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":4,"wu":6,"ls":280,"ga":3},{"d":"2026-02-05","ml":390,"fc":4,"fm":0,"bm":4,"po":0,"na":2,"wu":4,"ls":208,"ga":4},{"d":"2026-02-06","ml":430,"fc":4,"fm":3,"bm":1,"po":1,"na":6,"wu":7,"ls":205,"ga":4},{"d":"2026-02-07","ml":480,"fc":4,"fm":1,"bm":3,"po":0,"na":4,"wu":5,"ls":180,"ga":3},{"d":"2026-02-09","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":233,"ga":3},{"d":"2026-02-10","ml":262,"fc":3,"fm":2,"bm":1,"po":2,"na":4,"wu":5,"ls":300,"ga":1},{"d":"2026-02-11","ml":290,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":6,"ls":255,"ga":4},{"d":"2026-02-12","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":7,"ls":205,"ga":2},{"d":"2026-02-13","ml":500,"fc":5,"fm":4,"bm":1,"po":0,"na":4,"wu":8,"ls":240,"ga":1},{"d":"2026-02-14","ml":330,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":4,"ls":190,"ga":0},{"d":"2026-02-15","ml":290,"fc":4,"fm":1,"bm":3,"po":1,"na":5,"wu":7,"ls":232,"ga":1},{"d":"2026-02-16","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":5,"wu":7,"ls":160,"ga":5},{"d":"2026-02-17","ml":240,"fc":2,"fm":0,"bm":2,"po":0,"na":4,"wu":7,"ls":130,"ga":4},{"d":"2026-02-18","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":3,"ls":193,"ga":3},{"d":"2026-02-19","ml":430,"fc":4,"fm":3,"bm":1,"po":0,"na":4,"wu":5,"ls":218,"ga":2},{"d":"2026-02-20","ml":410,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":8,"ls":162,"ga":2},{"d":"2026-02-21","ml":350,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":5,"ls":145,"ga":1},{"d":"2026-02-23","ml":310,"fc":4,"fm":1,"bm":3,"po":0,"na":3,"wu":4,"ls":205,"ga":0},{"d":"2026-02-24","ml":380,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":5,"ls":173,"ga":2},{"d":"2026-02-25","ml":380,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":4,"ls":217,"ga":4},{"d":"2026-02-26","ml":510,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":7,"ls":115,"ga":2},{"d":"2026-02-27","ml":440,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":6,"ls":143,"ga":3},{"d":"2026-02-28","ml":380,"fc":4,"fm":3,"bm":1,"po":1,"na":4,"wu":7,"ls":328,"ga":2},{"d":"2026-03-01","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":5,"wu":7,"ls":190,"ga":1},{"d":"2026-03-03","ml":390,"fc":5,"fm":4,"bm":1,"po":2,"na":4,"wu":2,"ls":112,"ga":3},{"d":"2026-03-04","ml":390,"fc":4,"fm":1,"bm":3,"po":4,"na":5,"wu":3,"ls":325,"ga":7},{"d":"2026-03-05","ml":270,"fc":3,"fm":3,"bm":0,"po":3,"na":5,"wu":3,"ls":205,"ga":1},{"d":"2026-03-06","ml":310,"fc":5,"fm":1,"bm":4,"po":3,"na":4,"wu":5,"ls":155,"ga":3},{"d":"2026-03-07","ml":280,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":130,"ga":3},{"d":"2026-03-09","ml":300,"fc":3,"fm":0,"bm":3,"po":2,"na":4,"wu":7,"ls":157,"ga":3},{"d":"2026-03-10","ml":390,"fc":4,"fm":3,"bm":1,"po":4,"na":4,"wu":6,"ls":225,"ga":2},{"d":"2026-03-11","ml":180,"fc":2,"fm":1,"bm":1,"po":3,"na":5,"wu":5,"ls":138,"ga":3},{"d":"2026-03-12","ml":400,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":3,"ls":133,"ga":0},{"d":"2026-03-13","ml":450,"fc":5,"fm":1,"bm":4,"po":4,"na":6,"wu":5,"ls":190,"ga":3},{"d":"2026-03-14","ml":350,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":205,"ga":3},{"d":"2026-03-15","ml":440,"fc":4,"fm":2,"bm":2,"po":5,"na":6,"wu":4,"ls":260,"ga":1},{"d":"2026-03-16","ml":430,"fc":5,"fm":2,"bm":3,"po":2,"na":3,"wu":3,"ls":353,"ga":2},{"d":"2026-03-17","ml":450,"fc":4,"fm":2,"bm":2,"po":3,"na":5,"wu":4,"ls":225,"ga":1},{"d":"2026-03-19","ml":410,"fc":4,"fm":3,"bm":1,"po":3,"na":3,"wu":5,"ls":330,"ga":2},{"d":"2026-03-20","ml":485,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":8,"ls":155,"ga":2}];

const MK=["2026-01","2026-02","2026-03"];
const ML={"2026-01":"Jan","2026-02":"Feb","2026-03":"Mar"};
const MF={"2026-01":"January","2026-02":"February","2026-03":"March"};

function avg(a){return a.length?Math.round(a.reduce((x,y)=>x+y,0)/a.length*10)/10:0}
function fmtMin(m){return Math.floor(m/60)+"h "+Math.round(m%60)+"m"}
function pct(a,b){return b>0?Math.round(a/b*100):0}
function gm(d,k){return d.filter(r=>r.d.startsWith(k))}

const C={
  card:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:14,padding:16},
  dim:{color:"rgba(255,255,255,0.4)",fontSize:12},
  h3:{fontSize:15,fontWeight:700,color:"rgba(255,255,255,0.75)",margin:"0 0 14px"},
  text:{fontSize:12.5,color:"rgba(255,255,255,0.45)",lineHeight:1.65,margin:0},
};

function SparkLine({data,color,height=44}){
  if(data.length<2)return null;
  const mn=Math.min(...data),mx=Math.max(...data),rng=mx-mn||1,w=200,p=6;
  const pts=data.map((v,i)=>[(i/(data.length-1))*(w-p*2)+p,height-p-((v-mn)/rng)*(height-p*2)]);
  const line=pts.map(p=>p.join(",")).join(" ");
  const area=line+` ${pts[pts.length-1][0]},${height} ${pts[0][0]},${height}`;
  const id=`g${color.replace('#','')}`;
  return(
    <svg viewBox={`0 0 ${w} ${height}`} style={{width:"100%",height,display:"block"}} preserveAspectRatio="none">
      <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.25"/><stop offset="100%" stopColor={color} stopOpacity="0.02"/></linearGradient></defs>
      <polygon points={area} fill={`url(#${id})`}/><polyline points={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MiniBar({value,max,color,h=12}){
  return(<div style={{width:"100%",height:h,background:"rgba(255,255,255,0.06)",borderRadius:6,overflow:"hidden"}}><div style={{width:`${Math.min(value/max*100,100)}%`,height:"100%",background:color,borderRadius:6,transition:"width 0.5s"}}/></div>);
}

function BarChart({data,color,max,height=110}){
  return(
    <div>
      <div style={{display:"flex",alignItems:"flex-end",gap:1,height,padding:"0 1px"}}>
        {data.map((v,i)=>{const h=max>0?Math.max(2,(v.val/max)*(height-16)):0;const c=typeof color==='function'?color(v):color;return(
          <div key={i} title={`${v.label}: ${v.val}`} style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"}}>
            <div style={{width:"100%",maxWidth:14,height:h,background:c,borderRadius:3,opacity:0.85,transition:"height 0.4s"}}/>
          </div>
        );})}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:6}}>
        <span style={{fontSize:10,color:"rgba(255,255,255,0.25)"}}>{data[0]?.label}</span>
        <span style={{fontSize:10,color:"rgba(255,255,255,0.25)"}}>{data[data.length-1]?.label}</span>
      </div>
    </div>
  );
}

function Badge({text,v="good"}){
  const m={good:{bg:"rgba(74,222,128,0.12)",fg:"#4ade80"},neutral:{bg:"rgba(255,255,255,0.06)",fg:"rgba(255,255,255,0.45)"},great:{bg:"rgba(99,102,241,0.12)",fg:"#a5b4fc"}};
  const c=m[v]||m.neutral;
  return <span style={{fontSize:11,fontWeight:600,padding:"3px 10px",borderRadius:20,background:c.bg,color:c.fg,whiteSpace:"nowrap"}}>{text}</span>;
}

function MonthRow({label,values,unit,color,max}){
  return(
    <div style={{marginBottom:14}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:5,gap:8,flexWrap:"wrap"}}>
        <span style={{fontSize:12,color:"rgba(255,255,255,0.45)",fontWeight:600,minWidth:100}}>{label}</span>
        <span style={{fontSize:13,fontWeight:700,color,fontVariantNumeric:"tabular-nums"}}>{values.join("  →  ")}{unit&&<span style={{fontSize:10,opacity:0.6}}> {unit}</span>}</span>
      </div>
      <div style={{display:"flex",gap:4}}>
        {values.map((v,i)=>{const n=typeof v==='string'?parseFloat(v):v;return <div key={i} style={{flex:1}}><MiniBar value={isNaN(n)?0:n} max={max} color={color} h={8}/></div>;})}
      </div>
      <div style={{display:"flex",gap:4}}>{["Jan","Feb","Mar"].map((m,i)=>(<div key={i} style={{flex:1,textAlign:"center",fontSize:9,color:"rgba(255,255,255,0.2)",marginTop:3}}>{m}</div>))}</div>
    </div>
  );
}

function FeedMixBar({bm,fm,month}){
  const t=bm+fm;if(!t)return null;
  return(
    <div style={{display:"flex",flexDirection:"column",gap:4}}>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:11}}>
        <span style={{color:"rgba(255,255,255,0.4)",fontWeight:600}}>{month}</span>
        <span style={{color:"rgba(255,255,255,0.35)"}}>{pct(bm,t)}% BM · {pct(fm,t)}% FM</span>
      </div>
      <div style={{display:"flex",height:14,borderRadius:7,overflow:"hidden",gap:1}}>
        <div style={{flex:pct(bm,t),background:"linear-gradient(90deg,#818cf8,#6366f1)",borderRadius:"7px 0 0 7px"}}/>
        <div style={{flex:pct(fm,t),background:"linear-gradient(90deg,#fb923c,#ea580c)",borderRadius:"0 7px 7px 0"}}/>
      </div>
    </div>
  );
}

function BenchmarkBox({children}){
  return(
    <div style={{marginTop:10,padding:"10px 14px",background:"rgba(255,255,255,0.02)",borderRadius:10,borderLeft:"3px solid rgba(99,102,241,0.3)"}}>
      <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(99,102,241,0.5)",marginBottom:4}}>vs. typical for age</div>
      <p style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:0}}>{children}</p>
    </div>
  );
}

function SummaryCard({icon,title,badge,badgeV,children,onClick}){
  return(
    <div onClick={onClick} style={{...C.card,cursor:onClick?"pointer":"default",transition:"all 0.2s",WebkitTapHighlightColor:"transparent"}}
      onMouseEnter={e=>{if(onClick){e.currentTarget.style.border="1px solid rgba(255,255,255,0.15)";e.currentTarget.style.background="rgba(255,255,255,0.05)"}}}
      onMouseLeave={e=>{if(onClick){e.currentTarget.style.border="1px solid rgba(255,255,255,0.07)";e.currentTarget.style.background="rgba(255,255,255,0.03)"}}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,flexWrap:"wrap"}}>
        <span style={{fontSize:20}}>{icon}</span>
        <h4 style={{fontSize:14,fontWeight:700,margin:0,color:"rgba(255,255,255,0.8)",flex:1,minWidth:100}}>{title}</h4>
        <Badge text={badge} v={badgeV}/>
      </div>
      {children}
      {onClick&&<div style={{textAlign:"right",marginTop:10,fontSize:11,color:"rgba(99,102,241,0.5)",fontWeight:600}}>Tap for details →</div>}
    </div>
  );
}

export default function LeoDashboard(){
  const [tab,setTab]=useState("overview");
  const data=RAW;
  const jan=useMemo(()=>gm(data,"2026-01"),[]);
  const feb=useMemo(()=>gm(data,"2026-02"),[]);
  const mar=useMemo(()=>gm(data,"2026-03"),[]);
  const goTo=t=>{setTab(t);window.scrollTo({top:0,behavior:"smooth"});};

  const tabs=[
    {id:"overview",label:"Summary",icon:"📋"},
    {id:"sleep",label:"Sleep",icon:"🌙"},
    {id:"feeding",label:"Feeding",icon:"🍼"},
    {id:"digestion",label:"Digestion",icon:"💩"},
  ];

  return(
    <div style={{fontFamily:"'DM Sans',-apple-system,'Segoe UI',sans-serif",background:"#0b0b13",color:"rgba(255,255,255,0.85)",minHeight:"100vh",maxWidth:540,margin:"0 auto",paddingBottom:80}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>

      {/* Header */}
      <div style={{padding:"28px 20px 20px",background:"linear-gradient(180deg,rgba(99,102,241,0.07) 0%,transparent 100%)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <span style={{fontSize:30}}>👶</span>
          <div>
            <h1 style={{fontSize:21,fontWeight:700,margin:0,letterSpacing:"-0.02em",color:"#e0e7ff"}}>Leo's Night Report</h1>
            <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",margin:"3px 0 0",fontWeight:500}}>Jan 10 – Mar 20, 2026 · 62 nights · 7 PM – 7 AM</p>
          </div>
        </div>
      </div>

      {/* Sticky tabs */}
      <div style={{position:"sticky",top:0,zIndex:10,background:"rgba(11,11,19,0.95)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"10px 16px",display:"flex",gap:6,overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
        {tabs.map(t=>(
          <button key={t.id} onClick={()=>goTo(t.id)} style={{padding:"8px 14px",border:"none",borderRadius:10,cursor:"pointer",fontSize:13,fontWeight:600,fontFamily:"inherit",whiteSpace:"nowrap",transition:"all 0.15s",background:tab===t.id?"rgba(99,102,241,0.18)":"transparent",color:tab===t.id?"#c7d2fe":"rgba(255,255,255,0.35)",outline:tab===t.id?"1px solid rgba(99,102,241,0.25)":"1px solid transparent"}}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div style={{padding:"16px 16px 0"}}>

      {/* ═══ OVERVIEW ═══ */}
      {tab==="overview"&&(
        <div style={{display:"flex",flexDirection:"column",gap:14}}>

          {/* Verdict */}
          <div style={{background:"linear-gradient(135deg,rgba(74,222,128,0.06),rgba(99,102,241,0.04))",border:"1px solid rgba(74,222,128,0.15)",borderRadius:14,padding:"18px 18px 16px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
              <span style={{fontSize:20}}>✅</span>
              <h3 style={{fontSize:15,fontWeight:700,margin:0,color:"#4ade80"}}>Overall: Healthy & On Track</h3>
            </div>
            <p style={{...C.text,fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.7}}>
              Over 62 tracked nights, Leo shows steady age-appropriate progress for a baby in the 1–3 month range. Sleep is consolidating, gas is resolving, feeding is efficient and stable. No red flags. The trajectory is positive across nearly every metric.
            </p>
          </div>

          {/* At-a-glance */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[
              {l:"Avg Longest Sleep",v:fmtMin(193.9),s:"Best: "+fmtMin(353),c:"#818cf8",i:"🌙"},
              {l:"Avg Nightly Intake",v:"387 ml",s:"3.6 feeds/night",c:"#38bdf8",i:"🍼"},
              {l:"Avg Wake-ups",v:"5.4/night",s:"Down 13% since Jan",c:"#fb923c",i:"⏰"},
              {l:"Avg Gas Events",v:"3.4/night",s:"Down 53% since Jan",c:"#94a3b8",i:"💨"},
            ].map((s,i)=>(
              <div key={i} style={{...C.card,padding:"14px 14px 12px"}}>
                <div style={{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.07em",color:"rgba(255,255,255,0.3)",marginBottom:4}}>{s.i} {s.l}</div>
                <div style={{fontSize:22,fontWeight:700,color:s.c,lineHeight:1.1}}>{s.v}</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:3}}>{s.s}</div>
              </div>
            ))}
          </div>

          {/* Sleep summary */}
          <SummaryCard icon="🌙" title="Sleep" badge="Improving" badgeV="good" onClick={()=>goTo("sleep")}>
            <MonthRow label="Avg longest stretch" values={[fmtMin(174),fmtMin(203.4),fmtMin(205.2)]} color="#818cf8" max={360}/>
            <MonthRow label="Avg wake-ups" values={["5.5","5.7","4.8"]} unit="/night" color="#fb923c" max={8}/>
            <MonthRow label="4h+ sleep nights" values={["1/21","5/24","4/17"]} color="#4ade80" max={24}/>
            <p style={{...C.text,margin:"8px 0 0"}}>
              Leo's longest uninterrupted stretch grew from 2h 54m (Jan avg) to 3h 25m by Feb/Mar. His personal best was 5h 53m on Mar 16. Nights with 4+ hour stretches went from 1 out of 21 in January to 5 out of 24 in February and 4 out of 17 in March. Wake-ups dipped from 5.5 to 4.8 per night.
            </p>
            <BenchmarkBox>
              At 1–3 months, 2–4 hour stretches are the norm, with 2–4 wake-ups for feeds. Leo's emerging 4–5 hour blocks are right on the better end of normal. Pediatricians expect 5–6 hour consolidated stretches around 3–4 months, and he's already showing early signs.
            </BenchmarkBox>
          </SummaryCard>

          {/* Feeding summary */}
          <SummaryCard icon="🍼" title="Feeding" badge="Stable" badgeV="neutral" onClick={()=>goTo("feeding")}>
            <MonthRow label="Avg nightly volume" values={["398","388","370"]} unit="ml" color="#38bdf8" max={500}/>
            <MonthRow label="Avg feeds per night" values={["3.5","3.7","3.8"]} color="#a78bfa" max={5}/>
            <MonthRow label="Avg ml per feed" values={["116","105","98"]} unit="ml" color="#2dd4bf" max={140}/>
            <div style={{marginTop:8,display:"flex",flexDirection:"column",gap:8}}>
              <FeedMixBar bm={51} fm={24} month="January"/>
              <FeedMixBar bm={55} fm={34} month="February"/>
              <FeedMixBar bm={33} fm={32} month="March"/>
            </div>
            <div style={{display:"flex",gap:12,marginTop:8}}>
              <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:8,height:8,borderRadius:2,background:"#818cf8"}}/><span style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>Breast Milk</span></div>
              <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:8,height:8,borderRadius:2,background:"#fb923c"}}/><span style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>Formula</span></div>
            </div>
            <p style={{...C.text,margin:"10px 0 0"}}>
              Total nightly intake held steady at 370–400ml. Breast milk to formula ratio shifted from 68/32 in Jan to roughly 51/49 in Mar. Per-feed volume dipped slightly (116 → 98 ml) but feed count increased (3.5 → 3.8), keeping total intake consistent. He burps well and rarely refuses bottles.
            </p>
            <BenchmarkBox>
              At 1–3 months, 120–180ml per feed every 2–4 hours is typical. At ~370–400ml overnight (the 12-hour night shift), his full-day intake likely sits in the healthy 600–900ml range. The gradual formula increase is very common and not a concern.
            </BenchmarkBox>
          </SummaryCard>

          {/* Digestion summary */}
          <SummaryCard icon="💩" title="Digestion & Gas" badge="Maturing" badgeV="good" onClick={()=>goTo("digestion")}>
            <MonthRow label="Avg poops/night" values={["2.6","0.3","2.9"]} color="#fbbf24" max={4}/>
            <MonthRow label="Avg gas events" values={["5.1","2.6","2.4"]} unit="/night" color="#94a3b8" max={7}/>
            <MonthRow label="Poop-free nights" values={["19%","71%","0%"]} color="#fbbf24" max={100}/>
            <p style={{...C.text,margin:"8px 0 0"}}>
              Gas events dropped 53% (5.1 → 2.4/night), the single biggest improvement. Feb saw an unusual poop-free streak (17 of 24 nights had zero poops), while March returned to 2.9/night, likely linked to the increased formula ratio. Persistent redness on his bottom is noted and managed with barrier cream.
            </p>
            <BenchmarkBox>
              Gas and colic peak at 2–6 weeks and resolve by 3–4 months. Leo's trajectory matches this perfectly. Newborns commonly poop 3–5+ times daily, with frequency dropping as the gut matures. The March uptick with more formula is normal. As long as stools are soft and he's not in distress, everything is within bounds.
            </BenchmarkBox>
          </SummaryCard>

          {/* Development summary */}
          <SummaryCard icon="🧒" title="Development & Independence" badge="On Track" badgeV="great">
            <p style={{...C.text}}>
              Tummy time was introduced mid-February and became regular in March. On Mar 17, Milvy noted Leo "started to crawl" during tummy time. He actively repositions his head during sleep (from late Jan onward), showing neck strength. Cooing, smiling, and responding to voices were observed. One self-settling instance was noted (Jan 17). A bedtime routine (bath/massage) became standard by late February.
            </p>
            <BenchmarkBox>
              Head control and repositioning is expected at 2–3 months. Social smiling and cooing emerge at 6–8 weeks. The "crawling" at ~10 weeks is likely early scooting/pushing motions, which is normal and positive. True crawling begins at 6–10 months. Self-settling is rare this early but very encouraging for future sleep independence.
            </BenchmarkBox>
          </SummaryCard>

        </div>
      )}

      {/* ═══ SLEEP ═══ */}
      {tab==="sleep"&&(
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {[
            {label:"January",d:jan,color:"#fb923c"},
            {label:"February",d:feb,color:"#818cf8"},
            {label:"March",d:mar,color:"#4ade80"},
          ].map(m=>{
            const avgS=avg(m.d.map(r=>r.ls)),best=Math.max(...m.d.map(r=>r.ls)),avgW=avg(m.d.map(r=>r.wu)),over4=m.d.filter(r=>r.ls>=240).length;
            return(
              <div key={m.label} style={C.card}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:6}}>
                  <span style={{fontSize:13,fontWeight:700,color:"rgba(255,255,255,0.6)"}}>{m.label}</span>
                  <span style={{fontSize:11,color:"rgba(255,255,255,0.25)"}}>{m.d.length} nights</span>
                </div>
                <div style={{fontSize:26,fontWeight:700,color:m.color,lineHeight:1}}>{fmtMin(avgS)}</div>
                <div style={{fontSize:11,color:"rgba(255,255,255,0.3)",marginTop:2}}>avg longest stretch</div>
                <SparkLine data={m.d.map(r=>r.ls)} color={m.color} height={36}/>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:8}}>
                  <div><div style={{fontSize:10,color:"rgba(255,255,255,0.25)"}}>Best night</div><div style={{fontSize:14,fontWeight:700,color:m.color}}>{fmtMin(best)}</div></div>
                  <div><div style={{fontSize:10,color:"rgba(255,255,255,0.25)"}}>Avg wake-ups</div><div style={{fontSize:14,fontWeight:700,color:"#fb923c"}}>{avgW}</div></div>
                  <div><div style={{fontSize:10,color:"rgba(255,255,255,0.25)"}}>4h+ nights</div><div style={{fontSize:14,fontWeight:700,color:"#4ade80"}}>{over4}/{m.d.length}</div></div>
                </div>
              </div>
            );
          })}
          <div style={C.card}>
            <h3 style={C.h3}>Longest Sleep Stretch per Night</h3>
            <BarChart data={data.map(r=>({val:r.ls,label:r.d.slice(5)}))} color={v=>v.val>=240?"#4ade80":v.val>=180?"#818cf8":v.val>=120?"#fbbf24":"#f87171"} max={400} height={100}/>
            <div style={{display:"flex",gap:12,marginTop:8,flexWrap:"wrap"}}>
              {[["#4ade80","4+ hrs"],["#818cf8","3–4 hrs"],["#fbbf24","2–3 hrs"],["#f87171","< 2 hrs"]].map(([c,l])=>(
                <div key={l} style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:8,height:8,borderRadius:2,background:c}}/><span style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>{l}</span></div>
              ))}
            </div>
          </div>
          <div style={C.card}>
            <h3 style={C.h3}>Wake-ups per Night</h3>
            <BarChart data={data.map(r=>({val:r.wu,label:r.d.slice(5)}))} color={v=>v.val<=3?"#4ade80":v.val<=5?"#fbbf24":"#f87171"} max={12} height={90}/>
          </div>
        </div>
      )}

      {/* ═══ FEEDING ═══ */}
      {tab==="feeding"&&(
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
            {[{l:"Avg intake",v:"387",u:" ml",c:"#38bdf8"},{l:"Avg feeds",v:"3.6",u:"/night",c:"#a78bfa"},{l:"Peak night",v:"510",u:" ml",c:"#4ade80"}].map((s,i)=>(
              <div key={i} style={{...C.card,padding:"12px 10px",textAlign:"center"}}>
                <div style={{fontSize:9,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(255,255,255,0.25)"}}>{s.l}</div>
                <div style={{fontSize:20,fontWeight:700,color:s.c,margin:"4px 0 0"}}>{s.v}<span style={{fontSize:11,opacity:0.6}}>{s.u}</span></div>
              </div>
            ))}
          </div>
          <div style={C.card}>
            <h3 style={C.h3}>Nightly Milk Volume (ml)</h3>
            <BarChart data={data.map(r=>({val:r.ml,label:r.d.slice(5)}))} color="#38bdf8" max={550} height={100}/>
          </div>
          <div style={C.card}>
            <h3 style={C.h3}>Breast Milk vs. Formula</h3>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {[{month:"January",bm:51,fm:24},{month:"February",bm:55,fm:34},{month:"March",bm:33,fm:32}].map(m=><FeedMixBar key={m.month}{...m}/>)}
            </div>
            <div style={{display:"flex",gap:14,marginTop:10}}>
              <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:8,height:8,borderRadius:2,background:"#818cf8"}}/><span style={{fontSize:11,color:"rgba(255,255,255,0.35)"}}>Breast Milk</span></div>
              <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:8,height:8,borderRadius:2,background:"#fb923c"}}/><span style={{fontSize:11,color:"rgba(255,255,255,0.35)"}}>Formula</span></div>
            </div>
            <p style={{...C.text,margin:"10px 0 0",fontSize:12,color:"rgba(255,255,255,0.35)"}}>Formula share gradually increased from 32% in Jan to 49% in Mar, which is very common for mixed-fed babies.</p>
          </div>
          <div style={C.card}>
            <h3 style={C.h3}>Volume per Feed</h3>
            {[{m:"January",v:116},{m:"February",v:105},{m:"March",v:98}].map(r=>(
              <div key={r.m} style={{marginBottom:10}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}>
                  <span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{r.m}</span>
                  <span style={{color:"#38bdf8",fontWeight:700}}>{r.v} ml/feed</span>
                </div>
                <MiniBar value={r.v} max={140} color="#38bdf8"/>
              </div>
            ))}
            <p style={{fontSize:12,color:"rgba(255,255,255,0.35)",lineHeight:1.6,margin:"6px 0 0"}}>The slight decrease per feed is offset by more feeds per night (3.5 → 3.8), keeping total intake stable.</p>
          </div>
          <div style={C.card}>
            <h3 style={C.h3}>Feed Count per Night</h3>
            <BarChart data={data.map(r=>({val:r.fc,label:r.d.slice(5)}))} color="#a78bfa" max={6} height={80}/>
          </div>
        </div>
      )}

      {/* ═══ DIGESTION ═══ */}
      {tab==="digestion"&&(
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
            {[{l:"Avg poops",v:"1.8",u:"/night",c:"#fbbf24"},{l:"Avg gas",v:"3.4",u:"/night",c:"#94a3b8"},{l:"Avg nappies",v:"4.3",u:"/night",c:"#f472b6"}].map((s,i)=>(
              <div key={i} style={{...C.card,padding:"12px 10px",textAlign:"center"}}>
                <div style={{fontSize:9,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(255,255,255,0.25)"}}>{s.l}</div>
                <div style={{fontSize:20,fontWeight:700,color:s.c,margin:"4px 0 0"}}>{s.v}<span style={{fontSize:11,opacity:0.6}}>{s.u}</span></div>
              </div>
            ))}
          </div>
          <div style={C.card}>
            <h3 style={C.h3}>Gas Events per Night</h3>
            <BarChart data={data.map(r=>({val:r.ga,label:r.d.slice(5)}))} color={v=>v.val>=7?"#f87171":v.val>=4?"#fbbf24":"#4ade80"} max={11} height={90}/>
            <p style={{fontSize:12,color:"rgba(255,255,255,0.35)",lineHeight:1.6,margin:"10px 0 0"}}>The single biggest improvement. Down from 5.1 events/night in Jan (with spikes to 9–10) to a steady 2.4 in March.</p>
          </div>
          <div style={C.card}>
            <h3 style={C.h3}>Poops per Night</h3>
            <BarChart data={data.map(r=>({val:r.po,label:r.d.slice(5)}))} color="#fbbf24" max={9} height={90}/>
          </div>
          <div style={C.card}>
            <h3 style={C.h3}>Poop-Free Nights</h3>
            <p style={{fontSize:12,color:"rgba(255,255,255,0.35)",margin:"0 0 12px"}}>Nights with zero poops (less disruption)</p>
            {[{m:"January",f:4,t:21},{m:"February",f:17,t:24},{m:"March",f:0,t:17}].map(r=>(
              <div key={r.m} style={{marginBottom:10}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}>
                  <span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{r.m}</span>
                  <span style={{color:"#fbbf24",fontWeight:700}}>{r.f}/{r.t} ({pct(r.f,r.t)}%)</span>
                </div>
                <MiniBar value={pct(r.f,r.t)} max={100} color="#fbbf24"/>
              </div>
            ))}
            <p style={{fontSize:12,color:"rgba(255,255,255,0.35)",lineHeight:1.6,margin:"6px 0 0"}}>Feb's calm period reflects normal gut maturation. March returned to more frequent poops with higher formula ratio.</p>
          </div>
          <div style={C.card}>
            <h3 style={C.h3}>Nappy Changes per Night</h3>
            <BarChart data={data.map(r=>({val:r.na,label:r.d.slice(5)}))} color="#f472b6" max={8} height={80}/>
            <div style={{display:"flex",gap:14,marginTop:10,justifyContent:"center"}}>
              {MK.map(m=>{const md=gm(data,m);return(
                <div key={m} style={{textAlign:"center"}}>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.25)"}}>{ML[m]}</div>
                  <div style={{fontSize:16,fontWeight:700,color:"#f472b6"}}>{avg(md.map(r=>r.na))}</div>
                </div>
              );})}
            </div>
          </div>
        </div>
      )}

      </div>
    </div>
  );
}

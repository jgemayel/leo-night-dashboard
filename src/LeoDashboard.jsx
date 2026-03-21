import { useState, useMemo, useRef } from "react";

const RAW=[{"d":"2026-01-10","ml":435,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":4,"ls":185,"ga":1},{"d":"2026-01-11","ml":310,"fc":3,"fm":1,"bm":4,"po":3,"na":4,"wu":2,"ls":205,"ga":4},{"d":"2026-01-12","ml":410,"fc":4,"fm":1,"bm":3,"po":8,"na":4,"wu":11,"ls":235,"ga":10},{"d":"2026-01-13","ml":360,"fc":3,"fm":1,"bm":2,"po":4,"na":5,"wu":7,"ls":117,"ga":5},{"d":"2026-01-14","ml":500,"fc":4,"fm":3,"bm":1,"po":3,"na":5,"wu":6,"ls":100,"ga":5},{"d":"2026-01-15","ml":460,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":5,"ls":140,"ga":7},{"d":"2026-01-16","ml":480,"fc":4,"fm":1,"bm":3,"po":5,"na":6,"wu":6,"ls":157,"ga":5},{"d":"2026-01-17","ml":230,"fc":2,"fm":0,"bm":2,"po":4,"na":4,"wu":5,"ls":285,"ga":6},{"d":"2026-01-18","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":4,"wu":6,"ls":210,"ga":2},{"d":"2026-01-19","ml":420,"fc":4,"fm":2,"bm":2,"po":2,"na":7,"wu":2,"ls":110,"ga":4},{"d":"2026-01-20","ml":260,"fc":2,"fm":1,"bm":1,"po":2,"na":5,"wu":8,"ls":135,"ga":5},{"d":"2026-01-21","ml":480,"fc":4,"fm":2,"bm":2,"po":3,"na":4,"wu":3,"ls":160,"ga":2},{"d":"2026-01-22","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":6,"wu":6,"ls":159,"ga":5},{"d":"2026-01-23","ml":470,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":5,"ls":173,"ga":2},{"d":"2026-01-24","ml":360,"fc":3,"fm":0,"bm":3,"po":1,"na":3,"wu":3,"ls":220,"ga":5},{"d":"2026-01-26","ml":425,"fc":4,"fm":2,"bm":2,"po":2,"na":5,"wu":5,"ls":115,"ga":7},{"d":"2026-01-27","ml":380,"fc":3,"fm":3,"bm":0,"po":3,"na":4,"wu":10,"ls":222,"ga":5},{"d":"2026-01-28","ml":360,"fc":3,"fm":0,"bm":3,"po":0,"na":5,"wu":4,"ls":205,"ga":7},{"d":"2026-01-29","ml":440,"fc":5,"fm":1,"bm":4,"po":1,"na":6,"wu":5,"ls":208,"ga":5},{"d":"2026-01-30","ml":370,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":8,"ls":202,"ga":9},{"d":"2026-01-31","ml":470,"fc":4,"fm":1,"bm":3,"po":0,"na":5,"wu":5,"ls":110,"ga":6},{"d":"2026-02-01","ml":360,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":165,"ga":6},{"d":"2026-02-04","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":4,"wu":6,"ls":280,"ga":3},{"d":"2026-02-05","ml":390,"fc":4,"fm":0,"bm":4,"po":0,"na":2,"wu":4,"ls":208,"ga":4},{"d":"2026-02-06","ml":430,"fc":4,"fm":3,"bm":1,"po":1,"na":6,"wu":7,"ls":205,"ga":4},{"d":"2026-02-07","ml":480,"fc":4,"fm":1,"bm":3,"po":0,"na":4,"wu":5,"ls":180,"ga":3},{"d":"2026-02-09","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":233,"ga":3},{"d":"2026-02-10","ml":262,"fc":3,"fm":2,"bm":1,"po":2,"na":4,"wu":5,"ls":300,"ga":1},{"d":"2026-02-11","ml":290,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":6,"ls":255,"ga":4},{"d":"2026-02-12","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":7,"ls":205,"ga":2},{"d":"2026-02-13","ml":500,"fc":5,"fm":4,"bm":1,"po":0,"na":4,"wu":8,"ls":240,"ga":1},{"d":"2026-02-14","ml":330,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":4,"ls":190,"ga":0},{"d":"2026-02-15","ml":290,"fc":4,"fm":1,"bm":3,"po":1,"na":5,"wu":7,"ls":232,"ga":1},{"d":"2026-02-16","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":5,"wu":7,"ls":160,"ga":5},{"d":"2026-02-17","ml":240,"fc":2,"fm":0,"bm":2,"po":0,"na":4,"wu":7,"ls":130,"ga":4},{"d":"2026-02-18","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":3,"ls":193,"ga":3},{"d":"2026-02-19","ml":430,"fc":4,"fm":3,"bm":1,"po":0,"na":4,"wu":5,"ls":218,"ga":2},{"d":"2026-02-20","ml":410,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":8,"ls":162,"ga":2},{"d":"2026-02-21","ml":350,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":5,"ls":145,"ga":1},{"d":"2026-02-23","ml":310,"fc":4,"fm":1,"bm":3,"po":0,"na":3,"wu":4,"ls":205,"ga":0},{"d":"2026-02-24","ml":380,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":5,"ls":173,"ga":2},{"d":"2026-02-25","ml":380,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":4,"ls":217,"ga":4},{"d":"2026-02-26","ml":510,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":7,"ls":115,"ga":2},{"d":"2026-02-27","ml":440,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":6,"ls":143,"ga":3},{"d":"2026-02-28","ml":380,"fc":4,"fm":3,"bm":1,"po":1,"na":4,"wu":7,"ls":328,"ga":2},{"d":"2026-03-01","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":5,"wu":7,"ls":190,"ga":1},{"d":"2026-03-03","ml":390,"fc":5,"fm":4,"bm":1,"po":2,"na":4,"wu":2,"ls":112,"ga":3},{"d":"2026-03-04","ml":390,"fc":4,"fm":1,"bm":3,"po":4,"na":5,"wu":3,"ls":325,"ga":7},{"d":"2026-03-05","ml":270,"fc":3,"fm":3,"bm":0,"po":3,"na":5,"wu":3,"ls":205,"ga":1},{"d":"2026-03-06","ml":310,"fc":5,"fm":1,"bm":4,"po":3,"na":4,"wu":5,"ls":155,"ga":3},{"d":"2026-03-07","ml":280,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":130,"ga":3},{"d":"2026-03-09","ml":300,"fc":3,"fm":0,"bm":3,"po":2,"na":4,"wu":7,"ls":157,"ga":3},{"d":"2026-03-10","ml":390,"fc":4,"fm":3,"bm":1,"po":4,"na":4,"wu":6,"ls":225,"ga":2},{"d":"2026-03-11","ml":180,"fc":2,"fm":1,"bm":1,"po":3,"na":5,"wu":5,"ls":138,"ga":3},{"d":"2026-03-12","ml":400,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":3,"ls":133,"ga":0},{"d":"2026-03-13","ml":450,"fc":5,"fm":1,"bm":4,"po":4,"na":6,"wu":5,"ls":190,"ga":3},{"d":"2026-03-14","ml":350,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":205,"ga":3},{"d":"2026-03-15","ml":440,"fc":4,"fm":2,"bm":2,"po":5,"na":6,"wu":4,"ls":260,"ga":1},{"d":"2026-03-16","ml":430,"fc":5,"fm":2,"bm":3,"po":2,"na":3,"wu":3,"ls":353,"ga":2},{"d":"2026-03-17","ml":450,"fc":4,"fm":2,"bm":2,"po":3,"na":5,"wu":4,"ls":225,"ga":1},{"d":"2026-03-19","ml":410,"fc":4,"fm":3,"bm":1,"po":3,"na":3,"wu":5,"ls":330,"ga":2},{"d":"2026-03-20","ml":485,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":8,"ls":155,"ga":2}];

const BORN=new Date(2025,10,6); // Nov 6, 2025
const MK=["2026-01","2026-02","2026-03"];
const ML={"2026-01":"Jan","2026-02":"Feb","2026-03":"Mar"};
const MF={"2026-01":"January","2026-02":"February","2026-03":"March"};
const MA={"2026-01":"~2-3 months old","2026-02":"~3-4 months old","2026-03":"~4-4.5 months old"};
function ageAt(d){const dt=new Date(d);const ms=dt-BORN;const wk=Math.floor(ms/(7*24*60*60*1000));return `${wk} weeks`;}

function av(a){return a.length?Math.round(a.reduce((s,v)=>s+v,0)/a.length*10)/10:0;}
function sm(a){return a.reduce((s,v)=>s+v,0);}
function pc(n,d){return d>0?Math.round(100*n/d):0;}
function fmt(m){const h=Math.floor(m/60),mm=Math.round(m%60);return h>0?h+"h "+mm+"m":mm+"m";}
function byM(d,mk){return d.filter(r=>r.d.startsWith(mk));}
function dayOf(d){return parseInt(d.slice(8,10));}
function monOf(d){return d.slice(5,7);}

function nightInsight(r) {
  const p = [];
  if (r.ls >= 300) p.push("Great sleep night!");
  else if (r.ls >= 240) p.push("Solid 4+ hr stretch");
  else if (r.ls < 120) p.push("Fragmented sleep");
  if (r.ga >= 7) p.push("Very gassy");
  else if (r.ga <= 1) p.push("Calm tummy");
  if (r.po >= 4) p.push("Lots of poops");
  else if (r.po === 0) p.push("Poop-free night");
  if (r.wu >= 8) p.push("Restless");
  else if (r.wu <= 3) p.push("Few wake-ups");
  if (r.ml >= 480) p.push("Big appetite");
  else if (r.ml <= 250) p.push("Light feeding");
  return p.length ? p.join(" \u00b7 ") : "Routine night";
}

function Pill({text,color="#4ade80",bg}){return <span style={{fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20,background:bg||color+"18",color,whiteSpace:"nowrap",display:"inline-block"}}>{text}</span>;}

function Spark({data,color,h=44}){
  if(!data.length)return null;
  const mn=Math.min(...data),mx=Math.max(...data),rng=mx-mn||1,w=200,p=6;
  const pts=data.map((v,i)=>{const x=data.length>1?(i/(data.length-1))*(w-p*2)+p:w/2;const y=h-p-((v-mn)/rng)*(h-p*2);return[x,y];});
  const line=pts.map(([x,y])=>x+","+y).join(' ');
  const area=line+" "+pts[pts.length-1][0]+","+h+" "+pts[0][0]+","+h;
  const id="sg"+color.replace('#','')+""+h;
  return(<svg viewBox={"0 0 "+w+" "+h} style={{width:"100%",height:h,display:"block"}} preserveAspectRatio="none"><defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.25"/><stop offset="100%" stopColor={color} stopOpacity="0.01"/></linearGradient></defs><polygon points={area} fill={"url(#"+id+")"}/><polyline points={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"/></svg>);
}

function ChartBars({data, colorFn, max, h=120, unit="", rangeLow, rangeHigh, rangeLabel, rangeColor="#818cf8"}) {
  const [hov, setHov] = useState(null);
  const monthBreaks = [];
  const dayTicks = [];
  for (let i = 0; i < data.length; i++) {
    if (i === 0 || monOf(data[i].date) !== monOf(data[i-1].date)) {
      monthBreaks.push({ idx: i, month: ML["2026-" + monOf(data[i].date)] || monOf(data[i].date) });
    }
    const day = dayOf(data[i].date);
    if (day === 15) dayTicks.push({ idx: i, day });
  }
  const barH = h - 24;
  const rY1 = rangeLow != null ? barH - (rangeLow / max) * barH : null;
  const rY2 = rangeHigh != null ? barH - (rangeHigh / max) * barH : null;
  return (
    <div style={{ position: "relative", userSelect: "none" }}>
      {rY1 != null && rY2 != null && (
        <div style={{ position: "absolute", top: Math.min(rY1, rY2), left: 0, right: 0, height: Math.abs(rY1 - rY2), background: rangeColor + "0a", borderTop: "1px dashed " + rangeColor + "30", borderBottom: "1px dashed " + rangeColor + "30", pointerEvents: "none", zIndex: 0 }}>
          {rangeLabel && <span style={{ position: "absolute", right: 2, top: -13, fontSize: 9, color: rangeColor + "70", fontWeight: 600, whiteSpace: "nowrap" }}>{rangeLabel}</span>}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "flex-end", height: barH, position: "relative", zIndex: 1 }}>
        {data.map((v, i) => {
          const bh = max > 0 ? Math.max(2, (v.val / max) * (barH - 8)) : 2;
          const isMS = monthBreaks.some(b => b.idx === i && i > 0);
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", minWidth: 0, height: "100%", borderLeft: isMS ? "1px solid rgba(255,255,255,0.08)" : "none", cursor: "pointer" }}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              onTouchStart={() => setHov(i)} onTouchEnd={() => setTimeout(() => setHov(null), 2500)}>
              <div style={{ width: "100%", maxWidth: 14, height: bh, background: typeof colorFn === 'function' ? colorFn(v.val) : colorFn, borderRadius: 3, opacity: hov === i ? 1 : 0.75, transition: "opacity 0.12s", transform: hov === i ? "scaleX(1.4)" : "scaleX(1)" }} />
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", height: 20, position: "relative", borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 2 }}>
        {data.map((v, i) => {
          const mb = monthBreaks.find(b => b.idx === i);
          const dt = dayTicks.find(t => t.idx === i);
          return (
            <div key={i} style={{ flex: 1, position: "relative", minWidth: 0 }}>
              {mb && <span style={{ position: "absolute", top: 4, left: mb.idx === 0 ? 0 : -4, fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>{mb.month}</span>}
              {dt && !mb && (<><div style={{ position: "absolute", top: 0, left: "50%", width: 1, height: 4, background: "rgba(255,255,255,0.12)" }} /><span style={{ position: "absolute", top: 5, left: "50%", transform: "translateX(-50%)", fontSize: 9, color: "rgba(255,255,255,0.18)", whiteSpace: "nowrap" }}>15th</span></>)}
            </div>
          );
        })}
      </div>
      {hov !== null && data[hov] && (
        <div style={{ position: "absolute", bottom: barH + 30, left: (hov / data.length) * 100 + "%", transform: "translateX(" + (hov < data.length * 0.3 ? "0%" : hov > data.length * 0.7 ? "-100%" : "-50%") + ")", background: "rgba(12,12,20,0.96)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "10px 14px", zIndex: 20, minWidth: 170, maxWidth: 250, boxShadow: "0 8px 30px rgba(0,0,0,0.6)", pointerEvents: "none" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>
            {new Date(data[hov].date + "T12:00:00").toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: typeof colorFn === 'function' ? colorFn(data[hov].val) : colorFn, lineHeight: 1 }}>
            {data[hov].fmtVal || data[hov].val}{unit ? " " + unit : ""}
          </div>
          {data[hov].rec && (
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 6, lineHeight: 1.5, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 6 }}>
              {nightInsight(data[hov].rec)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function cData(data, key, fmtFn) {
  return data.map(r => ({ val: r[key], date: r.d, label: r.d.slice(5), fmtVal: fmtFn ? fmtFn(r[key]) : undefined, rec: r }));
}

function MP({value,max,color,h=10}){
  const p=Math.min(100,max>0?(value/max)*100:0);
  return <div style={{width:"100%",height:h,background:"rgba(255,255,255,0.06)",borderRadius:h/2,overflow:"hidden"}}><div style={{width:p+"%",height:"100%",background:color,borderRadius:h/2,transition:"width 0.5s ease"}}/></div>;
}

function MRow({icon,label,jan,feb,mar,unit="",color="#818cf8"}){
  return(<div style={{display:"grid",gridTemplateColumns:"1fr 60px 60px 60px",gap:8,alignItems:"center",padding:"12px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
    <div style={{display:"flex",alignItems:"center",gap:8,minWidth:0}}><span style={{fontSize:16,flexShrink:0}}>{icon}</span><span style={{fontSize:13,fontWeight:600,color:"rgba(255,255,255,0.65)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{label}</span></div>
    {[jan,feb,mar].map((v,i)=><div key={i} style={{textAlign:"center",fontSize:14,fontWeight:700,color,fontVariantNumeric:"tabular-nums"}}>{v}<span style={{fontSize:10,fontWeight:500,opacity:0.5}}>{unit?" "+unit:""}</span></div>)}
  </div>);
}

function MiniExhibit({ data, color, labelLeft, labelRight, h=30 }) {
  return (
    <div style={{ marginTop: 10, padding: "8px 12px", background: "rgba(255,255,255,0.02)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.04)" }}>
      <Spark data={data} color={color} h={h} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>{labelLeft}</span>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>{labelRight}</span>
      </div>
    </div>
  );
}

const cd={background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:"18px 18px 16px"};
const ct={fontSize:14,fontWeight:700,color:"rgba(255,255,255,0.65)",margin:"0 0 14px",lineHeight:1.3};
const pr={fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.75,margin:0};
const bkBtn={background:"none",border:"none",color:"rgba(255,255,255,0.3)",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",textAlign:"left",padding:0};
function BenchBox({color,children}){return <div style={{marginTop:10,padding:"12px 14px",background:color+"08",borderRadius:10,border:"1px solid "+color+"12",borderLeft:"3px solid "+color+"40"}}>{children}</div>;}

export default function LeoDashboard(){
  const[tab,setTab]=useState("overview");
  const data=RAW;
  const jan=useMemo(()=>byM(data,"2026-01"),[]);
  const feb=useMemo(()=>byM(data,"2026-02"),[]);
  const mar=useMemo(()=>byM(data,"2026-03"),[]);
  const goTo=(t)=>{setTab(t);window.scrollTo({top:0,behavior:'smooth'});};
  const ms=useMemo(()=>{
    const c=(d)=>({n:d.length,sleep:av(d.map(r=>r.ls)),bestSleep:Math.max(...d.map(r=>r.ls)),wakeups:av(d.map(r=>r.wu)),milk:av(d.map(r=>r.ml)),feeds:av(d.map(r=>r.fc)),perFeed:av(d.filter(r=>r.fc>0).map(r=>r.ml/r.fc)),fmPct:pc(sm(d.map(r=>r.fm)),sm(d.map(r=>r.fm))+sm(d.map(r=>r.bm))),bmPct:pc(sm(d.map(r=>r.bm)),sm(d.map(r=>r.fm))+sm(d.map(r=>r.bm))),poo:av(d.map(r=>r.po)),pooFree:pc(d.filter(r=>r.po===0).length,d.length),gas:av(d.map(r=>r.ga)),nappy:av(d.map(r=>r.na)),over4h:pc(d.filter(r=>r.ls>=240).length,d.length)});
    return{jan:c(jan),feb:c(feb),mar:c(mar),all:c(data)};
  },[]);
  const tabs=[{id:"overview",label:"Overview",icon:"\u{1F4CA}"},{id:"sleep",label:"Sleep",icon:"\u{1F319}"},{id:"feeding",label:"Feeding",icon:"\u{1F37C}"},{id:"digestion",label:"Digestion",icon:"\u{1F4A9}"},{id:"insights",label:"Insights",icon:"\u{1F4A1}"}];

  return(
    <div style={{fontFamily:"'DM Sans',-apple-system,'Segoe UI',sans-serif",background:"#0b0b13",color:"rgba(255,255,255,0.85)",minHeight:"100vh",maxWidth:640,margin:"0 auto"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
      <div style={{padding:"28px 20px 20px",background:"linear-gradient(180deg, rgba(99,102,241,0.07) 0%, transparent 100%)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:44,height:44,borderRadius:14,background:"linear-gradient(135deg, #6366f1, #818cf8)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{"\u{1F476}"}</div>
          <div><h1 style={{fontSize:20,fontWeight:800,margin:0,letterSpacing:"-0.02em",color:"#e0e7ff"}}>Leo's Night Report</h1><p style={{fontSize:12,color:"rgba(255,255,255,0.3)",margin:"3px 0 0",fontWeight:500}}>Jan 10 - Mar 20, 2026 · 62 nights · 7 PM - 7 AM</p><p style={{fontSize:11,color:"rgba(255,255,255,0.22)",margin:"2px 0 0",fontWeight:500}}>Born Nov 6, 2025 · Age 9 weeks (2mo) to 19 weeks (4.5mo)</p></div>
        </div>
      </div>
      <div style={{display:"flex",gap:6,padding:"10px 20px 12px",overflowX:"auto"}}>
        {tabs.map(t=>(<button key={t.id} onClick={()=>goTo(t.id)} style={{padding:"8px 14px",border:"none",borderRadius:10,cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap",transition:"all 0.15s",background:tab===t.id?"rgba(99,102,241,0.15)":"rgba(255,255,255,0.03)",color:tab===t.id?"#a5b4fc":"rgba(255,255,255,0.3)",outline:tab===t.id?"1px solid rgba(99,102,241,0.2)":"1px solid transparent"}}>{t.icon} {t.label}</button>))}
      </div>
      <div style={{padding:"8px 20px 40px"}}>

{/* ═══ OVERVIEW ═══ */}
{tab==="overview"&&(<div style={{display:"flex",flexDirection:"column",gap:16}}>
  <div style={{background:"linear-gradient(135deg, rgba(74,222,128,0.05), rgba(99,102,241,0.04))",border:"1px solid rgba(74,222,128,0.12)",borderRadius:16,padding:"18px 18px 16px"}}>
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><span style={{fontSize:20}}>{"\u2705"}</span><h3 style={{fontSize:15,fontWeight:800,margin:0,color:"#4ade80"}}>Healthy, On Track</h3></div>
    <p style={{...pr,fontSize:13}}>Across 62 nights, Leo is showing steady, age-appropriate progress. Tracking began when he was 9 weeks old (2 months) and runs through 19 weeks (4.5 months). Sleep is consolidating, his gut is maturing, feeding is stable, and motor milestones are emerging right on schedule. No red flags. The trajectory is positive across nearly every metric.</p>
  </div>

  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
    {[{label:"Avg Longest Sleep",val:fmt(ms.all.sleep),sub:"Best: "+fmt(Math.max(...data.map(r=>r.ls))),color:"#818cf8",icon:"\u{1F319}",to:"sleep"},{label:"Avg Wake-ups",val:ms.all.wakeups,sub:"per night",color:"#fb923c",icon:"\u23F0",to:"sleep"},{label:"Avg Milk Intake",val:Math.round(ms.all.milk)+"",sub:"ml per night",color:"#38bdf8",icon:"\u{1F37C}",to:"feeding"},{label:"Avg Gas Events",val:ms.all.gas,sub:"per night, down 53%",color:"#94a3b8",icon:"\u{1F4A8}",to:"digestion"}].map((c,i)=>(
      <div key={i} onClick={()=>goTo(c.to)} style={{...cd,cursor:"pointer",position:"relative",overflow:"hidden",paddingBottom:12}}>
        <div style={{position:"absolute",top:10,right:12,fontSize:18,opacity:0.35}}>{c.icon}</div>
        <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(255,255,255,0.3)",marginBottom:6}}>{c.label}</div>
        <div style={{fontSize:26,fontWeight:800,color:c.color,lineHeight:1}}>{c.val}</div>
        <div style={{fontSize:11,color:"rgba(255,255,255,0.3)",marginTop:4}}>{c.sub}</div>
      </div>
    ))}
  </div>

  <h3 style={{fontSize:15,fontWeight:800,color:"rgba(255,255,255,0.7)",margin:"6px 0 0"}}>Pattern Summary</h3>

  {/* Sleep */}
  <div onClick={()=>goTo("sleep")} style={{...cd,cursor:"pointer"}}>
    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><span style={{fontSize:18}}>{"\u{1F319}"}</span><span style={{fontSize:14,fontWeight:700,color:"#818cf8",flex:1}}>Sleep</span><Pill text="Improving" color="#4ade80"/></div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12}}>
      {[{l:"Jan",v:ms.jan.sleep,c:"#fb923c"},{l:"Feb",v:ms.feb.sleep,c:"#818cf8"},{l:"Mar",v:ms.mar.sleep,c:"#4ade80"}].map(m=>(<div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:"rgba(255,255,255,0.02)",borderRadius:10}}><div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:4}}>{m.l}</div><div style={{fontSize:18,fontWeight:800,color:m.c}}>{fmt(m.v)}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:2}}>avg stretch</div></div>))}
    </div>
    <p style={pr}>Longest uninterrupted stretch grew from 2h 54m in Jan to 3h 25m in Feb/Mar. Best night was 5h 53m (Mar 16). Wake-ups decreased from 5.5 to 4.8 per night.</p>
    <MiniExhibit data={data.map(r=>r.ls)} color="#818cf8" labelLeft="Jan 10" labelRight="Mar 20" />
    <BenchBox color="#818cf8"><p style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:0}}><span style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:"0.04em"}}>vs. typical: </span>At 2-3 months (Jan), 2-4 hour stretches are normal. By 3-4 months (Feb), some babies start doing 4-6 hour blocks. By 4-4.5 months (Mar), many babies can manage 5-8 hours. Leo's trend from ~3h to 3.5h is steady progress, and his best nights (5h 53m) show he's capable of age-appropriate longer stretches. The 4-month sleep regression window can also cause temporary setbacks, which may explain some of the variability.</p></BenchBox>
  </div>

  {/* Feeding */}
  <div onClick={()=>goTo("feeding")} style={{...cd,cursor:"pointer"}}>
    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><span style={{fontSize:18}}>{"\u{1F37C}"}</span><span style={{fontSize:14,fontWeight:700,color:"#38bdf8",flex:1}}>Feeding</span><Pill text="Stable" color="rgba(255,255,255,0.45)" bg="rgba(255,255,255,0.06)"/></div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12}}>
      {[{l:"Jan",ml:Math.round(ms.jan.milk),pf:Math.round(ms.jan.perFeed),bmp:ms.jan.bmPct,fmp:ms.jan.fmPct},{l:"Feb",ml:Math.round(ms.feb.milk),pf:Math.round(ms.feb.perFeed),bmp:ms.feb.bmPct,fmp:ms.feb.fmPct},{l:"Mar",ml:Math.round(ms.mar.milk),pf:Math.round(ms.mar.perFeed),bmp:ms.mar.bmPct,fmp:ms.mar.fmPct}].map(m=>(<div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:"rgba(255,255,255,0.02)",borderRadius:10}}><div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:4}}>{m.l}</div><div style={{fontSize:18,fontWeight:800,color:"#38bdf8"}}>{m.ml}<span style={{fontSize:11,fontWeight:500,opacity:0.5}}> ml</span></div><div style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:3,lineHeight:1.5}}>{m.pf} ml/feed<br/>BM {m.bmp}% \u00b7 FM {m.fmp}%</div></div>))}
    </div>
    <p style={pr}>Nightly intake holds at 370-400ml. Volume per feed is consistent (98-116ml). Formula share has grown from 32% in Jan to 49% in Mar.</p>
    <MiniExhibit data={data.map(r=>r.ml)} color="#38bdf8" labelLeft="Jan 10" labelRight="Mar 20" />
    <BenchBox color="#38bdf8"><p style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:0}}><span style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:"0.04em"}}>vs. typical: </span>At 2-3 months, 120-150ml per feed is standard; by 4-4.5 months it rises to 150-200ml. Leo's nighttime total of ~370-400ml plus daytime feeds likely puts daily intake in the expected 700-1000ml range for his age. The BM/FM shift toward 50/50 is very common as babies grow and demand increases.</p></BenchBox>
  </div>

  {/* Digestion */}
  <div onClick={()=>goTo("digestion")} style={{...cd,cursor:"pointer"}}>
    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><span style={{fontSize:18}}>{"\u{1F4A9}"}</span><span style={{fontSize:14,fontWeight:700,color:"#fbbf24",flex:1}}>Digestion</span><Pill text="Maturing" color="#4ade80"/></div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12}}>
      {[{l:"Jan",po:ms.jan.poo,pf:ms.jan.pooFree,ga:ms.jan.gas},{l:"Feb",po:ms.feb.poo,pf:ms.feb.pooFree,ga:ms.feb.gas},{l:"Mar",po:ms.mar.poo,pf:ms.mar.pooFree,ga:ms.mar.gas}].map(m=>(<div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:"rgba(255,255,255,0.02)",borderRadius:10}}><div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:4}}>{m.l}</div><div style={{fontSize:16,fontWeight:800,color:"#fbbf24"}}>{m.po} <span style={{fontSize:10,fontWeight:500,opacity:0.5}}>{"\u{1F4A9}"}/n</span></div><div style={{fontSize:16,fontWeight:800,color:"#94a3b8",marginTop:2}}>{m.ga} <span style={{fontSize:10,fontWeight:500,opacity:0.5}}>{"\u{1F4A8}"}/n</span></div><div style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:3}}>{m.pf}% poo-free</div></div>))}
    </div>
    <p style={pr}>Gassiness dropped 53% (5.1 to 2.4/night). Poops dipped dramatically in Feb (71% poop-free) but returned in Mar (2.9/night), likely linked to increased formula.</p>
    <MiniExhibit data={data.map(r=>r.ga)} color="#94a3b8" labelLeft="Jan (5.1/n)" labelRight="Mar (2.4/n)" />
    <BenchBox color="#fbbf24"><p style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:0}}><span style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:"0.04em"}}>vs. typical: </span>Gas and colic peak around 6 weeks and typically resolve by 3-4 months. Leo was right in that resolution window during Jan-Feb, and by March (4+ months) his gas has dropped 53%, exactly as expected. Poop frequency often drops around 2-3 months as the gut matures. Feb's dip fits that timeline perfectly. Mar's uptick with more formula is common since formula digests differently from breast milk.</p></BenchBox>
  </div>

  {/* Development */}
  <div style={cd}>
    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><span style={{fontSize:18}}>{"\u{1F9D2}"}</span><span style={{fontSize:14,fontWeight:700,color:"#f472b6",flex:1}}>Development</span><Pill text="On Track" color="#4ade80"/></div>
    <p style={pr}>Tummy time introduced mid-Feb, regular by March. On Mar 17, the nurse noted Leo "started to crawl." He actively changes his own head position during sleep. Cooing, smiling, and responding to voices observed. One self-settling event noted Jan 17. Bedtime routine (bath/massage) established by late Feb.</p>
    <BenchBox color="#f472b6"><p style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:0}}><span style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:"0.04em"}}>vs. typical: </span>Head control is expected by 2-3 months (Leo had it by Jan, ~9 weeks). Social smiling at 6-8 weeks is typical. By 4 months, babies should have good head control and be pushing up during tummy time. Leo's early crawling/scooting motions at 19 weeks (~4.5 months) are early and impressive. True crawling usually begins at 6-10 months. Self-settling is uncommon before 4-6 months but a very positive sign for sleep independence.</p></BenchBox>
  </div>

  {/* Month-over-Month Table */}
  <div style={cd}>
    <h3 style={ct}>Month-over-Month Averages</h3>
    <div style={{display:"grid",gridTemplateColumns:"1fr 60px 60px 60px",gap:8,paddingBottom:4,borderBottom:"1px solid rgba(255,255,255,0.06)",marginBottom:4}}>
      <div/>{MK.map(mk=><div key={mk} style={{textAlign:"center",fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.35)"}}>{ML[mk]}</div>)}
    </div>
    <MRow icon={"\u{1F3C6}"} label="Best Sleep" jan={fmt(ms.jan.bestSleep)} feb={fmt(ms.feb.bestSleep)} mar={fmt(ms.mar.bestSleep)} color="#818cf8"/>
    <MRow icon={"\u{1F319}"} label="Avg Sleep Stretch" jan={fmt(ms.jan.sleep)} feb={fmt(ms.feb.sleep)} mar={fmt(ms.mar.sleep)} color="#a78bfa"/>
    <MRow icon={"\u23F0"} label="Wake-ups" jan={ms.jan.wakeups} feb={ms.feb.wakeups} mar={ms.mar.wakeups} color="#fb923c"/>
    <MRow icon={"\u{1F37C}"} label="Milk Intake" jan={Math.round(ms.jan.milk)+""} feb={Math.round(ms.feb.milk)+""} mar={Math.round(ms.mar.milk)+""} unit="ml" color="#38bdf8"/>
    <MRow icon={"\u{1F95B}"} label="Feeds" jan={ms.jan.feeds} feb={ms.feb.feeds} mar={ms.mar.feeds} color="#a78bfa"/>
    <MRow icon={"\u{1F4CF}"} label="ml / Feed" jan={Math.round(ms.jan.perFeed)} feb={Math.round(ms.feb.perFeed)} mar={Math.round(ms.mar.perFeed)} color="#38bdf8"/>
    <MRow icon={"\u{1F4A9}"} label="Poops" jan={ms.jan.poo} feb={ms.feb.poo} mar={ms.mar.poo} color="#fbbf24"/>
    <MRow icon={"\u{1F4A8}"} label="Gas Events" jan={ms.jan.gas} feb={ms.feb.gas} mar={ms.mar.gas} color="#94a3b8"/>
    <MRow icon={"\u{1FA72}"} label="Nappies" jan={ms.jan.nappy} feb={ms.feb.nappy} mar={ms.mar.nappy} color="#f472b6"/>
  </div>

  {/* Nightly sleep bars */}
  <div style={cd}>
    <h3 style={ct}>Longest Sleep Stretch per Night</h3>
    <ChartBars data={cData(data,"ls",fmt)} colorFn={v=>v>=300?"#4ade80":v>=240?"#22d3ee":v>=180?"#818cf8":v>=120?"#fbbf24":"#f87171"} max={400} h={140} rangeLow={120} rangeHigh={300} rangeLabel="Typical 2-4mo range (2-4h)" rangeColor="#818cf8"/>
    <div style={{display:"flex",gap:12,marginTop:8,flexWrap:"wrap"}}>
      {[["#4ade80","5+ hrs"],["#22d3ee","4-5 hrs"],["#818cf8","3-4 hrs"],["#fbbf24","2-3 hrs"],["#f87171","< 2 hrs"]].map(([c,l])=>(<div key={l} style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:7,height:7,borderRadius:2,background:c}}/><span style={{fontSize:9,color:"rgba(255,255,255,0.3)"}}>{l}</span></div>))}
    </div>
  </div>
</div>)}

{/* ═══ SLEEP ═══ */}
{tab==="sleep"&&(<div style={{display:"flex",flexDirection:"column",gap:16}}>
  <button onClick={()=>goTo("overview")} style={bkBtn}>{"\u2190"} Back to Overview</button>
  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
    {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];const colors=["#fb923c","#818cf8","#4ade80"];return(<div key={mk} style={{...cd,textAlign:"center",padding:"14px 10px"}}><div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{ML[mk]}</div><div style={{fontSize:22,fontWeight:800,color:colors[i],margin:"6px 0 2px"}}>{fmt(m.sleep)}</div><div style={{fontSize:9,color:"rgba(255,255,255,0.25)"}}>avg stretch</div><div style={{fontSize:13,fontWeight:700,color:colors[i],opacity:0.6,marginTop:4}}>Best: {fmt(m.bestSleep)}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.35)",marginTop:4}}>Wakeups: {m.wakeups}/n</div><div style={{fontSize:11,color:"rgba(255,255,255,0.35)"}}>4+ hr: {m.over4h}%</div></div>);})}
  </div>
  <div style={cd}><h3 style={ct}>Longest Sleep Stretch per Night</h3><ChartBars data={cData(data,"ls",fmt)} colorFn={v=>v>=300?"#4ade80":v>=240?"#22d3ee":v>=180?"#818cf8":v>=120?"#fbbf24":"#f87171"} max={400} h={140} rangeLow={120} rangeHigh={300} rangeLabel="Typical 2-4.5mo range (2-5h)" rangeColor="#818cf8"/></div>
  <div style={cd}><h3 style={ct}>Wake-ups per Night</h3><ChartBars data={cData(data,"wu")} colorFn={v=>v<=3?"#4ade80":v<=5?"#fbbf24":"#f87171"} max={12} h={110} rangeLow={1} rangeHigh={3} rangeLabel="Typical 3-4.5mo (1-3 wakes)" rangeColor="#fb923c"/></div>
  <div style={cd}><h3 style={ct}>4+ Hour Stretch Nights</h3>
    {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(<div key={mk} style={{marginBottom:12}}><div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}><span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[mk]}</span><span style={{color:"#818cf8",fontWeight:700}}>{m.over4h}%</span></div><MP value={m.over4h} max={100} color="#818cf8"/></div>);})}
    <p style={{...pr,fontSize:12,marginTop:8}}>The frequency of 4+ hour sleep blocks is trending upward. This is one of the clearest signals of sleep maturation.</p>
  </div>
</div>)}

{/* ═══ FEEDING ═══ */}
{tab==="feeding"&&(<div style={{display:"flex",flexDirection:"column",gap:16}}>
  <button onClick={()=>goTo("overview")} style={bkBtn}>{"\u2190"} Back to Overview</button>
  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
    {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(<div key={mk} style={{...cd,textAlign:"center",padding:"14px 10px"}}><div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{ML[mk]}</div><div style={{fontSize:22,fontWeight:800,color:"#38bdf8",margin:"6px 0 2px"}}>{Math.round(m.milk)}<span style={{fontSize:12,opacity:0.5}}> ml</span></div><div style={{fontSize:9,color:"rgba(255,255,255,0.25)"}}>avg/night</div><div style={{fontSize:11,color:"rgba(255,255,255,0.35)",marginTop:4}}>{m.feeds} feeds \u00b7 {Math.round(m.perFeed)} ml/ea</div><div style={{display:"flex",gap:2,height:8,borderRadius:4,overflow:"hidden",marginTop:6}}><div style={{flex:m.bmPct,background:"#818cf8",borderRadius:"4px 0 0 4px"}}/><div style={{flex:m.fmPct,background:"#fb923c",borderRadius:"0 4px 4px 0"}}/></div><div style={{fontSize:9,color:"rgba(255,255,255,0.2)",marginTop:3}}>BM {m.bmPct}% \u00b7 FM {m.fmPct}%</div></div>);})}
  </div>
  <div style={cd}><h3 style={ct}>Nightly Milk Volume (ml)</h3><ChartBars data={cData(data,"ml")} colorFn="#38bdf8" max={550} h={130} rangeLow={300} rangeHigh={450} rangeLabel="Expected nighttime range" rangeColor="#38bdf8"/></div>
  <div style={cd}><h3 style={ct}>Breast Milk vs Formula</h3>
    <div style={{display:"flex",gap:16,alignItems:"flex-end"}}>
      {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(<div key={mk} style={{flex:1,textAlign:"center"}}><div style={{height:100,display:"flex",flexDirection:"column",borderRadius:8,overflow:"hidden",border:"1px solid rgba(255,255,255,0.06)"}}><div style={{flex:m.bmPct,background:"linear-gradient(180deg,#818cf8,#6366f1)",display:"flex",alignItems:"center",justifyContent:"center"}}>{m.bmPct>15&&<span style={{fontSize:11,fontWeight:700,color:"white"}}>{m.bmPct}%</span>}</div><div style={{flex:m.fmPct,background:"linear-gradient(180deg,#fb923c,#ea580c)",display:"flex",alignItems:"center",justifyContent:"center"}}>{m.fmPct>15&&<span style={{fontSize:11,fontWeight:700,color:"white"}}>{m.fmPct}%</span>}</div></div><div style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:6,fontWeight:600}}>{MF[mk]}</div></div>);})}
      <div style={{display:"flex",flexDirection:"column",gap:6,paddingBottom:24}}><div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:9,height:9,borderRadius:3,background:"#818cf8"}}/><span style={{fontSize:10,color:"rgba(255,255,255,0.4)"}}>BM</span></div><div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:9,height:9,borderRadius:3,background:"#fb923c"}}/><span style={{fontSize:10,color:"rgba(255,255,255,0.4)"}}>FM</span></div></div>
    </div>
  </div>
  <div style={cd}><h3 style={ct}>Volume per Feed</h3>
    {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(<div key={mk} style={{marginBottom:12}}><div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}><span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[mk]}</span><span style={{color:"#38bdf8",fontWeight:700}}>{Math.round(m.perFeed)} ml/feed</span></div><MP value={m.perFeed} max={180} color="#38bdf8"/></div>);})}
    <div style={{marginTop:6,padding:"6px 10px",background:"rgba(56,189,248,0.05)",borderRadius:8,border:"1px dashed rgba(56,189,248,0.15)"}}><span style={{fontSize:10,color:"rgba(56,189,248,0.6)",fontWeight:600}}>Typical range: 120-200 ml per feed at 2-4.5 months</span></div>
  </div>
</div>)}

{/* ═══ DIGESTION ═══ */}
{tab==="digestion"&&(<div style={{display:"flex",flexDirection:"column",gap:16}}>
  <button onClick={()=>goTo("overview")} style={bkBtn}>{"\u2190"} Back to Overview</button>
  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
    {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(<div key={mk} style={{...cd,textAlign:"center",padding:"14px 10px"}}><div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{ML[mk]}</div><div style={{fontSize:18,fontWeight:800,color:"#fbbf24",margin:"6px 0 0"}}>{m.poo} <span style={{fontSize:10,opacity:0.5}}>{"\u{1F4A9}"}</span></div><div style={{fontSize:18,fontWeight:800,color:"#94a3b8"}}>{m.gas} <span style={{fontSize:10,opacity:0.5}}>{"\u{1F4A8}"}</span></div><div style={{fontSize:18,fontWeight:800,color:"#f472b6"}}>{m.nappy} <span style={{fontSize:10,opacity:0.5}}>{"\u{1FA72}"}</span></div><div style={{fontSize:9,color:"rgba(255,255,255,0.2)",marginTop:4}}>per night avg</div></div>);})}
  </div>
  <div style={cd}><h3 style={ct}>Poops per Night</h3><ChartBars data={cData(data,"po")} colorFn="#fbbf24" max={9} h={100}/></div>
  <div style={cd}><h3 style={ct}>Gas Events per Night</h3><ChartBars data={cData(data,"ga")} colorFn={v=>v>=7?"#f87171":v>=4?"#fbbf24":"#4ade80"} max={11} h={100} rangeLow={0} rangeHigh={3} rangeLabel="Comfortable zone" rangeColor="#4ade80"/><p style={{...pr,fontSize:12,marginTop:10}}>Gas dropped 53% from Jan (5.1/night) to Mar (2.4/night). This is the single biggest comfort improvement.</p></div>
  <div style={cd}><h3 style={ct}>Poop-Free Nights</h3>
    {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(<div key={mk} style={{marginBottom:12}}><div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}><span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[mk]}</span><span style={{color:"#fbbf24",fontWeight:700}}>{m.pooFree}%</span></div><MP value={m.pooFree} max={100} color="#fbbf24"/></div>);})}
    <p style={{...pr,fontSize:12,marginTop:8}}>Feb was exceptionally calm (71% poop-free). Mar returned to frequent nighttime poops, likely from the formula ratio change.</p>
  </div>
</div>)}

{/* ═══ INSIGHTS ═══ */}
{tab==="insights"&&(<div style={{display:"flex",flexDirection:"column",gap:16}}>
  <button onClick={()=>goTo("overview")} style={bkBtn}>{"\u2190"} Back to Overview</button>
  <h3 style={{fontSize:16,fontWeight:800,color:"#e0e7ff",margin:0}}>Key Findings</h3>
  {[
    {icon:"\u{1F319}",title:"Sleep is consolidating",color:"#818cf8",text:"Longest stretch grew 18% from Jan to Mar. 4+ hour stretches went from occasional to more regular. The best night (5h 53m) shows what Leo is capable of.",data:data.map(r=>r.ls),ll:"Jan avg: 2h54m",lr:"Mar avg: 3h25m"},
    {icon:"\u{1F4A8}",title:"Gas has settled dramatically",color:"#4ade80",text:"The single biggest win. From 5.1 events per night in Jan to 2.4 in Mar. Fewer pick-ups for gas means fewer disruptions and better quality sleep.",data:data.map(r=>r.ga),ll:"Jan: 5.1/night",lr:"Mar: 2.4/night"},
    {icon:"\u{1F37C}",title:"Feeding is efficient and steady",color:"#38bdf8",text:"Total nightly intake hasn't wavered. The BM/FM mix is shifting toward 50/50, which is common. Per-feed volume shows Leo eats well each session rather than snacking.",data:data.map(r=>r.ml),ll:"Avg: ~385 ml/night",lr:"Consistent"},
    {icon:"\u{1F4A9}",title:"Digestion is variable but normal",color:"#fbbf24",text:"Feb's dramatic dip in nighttime poops was gut maturation. March's return may be formula-related. The nurse consistently flags bottom redness, so barrier cream remains important.",data:data.map(r=>r.po),ll:"Jan: 2.6/n",lr:"Mar: 2.9/n"},
    {icon:"\u{1F9D2}",title:"Motor milestones emerging",color:"#f472b6",text:"Tummy time is now routine. Early scooting/crawling attempts noted Mar 17. Active head repositioning during sleep shows growing strength and independence."},
    {icon:"\u{1F6C1}",title:"Bedtime routine established",color:"#a78bfa",text:"A consistent bath and massage before bed became standard by late February. This is one of the most evidence-backed strategies for improving infant sleep."},
  ].map((ins,i)=>(
    <div key={i} style={{...cd,borderLeft:"3px solid "+ins.color+"30"}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><span style={{fontSize:18}}>{ins.icon}</span><span style={{fontSize:13,fontWeight:700,color:ins.color}}>{ins.title}</span></div>
      <p style={{...pr,fontSize:12.5}}>{ins.text}</p>
      {ins.data && <MiniExhibit data={ins.data} color={ins.color} labelLeft={ins.ll} labelRight={ins.lr} />}
    </div>
  ))}
  <div style={cd}><h3 style={ct}>Monthly Wellness Score</h3><p style={{fontSize:12,color:"rgba(255,255,255,0.3)",margin:"0 0 14px"}}>Sleep duration (40%) + fewer wake-ups (30%) + reduced gas (30%)</p>
    {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];const ss=Math.min(m.sleep/300,1)*40;const ws=Math.max(0,(1-m.wakeups/10))*30;const gs=Math.max(0,(1-m.gas/8))*30;const total=Math.round(ss+ws+gs);return(<div key={mk} style={{marginBottom:16}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontSize:13,color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[mk]}</span><span style={{fontSize:20,fontWeight:800,color:total>=65?"#4ade80":total>=50?"#fbbf24":"#fb923c"}}>{total}<span style={{fontSize:12,fontWeight:500,opacity:0.4}}>/100</span></span></div><div style={{display:"flex",gap:2,height:14,borderRadius:7,overflow:"hidden"}}><div style={{flex:ss,background:"#818cf8",display:"flex",alignItems:"center",justifyContent:"center"}}>{ss>8&&<span style={{fontSize:8,color:"white",fontWeight:700}}>SLEEP</span>}</div><div style={{flex:ws,background:"#fb923c",display:"flex",alignItems:"center",justifyContent:"center"}}>{ws>8&&<span style={{fontSize:8,color:"white",fontWeight:700}}>CALM</span>}</div><div style={{flex:gs,background:"#4ade80",display:"flex",alignItems:"center",justifyContent:"center"}}>{gs>8&&<span style={{fontSize:8,color:"white",fontWeight:700}}>GUT</span>}</div></div></div>);})}
  </div>
</div>)}

      </div>
    </div>
  );
}

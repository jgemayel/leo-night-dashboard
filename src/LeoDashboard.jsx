import { useState, useMemo, useCallback } from "react";

const RAW=[{"d":"2026-01-10","ml":435,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":4,"ls":185,"ga":1},{"d":"2026-01-11","ml":310,"fc":3,"fm":1,"bm":4,"po":3,"na":4,"wu":2,"ls":205,"ga":4},{"d":"2026-01-12","ml":410,"fc":4,"fm":1,"bm":3,"po":8,"na":4,"wu":11,"ls":235,"ga":10},{"d":"2026-01-13","ml":360,"fc":3,"fm":1,"bm":2,"po":4,"na":5,"wu":7,"ls":117,"ga":5},{"d":"2026-01-14","ml":500,"fc":4,"fm":3,"bm":1,"po":3,"na":5,"wu":6,"ls":100,"ga":5},{"d":"2026-01-15","ml":460,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":5,"ls":140,"ga":7},{"d":"2026-01-16","ml":480,"fc":4,"fm":1,"bm":3,"po":5,"na":6,"wu":6,"ls":157,"ga":5},{"d":"2026-01-17","ml":230,"fc":2,"fm":0,"bm":2,"po":4,"na":4,"wu":5,"ls":285,"ga":6},{"d":"2026-01-18","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":4,"wu":6,"ls":210,"ga":2},{"d":"2026-01-19","ml":420,"fc":4,"fm":2,"bm":2,"po":2,"na":7,"wu":2,"ls":110,"ga":4},{"d":"2026-01-20","ml":260,"fc":2,"fm":1,"bm":1,"po":2,"na":5,"wu":8,"ls":135,"ga":5},{"d":"2026-01-21","ml":480,"fc":4,"fm":2,"bm":2,"po":3,"na":4,"wu":3,"ls":160,"ga":2},{"d":"2026-01-22","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":6,"wu":6,"ls":159,"ga":5},{"d":"2026-01-23","ml":470,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":5,"ls":173,"ga":2},{"d":"2026-01-24","ml":360,"fc":3,"fm":0,"bm":3,"po":1,"na":3,"wu":3,"ls":220,"ga":5},{"d":"2026-01-26","ml":425,"fc":4,"fm":2,"bm":2,"po":2,"na":5,"wu":5,"ls":115,"ga":7},{"d":"2026-01-27","ml":380,"fc":3,"fm":3,"bm":0,"po":3,"na":4,"wu":10,"ls":222,"ga":5},{"d":"2026-01-28","ml":360,"fc":3,"fm":0,"bm":3,"po":0,"na":5,"wu":4,"ls":205,"ga":7},{"d":"2026-01-29","ml":440,"fc":5,"fm":1,"bm":4,"po":1,"na":6,"wu":5,"ls":208,"ga":5},{"d":"2026-01-30","ml":370,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":8,"ls":202,"ga":9},{"d":"2026-01-31","ml":470,"fc":4,"fm":1,"bm":3,"po":0,"na":5,"wu":5,"ls":110,"ga":6},{"d":"2026-02-01","ml":360,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":165,"ga":6},{"d":"2026-02-04","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":4,"wu":6,"ls":280,"ga":3},{"d":"2026-02-05","ml":390,"fc":4,"fm":0,"bm":4,"po":0,"na":2,"wu":4,"ls":208,"ga":4},{"d":"2026-02-06","ml":430,"fc":4,"fm":3,"bm":1,"po":1,"na":6,"wu":7,"ls":205,"ga":4},{"d":"2026-02-07","ml":480,"fc":4,"fm":1,"bm":3,"po":0,"na":4,"wu":5,"ls":180,"ga":3},{"d":"2026-02-09","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":233,"ga":3},{"d":"2026-02-10","ml":262,"fc":3,"fm":2,"bm":1,"po":2,"na":4,"wu":5,"ls":300,"ga":1},{"d":"2026-02-11","ml":290,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":6,"ls":255,"ga":4},{"d":"2026-02-12","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":7,"ls":205,"ga":2},{"d":"2026-02-13","ml":500,"fc":5,"fm":4,"bm":1,"po":0,"na":4,"wu":8,"ls":240,"ga":1},{"d":"2026-02-14","ml":330,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":4,"ls":190,"ga":0},{"d":"2026-02-15","ml":290,"fc":4,"fm":1,"bm":3,"po":1,"na":5,"wu":7,"ls":232,"ga":1},{"d":"2026-02-16","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":5,"wu":7,"ls":160,"ga":5},{"d":"2026-02-17","ml":240,"fc":2,"fm":0,"bm":2,"po":0,"na":4,"wu":7,"ls":130,"ga":4},{"d":"2026-02-18","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":3,"ls":193,"ga":3},{"d":"2026-02-19","ml":430,"fc":4,"fm":3,"bm":1,"po":0,"na":4,"wu":5,"ls":218,"ga":2},{"d":"2026-02-20","ml":410,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":8,"ls":162,"ga":2},{"d":"2026-02-21","ml":350,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":5,"ls":145,"ga":1},{"d":"2026-02-23","ml":310,"fc":4,"fm":1,"bm":3,"po":0,"na":3,"wu":4,"ls":205,"ga":0},{"d":"2026-02-24","ml":380,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":5,"ls":173,"ga":2},{"d":"2026-02-25","ml":380,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":4,"ls":217,"ga":4},{"d":"2026-02-26","ml":510,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":7,"ls":115,"ga":2},{"d":"2026-02-27","ml":440,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":6,"ls":143,"ga":3},{"d":"2026-02-28","ml":380,"fc":4,"fm":3,"bm":1,"po":1,"na":4,"wu":7,"ls":328,"ga":2},{"d":"2026-03-01","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":5,"wu":7,"ls":190,"ga":1},{"d":"2026-03-03","ml":390,"fc":5,"fm":4,"bm":1,"po":2,"na":4,"wu":2,"ls":112,"ga":3},{"d":"2026-03-04","ml":390,"fc":4,"fm":1,"bm":3,"po":4,"na":5,"wu":3,"ls":325,"ga":7},{"d":"2026-03-05","ml":270,"fc":3,"fm":3,"bm":0,"po":3,"na":5,"wu":3,"ls":205,"ga":1},{"d":"2026-03-06","ml":310,"fc":5,"fm":1,"bm":4,"po":3,"na":4,"wu":5,"ls":155,"ga":3},{"d":"2026-03-07","ml":280,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":130,"ga":3},{"d":"2026-03-09","ml":300,"fc":3,"fm":0,"bm":3,"po":2,"na":4,"wu":7,"ls":157,"ga":3},{"d":"2026-03-10","ml":390,"fc":4,"fm":3,"bm":1,"po":4,"na":4,"wu":6,"ls":225,"ga":2},{"d":"2026-03-11","ml":180,"fc":2,"fm":1,"bm":1,"po":3,"na":5,"wu":5,"ls":138,"ga":3},{"d":"2026-03-12","ml":400,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":3,"ls":133,"ga":0},{"d":"2026-03-13","ml":450,"fc":5,"fm":1,"bm":4,"po":4,"na":6,"wu":5,"ls":190,"ga":3},{"d":"2026-03-14","ml":350,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":205,"ga":3},{"d":"2026-03-15","ml":440,"fc":4,"fm":2,"bm":2,"po":5,"na":6,"wu":4,"ls":260,"ga":1},{"d":"2026-03-16","ml":430,"fc":5,"fm":2,"bm":3,"po":2,"na":3,"wu":3,"ls":353,"ga":2},{"d":"2026-03-17","ml":450,"fc":4,"fm":2,"bm":2,"po":3,"na":5,"wu":4,"ls":225,"ga":1},{"d":"2026-03-19","ml":410,"fc":4,"fm":3,"bm":1,"po":3,"na":3,"wu":5,"ls":330,"ga":2},{"d":"2026-03-20","ml":485,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":8,"ls":155,"ga":2}];

const MONTHS=["2026-01","2026-02","2026-03"];
const MN={"2026-01":"January","2026-02":"February","2026-03":"March"};
const MS={"2026-01":"Jan","2026-02":"Feb","2026-03":"Mar"};

function av(a){return a.length?Math.round(a.reduce((s,v)=>s+v,0)/a.length*10)/10:0;}
function fmt(m){const h=Math.floor(m/60),mm=Math.round(m%60);return h>0?`${h}h ${mm}m`:`${mm}m`;}
function fmtDate(d){const[,m,day]=d.split('-');const mn={"01":"Jan","02":"Feb","03":"Mar"};return `${mn[m]} ${parseInt(day)}`;}
function byM(d,mk){return d.filter(r=>r.d.startsWith(mk));}
function nightInsight(r){
  const parts=[];
  if(r.ls>=300) parts.push("Excellent sleep night");
  else if(r.ls>=240) parts.push("Great sleep stretch");
  else if(r.ls<120) parts.push("Restless night");
  if(r.wu<=3) parts.push("very calm");
  else if(r.wu>=8) parts.push("many wake-ups");
  if(r.ga>=7) parts.push("very gassy");
  else if(r.ga===0) parts.push("no gas issues");
  if(r.po===0) parts.push("poop-free");
  else if(r.po>=5) parts.push("frequent poops");
  if(r.ml>=480) parts.push("high intake");
  else if(r.ml<=250) parts.push("low intake");
  return parts.length ? parts.join(", ").replace(/^./,c=>c.toUpperCase()) : "Typical night";
}

// Tooltip component
function Tooltip({x, y, record, metric, containerRef}){
  if(!record) return null;
  const metricLabels={ls:"Longest Sleep",wu:"Wake-ups",ml:"Milk Intake",po:"Poops",ga:"Gas Events",fc:"Feeds"};
  const metricUnits={ls:"",wu:"",ml:" ml",po:"",ga:"",fc:""};
  const val = metric==="ls" ? fmt(record[metric]) : record[metric]+metricUnits[metric];
  return(
    <div style={{
      position:"absolute",left:Math.min(x,280),top:y-120,
      background:"rgba(15,15,25,0.96)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:12,
      padding:"12px 14px",zIndex:100,pointerEvents:"none",minWidth:180,maxWidth:240,
      boxShadow:"0 8px 32px rgba(0,0,0,0.5)",
    }}>
      <div style={{fontSize:12,fontWeight:700,color:"rgba(255,255,255,0.8)",marginBottom:4}}>{fmtDate(record.d)}</div>
      <div style={{fontSize:18,fontWeight:800,color:"#e0e7ff",marginBottom:6}}>{val}</div>
      <div style={{fontSize:11,color:"rgba(255,255,255,0.4)",lineHeight:1.5}}>
        {metricLabels[metric]} · {record.fc} feeds · {record.ml}ml · {record.po} poops · {record.ga} gas
      </div>
      <div style={{fontSize:11,color:"#a5b4fc",marginTop:6,fontStyle:"italic",lineHeight:1.4}}>{nightInsight(record)}</div>
    </div>
  );
}

// Interactive bar chart with month separators, 15th markers, reference bands, hover
function Chart({data,field,colorFn,max,h=130,refBand,refLabel}){
  const [hover,setHover]=useState(null);
  // Group by month
  const groups=useMemo(()=>{
    const g={};
    data.forEach((r,i)=>{const mk=r.d.slice(0,7);if(!g[mk])g[mk]=[];g[mk].push({...r,_i:i});});
    return g;
  },[data]);
  const allMonths=Object.keys(groups).sort();
  const total=data.length;

  return(
    <div style={{position:"relative",userSelect:"none"}}>
      {/* Reference band */}
      {refBand && (
        <div style={{position:"absolute",left:0,right:0,top:h-8-(refBand[1]/max)*(h-24),height:((refBand[1]-refBand[0])/max)*(h-24),background:"rgba(74,222,128,0.06)",borderTop:"1px dashed rgba(74,222,128,0.15)",borderBottom:"1px dashed rgba(74,222,128,0.15)",zIndex:0,pointerEvents:"none"}}>
          {refLabel && <span style={{position:"absolute",right:0,top:-14,fontSize:9,color:"rgba(74,222,128,0.4)",fontWeight:600}}>{refLabel}</span>}
        </div>
      )}
      <div style={{display:"flex",height:h,alignItems:"flex-end",gap:0,position:"relative",zIndex:1}}>
        {allMonths.map((mk,mi)=>{
          const items=groups[mk];
          return(
            <div key={mk} style={{display:"contents"}}>
              {mi>0 && <div style={{width:2,height:h,background:"rgba(255,255,255,0.08)",borderRadius:1,flexShrink:0,position:"relative"}}>
                <span style={{position:"absolute",top:-16,left:-10,fontSize:9,fontWeight:700,color:"rgba(255,255,255,0.25)",whiteSpace:"nowrap"}}>{MS[mk]}</span>
              </div>}
              {items.map((r,i)=>{
                const day=parseInt(r.d.slice(8));
                const val=r[field];
                const bh=max>0?Math.max(2,(val/max)*(h-20)):2;
                const isHover=hover===r._i;
                const is15=day===15;
                const c=typeof colorFn==='function'?colorFn(val):colorFn;
                return(
                  <div key={r.d} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",height:"100%",minWidth:0,position:"relative",cursor:"pointer"}}
                    onMouseEnter={(e)=>setHover(r._i)}
                    onMouseLeave={()=>setHover(null)}
                    onClick={()=>setHover(isHover?null:r._i)}
                  >
                    <div style={{
                      width:"100%",maxWidth:14,height:bh,
                      background:isHover?"#e0e7ff":c,
                      borderRadius:3,transition:"all 0.15s",
                      opacity:isHover?1:0.8,
                      boxShadow:isHover?"0 0 12px rgba(224,231,255,0.3)":"none",
                      transform:isHover?"scaleY(1.05)":"scaleY(1)",transformOrigin:"bottom",
                    }}/>
                    {is15 && <div style={{position:"absolute",bottom:-16,fontSize:8,color:"rgba(255,255,255,0.2)",fontWeight:600}}>15</div>}
                    {i===0 && mi===0 && <div style={{position:"absolute",bottom:-16,left:0,fontSize:8,color:"rgba(255,255,255,0.2)",fontWeight:600}}>{MS[mk]} {day}</div>}
                    {i===items.length-1 && mi===allMonths.length-1 && <div style={{position:"absolute",bottom:-16,right:0,fontSize:8,color:"rgba(255,255,255,0.2)",fontWeight:600}}>{MS[mk]} {day}</div>}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {hover!==null && <Tooltip x={Math.round((hover/total)*300)} y={h} record={data[hover]} metric={field}/>}
      <div style={{height:20}}/>
    </div>
  );
}

function MP({value,max,color,h=10}){
  const p=Math.min(100,max>0?(value/max)*100:0);
  return <div style={{width:"100%",height:h,background:"rgba(255,255,255,0.06)",borderRadius:h/2,overflow:"hidden"}}><div style={{width:p+"%",height:"100%",background:color,borderRadius:h/2,transition:"width 0.5s ease"}}/></div>;
}

function Pill({text,color="#4ade80",bg}){return <span style={{fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20,background:bg||color+"18",color,whiteSpace:"nowrap",display:"inline-block"}}>{text}</span>;}

function Spark({data,color,h=40}){
  if(!data.length)return null;
  const mn=Math.min(...data),mx=Math.max(...data),rng=mx-mn||1,w=200,p=6;
  const pts=data.map((v,i)=>{const x=data.length>1?(i/(data.length-1))*(w-p*2)+p:w/2;const y=h-p-((v-mn)/rng)*(h-p*2);return[x,y];});
  const line=pts.map(([x,y])=>x+","+y).join(' ');
  const area=line+" "+pts[pts.length-1][0]+","+h+" "+pts[0][0]+","+h;
  const id="sp"+color.replace('#','');
  return(<svg viewBox={`0 0 ${w} ${h}`} style={{width:"100%",height:h,display:"block"}} preserveAspectRatio="none"><defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.25"/><stop offset="100%" stopColor={color} stopOpacity="0.01"/></linearGradient></defs><polygon points={area} fill={`url(#${id})`}/><polyline points={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"/></svg>);
}

const cd={background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:"18px 18px 14px"};
const ct={fontSize:14,fontWeight:700,margin:"0 0 12px",color:"rgba(255,255,255,0.65)"};
const pr={fontSize:12.5,color:"rgba(255,255,255,0.45)",lineHeight:1.65,margin:0};
const lbl={fontSize:9,color:"rgba(255,255,255,0.2)"};

function BenchBox({color,children}){
  return <div style={{marginTop:10,padding:"10px 14px",background:color+"08",borderRadius:10,border:"1px solid "+color+"15"}}>{children}</div>;
}

function BenchNote({color,text}){
  return <BenchBox color={color}><p style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:0}}><span style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:"0.04em"}}>vs. typical: </span>{text}</p></BenchBox>;
}

export default function LeoDashboard(){
  const [tab,setTab]=useState("overview");
  const data=RAW;

  const ms=useMemo(()=>{
    function c(d){
      const totalFm=d.reduce((s,r)=>s+r.fm,0);
      const totalBm=d.reduce((s,r)=>s+r.bm,0);
      const t=totalFm+totalBm;
      return{
        sleep:av(d.map(r=>r.ls)), avgSleep:av(d.map(r=>{/* estimate avg sleep across all stretches as ~75% of longest */return r.ls*0.75})),
        wakeups:av(d.map(r=>r.wu)), milk:av(d.map(r=>r.ml)), feeds:av(d.map(r=>r.fc)),
        poo:av(d.map(r=>r.po)), gas:av(d.map(r=>r.ga)), nappy:av(d.map(r=>r.na)),
        perFeed:av(d.map(r=>r.fc>0?r.ml/r.fc:0)),
        bmPct:t>0?Math.round(100*totalBm/t):0, fmPct:t>0?Math.round(100*totalFm/t):0,
        pooFree:Math.round(100*d.filter(r=>r.po===0).length/d.length),
        over4h:Math.round(100*d.filter(r=>r.ls>=240).length/d.length),
        best:d.length?Math.max(...d.map(r=>r.ls)):0,
        count:d.length,
      };
    }
    const jan=byM(data,"2026-01"),feb=byM(data,"2026-02"),mar=byM(data,"2026-03");
    return{jan:c(jan),feb:c(feb),mar:c(mar),all:c(data)};
  },[]);

  const tabs=[{id:"overview",label:"Overview",icon:"📊"},{id:"sleep",label:"Sleep",icon:"🌙"},{id:"feeding",label:"Feeding",icon:"🍼"},{id:"digestion",label:"Digestion",icon:"💩"},{id:"insights",label:"Insights",icon:"💡"}];

  const bkBtn={background:"none",border:"none",color:"rgba(255,255,255,0.3)",fontSize:12,fontWeight:600,cursor:"pointer",padding:"4px 0",fontFamily:"inherit",marginBottom:4};

  return(
    <div style={{fontFamily:"'DM Sans',-apple-system,'Segoe UI',sans-serif",background:"#0b0b13",color:"rgba(255,255,255,0.85)",minHeight:"100vh",maxWidth:640,margin:"0 auto"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

      {/* Header */}
      <div style={{padding:"28px 22px 20px",background:"linear-gradient(180deg, rgba(99,102,241,0.07) 0%, transparent 100%)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:44,height:44,borderRadius:14,background:"linear-gradient(135deg, #6366f1, #818cf8)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>👶</div>
          <div>
            <h1 style={{fontSize:20,fontWeight:800,margin:0,letterSpacing:"-0.02em",color:"#e0e7ff"}}>Leo's Night Report</h1>
            <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",margin:"3px 0 0",fontWeight:500}}>Jan 10 - Mar 20, 2026 · 62 nights · 7 PM - 7 AM</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:6,padding:"10px 22px 12px",overflowX:"auto"}}>
        {tabs.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"8px 14px",border:"none",borderRadius:10,cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap",transition:"all 0.15s",background:tab===t.id?"rgba(99,102,241,0.15)":"rgba(255,255,255,0.03)",color:tab===t.id?"#a5b4fc":"rgba(255,255,255,0.3)",outline:tab===t.id?"1px solid rgba(99,102,241,0.2)":"1px solid transparent"}}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div style={{padding:"8px 22px 40px"}}>

      {/* ====== OVERVIEW ====== */}
      {tab==="overview"&&(
        <div style={{display:"flex",flexDirection:"column",gap:16}}>

          {/* Verdict */}
          <div style={{background:"linear-gradient(135deg, rgba(74,222,128,0.05), rgba(99,102,241,0.04))",border:"1px solid rgba(74,222,128,0.12)",borderRadius:16,padding:"18px 18px 16px"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <span style={{fontSize:20}}>✅</span>
              <h3 style={{fontSize:15,fontWeight:800,margin:0,color:"#4ade80"}}>Healthy, On Track</h3>
            </div>
            <p style={{...pr,fontSize:13}}>Across 62 nights, Leo is showing steady, age-appropriate progress for a baby in the 1-3 month range. Sleep is consolidating, his gut is maturing, and feeding is stable. No red flags. The trajectory is positive across nearly every metric.</p>
          </div>

          {/* Stat cards */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[
              {label:"Avg Longest Sleep",val:fmt(ms.all.sleep),color:"#818cf8",icon:"🌙"},
              {label:"Avg Wake-ups",val:ms.all.wakeups+"/night",color:"#fb923c",icon:"⏰"},
              {label:"Avg Milk Intake",val:Math.round(ms.all.milk)+" ml",color:"#38bdf8",icon:"🍼"},
              {label:"Avg Gas Events",val:ms.all.gas+"/night",color:"#94a3b8",icon:"💨"},
            ].map((c,i)=>(
              <div key={i} style={{...cd,position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:10,right:12,fontSize:18,opacity:0.3}}>{c.icon}</div>
                <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(255,255,255,0.3)",marginBottom:6}}>{c.label}</div>
                <div style={{fontSize:24,fontWeight:800,color:c.color,lineHeight:1}}>{c.val}</div>
              </div>
            ))}
          </div>

          {/* ---- PATTERN SUMMARY ---- */}
          <h3 style={{fontSize:15,fontWeight:800,color:"rgba(255,255,255,0.7)",margin:"6px 0 0"}}>Pattern Summary</h3>

          {/* SLEEP summary */}
          <div style={{...cd,cursor:"pointer"}} onClick={()=>setTab("sleep")}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
              <span style={{fontSize:18}}>🌙</span>
              <span style={{fontSize:14,fontWeight:700,color:"#818cf8",flex:1}}>Sleep</span>
              <Pill text="Improving" color="#4ade80"/>
            </div>
            {/* Mini exhibit */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12}}>
              {[{l:"Jan",v:ms.jan.sleep,b:ms.jan.best,o:ms.jan.over4h,c:"#fb923c"},{l:"Feb",v:ms.feb.sleep,b:ms.feb.best,o:ms.feb.over4h,c:"#818cf8"},{l:"Mar",v:ms.mar.sleep,b:ms.mar.best,o:ms.mar.over4h,c:"#4ade80"}].map(m=>(
                <div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:"rgba(255,255,255,0.02)",borderRadius:10}}>
                  <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:4}}>{m.l}</div>
                  <div style={{fontSize:18,fontWeight:800,color:m.c}}>{fmt(m.v)}</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:2}}>longest avg</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:4}}>Best: {fmt(m.b)}</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.2)"}}>4h+ nights: {m.o}%</div>
                </div>
              ))}
            </div>
            <p style={pr}>Longest uninterrupted stretch grew from 2h 54m in Jan to 3h 25m in Feb/Mar. Best night was 5h 53m (Mar 16). Wake-ups decreased from 5.5 to 4.8 per night.</p>
            <BenchNote color="#818cf8" text="At 1-3 months, most babies sleep in 2-4 hour stretches and wake 2-4 times. Leo's 3+ hour average with occasional 4-5 hour blocks is on track. Consolidated 5-6 hour stretches usually emerge at 3-4 months, and he's already showing flashes."/>
          </div>

          {/* FEEDING summary */}
          <div style={{...cd,cursor:"pointer"}} onClick={()=>setTab("feeding")}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
              <span style={{fontSize:18}}>🍼</span>
              <span style={{fontSize:14,fontWeight:700,color:"#38bdf8",flex:1}}>Feeding</span>
              <Pill text="Stable" color="rgba(255,255,255,0.45)" bg="rgba(255,255,255,0.06)"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12}}>
              {MONTHS.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
                <div key={mk} style={{textAlign:"center",padding:"10px 6px",background:"rgba(255,255,255,0.02)",borderRadius:10}}>
                  <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:4}}>{MS[mk]}</div>
                  <div style={{fontSize:18,fontWeight:800,color:"#38bdf8"}}>{Math.round(m.milk)}<span style={{fontSize:11,fontWeight:500,opacity:0.5}}> ml</span></div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:3,lineHeight:1.5}}>{m.feeds} feeds/n<br/>{Math.round(m.perFeed)} ml/feed<br/>BM {m.bmPct}% · FM {m.fmPct}%</div>
                </div>
              );})}
            </div>
            <p style={pr}>Nightly intake holds at 370-400ml across all three months. Per-feed volume is consistent (98-116ml). Formula share grew from 32% in Jan to 49% in Mar. Leo feeds efficiently and rarely refuses.</p>
            <BenchNote color="#38bdf8" text="At 1-3 months, 120-180ml per feed every 2-4 hours is standard. Leo's nighttime total of ~370-400ml plus daytime feeds likely puts daily intake in the expected 600-900ml range. The formula shift is common and not a concern."/>
          </div>

          {/* DIGESTION summary */}
          <div style={{...cd,cursor:"pointer"}} onClick={()=>setTab("digestion")}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
              <span style={{fontSize:18}}>💩</span>
              <span style={{fontSize:14,fontWeight:700,color:"#fbbf24",flex:1}}>Digestion & Gas</span>
              <Pill text="Maturing" color="#4ade80"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12}}>
              {MONTHS.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
                <div key={mk} style={{textAlign:"center",padding:"10px 6px",background:"rgba(255,255,255,0.02)",borderRadius:10}}>
                  <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:4}}>{MS[mk]}</div>
                  <div style={{fontSize:16,fontWeight:800,color:"#fbbf24"}}>{m.poo} 💩<span style={{fontSize:10,fontWeight:500,opacity:0.5}}>/n</span></div>
                  <div style={{fontSize:16,fontWeight:800,color:"#94a3b8"}}>{m.gas} 💨<span style={{fontSize:10,fontWeight:500,opacity:0.5}}>/n</span></div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:2}}>{m.pooFree}% poo-free</div>
                </div>
              );})}
            </div>
            <p style={pr}>Gas dropped 53% from Jan (5.1/night) to Mar (2.4/night). Feb was exceptionally calm with 71% poop-free nights. March poops returned (2.9/night), possibly due to formula increase.</p>
            <BenchNote color="#fbbf24" text="Newborns poop 3-5+ times daily; frequency drops as the gut matures around 6-8 weeks. Feb's dip fits that timeline. Gas and colic peak at 2-6 weeks and resolve by 3-4 months. Leo's 53% gas reduction is exactly what's expected."/>
          </div>

          {/* DEVELOPMENT summary */}
          <div style={{...cd,cursor:"pointer"}} onClick={()=>setTab("insights")}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
              <span style={{fontSize:18}}>🧒</span>
              <span style={{fontSize:14,fontWeight:700,color:"#f472b6",flex:1}}>Development</span>
              <Pill text="On Track" color="#4ade80"/>
            </div>
            <p style={pr}>Tummy time became regular in March. Early crawling movements noted Mar 17. Active head repositioning during sleep. Cooing and social smiling observed. Bedtime routine (bath/massage) firmly established by late Feb.</p>
            <BenchNote color="#f472b6" text="Head control at 2-3 months is expected. Cooing/smiling at 6-8 weeks is typical. The 'crawling' at ~10 weeks is likely early scooting (true crawling starts at 6-10 months). All positive, age-appropriate signs."/>
          </div>

          {/* MONTHLY TABLE */}
          <div style={cd}>
            <h3 style={ct}>Month-over-Month Averages</h3>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
                <thead>
                  <tr>{["","Jan","Feb","Mar","Trend"].map((h,i)=><th key={i} style={{textAlign:i===0?"left":"center",padding:"8px 6px",color:"rgba(255,255,255,0.35)",fontWeight:700,fontSize:10,textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {[
                    {icon:"🌙",label:"Longest Sleep",k:"sleep",unit:"",fmt:v=>fmt(v),color:"#818cf8",good:"up"},
                    {icon:"😴",label:"Avg Sleep Est.",k:"avgSleep",unit:"",fmt:v=>fmt(v),color:"#a78bfa",good:"up"},
                    {icon:"⏰",label:"Wake-ups",k:"wakeups",unit:"/n",fmt:v=>v,color:"#fb923c",good:"down"},
                    {icon:"🍼",label:"Milk Intake",k:"milk",unit:" ml",fmt:v=>Math.round(v),color:"#38bdf8",good:"stable"},
                    {icon:"🥛",label:"Feeds",k:"feeds",unit:"/n",fmt:v=>v,color:"#a78bfa",good:"stable"},
                    {icon:"💩",label:"Poops",k:"poo",unit:"/n",fmt:v=>v,color:"#fbbf24",good:"down"},
                    {icon:"💨",label:"Gas Events",k:"gas",unit:"/n",fmt:v=>v,color:"#94a3b8",good:"down"},
                    {icon:"👶",label:"Nappy Changes",k:"nappy",unit:"/n",fmt:v=>v,color:"#f472b6",good:"down"},
                  ].map(row=>{
                    const j=ms.jan[row.k],m=ms.mar[row.k];
                    const ch=j>0?((m-j)/j)*100:0;
                    const isG=(row.good==="up"&&ch>5)||(row.good==="down"&&ch<-5)||(row.good==="stable"&&Math.abs(ch)<10);
                    const isB=(row.good==="up"&&ch<-5)||(row.good==="down"&&ch>5);
                    return(
                      <tr key={row.k} style={{borderBottom:"1px solid rgba(255,255,255,0.03)"}}>
                        <td style={{padding:"10px 6px",display:"flex",alignItems:"center",gap:6,minWidth:120}}>
                          <span style={{fontSize:14}}>{row.icon}</span>
                          <span style={{fontSize:12,fontWeight:600,color:"rgba(255,255,255,0.6)"}}>{row.label}</span>
                        </td>
                        {[ms.jan,ms.feb,ms.mar].map((mo,i)=><td key={i} style={{textAlign:"center",padding:"10px 6px",color:row.color,fontWeight:700,fontVariantNumeric:"tabular-nums",fontSize:13}}>{row.fmt(mo[row.k])}<span style={{fontSize:9,opacity:0.45}}>{row.unit}</span></td>)}
                        <td style={{textAlign:"center",padding:"10px 6px"}}>
                          <span style={{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:12,background:isG?"rgba(74,222,128,0.1)":isB?"rgba(248,113,113,0.1)":"rgba(255,255,255,0.04)",color:isG?"#4ade80":isB?"#f87171":"rgba(255,255,255,0.35)"}}>
                            {ch>3?"▲":ch<-3?"▼":"—"} {Math.abs(Math.round(ch))}%
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ====== SLEEP TAB ====== */}
      {tab==="sleep"&&(
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          <button onClick={()=>setTab("overview")} style={bkBtn}>← Back to Overview</button>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
            {MONTHS.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];const colors=["#fb923c","#818cf8","#4ade80"];return(
              <div key={mk} style={{...cd,textAlign:"center",padding:"14px 10px"}}>
                <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{MS[mk]}</div>
                <div style={{fontSize:22,fontWeight:800,color:colors[i],margin:"6px 0 2px"}}>{fmt(m.sleep)}</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.25)"}}>longest avg</div>
                <Spark data={byM(data,mk).map(r=>r.ls)} color={colors[i]} h={32}/>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:6}}>Best: {fmt(m.best)}</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.2)"}}>4h+ nights: {m.over4h}%</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.2)"}}>Wake-ups: {m.wakeups}/n</div>
              </div>
            );})}
          </div>

          <div style={cd}>
            <h3 style={ct}>Longest Sleep Stretch per Night</h3>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.3)",margin:"-8px 0 12px"}}>Hover any bar for that night's full breakdown</p>
            <Chart data={data} field="ls" max={400} h={140}
              colorFn={v=>v>=240?"#4ade80":v>=180?"#818cf8":v>=120?"#fbbf24":"#f87171"}
              refBand={[120,240]} refLabel="typical 1-3mo range"
            />
            <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:4}}>
              {[["#4ade80","4+ hours"],["#818cf8","3-4 hours"],["#fbbf24","2-3 hours"],["#f87171","< 2 hours"]].map(([c,l])=>(
                <div key={l} style={{display:"flex",alignItems:"center",gap:5}}>
                  <div style={{width:8,height:8,borderRadius:2,background:c}}/><span style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={cd}>
            <h3 style={ct}>Wake-ups per Night</h3>
            <Chart data={data} field="wu" max={12} h={100}
              colorFn={v=>v<=3?"#4ade80":v<=5?"#fbbf24":"#f87171"}
              refBand={[2,4]} refLabel="typical 1-3mo range"
            />
          </div>

          <div style={cd}>
            <h3 style={ct}>4+ Hour Sleep Nights</h3>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.3)",margin:"-8px 0 12px"}}>Percentage of nights exceeding 4 hours uninterrupted</p>
            {MONTHS.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
              <div key={mk} style={{marginBottom:12}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}>
                  <span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MN[mk]}</span>
                  <span style={{color:"#818cf8",fontWeight:700}}>{m.over4h}%</span>
                </div>
                <MP value={m.over4h} max={100} color="#818cf8"/>
              </div>
            );})}
          </div>
        </div>
      )}

      {/* ====== FEEDING TAB ====== */}
      {tab==="feeding"&&(
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          <button onClick={()=>setTab("overview")} style={bkBtn}>← Back to Overview</button>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
            {MONTHS.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
              <div key={mk} style={{...cd,textAlign:"center",padding:"14px 10px"}}>
                <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{MS[mk]}</div>
                <div style={{fontSize:20,fontWeight:800,color:"#38bdf8",margin:"6px 0 2px"}}>{Math.round(m.milk)}<span style={{fontSize:11,opacity:0.5}}> ml</span></div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.2)"}}>per night avg</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:4}}>{Math.round(m.perFeed)} ml/feed</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.2)"}}>{m.feeds} feeds/n</div>
              </div>
            );})}
          </div>

          <div style={cd}>
            <h3 style={ct}>Nightly Milk Volume</h3>
            <Chart data={data} field="ml" max={550} h={130} colorFn="#38bdf8"
              refBand={[300,450]} refLabel="expected night range"
            />
          </div>

          <div style={cd}>
            <h3 style={ct}>Breast Milk vs Formula</h3>
            <div style={{display:"flex",gap:16,alignItems:"flex-end"}}>
              {MONTHS.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
                <div key={mk} style={{flex:1,textAlign:"center"}}>
                  <div style={{height:100,display:"flex",flexDirection:"column",borderRadius:8,overflow:"hidden",border:"1px solid rgba(255,255,255,0.06)"}}>
                    <div style={{flex:m.bmPct,background:"linear-gradient(180deg, #818cf8, #6366f1)",display:"flex",alignItems:"center",justifyContent:"center",transition:"flex 0.5s"}}>
                      {m.bmPct>15&&<span style={{fontSize:11,fontWeight:700,color:"white"}}>{m.bmPct}%</span>}
                    </div>
                    <div style={{flex:m.fmPct,background:"linear-gradient(180deg, #fb923c, #ea580c)",display:"flex",alignItems:"center",justifyContent:"center",transition:"flex 0.5s"}}>
                      {m.fmPct>15&&<span style={{fontSize:11,fontWeight:700,color:"white"}}>{m.fmPct}%</span>}
                    </div>
                  </div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:6,fontWeight:600}}>{MN[mk]}</div>
                </div>
              );})}
              <div style={{display:"flex",flexDirection:"column",gap:5,paddingBottom:24}}>
                <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:10,height:10,borderRadius:3,background:"#818cf8"}}/><span style={{fontSize:11,color:"rgba(255,255,255,0.4)"}}>BM</span></div>
                <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:10,height:10,borderRadius:3,background:"#fb923c"}}/><span style={{fontSize:11,color:"rgba(255,255,255,0.4)"}}>FM</span></div>
              </div>
            </div>
          </div>

          <div style={cd}>
            <h3 style={ct}>Volume per Feed</h3>
            {MONTHS.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
              <div key={mk} style={{marginBottom:12}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}>
                  <span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MN[mk]}</span>
                  <span style={{color:"#38bdf8",fontWeight:700}}>{Math.round(m.perFeed)} ml/feed</span>
                </div>
                <MP value={m.perFeed} max={180} color="#38bdf8"/>
              </div>
            );})}
            <div style={{marginTop:8,padding:"6px 10px",background:"rgba(74,222,128,0.04)",borderRadius:8}}>
              <span style={{fontSize:10,color:"rgba(74,222,128,0.5)",fontWeight:600}}>Typical range: 120-180 ml/feed for 1-3 months</span>
            </div>
          </div>
        </div>
      )}

      {/* ====== DIGESTION TAB ====== */}
      {tab==="digestion"&&(
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          <button onClick={()=>setTab("overview")} style={bkBtn}>← Back to Overview</button>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
            {MONTHS.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
              <div key={mk} style={{...cd,textAlign:"center",padding:"14px 10px"}}>
                <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{MS[mk]}</div>
                <div style={{fontSize:18,fontWeight:800,color:"#fbbf24",margin:"6px 0 0"}}>{m.poo} <span style={{fontSize:10,opacity:0.5}}>💩</span></div>
                <div style={{fontSize:18,fontWeight:800,color:"#94a3b8"}}>{m.gas} <span style={{fontSize:10,opacity:0.5}}>💨</span></div>
                <div style={{fontSize:9,color:"rgba(255,255,255,0.2)",marginTop:4}}>{m.pooFree}% poo-free</div>
              </div>
            );})}
          </div>

          <div style={cd}>
            <h3 style={ct}>Poops per Night</h3>
            <Chart data={data} field="po" max={9} h={100} colorFn="#fbbf24"
              refBand={[1,4]} refLabel="typical range"
            />
          </div>

          <div style={cd}>
            <h3 style={ct}>Gas Events per Night</h3>
            <Chart data={data} field="ga" max={11} h={100}
              colorFn={v=>v>=7?"#f87171":v>=4?"#fbbf24":"#4ade80"}
              refBand={[0,3]} refLabel="resolved colic range"
            />
            <p style={{...pr,fontSize:12,marginTop:10}}>Gas dropped 53% from Jan (5.1/night) to Mar (2.4/night). The biggest comfort improvement, directly linked to better sleep.</p>
          </div>

          <div style={cd}>
            <h3 style={ct}>Poop-Free Nights</h3>
            {MONTHS.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
              <div key={mk} style={{marginBottom:12}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}>
                  <span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MN[mk]}</span>
                  <span style={{color:"#fbbf24",fontWeight:700}}>{m.pooFree}%</span>
                </div>
                <MP value={m.pooFree} max={100} color="#fbbf24"/>
              </div>
            );})}
            <p style={{...pr,fontSize:12,marginTop:8}}>Feb was exceptionally calm (71% poop-free). March returned to frequent nighttime poops, likely from the formula ratio change. Not abnormal, but worth monitoring.</p>
          </div>
        </div>
      )}

      {/* ====== INSIGHTS TAB ====== */}
      {tab==="insights"&&(
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          <button onClick={()=>setTab("overview")} style={bkBtn}>← Back to Overview</button>
          <h3 style={{fontSize:16,fontWeight:800,color:"#e0e7ff",margin:0}}>Key Findings</h3>

          {/* Sleep insight + mini exhibit */}
          <div style={{...cd,borderLeft:"3px solid #818cf830"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:18}}>🌙</span>
              <span style={{fontSize:13,fontWeight:700,color:"#818cf8"}}>Sleep is consolidating</span>
            </div>
            <p style={{...pr,fontSize:12.5}}>Longest stretch grew 18% from Jan to Mar. 4+ hour stretches went from occasional to more regular. The best night (5h 53m) shows what Leo is capable of.</p>
            <div style={{marginTop:10,padding:"10px 12px",background:"rgba(99,102,241,0.04)",borderRadius:10}}>
              <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:6}}>LONGEST STRETCH TREND</div>
              <Spark data={data.map(r=>r.ls)} color="#818cf8" h={36}/>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:9,color:"rgba(255,255,255,0.2)",marginTop:4}}>
                <span>Jan 10</span><span>Mar 20</span>
              </div>
            </div>
          </div>

          {/* Gas insight + mini exhibit */}
          <div style={{...cd,borderLeft:"3px solid #4ade8030"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:18}}>💨</span>
              <span style={{fontSize:13,fontWeight:700,color:"#4ade80"}}>Gas has settled dramatically</span>
            </div>
            <p style={{...pr,fontSize:12.5}}>From 5.1 events/night in Jan to 2.4 in Mar. Fewer pick-ups for gas means fewer disruptions and better quality sleep for everyone.</p>
            <div style={{marginTop:10,padding:"10px 12px",background:"rgba(74,222,128,0.04)",borderRadius:10}}>
              <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:6}}>GAS EVENTS TREND</div>
              <Spark data={data.map(r=>r.ga)} color="#4ade80" h={36}/>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:9,color:"rgba(255,255,255,0.2)",marginTop:4}}>
                <span>Jan (avg 5.1)</span><span>Mar (avg 2.4)</span>
              </div>
            </div>
          </div>

          {/* Feeding insight + mini exhibit */}
          <div style={{...cd,borderLeft:"3px solid #38bdf830"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:18}}>🍼</span>
              <span style={{fontSize:13,fontWeight:700,color:"#38bdf8"}}>Feeding is efficient and steady</span>
            </div>
            <p style={{...pr,fontSize:12.5}}>Total nightly intake hasn't wavered. The BM/FM mix is shifting toward 50/50. Per-feed volume (98-116ml) shows Leo eats well each session.</p>
            <div style={{marginTop:10,padding:"10px 12px",background:"rgba(56,189,248,0.04)",borderRadius:10}}>
              <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:6}}>NIGHTLY INTAKE TREND</div>
              <Spark data={data.map(r=>r.ml)} color="#38bdf8" h={36}/>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:9,color:"rgba(255,255,255,0.2)",marginTop:4}}>
                <span>Jan (avg 398ml)</span><span>Mar (avg 370ml)</span>
              </div>
            </div>
          </div>

          {/* Digestion insight + mini exhibit */}
          <div style={{...cd,borderLeft:"3px solid #fbbf2430"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:18}}>💩</span>
              <span style={{fontSize:13,fontWeight:700,color:"#fbbf24"}}>Digestion is variable but normal</span>
            </div>
            <p style={{...pr,fontSize:12.5}}>Feb's dramatic dip in nighttime poops was gut maturation. March's return may be formula-related. Barrier cream remains important per nurse notes.</p>
            <div style={{marginTop:10,padding:"10px 12px",background:"rgba(251,191,36,0.04)",borderRadius:10}}>
              <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:6}}>POOP-FREE NIGHT %</div>
              <div style={{display:"flex",gap:8,alignItems:"flex-end"}}>
                {[{l:"Jan",v:ms.jan.pooFree},{l:"Feb",v:ms.feb.pooFree},{l:"Mar",v:ms.mar.pooFree}].map(m=>(
                  <div key={m.l} style={{flex:1,textAlign:"center"}}>
                    <div style={{height:60,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
                      <div style={{width:"100%",maxWidth:32,height:Math.max(4,(m.v/100)*55),background:"#fbbf24",borderRadius:4,opacity:0.7}}/>
                    </div>
                    <div style={{fontSize:12,fontWeight:700,color:"#fbbf24",marginTop:4}}>{m.v}%</div>
                    <div style={{fontSize:9,color:"rgba(255,255,255,0.2)"}}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Motor */}
          <div style={{...cd,borderLeft:"3px solid #f472b630"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:18}}>🧒</span>
              <span style={{fontSize:13,fontWeight:700,color:"#f472b6"}}>Motor milestones emerging</span>
            </div>
            <p style={{...pr,fontSize:12.5}}>Tummy time is now routine. Early scooting/crawling attempts noted Mar 17. Active head repositioning during sleep shows growing strength and independence.</p>
            <div style={{marginTop:10,padding:"10px 12px",background:"rgba(244,114,182,0.04)",borderRadius:10}}>
              <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:8}}>MILESTONE TIMELINE</div>
              {[
                {d:"Jan 11",text:"Cooing, responding to voices, smiling"},
                {d:"Jan 17",text:"Self-settled back to sleep"},
                {d:"Feb 13",text:"First recorded tummy time"},
                {d:"Mar 5+",text:"Regular tummy time sessions"},
                {d:"Mar 17",text:"Started crawling movements"},
              ].map((m,i)=>(
                <div key={i} style={{display:"flex",gap:10,marginBottom:6,alignItems:"flex-start"}}>
                  <div style={{width:6,height:6,borderRadius:3,background:"#f472b6",marginTop:5,flexShrink:0}}/>
                  <div><span style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)"}}>{m.d}</span> <span style={{fontSize:11,color:"rgba(255,255,255,0.35)"}}>{m.text}</span></div>
                </div>
              ))}
            </div>
          </div>

          {/* Routine */}
          <div style={{...cd,borderLeft:"3px solid #a78bfa30"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:18}}>🛁</span>
              <span style={{fontSize:13,fontWeight:700,color:"#a78bfa"}}>Bedtime routine is established</span>
            </div>
            <p style={{...pr,fontSize:12.5}}>Consistent bath and massage before bed became standard by late Feb. This is one of the most evidence-backed strategies for improving infant sleep.</p>
          </div>

          {/* Wellness Score */}
          <div style={cd}>
            <h3 style={ct}>Monthly Wellness Score</h3>
            <p style={{fontSize:11,color:"rgba(255,255,255,0.3)",margin:"-8px 0 14px"}}>Based on sleep (40%), calm nights (30%), gut comfort (30%)</p>
            {MONTHS.map((mk,i)=>{
              const m=[ms.jan,ms.feb,ms.mar][i];
              const ss=Math.min(m.sleep/300,1)*40;
              const ws=Math.max(0,(1-m.wakeups/10))*30;
              const gs=Math.max(0,(1-m.gas/8))*30;
              const total=Math.round(ss+ws+gs);
              return(<div key={mk} style={{marginBottom:16}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                  <span style={{fontSize:13,color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MN[mk]}</span>
                  <span style={{fontSize:20,fontWeight:800,color:total>=65?"#4ade80":total>=50?"#fbbf24":"#fb923c"}}>{total}<span style={{fontSize:12,fontWeight:500,opacity:0.4}}>/100</span></span>
                </div>
                <div style={{display:"flex",gap:2,height:14,borderRadius:7,overflow:"hidden"}}>
                  <div style={{flex:ss,background:"#818cf8",display:"flex",alignItems:"center",justifyContent:"center"}}>{ss>8&&<span style={{fontSize:8,color:"white",fontWeight:700}}>SLEEP</span>}</div>
                  <div style={{flex:ws,background:"#fb923c",display:"flex",alignItems:"center",justifyContent:"center"}}>{ws>8&&<span style={{fontSize:8,color:"white",fontWeight:700}}>CALM</span>}</div>
                  <div style={{flex:gs,background:"#4ade80",display:"flex",alignItems:"center",justifyContent:"center"}}>{gs>8&&<span style={{fontSize:8,color:"white",fontWeight:700}}>GUT</span>}</div>
                </div>
              </div>);
            })}
          </div>
        </div>
      )}

      </div>
    </div>
  );
}

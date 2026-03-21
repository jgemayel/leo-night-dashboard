import { useState, useMemo, useRef } from "react";

const RAW=[{"d":"2026-01-10","ml":435,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":4,"ls":185,"ga":1,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-01-11","ml":310,"fc":3,"fm":1,"bm":4,"po":3,"na":4,"wu":2,"ls":205,"ga":4,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-01-12","ml":410,"fc":4,"fm":1,"bm":3,"po":8,"na":4,"wu":11,"ls":235,"ga":10,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-13","ml":360,"fc":3,"fm":1,"bm":2,"po":4,"na":5,"wu":7,"ls":117,"ga":5,"ba":true,"tt":false,"cr":false,"ss":false,"pa":true,"vd":true},{"d":"2026-01-14","ml":500,"fc":4,"fm":3,"bm":1,"po":3,"na":5,"wu":6,"ls":100,"ga":5,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-15","ml":460,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":5,"ls":140,"ga":7,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-16","ml":480,"fc":4,"fm":1,"bm":3,"po":5,"na":6,"wu":6,"ls":157,"ga":5,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-17","ml":230,"fc":2,"fm":0,"bm":2,"po":4,"na":4,"wu":5,"ls":285,"ga":6,"ba":true,"tt":false,"cr":false,"ss":true,"pa":false,"vd":true},{"d":"2026-01-18","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":4,"wu":6,"ls":210,"ga":2,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-19","ml":420,"fc":4,"fm":2,"bm":2,"po":2,"na":7,"wu":2,"ls":110,"ga":4,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-20","ml":260,"fc":2,"fm":1,"bm":1,"po":2,"na":5,"wu":8,"ls":135,"ga":5,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-21","ml":480,"fc":4,"fm":2,"bm":2,"po":3,"na":4,"wu":3,"ls":160,"ga":2,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-01-22","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":6,"wu":6,"ls":159,"ga":5,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-01-23","ml":470,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":5,"ls":173,"ga":2,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-01-24","ml":360,"fc":3,"fm":0,"bm":3,"po":1,"na":3,"wu":3,"ls":220,"ga":5,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-01-26","ml":425,"fc":4,"fm":2,"bm":2,"po":2,"na":5,"wu":5,"ls":115,"ga":7,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-27","ml":380,"fc":3,"fm":3,"bm":0,"po":3,"na":4,"wu":10,"ls":222,"ga":5,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-28","ml":360,"fc":3,"fm":0,"bm":3,"po":0,"na":5,"wu":4,"ls":205,"ga":7,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-29","ml":440,"fc":5,"fm":1,"bm":4,"po":1,"na":6,"wu":5,"ls":208,"ga":5,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-30","ml":370,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":8,"ls":202,"ga":9,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-01-31","ml":470,"fc":4,"fm":1,"bm":3,"po":0,"na":5,"wu":5,"ls":110,"ga":6,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-01","ml":360,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":165,"ga":6,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-04","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":4,"wu":6,"ls":280,"ga":3,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-05","ml":390,"fc":4,"fm":0,"bm":4,"po":0,"na":2,"wu":4,"ls":208,"ga":4,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-06","ml":430,"fc":4,"fm":3,"bm":1,"po":1,"na":6,"wu":7,"ls":205,"ga":4,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-07","ml":480,"fc":4,"fm":1,"bm":3,"po":0,"na":4,"wu":5,"ls":180,"ga":3,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-09","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":233,"ga":3,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-02-10","ml":262,"fc":3,"fm":2,"bm":1,"po":2,"na":4,"wu":5,"ls":300,"ga":1,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-02-11","ml":290,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":6,"ls":255,"ga":4,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-12","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":7,"ls":205,"ga":2,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-13","ml":500,"fc":5,"fm":4,"bm":1,"po":0,"na":4,"wu":8,"ls":240,"ga":1,"ba":false,"tt":true,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-14","ml":330,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":4,"ls":190,"ga":0,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-15","ml":290,"fc":4,"fm":1,"bm":3,"po":1,"na":5,"wu":7,"ls":232,"ga":1,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-16","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":5,"wu":7,"ls":160,"ga":5,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-17","ml":240,"fc":2,"fm":0,"bm":2,"po":0,"na":4,"wu":7,"ls":130,"ga":4,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-18","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":3,"ls":193,"ga":3,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-02-19","ml":430,"fc":4,"fm":3,"bm":1,"po":0,"na":4,"wu":5,"ls":218,"ga":2,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-20","ml":410,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":8,"ls":162,"ga":2,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-21","ml":350,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":5,"ls":145,"ga":1,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-23","ml":310,"fc":4,"fm":1,"bm":3,"po":0,"na":3,"wu":4,"ls":205,"ga":0,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-02-24","ml":380,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":5,"ls":173,"ga":2,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-25","ml":380,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":4,"ls":217,"ga":4,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-26","ml":510,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":7,"ls":115,"ga":2,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-27","ml":440,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":6,"ls":143,"ga":3,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-02-28","ml":380,"fc":4,"fm":3,"bm":1,"po":1,"na":4,"wu":7,"ls":328,"ga":2,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-03-01","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":5,"wu":7,"ls":190,"ga":1,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-03","ml":390,"fc":5,"fm":4,"bm":1,"po":2,"na":4,"wu":2,"ls":112,"ga":3,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-04","ml":390,"fc":4,"fm":1,"bm":3,"po":4,"na":5,"wu":3,"ls":325,"ga":7,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-05","ml":270,"fc":3,"fm":3,"bm":0,"po":3,"na":5,"wu":3,"ls":205,"ga":1,"ba":false,"tt":true,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-06","ml":310,"fc":5,"fm":1,"bm":4,"po":3,"na":4,"wu":5,"ls":155,"ga":3,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-07","ml":280,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":130,"ga":3,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-09","ml":300,"fc":3,"fm":0,"bm":3,"po":2,"na":4,"wu":7,"ls":157,"ga":3,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-10","ml":390,"fc":4,"fm":3,"bm":1,"po":4,"na":4,"wu":6,"ls":225,"ga":2,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-11","ml":180,"fc":2,"fm":1,"bm":1,"po":3,"na":5,"wu":5,"ls":138,"ga":3,"ba":false,"tt":true,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-12","ml":400,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":3,"ls":133,"ga":0,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-13","ml":450,"fc":5,"fm":1,"bm":4,"po":4,"na":6,"wu":5,"ls":190,"ga":3,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-14","ml":350,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":205,"ga":3,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-03-15","ml":440,"fc":4,"fm":2,"bm":2,"po":5,"na":6,"wu":4,"ls":260,"ga":1,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":false},{"d":"2026-03-16","ml":430,"fc":5,"fm":2,"bm":3,"po":2,"na":3,"wu":3,"ls":353,"ga":2,"ba":true,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-17","ml":450,"fc":4,"fm":2,"bm":2,"po":3,"na":5,"wu":4,"ls":225,"ga":1,"ba":false,"tt":true,"cr":true,"ss":false,"pa":false,"vd":true},{"d":"2026-03-19","ml":410,"fc":4,"fm":3,"bm":1,"po":3,"na":3,"wu":5,"ls":330,"ga":2,"ba":true,"tt":true,"cr":false,"ss":false,"pa":false,"vd":true},{"d":"2026-03-20","ml":485,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":8,"ls":155,"ga":2,"ba":false,"tt":false,"cr":false,"ss":false,"pa":false,"vd":true}];

const MK=["2026-01","2026-02","2026-03"];
const ML={"2026-01":"Jan","2026-02":"Feb","2026-03":"Mar"};
const MF={"2026-01":"January","2026-02":"February","2026-03":"March"};

function av(a){return a.length?Math.round(a.reduce((s,v)=>s+v,0)/a.length*10)/10:0;}
function sm(a){return a.reduce((s,v)=>s+v,0);}
function pc(n,d){return d>0?Math.round(100*n/d):0;}
function fmt(m){const h=Math.floor(m/60),mm=Math.round(m%60);return h>0?h+"h "+mm+"m":mm+"m";}
function byM(d,mk){return d.filter(r=>r.d.startsWith(mk));}

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

function Bars({data,colorFn,max,h=110}){
  return(<div><div style={{display:"flex",alignItems:"flex-end",gap:1,height:h}}>{data.map((v,i)=>{const bh=max>0?Math.max(2,(v.val/max)*(h-16)):2;return(<div key={i} title={v.label+": "+v.val} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",minWidth:0,height:"100%"}}><div style={{width:"100%",maxWidth:14,height:bh,background:typeof colorFn==='function'?colorFn(v.val):colorFn,borderRadius:3,transition:"height 0.4s ease",opacity:0.8}}/></div>);})}</div><div style={{display:"flex",justifyContent:"space-between",marginTop:6}}><span style={lbl}>{data[0]?.label}</span><span style={lbl}>{data[data.length-1]?.label}</span></div></div>);
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

const cd={background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:"18px 18px 16px"};
const ct={fontSize:14,fontWeight:700,color:"rgba(255,255,255,0.65)",margin:"0 0 14px",lineHeight:1.3};
const lbl={fontSize:10,color:"rgba(255,255,255,0.2)",fontWeight:500};
const pr={fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.75,margin:0};
const bkBtn={background:"none",border:"none",color:"rgba(255,255,255,0.3)",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",textAlign:"left",padding:0};

function BenchBox({color,children}){
  return <div style={{marginTop:10,padding:"12px 14px",background:color+"08",borderRadius:10,border:"1px solid "+color+"12",borderLeft:"3px solid "+color+"40"}}>{children}</div>;
}

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
    <div style={{fontFamily:"'DM Sans',-apple-system,'Segoe UI',sans-serif",background:"#0b0b13",color:"rgba(255,255,255,0.85)",minHeight:"100vh",maxWidth:600,margin:"0 auto",WebkitOverflowScrolling:"touch"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

      <div style={{padding:"28px 20px 20px",background:"linear-gradient(180deg, rgba(99,102,241,0.07) 0%, transparent 100%)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:44,height:44,borderRadius:14,background:"linear-gradient(135deg, #6366f1, #818cf8)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{"\u{1F476}"}</div>
          <div style={{minWidth:0}}>
            <h1 style={{fontSize:20,fontWeight:800,margin:0,letterSpacing:"-0.02em",color:"#e0e7ff"}}>Leo's Night Report</h1>
            <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",margin:"3px 0 0",fontWeight:500}}>Jan 10 - Mar 20, 2026 \u00b7 62 nights \u00b7 7 PM - 7 AM</p>
          </div>
        </div>
      </div>

      <div style={{display:"flex",gap:6,padding:"10px 20px 12px",overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
        {tabs.map(t=>(
          <button key={t.id} onClick={()=>goTo(t.id)} style={{padding:"8px 14px",border:"none",borderRadius:10,cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",whiteSpace:"nowrap",transition:"all 0.15s",background:tab===t.id?"rgba(99,102,241,0.15)":"rgba(255,255,255,0.03)",color:tab===t.id?"#a5b4fc":"rgba(255,255,255,0.3)",outline:tab===t.id?"1px solid rgba(99,102,241,0.2)":"1px solid transparent"}}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div style={{padding:"8px 20px 40px"}}>

        {tab==="overview"&&(
          <div style={{display:"flex",flexDirection:"column",gap:16}}>

            <div style={{background:"linear-gradient(135deg, rgba(74,222,128,0.05), rgba(99,102,241,0.04))",border:"1px solid rgba(74,222,128,0.12)",borderRadius:16,padding:"18px 18px 16px"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                <span style={{fontSize:20}}>{"\u2705"}</span>
                <h3 style={{fontSize:15,fontWeight:800,margin:0,color:"#4ade80"}}>Healthy, On Track</h3>
              </div>
              <p style={{...pr,fontSize:13}}>Across 62 nights, Leo is showing steady, age-appropriate progress for a baby in the 1-3 month range. Sleep is consolidating, his gut is maturing, and feeding is stable. No red flags. The trajectory is positive across nearly every metric.</p>
            </div>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {[
                {label:"Avg Longest Sleep",val:fmt(ms.all.sleep),sub:"Best: "+fmt(Math.max(...data.map(r=>r.ls))),color:"#818cf8",icon:"\u{1F319}",to:"sleep"},
                {label:"Avg Wake-ups",val:ms.all.wakeups,sub:"per night",color:"#fb923c",icon:"\u23F0",to:"sleep"},
                {label:"Avg Milk Intake",val:Math.round(ms.all.milk)+"",sub:"ml per night",color:"#38bdf8",icon:"\u{1F37C}",to:"feeding"},
                {label:"Avg Gas Events",val:ms.all.gas,sub:"per night, down 53%",color:"#94a3b8",icon:"\u{1F4A8}",to:"digestion"},
              ].map((c,i)=>(
                <div key={i} onClick={()=>goTo(c.to)} style={{...cd,cursor:"pointer",position:"relative",overflow:"hidden",paddingBottom:12}}>
                  <div style={{position:"absolute",top:10,right:12,fontSize:18,opacity:0.35}}>{c.icon}</div>
                  <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(255,255,255,0.3)",marginBottom:6}}>{c.label}</div>
                  <div style={{fontSize:26,fontWeight:800,color:c.color,lineHeight:1}}>{c.val}</div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.3)",marginTop:4}}>{c.sub}</div>
                  <div style={{fontSize:10,color:c.color,opacity:0.5,marginTop:8,fontWeight:600}}>Tap to explore \u2192</div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize:15,fontWeight:800,color:"rgba(255,255,255,0.7)",margin:"6px 0 0"}}>Pattern Summary</h3>

            <div onClick={()=>goTo("sleep")} style={{...cd,cursor:"pointer"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                <span style={{fontSize:18}}>{"\u{1F319}"}</span>
                <span style={{fontSize:14,fontWeight:700,color:"#818cf8",flex:1}}>Sleep</span>
                <Pill text="Improving" color="#4ade80"/>
                <span style={{fontSize:12,color:"rgba(255,255,255,0.2)"}}>{"\u2192"}</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12}}>
                {[{l:"Jan",v:ms.jan.sleep,c:"#fb923c"},{l:"Feb",v:ms.feb.sleep,c:"#818cf8"},{l:"Mar",v:ms.mar.sleep,c:"#4ade80"}].map(m=>(
                  <div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:"rgba(255,255,255,0.02)",borderRadius:10}}>
                    <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:4}}>{m.l}</div>
                    <div style={{fontSize:18,fontWeight:800,color:m.c}}>{fmt(m.v)}</div>
                    <div style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:2}}>avg stretch</div>
                  </div>
                ))}
              </div>
              <p style={pr}>Longest uninterrupted stretch grew from 2h 54m in Jan to 3h 25m in Feb/Mar. Best night was 5h 53m (Mar 16). Wake-ups decreased from 5.5 to 4.8 per night.</p>
              <BenchBox color="#818cf8"><p style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:0}}><span style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:"0.04em"}}>vs. typical: </span>At 1-3 months, most babies sleep in 2-4 hour stretches and wake 2-4 times. Leo's 3+ hour average with occasional 4-5 hour blocks is right on track. Consolidated 5-6 hour stretches usually emerge at 3-4 months, and Leo is already showing flashes of that.</p></BenchBox>
            </div>

            <div onClick={()=>goTo("feeding")} style={{...cd,cursor:"pointer"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                <span style={{fontSize:18}}>{"\u{1F37C}"}</span>
                <span style={{fontSize:14,fontWeight:700,color:"#38bdf8",flex:1}}>Feeding</span>
                <Pill text="Stable" color="rgba(255,255,255,0.45)" bg="rgba(255,255,255,0.06)"/>
                <span style={{fontSize:12,color:"rgba(255,255,255,0.2)"}}>{"\u2192"}</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12}}>
                {[
                  {l:"Jan",ml:Math.round(ms.jan.milk),f:ms.jan.feeds,pf:Math.round(ms.jan.perFeed),bmp:ms.jan.bmPct,fmp:ms.jan.fmPct},
                  {l:"Feb",ml:Math.round(ms.feb.milk),f:ms.feb.feeds,pf:Math.round(ms.feb.perFeed),bmp:ms.feb.bmPct,fmp:ms.feb.fmPct},
                  {l:"Mar",ml:Math.round(ms.mar.milk),f:ms.mar.feeds,pf:Math.round(ms.mar.perFeed),bmp:ms.mar.bmPct,fmp:ms.mar.fmPct},
                ].map(m=>(
                  <div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:"rgba(255,255,255,0.02)",borderRadius:10}}>
                    <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:4}}>{m.l}</div>
                    <div style={{fontSize:18,fontWeight:800,color:"#38bdf8"}}>{m.ml}<span style={{fontSize:11,fontWeight:500,opacity:0.5}}> ml</span></div>
                    <div style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:3,lineHeight:1.5}}>{m.f} feeds/n<br/>{m.pf} ml/feed<br/>BM {m.bmp}% \u00b7 FM {m.fmp}%</div>
                  </div>
                ))}
              </div>
              <p style={pr}>Nightly intake holds at 370-400ml across all three months. Volume per feed is consistent (98-116ml). Formula share has grown from 32% in Jan to 49% in Mar. Leo feeds efficiently and rarely refuses bottles.</p>
              <BenchBox color="#38bdf8"><p style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:0}}><span style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:"0.04em"}}>vs. typical: </span>At 1-3 months, 120-180ml per feed every 2-4 hours is normal. Leo's nighttime total of ~370-400ml plus daytime feeds likely puts his daily intake in the expected 600-900ml range. The shift toward more formula is very common and not a concern.</p></BenchBox>
            </div>

            <div onClick={()=>goTo("digestion")} style={{...cd,cursor:"pointer"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                <span style={{fontSize:18}}>{"\u{1F4A9}"}</span>
                <span style={{fontSize:14,fontWeight:700,color:"#fbbf24",flex:1}}>Digestion</span>
                <Pill text="Maturing" color="#4ade80"/>
                <span style={{fontSize:12,color:"rgba(255,255,255,0.2)"}}>{"\u2192"}</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12}}>
                {[
                  {l:"Jan",po:ms.jan.poo,pf:ms.jan.pooFree,ga:ms.jan.gas},
                  {l:"Feb",po:ms.feb.poo,pf:ms.feb.pooFree,ga:ms.feb.gas},
                  {l:"Mar",po:ms.mar.poo,pf:ms.mar.pooFree,ga:ms.mar.gas},
                ].map(m=>(
                  <div key={m.l} style={{textAlign:"center",padding:"10px 6px",background:"rgba(255,255,255,0.02)",borderRadius:10}}>
                    <div style={{fontSize:10,fontWeight:600,color:"rgba(255,255,255,0.3)",marginBottom:4}}>{m.l}</div>
                    <div style={{fontSize:16,fontWeight:800,color:"#fbbf24"}}>{m.po} <span style={{fontSize:10,fontWeight:500,opacity:0.5}}>{"\u{1F4A9}"}/n</span></div>
                    <div style={{fontSize:16,fontWeight:800,color:"#94a3b8",marginTop:2}}>{m.ga} <span style={{fontSize:10,fontWeight:500,opacity:0.5}}>{"\u{1F4A8}"}/n</span></div>
                    <div style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:3}}>{m.pf}% poo-free</div>
                  </div>
                ))}
              </div>
              <p style={pr}>Gassiness dropped 53% (5.1 to 2.4 events/night). Poops dipped dramatically in Feb (71% poop-free nights) but returned in Mar (2.9/night), likely linked to increased formula. The nurse notes persistent bottom redness, managed with barrier cream.</p>
              <BenchBox color="#fbbf24"><p style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:0}}><span style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:"0.04em"}}>vs. typical: </span>Gas/colic peaks at 2-6 weeks and resolves by 3-4 months. Leo's 53% drop is exactly expected. Newborns commonly poop 3-5x/day, dropping around 6-8 weeks. Mar's uptick with more formula is normal since formula digests differently.</p></BenchBox>
            </div>

            <div style={cd}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                <span style={{fontSize:18}}>{"\u{1F9D2}"}</span>
                <span style={{fontSize:14,fontWeight:700,color:"#f472b6",flex:1}}>Development</span>
                <Pill text="On Track" color="#4ade80"/>
              </div>
              <p style={pr}>Tummy time introduced mid-Feb, regular by March. On Mar 17, the nurse noted Leo "started to crawl." He actively changes his own head position during sleep (noted from late Jan). Cooing, smiling, and responding to voices observed. One self-settling event noted Jan 17. Consistent bedtime routine (bath/massage) established by late Feb.</p>
              <BenchBox color="#f472b6"><p style={{fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:0}}><span style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:"0.04em"}}>vs. typical: </span>Head control around 2-3 months is expected. Social smiling emerges at 6-8 weeks. The "crawling" is likely early scooting during tummy time, a positive motor sign. True crawling begins at 6-10 months. Self-settling is rare at this age but very encouraging.</p></BenchBox>
            </div>

            <div style={cd}>
              <h3 style={ct}>Month-over-Month Averages</h3>
              <div style={{display:"grid",gridTemplateColumns:"1fr 60px 60px 60px",gap:8,paddingBottom:4,borderBottom:"1px solid rgba(255,255,255,0.06)",marginBottom:4}}>
                <div/>{MK.map(mk=><div key={mk} style={{textAlign:"center",fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.35)"}}>{ML[mk]}</div>)}
              </div>
              <MRow icon={"\u{1F319}"} label="Longest Sleep" jan={fmt(ms.jan.sleep)} feb={fmt(ms.feb.sleep)} mar={fmt(ms.mar.sleep)} color="#818cf8"/>
              <MRow icon={"\u23F0"} label="Wake-ups" jan={ms.jan.wakeups} feb={ms.feb.wakeups} mar={ms.mar.wakeups} color="#fb923c"/>
              <MRow icon={"\u{1F37C}"} label="Milk Intake" jan={Math.round(ms.jan.milk)+""} feb={Math.round(ms.feb.milk)+""} mar={Math.round(ms.mar.milk)+""} unit="ml" color="#38bdf8"/>
              <MRow icon={"\u{1F95B}"} label="Feeds" jan={ms.jan.feeds} feb={ms.feb.feeds} mar={ms.mar.feeds} color="#a78bfa"/>
              <MRow icon={"\u{1F4CF}"} label="ml / Feed" jan={Math.round(ms.jan.perFeed)} feb={Math.round(ms.feb.perFeed)} mar={Math.round(ms.mar.perFeed)} color="#38bdf8"/>
              <MRow icon={"\u{1F9EA}"} label="Formula %" jan={ms.jan.fmPct+"%"} feb={ms.feb.fmPct+"%"} mar={ms.mar.fmPct+"%"} color="#fb923c"/>
              <MRow icon={"\u{1F4A9}"} label="Poops" jan={ms.jan.poo} feb={ms.feb.poo} mar={ms.mar.poo} color="#fbbf24"/>
              <MRow icon={"\u{1F4A8}"} label="Gas Events" jan={ms.jan.gas} feb={ms.feb.gas} mar={ms.mar.gas} color="#94a3b8"/>
              <MRow icon={"\u{1F476}"} label="Nappy Changes" jan={ms.jan.nappy} feb={ms.feb.nappy} mar={ms.mar.nappy} color="#f472b6"/>
            </div>
          </div>
        )}

        {tab==="sleep"&&(
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <button onClick={()=>goTo("overview")} style={bkBtn}>{"\u2190"} Back to Overview</button>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
              {[{l:"Jan",v:ms.jan.sleep,b:ms.jan.bestSleep,w:ms.jan.wakeups,c:"#fb923c",mk:"2026-01"},{l:"Feb",v:ms.feb.sleep,b:ms.feb.bestSleep,w:ms.feb.wakeups,c:"#818cf8",mk:"2026-02"},{l:"Mar",v:ms.mar.sleep,b:ms.mar.bestSleep,w:ms.mar.wakeups,c:"#4ade80",mk:"2026-03"}].map(m=>(
                <div key={m.l} style={{...cd,textAlign:"center",padding:"14px 10px"}}>
                  <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:"0.05em"}}>{m.l}</div>
                  <div style={{fontSize:22,fontWeight:800,color:m.c,margin:"6px 0 2px"}}>{fmt(m.v)}</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.25)"}}>avg stretch</div>
                  <Spark data={byM(data,m.mk).map(r=>r.ls)} color={m.c} h={32}/>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:6}}>Best: <strong style={{color:m.c}}>{fmt(m.b)}</strong></div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>Wake-ups: <strong>{m.w}</strong>/n</div>
                </div>
              ))}
            </div>
            <div style={cd}>
              <h3 style={ct}>Longest Sleep Stretch per Night</h3>
              <Bars data={data.map(r=>({val:r.ls,label:r.d.slice(5)}))} colorFn={v=>v>=240?"#4ade80":v>=180?"#818cf8":v>=120?"#fbbf24":"#f87171"} max={400}/>
              <div style={{display:"flex",gap:12,marginTop:10,flexWrap:"wrap"}}>
                {[["#4ade80","4+ hrs"],["#818cf8","3-4 hrs"],["#fbbf24","2-3 hrs"],["#f87171","< 2 hrs"]].map(([c,l])=>(<div key={l} style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:8,height:8,borderRadius:2,background:c}}/><span style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>{l}</span></div>))}
              </div>
            </div>
            <div style={cd}>
              <h3 style={ct}>Wake-ups per Night</h3>
              <Bars data={data.map(r=>({val:r.wu,label:r.d.slice(5)}))} colorFn={v=>v<=3?"#4ade80":v<=5?"#fbbf24":"#f87171"} max={12} h={90}/>
            </div>
            <div style={cd}>
              <h3 style={ct}>Nights with 4+ Hour Stretches</h3>
              {MK.map(mk=>{const md=byM(data,mk);const n=md.filter(r=>r.ls>=240).length;const p=pc(n,md.length);return(<div key={mk} style={{marginBottom:12}}><div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}><span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[mk]}</span><span style={{color:"#818cf8",fontWeight:700}}>{n}/{md.length} nights ({p}%)</span></div><MP value={p} max={100} color="#818cf8"/></div>);})}
            </div>
          </div>
        )}

        {tab==="feeding"&&(
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <button onClick={()=>goTo("overview")} style={bkBtn}>{"\u2190"} Back to Overview</button>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
              {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
                <div key={mk} style={{...cd,textAlign:"center",padding:"14px 10px"}}>
                  <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:"0.05em"}}>{ML[mk]}</div>
                  <div style={{fontSize:22,fontWeight:800,color:"#38bdf8",margin:"6px 0 2px"}}>{Math.round(m.milk)}<span style={{fontSize:11,opacity:0.5}}>ml</span></div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.25)"}}>avg/night</div>
                  <div style={{margin:"8px 0 4px",borderTop:"1px solid rgba(255,255,255,0.04)",paddingTop:8}}>
                    <div style={{fontSize:11,color:"rgba(255,255,255,0.35)"}}><strong style={{color:"#a78bfa"}}>{m.feeds}</strong> feeds/n</div>
                    <div style={{fontSize:11,color:"rgba(255,255,255,0.35)"}}><strong style={{color:"#38bdf8"}}>{Math.round(m.perFeed)}</strong> ml/feed</div>
                    <div style={{fontSize:11,color:"rgba(255,255,255,0.35)",marginTop:2}}>BM <strong>{m.bmPct}%</strong> \u00b7 FM <strong>{m.fmPct}%</strong></div>
                  </div>
                </div>
              );})}
            </div>
            <div style={cd}><h3 style={ct}>Nightly Milk Volume</h3><Bars data={data.map(r=>({val:r.ml,label:r.d.slice(5)}))} colorFn="#38bdf8" max={550}/></div>
            <div style={cd}>
              <h3 style={ct}>Breast Milk vs Formula</h3>
              <div style={{display:"flex",gap:12,alignItems:"flex-end"}}>
                {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
                  <div key={mk} style={{flex:1,textAlign:"center"}}>
                    <div style={{height:120,display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:"1px solid rgba(255,255,255,0.06)"}}>
                      <div style={{flex:m.bmPct,background:"linear-gradient(180deg, #818cf8, #6366f1)",display:"flex",alignItems:"center",justifyContent:"center"}}>{m.bmPct>12&&<span style={{fontSize:12,fontWeight:700,color:"white"}}>{m.bmPct}%</span>}</div>
                      <div style={{flex:m.fmPct,background:"linear-gradient(180deg, #fb923c, #ea580c)",display:"flex",alignItems:"center",justifyContent:"center"}}>{m.fmPct>12&&<span style={{fontSize:12,fontWeight:700,color:"white"}}>{m.fmPct}%</span>}</div>
                    </div>
                    <div style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:8,fontWeight:600}}>{ML[mk]}</div>
                  </div>
                );})}
                <div style={{display:"flex",flexDirection:"column",gap:6,paddingBottom:26,flexShrink:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:10,height:10,borderRadius:3,background:"#818cf8"}}/><span style={{fontSize:11,color:"rgba(255,255,255,0.4)"}}>BM</span></div>
                  <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:10,height:10,borderRadius:3,background:"#fb923c"}}/><span style={{fontSize:11,color:"rgba(255,255,255,0.4)"}}>FM</span></div>
                </div>
              </div>
            </div>
            <div style={cd}>
              <h3 style={ct}>Volume per Feed</h3>
              {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(<div key={mk} style={{marginBottom:12}}><div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}><span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[mk]}</span><span style={{color:"#38bdf8",fontWeight:700}}>{Math.round(m.perFeed)} ml/feed</span></div><MP value={m.perFeed} max={140} color="#38bdf8"/></div>);})}
            </div>
          </div>
        )}

        {tab==="digestion"&&(
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <button onClick={()=>goTo("overview")} style={bkBtn}>{"\u2190"} Back to Overview</button>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
              {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(
                <div key={mk} style={{...cd,textAlign:"center",padding:"14px 10px"}}>
                  <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:"0.05em"}}>{ML[mk]}</div>
                  <div style={{fontSize:18,fontWeight:800,color:"#fbbf24",margin:"6px 0 0"}}>{m.poo} <span style={{fontSize:10,opacity:0.5}}>{"\u{1F4A9}"}</span></div>
                  <div style={{fontSize:18,fontWeight:800,color:"#94a3b8"}}>{m.gas} <span style={{fontSize:10,opacity:0.5}}>{"\u{1F4A8}"}</span></div>
                  <div style={{fontSize:18,fontWeight:800,color:"#f472b6"}}>{m.nappy} <span style={{fontSize:10,opacity:0.5}}>{"\u{1FA72}"}</span></div>
                  <div style={{fontSize:9,color:"rgba(255,255,255,0.2)",marginTop:4}}>per night avg</div>
                </div>
              );})}
            </div>
            <div style={cd}><h3 style={ct}>Poops per Night</h3><Bars data={data.map(r=>({val:r.po,label:r.d.slice(5)}))} colorFn="#fbbf24" max={9} h={90}/></div>
            <div style={cd}>
              <h3 style={ct}>Gas Events per Night</h3>
              <Bars data={data.map(r=>({val:r.ga,label:r.d.slice(5)}))} colorFn={v=>v>=7?"#f87171":v>=4?"#fbbf24":"#4ade80"} max={11} h={90}/>
              <p style={{...pr,fontSize:12,marginTop:10}}>Gas dropped 53% from Jan (5.1/night) to Mar (2.4/night). This is the single biggest comfort improvement and directly correlates with better sleep.</p>
            </div>
            <div style={cd}>
              <h3 style={ct}>Poop-Free Nights</h3>
              {MK.map((mk,i)=>{const m=[ms.jan,ms.feb,ms.mar][i];return(<div key={mk} style={{marginBottom:12}}><div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}><span style={{color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[mk]}</span><span style={{color:"#fbbf24",fontWeight:700}}>{m.pooFree}%</span></div><MP value={m.pooFree} max={100} color="#fbbf24"/></div>);})}
              <p style={{...pr,fontSize:12,marginTop:8}}>Feb was exceptionally calm (71% poop-free). Mar returned to frequent nighttime poops, likely from the formula ratio change. Worth monitoring, but not abnormal.</p>
            </div>
          </div>
        )}

        {tab==="insights"&&(
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <button onClick={()=>goTo("overview")} style={bkBtn}>{"\u2190"} Back to Overview</button>
            <h3 style={{fontSize:16,fontWeight:800,color:"#e0e7ff",margin:0}}>Key Findings</h3>
            {[
              {icon:"\u{1F319}",title:"Sleep is consolidating",color:"#818cf8",text:"Longest stretch grew 18% from Jan to Mar. 4+ hour stretches went from occasional to more regular. The best night (5h 53m) shows what Leo is capable of. Wake-ups are gradually declining."},
              {icon:"\u{1F4A8}",title:"Gas has settled dramatically",color:"#4ade80",text:"The single biggest win. From 5.1 events per night in Jan to 2.4 in Mar. Fewer pick-ups for gas means fewer disruptions and better quality sleep for everyone."},
              {icon:"\u{1F37C}",title:"Feeding is efficient and steady",color:"#38bdf8",text:"Total nightly intake hasn't wavered. The BM/FM mix is shifting toward 50/50, which is common. Per-feed volume (98-116ml) shows Leo eats well each session rather than snacking."},
              {icon:"\u{1F4A9}",title:"Digestion is variable but normal",color:"#fbbf24",text:"Feb's dramatic dip in nighttime poops was a sign of gut maturation. March's return to more poops may be formula-related. The nurse consistently flags bottom redness, so barrier cream remains important."},
              {icon:"\u{1F9D2}",title:"Motor milestones emerging",color:"#f472b6",text:"Tummy time is now routine. Early scooting/crawling attempts noted Mar 17. Active head repositioning during sleep shows growing strength and independence. These are all age-appropriate milestones."},
              {icon:"\u{1F6C1}",title:"Bedtime routine is established",color:"#a78bfa",text:"A consistent bath and massage before bed became standard by late February. This is one of the most evidence-backed strategies for improving infant sleep, and it's clearly in place."},
            ].map((ins,i)=>(
              <div key={i} style={{...cd,borderLeft:"3px solid "+ins.color+"30"}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                  <span style={{fontSize:18}}>{ins.icon}</span>
                  <span style={{fontSize:13,fontWeight:700,color:ins.color}}>{ins.title}</span>
                </div>
                <p style={{...pr,fontSize:12.5}}>{ins.text}</p>
              </div>
            ))}
            <div style={cd}>
              <h3 style={ct}>Monthly Wellness Score</h3>
              <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",margin:"0 0 14px"}}>Based on sleep duration (40%), fewer wake-ups (30%), reduced gas (30%)</p>
              {MK.map((mk,i)=>{
                const m=[ms.jan,ms.feb,ms.mar][i];
                const ss=Math.min(m.sleep/300,1)*40;
                const ws=Math.max(0,(1-m.wakeups/10))*30;
                const gs=Math.max(0,(1-m.gas/8))*30;
                const total=Math.round(ss+ws+gs);
                return(<div key={mk} style={{marginBottom:16}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                    <span style={{fontSize:13,color:"rgba(255,255,255,0.5)",fontWeight:600}}>{MF[mk]}</span>
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

import { useState, useMemo } from "react";

const RAW = [{"d":"2026-01-10","ml":435,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":4,"ls":185,"ga":1},{"d":"2026-01-11","ml":310,"fc":3,"fm":1,"bm":4,"po":3,"na":4,"wu":2,"ls":205,"ga":4},{"d":"2026-01-12","ml":410,"fc":4,"fm":1,"bm":3,"po":8,"na":4,"wu":11,"ls":235,"ga":10},{"d":"2026-01-13","ml":360,"fc":3,"fm":1,"bm":2,"po":4,"na":5,"wu":7,"ls":117,"ga":5},{"d":"2026-01-14","ml":500,"fc":4,"fm":3,"bm":1,"po":3,"na":5,"wu":6,"ls":100,"ga":5},{"d":"2026-01-15","ml":460,"fc":4,"fm":0,"bm":4,"po":5,"na":6,"wu":5,"ls":140,"ga":7},{"d":"2026-01-16","ml":480,"fc":4,"fm":1,"bm":3,"po":5,"na":6,"wu":6,"ls":157,"ga":5},{"d":"2026-01-17","ml":230,"fc":2,"fm":0,"bm":2,"po":4,"na":4,"wu":5,"ls":285,"ga":6},{"d":"2026-01-18","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":4,"wu":6,"ls":210,"ga":2},{"d":"2026-01-19","ml":420,"fc":4,"fm":2,"bm":2,"po":2,"na":7,"wu":2,"ls":110,"ga":4},{"d":"2026-01-20","ml":260,"fc":2,"fm":1,"bm":1,"po":2,"na":5,"wu":8,"ls":135,"ga":5},{"d":"2026-01-21","ml":480,"fc":4,"fm":2,"bm":2,"po":3,"na":4,"wu":3,"ls":160,"ga":2},{"d":"2026-01-22","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":6,"wu":6,"ls":159,"ga":5},{"d":"2026-01-23","ml":470,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":5,"ls":173,"ga":2},{"d":"2026-01-24","ml":360,"fc":3,"fm":0,"bm":3,"po":1,"na":3,"wu":3,"ls":220,"ga":5},{"d":"2026-01-26","ml":425,"fc":4,"fm":2,"bm":2,"po":2,"na":5,"wu":5,"ls":115,"ga":7},{"d":"2026-01-27","ml":380,"fc":3,"fm":3,"bm":0,"po":3,"na":4,"wu":10,"ls":222,"ga":5},{"d":"2026-01-28","ml":360,"fc":3,"fm":0,"bm":3,"po":0,"na":5,"wu":4,"ls":205,"ga":7},{"d":"2026-01-29","ml":440,"fc":5,"fm":1,"bm":4,"po":1,"na":6,"wu":5,"ls":208,"ga":5},{"d":"2026-01-30","ml":370,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":8,"ls":202,"ga":9},{"d":"2026-01-31","ml":470,"fc":4,"fm":1,"bm":3,"po":0,"na":5,"wu":5,"ls":110,"ga":6},{"d":"2026-02-01","ml":360,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":165,"ga":6},{"d":"2026-02-04","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":4,"wu":6,"ls":280,"ga":3},{"d":"2026-02-05","ml":390,"fc":4,"fm":0,"bm":4,"po":0,"na":2,"wu":4,"ls":208,"ga":4},{"d":"2026-02-06","ml":430,"fc":4,"fm":3,"bm":1,"po":1,"na":6,"wu":7,"ls":205,"ga":4},{"d":"2026-02-07","ml":480,"fc":4,"fm":1,"bm":3,"po":0,"na":4,"wu":5,"ls":180,"ga":3},{"d":"2026-02-09","ml":380,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":5,"ls":233,"ga":3},{"d":"2026-02-10","ml":262,"fc":3,"fm":2,"bm":1,"po":2,"na":4,"wu":5,"ls":300,"ga":1},{"d":"2026-02-11","ml":290,"fc":3,"fm":1,"bm":2,"po":0,"na":4,"wu":6,"ls":255,"ga":4},{"d":"2026-02-12","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":7,"ls":205,"ga":2},{"d":"2026-02-13","ml":500,"fc":5,"fm":4,"bm":1,"po":0,"na":4,"wu":8,"ls":240,"ga":1},{"d":"2026-02-14","ml":330,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":4,"ls":190,"ga":0},{"d":"2026-02-15","ml":290,"fc":4,"fm":1,"bm":3,"po":1,"na":5,"wu":7,"ls":232,"ga":1},{"d":"2026-02-16","ml":420,"fc":4,"fm":2,"bm":2,"po":0,"na":5,"wu":7,"ls":160,"ga":5},{"d":"2026-02-17","ml":240,"fc":2,"fm":0,"bm":2,"po":0,"na":4,"wu":7,"ls":130,"ga":4},{"d":"2026-02-18","ml":470,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":3,"ls":193,"ga":3},{"d":"2026-02-19","ml":430,"fc":4,"fm":3,"bm":1,"po":0,"na":4,"wu":5,"ls":218,"ga":2},{"d":"2026-02-20","ml":410,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":8,"ls":162,"ga":2},{"d":"2026-02-21","ml":350,"fc":3,"fm":1,"bm":2,"po":0,"na":3,"wu":5,"ls":145,"ga":1},{"d":"2026-02-23","ml":310,"fc":4,"fm":1,"bm":3,"po":0,"na":3,"wu":4,"ls":205,"ga":0},{"d":"2026-02-24","ml":380,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":5,"ls":173,"ga":2},{"d":"2026-02-25","ml":380,"fc":4,"fm":0,"bm":4,"po":0,"na":3,"wu":4,"ls":217,"ga":4},{"d":"2026-02-26","ml":510,"fc":4,"fm":1,"bm":3,"po":1,"na":3,"wu":7,"ls":115,"ga":2},{"d":"2026-02-27","ml":440,"fc":4,"fm":2,"bm":2,"po":0,"na":3,"wu":6,"ls":143,"ga":3},{"d":"2026-02-28","ml":380,"fc":4,"fm":3,"bm":1,"po":1,"na":4,"wu":7,"ls":328,"ga":2},{"d":"2026-03-01","ml":360,"fc":3,"fm":1,"bm":2,"po":1,"na":5,"wu":7,"ls":190,"ga":1},{"d":"2026-03-03","ml":390,"fc":5,"fm":4,"bm":1,"po":2,"na":4,"wu":2,"ls":112,"ga":3},{"d":"2026-03-04","ml":390,"fc":4,"fm":1,"bm":3,"po":4,"na":5,"wu":3,"ls":325,"ga":7},{"d":"2026-03-05","ml":270,"fc":3,"fm":3,"bm":0,"po":3,"na":5,"wu":3,"ls":205,"ga":1},{"d":"2026-03-06","ml":310,"fc":5,"fm":1,"bm":4,"po":3,"na":4,"wu":5,"ls":155,"ga":3},{"d":"2026-03-07","ml":280,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":130,"ga":3},{"d":"2026-03-09","ml":300,"fc":3,"fm":0,"bm":3,"po":2,"na":4,"wu":7,"ls":157,"ga":3},{"d":"2026-03-10","ml":390,"fc":4,"fm":3,"bm":1,"po":4,"na":4,"wu":6,"ls":225,"ga":2},{"d":"2026-03-11","ml":180,"fc":2,"fm":1,"bm":1,"po":3,"na":5,"wu":5,"ls":138,"ga":3},{"d":"2026-03-12","ml":400,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":3,"ls":133,"ga":0},{"d":"2026-03-13","ml":450,"fc":5,"fm":1,"bm":4,"po":4,"na":6,"wu":5,"ls":190,"ga":3},{"d":"2026-03-14","ml":350,"fc":3,"fm":2,"bm":1,"po":3,"na":4,"wu":6,"ls":205,"ga":3},{"d":"2026-03-15","ml":440,"fc":4,"fm":2,"bm":2,"po":5,"na":6,"wu":4,"ls":260,"ga":1},{"d":"2026-03-16","ml":430,"fc":5,"fm":2,"bm":3,"po":2,"na":3,"wu":3,"ls":353,"ga":2},{"d":"2026-03-17","ml":450,"fc":4,"fm":2,"bm":2,"po":3,"na":5,"wu":4,"ls":225,"ga":1},{"d":"2026-03-19","ml":410,"fc":4,"fm":3,"bm":1,"po":3,"na":3,"wu":5,"ls":330,"ga":2},{"d":"2026-03-20","ml":485,"fc":4,"fm":2,"bm":2,"po":2,"na":4,"wu":8,"ls":155,"ga":2}];

const MONTHS = { "2026-01": "January", "2026-02": "February", "2026-03": "March" };

function avg(arr) { return arr.length ? Math.round(arr.reduce((a,b) => a+b, 0) / arr.length * 10) / 10 : 0; }
function sum(arr) { return arr.reduce((a,b) => a+b, 0); }

function getMonthData(data, monthKey) {
  return data.filter(r => r.d.startsWith(monthKey));
}

function MiniBar({ value, max, color, height = 20 }) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  return (
    <div style={{ width: "100%", height, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 4, transition: "width 0.6s ease" }} />
    </div>
  );
}

function SparkLine({ data, color, height = 50, showDots = false }) {
  if (!data.length) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 100;
  const pad = 4;
  const points = data.map((v, i) => {
    const x = data.length > 1 ? (i / (data.length - 1)) * (w - pad * 2) + pad : w / 2;
    const y = height - pad - ((v - min) / range) * (height - pad * 2);
    return `${x},${y}`;
  });
  const areaPoints = [...points, `${data.length > 1 ? (w - pad) : w/2},${height}`, `${pad},${height}`];
  
  return (
    <svg viewBox={`0 0 ${w} ${height}`} style={{ width: "100%", height }} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints.join(' ')} fill={`url(#grad-${color.replace('#','')})`} />
      <polyline points={points.join(' ')} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {showDots && data.map((v, i) => {
        const x = data.length > 1 ? (i / (data.length - 1)) * (w - pad * 2) + pad : w / 2;
        const y = height - pad - ((v - min) / range) * (height - pad * 2);
        return <circle key={i} cx={x} cy={y} r="1.5" fill={color} />;
      })}
    </svg>
  );
}

function StatCard({ label, value, unit, subtext, color, sparkData, icon }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 16,
      padding: "20px 20px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 14, right: 16, fontSize: 20, opacity: 0.5 }}>{icon}</div>
      <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)" }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontSize: 32, fontWeight: 700, color, lineHeight: 1 }}>{value}</span>
        {unit && <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>{unit}</span>}
      </div>
      {subtext && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: -2 }}>{subtext}</div>}
      {sparkData && <div style={{ marginTop: 4 }}><SparkLine data={sparkData} color={color} height={36} /></div>}
    </div>
  );
}

function TrendArrow({ current, previous }) {
  if (!previous || previous === 0) return null;
  const pct = Math.round(((current - previous) / previous) * 100);
  if (Math.abs(pct) < 3) return <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>~same</span>;
  const up = pct > 0;
  return (
    <span style={{ fontSize: 11, fontWeight: 600, color: up ? "#6ee7b7" : "#fca5a5" }}>
      {up ? "▲" : "▼"} {Math.abs(pct)}%
    </span>
  );
}

function MonthComparisonTable({ data }) {
  const months = ["2026-01", "2026-02", "2026-03"];
  const metrics = [
    { key: "ls", label: "Longest Sleep Stretch", unit: "min", icon: "🌙", good: "up", color: "#818cf8" },
    { key: "wu", label: "Wake-ups per Night", unit: "", icon: "⏰", good: "down", color: "#fb923c" },
    { key: "ml", label: "Milk Intake", unit: "ml", icon: "🍼", good: "stable", color: "#38bdf8" },
    { key: "fc", label: "Feeds per Night", unit: "", icon: "🥛", good: "stable", color: "#a78bfa" },
    { key: "po", label: "Poops per Night", unit: "", icon: "💩", good: "down", color: "#fbbf24" },
    { key: "ga", label: "Gassy Events", unit: "", icon: "💨", good: "down", color: "#94a3b8" },
    { key: "na", label: "Nappy Changes", unit: "", icon: "👶", good: "down", color: "#f472b6" },
  ];

  const monthAvgs = {};
  months.forEach(m => {
    const md = data.filter(r => r.d.startsWith(m));
    monthAvgs[m] = {};
    metrics.forEach(met => {
      monthAvgs[m][met.key] = avg(md.map(r => r[met.key]));
    });
  });

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "10px 12px", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Metric</th>
            {months.map(m => (
              <th key={m} style={{ textAlign: "center", padding: "10px 12px", color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{MONTHS[m]}</th>
            ))}
            <th style={{ textAlign: "center", padding: "10px 12px", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: 11, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Trend</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map(met => {
            const janVal = monthAvgs["2026-01"][met.key];
            const marVal = monthAvgs["2026-03"][met.key];
            const change = janVal > 0 ? ((marVal - janVal) / janVal) * 100 : 0;
            const isGood = (met.good === "up" && change > 5) || (met.good === "down" && change < -5) || (met.good === "stable" && Math.abs(change) < 10);
            const isBad = (met.good === "up" && change < -5) || (met.good === "down" && change > 5);
            
            return (
              <tr key={met.key} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <td style={{ padding: "12px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span>{met.icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{met.label}</span>
                </td>
                {months.map(m => (
                  <td key={m} style={{ textAlign: "center", padding: "12px", color: met.color, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
                    {monthAvgs[m][met.key]}{met.unit && <span style={{ fontSize: 10, opacity: 0.6 }}> {met.unit}</span>}
                  </td>
                ))}
                <td style={{ textAlign: "center", padding: "12px" }}>
                  <span style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 600,
                    background: isGood ? "rgba(74,222,128,0.12)" : isBad ? "rgba(248,113,113,0.12)" : "rgba(255,255,255,0.06)",
                    color: isGood ? "#4ade80" : isBad ? "#f87171" : "rgba(255,255,255,0.45)",
                  }}>
                    {change > 3 ? "▲" : change < -3 ? "▼" : "—"} {Math.abs(Math.round(change))}%
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function BarChart({ data, color, max, height = 140, label }) {
  const barW = Math.min(12, Math.max(4, 600 / data.length - 2));
  return (
    <div>
      {label && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height, padding: "0 2px" }}>
        {data.map((v, i) => {
          const h = max > 0 ? (v.val / max) * (height - 20) : 0;
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, minWidth: 0 }} title={`${v.label}: ${v.val}`}>
              <div style={{
                width: "100%",
                maxWidth: barW,
                height: Math.max(2, h),
                background: typeof color === 'function' ? color(v, i) : color,
                borderRadius: 3,
                transition: "height 0.5s ease",
                opacity: 0.85,
              }} />
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.2)" }}>{data[0]?.label}</span>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.2)" }}>{data[data.length-1]?.label}</span>
      </div>
    </div>
  );
}

function FeedingMixChart({ data }) {
  const months = ["2026-01", "2026-02", "2026-03"];
  const monthData = months.map(m => {
    const md = data.filter(r => r.d.startsWith(m));
    const totalFm = sum(md.map(r => r.fm));
    const totalBm = sum(md.map(r => r.bm));
    const total = totalFm + totalBm;
    return { month: MONTHS[m], fm: total > 0 ? Math.round((totalFm / total) * 100) : 0, bm: total > 0 ? Math.round((totalBm / total) * 100) : 0 };
  });

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
      {monthData.map((m, i) => (
        <div key={i} style={{ flex: 1, textAlign: "center" }}>
          <div style={{ height: 120, display: "flex", flexDirection: "column", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ flex: m.bm, background: "linear-gradient(180deg, #818cf8, #6366f1)", transition: "flex 0.5s", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {m.bm > 15 && <span style={{ fontSize: 11, fontWeight: 600, color: "white" }}>{m.bm}%</span>}
            </div>
            <div style={{ flex: m.fm, background: "linear-gradient(180deg, #fb923c, #ea580c)", transition: "flex 0.5s", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {m.fm > 15 && <span style={{ fontSize: 11, fontWeight: 600, color: "white" }}>{m.fm}%</span>}
            </div>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 8, fontWeight: 600 }}>{m.month}</div>
        </div>
      ))}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: "#818cf8" }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>Breast Milk</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: "#fb923c" }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>Formula</span>
        </div>
      </div>
    </div>
  );
}

function InsightCard({ icon, title, text, color }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${color}08, ${color}03)`,
      border: `1px solid ${color}18`,
      borderRadius: 14,
      padding: "16px 18px",
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
    }}>
      <span style={{ fontSize: 22, lineHeight: 1, marginTop: 1 }}>{icon}</span>
      <div>
        <div style={{ fontWeight: 600, color, fontSize: 13, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>{text}</div>
      </div>
    </div>
  );
}

export default function LeoDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const data = RAW;

  const janData = useMemo(() => getMonthData(data, "2026-01"), []);
  const febData = useMemo(() => getMonthData(data, "2026-02"), []);
  const marData = useMemo(() => getMonthData(data, "2026-03"), []);

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "sleep", label: "Sleep", icon: "🌙" },
    { id: "feeding", label: "Feeding", icon: "🍼" },
    { id: "digestion", label: "Digestion", icon: "💩" },
    { id: "insights", label: "Insights", icon: "💡" },
  ];

  const overallStats = useMemo(() => ({
    totalNights: data.length,
    avgSleep: avg(data.map(r => r.ls)),
    avgMilk: avg(data.map(r => r.ml)),
    avgFeeds: avg(data.map(r => r.fc)),
    avgPoos: avg(data.map(r => r.po)),
    avgWakeups: avg(data.map(r => r.wu)),
    avgGassy: avg(data.map(r => r.ga)),
    bestSleep: Math.max(...data.map(r => r.ls)),
    bestSleepDate: data.reduce((a, b) => a.ls > b.ls ? a : b).d,
  }), []);

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Nunito', -apple-system, sans-serif",
      background: "#0c0c14",
      color: "rgba(255,255,255,0.85)",
      minHeight: "100vh",
      padding: "0 0 40px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div style={{
        padding: "32px 28px 24px",
        background: "linear-gradient(180deg, rgba(99,102,241,0.08) 0%, transparent 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
          <span style={{ fontSize: 32 }}>👶</span>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", background: "linear-gradient(135deg, #e0e7ff, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Leo's Night Report
            </h1>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: "4px 0 0", fontWeight: 500 }}>
              Jan 10 - Mar 20, 2026 &nbsp;·&nbsp; {data.length} nights tracked &nbsp;·&nbsp; 7 PM to 7 AM shift
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex",
        gap: 4,
        padding: "12px 28px",
        overflowX: "auto",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "8px 16px",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              background: activeTab === tab.id ? "rgba(99,102,241,0.15)" : "transparent",
              color: activeTab === tab.id ? "#a5b4fc" : "rgba(255,255,255,0.35)",
              border: activeTab === tab.id ? "1px solid rgba(99,102,241,0.2)" : "1px solid transparent",
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px 28px" }}>
        
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Stat Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 12 }}>
              <StatCard label="Avg Longest Sleep" value={`${Math.floor(overallStats.avgSleep / 60)}h ${Math.round(overallStats.avgSleep % 60)}m`} color="#818cf8" icon="🌙" subtext={`Best: ${Math.floor(overallStats.bestSleep/60)}h ${overallStats.bestSleep%60}m`} sparkData={data.map(r => r.ls)} />
              <StatCard label="Avg Milk Intake" value={Math.round(overallStats.avgMilk)} unit="ml/night" color="#38bdf8" icon="🍼" sparkData={data.map(r => r.ml)} />
              <StatCard label="Avg Wake-ups" value={overallStats.avgWakeups} unit="/night" color="#fb923c" icon="⏰" sparkData={data.map(r => r.wu)} />
              <StatCard label="Avg Gassy Events" value={overallStats.avgGassy} unit="/night" color="#94a3b8" icon="💨" subtext="Down 53% since Jan" sparkData={data.map(r => r.ga)} />
            </div>

            {/* Monthly Comparison */}
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: 20,
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 16px", color: "rgba(255,255,255,0.7)" }}>Monthly Comparison</h3>
              <MonthComparisonTable data={data} />
            </div>

            {/* Timeline Bars */}
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: 20,
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 16px", color: "rgba(255,255,255,0.7)" }}>Nightly Sleep Stretches (longest per night)</h3>
              <BarChart
                data={data.map(r => ({ val: r.ls, label: r.d.slice(5) }))}
                color={(v) => v.val >= 240 ? "#4ade80" : v.val >= 180 ? "#818cf8" : v.val >= 120 ? "#fbbf24" : "#f87171"}
                max={400}
                height={120}
              />
              <div style={{ display: "flex", gap: 16, marginTop: 10, flexWrap: "wrap" }}>
                {[["#4ade80", "4+ hours"], ["#818cf8", "3-4 hours"], ["#fbbf24", "2-3 hours"], ["#f87171", "< 2 hours"]].map(([c, l]) => (
                  <div key={l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLEEP TAB */}
        {activeTab === "sleep" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { label: "January", data: janData, color: "#fb923c" },
                { label: "February", data: febData, color: "#818cf8" },
                { label: "March", data: marData, color: "#4ade80" },
              ].map(m => (
                <div key={m.label} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "18px 20px" }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: m.color }}>
                    {Math.floor(avg(m.data.map(r => r.ls)) / 60)}h {Math.round(avg(m.data.map(r => r.ls)) % 60)}m
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>avg longest stretch</div>
                  <div style={{ marginTop: 10 }}>
                    <SparkLine data={m.data.map(r => r.ls)} color={m.color} height={40} showDots />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
                    <span>Wake-ups: <strong style={{ color: "rgba(255,255,255,0.7)" }}>{avg(m.data.map(r => r.wu))}</strong>/night</span>
                    <span>Best: <strong style={{ color: m.color }}>{Math.max(...m.data.map(r => r.ls))}m</strong></span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 16px", color: "rgba(255,255,255,0.7)" }}>Wake-ups per Night</h3>
              <BarChart
                data={data.map(r => ({ val: r.wu, label: r.d.slice(5) }))}
                color={(v) => v.val <= 3 ? "#4ade80" : v.val <= 5 ? "#fbbf24" : "#f87171"}
                max={12}
                height={100}
              />
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 4px", color: "rgba(255,255,255,0.7)" }}>Sleep Progression</h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: "0 0 14px" }}>Nights where the longest stretch exceeded 4 hours</p>
              {["2026-01", "2026-02", "2026-03"].map(m => {
                const md = data.filter(r => r.d.startsWith(m));
                const over4h = md.filter(r => r.ls >= 240).length;
                const pct = Math.round((over4h / md.length) * 100);
                return (
                  <div key={m} style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                      <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{MONTHS[m]}</span>
                      <span style={{ color: "#818cf8", fontWeight: 700 }}>{over4h}/{md.length} nights ({pct}%)</span>
                    </div>
                    <MiniBar value={pct} max={100} color="#818cf8" height={14} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* FEEDING TAB */}
        {activeTab === "feeding" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 12 }}>
              <StatCard label="Avg Intake" value={Math.round(avg(data.map(r => r.ml)))} unit="ml/night" color="#38bdf8" icon="🍼" sparkData={data.map(r => r.ml)} />
              <StatCard label="Avg Feeds" value={avg(data.map(r => r.fc))} unit="/night" color="#a78bfa" icon="🥛" sparkData={data.map(r => r.fc)} />
              <StatCard label="Peak Intake" value={Math.max(...data.map(r => r.ml))} unit="ml" color="#4ade80" icon="📈" subtext={data.reduce((a,b) => a.ml > b.ml ? a : b).d} />
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 16px", color: "rgba(255,255,255,0.7)" }}>Nightly Milk Volume (ml)</h3>
              <BarChart
                data={data.map(r => ({ val: r.ml, label: r.d.slice(5) }))}
                color="#38bdf8"
                max={550}
                height={120}
              />
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 16px", color: "rgba(255,255,255,0.7)" }}>Breast Milk vs Formula Mix</h3>
              <FeedingMixChart data={data} />
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 12, lineHeight: 1.5 }}>
                Formula share has gradually increased from 32% in January to 49% in March, while total intake has remained stable.
              </p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 4px", color: "rgba(255,255,255,0.7)" }}>Volume per Feed</h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: "0 0 14px" }}>Average ml consumed per feeding session</p>
              {["2026-01", "2026-02", "2026-03"].map(m => {
                const md = data.filter(r => r.d.startsWith(m));
                const avgPerFeed = Math.round(avg(md.map(r => r.fc > 0 ? r.ml / r.fc : 0)));
                return (
                  <div key={m} style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                      <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{MONTHS[m]}</span>
                      <span style={{ color: "#38bdf8", fontWeight: 700 }}>{avgPerFeed} ml/feed</span>
                    </div>
                    <MiniBar value={avgPerFeed} max={140} color="#38bdf8" height={14} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* DIGESTION TAB */}
        {activeTab === "digestion" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 12 }}>
              <StatCard label="Avg Poops" value={avg(data.map(r => r.po))} unit="/night" color="#fbbf24" icon="💩" sparkData={data.map(r => r.po)} />
              <StatCard label="Avg Gassy Events" value={avg(data.map(r => r.ga))} unit="/night" color="#94a3b8" icon="💨" sparkData={data.map(r => r.ga)} />
              <StatCard label="Avg Nappy Changes" value={avg(data.map(r => r.na))} unit="/night" color="#f472b6" icon="👶" sparkData={data.map(r => r.na)} />
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 16px", color: "rgba(255,255,255,0.7)" }}>Poops per Night</h3>
              <BarChart
                data={data.map(r => ({ val: r.po, label: r.d.slice(5) }))}
                color="#fbbf24"
                max={9}
                height={100}
              />
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 16px", color: "rgba(255,255,255,0.7)" }}>Gassiness Trend</h3>
              <BarChart
                data={data.map(r => ({ val: r.ga, label: r.d.slice(5) }))}
                color={(v) => v.val >= 7 ? "#f87171" : v.val >= 4 ? "#fbbf24" : "#4ade80"}
                max={11}
                height={100}
              />
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 12, lineHeight: 1.5 }}>
                Gassiness dropped significantly from an avg of 5.1 events/night in January to 2.4 in March. This suggests Leo's digestive system is maturing.
              </p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 4px", color: "rgba(255,255,255,0.7)" }}>Poop-Free Nights</h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: "0 0 14px" }}>Percentage of nights with zero poops (less disruptive sleep)</p>
              {["2026-01", "2026-02", "2026-03"].map(m => {
                const md = data.filter(r => r.d.startsWith(m));
                const pf = md.filter(r => r.po === 0).length;
                const pct = Math.round((pf / md.length) * 100);
                return (
                  <div key={m} style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                      <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{MONTHS[m]}</span>
                      <span style={{ color: "#fbbf24", fontWeight: 700 }}>{pf}/{md.length} nights ({pct}%)</span>
                    </div>
                    <MiniBar value={pct} max={100} color="#fbbf24" height={14} />
                  </div>
                );
              })}
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 8, lineHeight: 1.5 }}>
                February saw a notable spike in poop-free nights (71%), while March returned to more frequent nighttime pooping. This could be related to dietary changes or the shift toward more formula.
              </p>
            </div>
          </div>
        )}

        {/* INSIGHTS TAB */}
        {activeTab === "insights" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 4px", background: "linear-gradient(135deg, #e0e7ff, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Key Findings & Progress
            </h3>
            
            <InsightCard
              icon="🌙"
              title="Sleep is Improving"
              color="#818cf8"
              text="Leo's longest uninterrupted sleep stretch grew from ~2h 54m (avg) in January to ~3h 25m in Feb/March. Nights with 4+ hour stretches increased, with the best night reaching 5h 53m on March 16. This is a clear sign of sleep consolidation."
            />
            
            <InsightCard
              icon="💨"
              title="Gas & Colic Settling Down"
              color="#4ade80"
              text="Gassiness dropped 53% from January (5.1 events/night) to March (2.4/night). This is likely due to his digestive system maturing. Fewer gas disruptions means fewer unnecessary wake-ups and more restful sleep."
            />
            
            <InsightCard
              icon="🍼"
              title="Feeding Volume Stable, Mix Shifting"
              color="#38bdf8"
              text="Total nightly intake has been steady around 370-400ml. The breast milk to formula ratio shifted from 68/32 in Jan to roughly 51/49 in March. Average volume per feed has stayed consistent, suggesting he's eating efficiently each session."
            />
            
            <InsightCard
              icon="⏰"
              title="Wake-ups Trending Down"
              color="#fb923c"
              text="Average nightly wake-ups dipped from 5.5 in January to 4.8 in March. While the improvement is modest, it's moving in the right direction. Fewer gas-related disturbances are likely contributing to this."
            />
            
            <InsightCard
              icon="💩"
              title="Digestion Patterns Are Variable"
              color="#fbbf24"
              text="February was notably calm with 71% poop-free nights, but March saw a return to more frequent nighttime poops (avg 2.9/night). This may correlate with the increased formula share or dietary changes. Worth monitoring."
            />
            
            <InsightCard
              icon="🏋️"
              title="Motor Development Emerging"
              color="#f472b6"
              text="Tummy time sessions appeared in the logs starting mid-February and became more regular in March. On March 17, the nurse noted Leo 'started to crawl' during tummy time. Head positioning during sleep has also been more deliberate, with Leo actively changing positions himself."
            />

            <InsightCard
              icon="🛁"
              title="Bedtime Routine Established"
              color="#a78bfa"
              text="Consistent bath/massage before bed appears throughout the logs. By late February, the routine consolidated into 'bedtime routine done' as a standard entry, suggesting it's become an established pattern that helps Leo wind down."
            />

            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: 20,
              marginTop: 8,
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 12px", color: "rgba(255,255,255,0.7)" }}>Summary Score by Month</h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: "0 0 16px" }}>
                Composite score based on sleep duration, fewer wake-ups, and reduced gassiness (higher is better)
              </p>
              {["2026-01", "2026-02", "2026-03"].map(m => {
                const md = data.filter(r => r.d.startsWith(m));
                const sleepScore = Math.min(avg(md.map(r => r.ls)) / 300, 1) * 40;
                const wakeScore = Math.max(0, (1 - avg(md.map(r => r.wu)) / 10)) * 30;
                const gasScore = Math.max(0, (1 - avg(md.map(r => r.ga)) / 8)) * 30;
                const total = Math.round(sleepScore + wakeScore + gasScore);
                return (
                  <div key={m} style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                      <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{MONTHS[m]}</span>
                      <span style={{ color: total >= 65 ? "#4ade80" : total >= 50 ? "#fbbf24" : "#fb923c", fontWeight: 700, fontSize: 16 }}>{total}/100</span>
                    </div>
                    <div style={{ display: "flex", gap: 3, height: 18 }}>
                      <div style={{ flex: sleepScore, background: "#818cf8", borderRadius: "4px 0 0 4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {sleepScore > 8 && <span style={{ fontSize: 8, color: "white", fontWeight: 700 }}>SLEEP</span>}
                      </div>
                      <div style={{ flex: wakeScore, background: "#fb923c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {wakeScore > 8 && <span style={{ fontSize: 8, color: "white", fontWeight: 700 }}>CALM</span>}
                      </div>
                      <div style={{ flex: gasScore, background: "#4ade80", borderRadius: "0 4px 4px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {gasScore > 8 && <span style={{ fontSize: 8, color: "white", fontWeight: 700 }}>DIGEST</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

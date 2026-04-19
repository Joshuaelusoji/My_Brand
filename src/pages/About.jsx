import { useState, useEffect, useRef } from 'react';
import myPhoto from '../assets/images/Josh.jpeg';
import Elusive from '../assets/images/Elusive.jpeg';

const messages = [
  "I love building innovative digital experiences.",
  "I make Music when I'm not coding — it inspires my creativity.",
  "Artificial Intelligence fascinates me deeply.",
  "I enjoy discovering & studying patterns.",
  "Problem-solving keeps my creativity alive.",
  "I draw inspiration from gaming, exploration & discovery.",
  "I'm picking up a bit of Deutsch 🇩🇪",
];

const skills = [
  // Frontend skills
  { label: 'HTML & CSS',   pct: 95, color: '#f97316' },
  { label: 'JavaScript',   pct: 87, color: '#00e5ff' },
  { label: 'React JS',     pct: 88, color: '#7df3e1' },
  { label: 'Tailwind CSS', pct: 92, color: '#00bcd4' },
  // Backend skills
  { label: 'Node.js',      pct: 80, color: '#68d391' },
  { label: 'Express JS',   pct: 73, color: '#a78bfa' },
  { label: 'MongoDB',      pct: 75, color: '#fbbf24' },
  { label: 'PostgreSQL',   pct: 70, color: '#f56565' },
];

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '5★',  label: 'Reviews'  },
  { value: '3+',  label: 'Yrs Exp'  },
];

/* ── Animated skill bar ── */
function SkillBar({ label, pct, color, index }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setWidth(pct); },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [pct]);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', background: color, borderRadius: '1px', boxShadow: `0 0 6px ${color}` }} />
          <span style={{
            fontSize: '12px', fontWeight: 600,
            color: 'rgba(180,220,255,0.8)',
            letterSpacing: '0.08em',
            fontFamily: "'Space Mono', monospace",
            textTransform: 'uppercase',
          }}>{label}</span>
        </div>
        <span style={{
          fontSize: '11px', fontWeight: 700,
          color, fontFamily: "'Space Mono', monospace",
          background: `${color}18`,
          padding: '2px 8px', borderRadius: '3px',
          border: `1px solid ${color}40`,
          letterSpacing: '0.05em',
        }}>{pct}%</span>
      </div>
      <div style={{
        height: '4px',
        background: 'rgba(0,229,255,0.06)',
        borderRadius: '0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Track marks */}
        {[25,50,75].map(m => (
          <div key={m} style={{
            position: 'absolute', left: `${m}%`, top: 0,
            width: '1px', height: '100%',
            background: 'rgba(0,229,255,0.15)', zIndex: 1,
          }} />
        ))}
        <div style={{
          height: '100%',
          width: `${width}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          transition: `width 1.2s cubic-bezier(.4,0,.2,1) ${index * 140}ms`,
          boxShadow: `0 0 12px ${color}88, 0 0 3px ${color}`,
          position: 'relative',
        }}>
          {/* Moving tip glow */}
          <div style={{
            position: 'absolute', right: 0, top: '-2px',
            width: '6px', height: '8px',
            background: color,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}66`,
          }} />
        </div>
      </div>
    </div>
  );
}

/* ── Terminal chat widget ── */
function TerminalChat() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [shown, setShown] = useState([]);
  const [typedText, setTypedText] = useState('');
  const scrollRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    if (!isTyping) return;
    const target = messages[currentIndex];
    let i = 0;
    setTypedText('');
    const interval = setInterval(() => {
      i++;
      setTypedText(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShown(p => [...p, target]);
          setTypedText('');
          setIsTyping(false);
        }, 400);
      }
    }, 38);
    return () => clearInterval(interval);
  }, [isTyping, currentIndex]);

  useEffect(() => {
    if (!isTyping) {
      const t = setTimeout(() => {
        if (currentIndex < messages.length - 1) {
          setCurrentIndex(i => i + 1);
          setIsTyping(true);
        } else {
          setTimeout(() => { setShown([]); setCurrentIndex(0); setIsTyping(true); }, 2800);
        }
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [isTyping, currentIndex]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [shown, typedText]);

  return (
    <div style={{
      width: '100%',
      background: '#050d14',
      borderRadius: '8px',
      border: '1px solid rgba(0,229,255,0.2)',
      overflow: 'hidden',
      boxShadow: '0 0 0 1px rgba(0,229,255,0.05), 0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,229,255,0.04)',
      fontFamily: "'Space Mono', monospace",
    }}>
      {/* Terminal title bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '10px 14px',
        background: 'rgba(0,229,255,0.04)',
        borderBottom: '1px solid rgba(0,229,255,0.12)',
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
            <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, opacity: 0.8 }} />
          ))}
        </div>
        <span style={{ marginLeft: '8px', fontSize: '10px', color: 'rgba(0,229,255,0.5)', letterSpacing: '0.1em' }}>
          joshua@dev:~$ ./about.sh
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px', alignItems: 'center' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00e5ff', boxShadow: '0 0 6px #00e5ff', animation: 'termPulse 2s ease-in-out infinite' }} />
          <span style={{ fontSize: '9px', color: 'rgba(0,229,255,0.5)', letterSpacing: '0.08em' }}>LIVE</span>
        </div>
      </div>

      {/* Output area */}
      <div ref={scrollRef} style={{
        height: '230px', overflowY: 'auto',
        padding: '14px 16px',
        display: 'flex', flexDirection: 'column', gap: '8px',
        scrollBehavior: 'smooth',
      }}>
        <div style={{ fontSize: '10px', color: 'rgba(0,229,255,0.3)', marginBottom: '4px' }}>
          <span style={{ color: '#00e5ff' }}>●</span> Process started. Output stream active.
        </div>

        {shown.map((msg, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
            <span style={{ color: '#00e5ff', fontSize: '11px', flexShrink: 0, marginTop: '1px' }}>›</span>
            <span style={{
              color: 'rgba(125,243,225,0.85)',
              fontSize: '12px',
              lineHeight: 1.5,
              letterSpacing: '0.02em',
            }}>{msg}</span>
          </div>
        ))}

        {typedText && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
            <span style={{ color: '#00e5ff', fontSize: '11px', flexShrink: 0, marginTop: '1px' }}>›</span>
            <span style={{ color: 'rgba(125,243,225,0.85)', fontSize: '12px', lineHeight: 1.5, letterSpacing: '0.02em' }}>
              {typedText}
              <span style={{ display: 'inline-block', width: '7px', height: '13px', background: '#00e5ff', marginLeft: '2px', verticalAlign: 'text-bottom', animation: 'blink 1s step-end infinite' }} />
            </span>
          </div>
        )}
      </div>

      {/* Prompt input bar */}
      <div style={{
        padding: '10px 16px',
        borderTop: '1px solid rgba(0,229,255,0.1)',
        background: 'rgba(0,229,255,0.02)',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <span style={{ color: '#00e5ff', fontSize: '11px' }}>❯</span>
        <span style={{ fontSize: '11px', color: 'rgba(0,229,255,0.25)', flex: 1 }}>type a command...</span>
        <span style={{ fontSize: '10px', color: 'rgba(0,229,255,0.2)', letterSpacing: '0.05em' }}>⌘K</span>
      </div>
    </div>
  );
}

/* ── Main About section ── */
export default function About() {
  const [tab, setTab] = useState('skills');

  return (
    <section id="about" style={{
      background: '#030810',
      color: '#fff',
      padding: '100px 0 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes blink {
          0%,100%{opacity:1} 50%{opacity:0}
        }
        @keyframes termPulse {
          0%,100%{opacity:1;box-shadow:0 0 6px #00e5ff}
          50%{opacity:0.4;box-shadow:0 0 2px #00e5ff}
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes gridDrift {
          0%   { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        @keyframes glitchX {
          0%,92%,100%{transform:translateX(0)}
          94%{transform:translateX(-3px)}
          96%{transform:translateX(3px)}
          98%{transform:translateX(-1px)}
        }
        @keyframes float {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-8px);}
        }
        @keyframes borderSpin {
          to{transform:rotate(360deg)}
        }
        @keyframes dataStream {
          0%{opacity:0;transform:translateY(-10px)}
          10%{opacity:1}
          90%{opacity:1}
          100%{opacity:0;transform:translateY(10px)}
        }

        .tech-tab-btn {
          padding: 7px 18px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: 700;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid rgba(0,229,255,0.15);
          background: transparent;
          color: rgba(0,229,255,0.35);
          text-transform: uppercase;
        }
        .tech-tab-btn.active {
          background: rgba(0,229,255,0.08);
          border-color: rgba(0,229,255,0.5);
          color: #00e5ff;
          box-shadow: 0 0 16px rgba(0,229,255,0.1), inset 0 0 12px rgba(0,229,255,0.04);
        }
        .tech-tab-btn:hover:not(.active) {
          background: rgba(0,229,255,0.04);
          color: rgba(0,229,255,0.6);
          border-color: rgba(0,229,255,0.25);
        }

        .interest-chip {
          padding: 6px 14px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: 400;
          font-family: 'Space Mono', monospace;
          background: rgba(0,229,255,0.04);
          border: 1px solid rgba(0,229,255,0.15);
          color: rgba(0,229,255,0.6);
          letter-spacing: 0.05em;
          transition: all 0.2s;
          cursor: default;
        }
        .interest-chip:hover {
          background: rgba(0,229,255,0.1);
          border-color: rgba(0,229,255,0.4);
          color: #00e5ff;
          boxShadow: 0 0 12px rgba(0,229,255,0.1);
        }

        .feature-card {
          background: rgba(0,229,255,0.02);
          border: 1px solid rgba(0,229,255,0.1);
          border-radius: 4px;
          padding: 16px;
          display: flex; flex-direction: column; gap: 10px;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px; height: 0;
          background: linear-gradient(180deg, #00e5ff, transparent);
          transition: height 0.3s;
        }
        .feature-card:hover {
          border-color: rgba(0,229,255,0.3);
          background: rgba(0,229,255,0.05);
          box-shadow: 0 0 24px rgba(0,229,255,0.06);
        }
        .feature-card:hover::before {
          height: 100%;
        }

        .about-photo-wrap {
          animation: float 6s ease-in-out infinite;
        }

        .cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px;
          background: transparent;
          color: #00e5ff;
          font-family: 'Space Mono', monospace;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 3px;
          border: 1px solid rgba(0,229,255,0.5);
          box-shadow: 0 0 20px rgba(0,229,255,0.1), inset 0 0 20px rgba(0,229,255,0.03);
          transition: all 0.2s;
        }
        .cta-primary:hover {
          background: rgba(0,229,255,0.08);
          box-shadow: 0 0 32px rgba(0,229,255,0.2), inset 0 0 20px rgba(0,229,255,0.05);
          transform: translateY(-2px);
        }
        .cta-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px;
          background: transparent;
          color: rgba(180,220,255,0.5);
          font-family: 'Space Mono', monospace;
          font-size: 12px; font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 3px;
          border: 1px solid rgba(180,220,255,0.12);
          transition: all 0.2s;
        }
        .cta-secondary:hover {
          color: rgba(180,220,255,0.85);
          border-color: rgba(180,220,255,0.25);
          background: rgba(180,220,255,0.03);
        }

        .name-glitch {
          animation: glitchX 8s ease-in-out infinite;
        }
      `}</style>

      {/* ── Background: grid + scanline ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        animation: 'gridDrift 20s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* Scanline sweep */}
      <div style={{
        position: 'absolute', left: 0, right: 0,
        height: '120px',
        background: 'linear-gradient(transparent, rgba(0,229,255,0.015), transparent)',
        animation: 'scanline 8s linear infinite',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Glow blobs */}
      <div style={{ position:'absolute', top:'-100px', left:'-100px', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-80px', right:'-80px', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 65%)', pointerEvents:'none' }} />

      {/* Top accent */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(90deg, transparent, rgba(0,229,255,0.4), transparent)', pointerEvents:'none' }} />

      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>

        {/* ── Section label ── */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          marginBottom: '60px',
          animation: 'fadeSlideUp 0.6s ease both',
        }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: 'rgba(0,229,255,0.4)', letterSpacing: '0.1em' }}>01.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(0,229,255,0.4)' }} />
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.25em', color: '#00e5ff',
              textTransform: 'uppercase',
            }}>About Me</span>
            <div style={{ width: '32px', height: '1px', background: 'rgba(0,229,255,0.4)' }} />
          </div>
        </div>

        {/* ── Two-column grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}>

          {/* ════ LEFT COLUMN ════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', animation: 'fadeSlideUp 0.65s ease 0.05s both' }}>

            {/* Photo + identity */}
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              {/* Photo */}
              <div className="about-photo-wrap" style={{ position: 'relative', flexShrink: 0 }}>
                {/* Corner brackets */}
                {[
                  { top: -4, left: -4, borderTop: '2px solid #00e5ff', borderLeft: '2px solid #00e5ff' },
                  { top: -4, right: -4, borderTop: '2px solid #00e5ff', borderRight: '2px solid #00e5ff' },
                  { bottom: -4, left: -4, borderBottom: '2px solid #00e5ff', borderLeft: '2px solid #00e5ff' },
                  { bottom: -4, right: -4, borderBottom: '2px solid #00e5ff', borderRight: '2px solid #00e5ff' },
                ].map((s, i) => (
                  <div key={i} style={{ position: 'absolute', width: '14px', height: '14px', zIndex: 2, ...s }} />
                ))}
                <div style={{
                  width: '126px', height: '150px',
                  borderRadius: '0',
                  overflow: 'hidden',
                  background: '#0a1220',
                  position: 'relative',
                }}>
                  <img src={Elusive} alt="Joshua Elusoji" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85) contrast(1.05)' }} />
                  {/* Scanline overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px)',
                    pointerEvents: 'none',
                  }} />
                </div>
                {/* Status badge */}
                <div style={{
                  position: 'absolute', bottom: '-12px', left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(0,229,255,0.12)',
                  color: '#00e5ff',
                  fontSize: '9px', fontWeight: 700,
                  padding: '3px 10px',
                  letterSpacing: '0.15em', whiteSpace: 'nowrap',
                  zIndex: 2, fontFamily: "'Space Mono', monospace",
                  border: '1px solid rgba(0,229,255,0.4)',
                  boxShadow: '0 0 12px rgba(0,229,255,0.2)',
                }}>⬛ ONLINE</div>
              </div>

              {/* Identity */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '4px' }}>
                <div>
                  <p style={{
                    margin: '0 0 4px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '9px', fontWeight: 700,
                    letterSpacing: '0.2em', color: 'rgba(0,229,255,0.4)',
                    textTransform: 'uppercase',
                  }}>// init user</p>
                  <h2 className="name-glitch" style={{
                    margin: 0,
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 'clamp(28px, 3.5vw, 36px)',
                    fontWeight: 800,
                    lineHeight: 1.0,
                    letterSpacing: '-0.02em',
                    color: '#e8f4ff',
                  }}>Joshua<br />
                    <span style={{
                      color: '#00e5ff',
                      textShadow: '0 0 20px rgba(0,229,255,0.5), 0 0 40px rgba(0,229,255,0.2)',
                    }}>Elusoji</span>
                  </h2>
                </div>

                <p style={{
                  margin: 0,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  color: 'rgba(0,229,255,0.5)',
                  lineHeight: 1.6,
                  letterSpacing: '0.04em',
                }}>
                  <span style={{ color: 'rgba(167,139,250,0.7)' }}>role</span>
                  <span style={{ color: 'rgba(0,229,255,0.3)' }}> = </span>
                  <span style={{ color: 'rgba(125,243,225,0.8)' }}>"Full-Stack Dev"</span>
                </p>

                {/* Stat pills */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
                  {stats.map(({ value, label }) => (
                    <div key={label} style={{
                      padding: '6px 12px',
                      background: 'rgba(0,229,255,0.04)',
                      border: '1px solid rgba(0,229,255,0.2)',
                      borderRadius: '2px',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', fontWeight: 700, color: '#00e5ff', lineHeight: 1, textShadow: '0 0 10px rgba(0,229,255,0.5)' }}>{value}</div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: 'rgba(0,229,255,0.4)', letterSpacing: '0.1em', marginTop: '3px', textTransform: 'uppercase' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div style={{
              background: 'rgba(0,229,255,0.02)',
              border: '1px solid rgba(0,229,255,0.12)',
              borderRadius: '4px',
              padding: '20px',
              position: 'relative',
              borderLeft: '2px solid rgba(0,229,255,0.5)',
            }}>
              {/* Line number gutter */}
              <div style={{
                position: 'absolute', left: '12px', top: '20px',
                display: 'flex', flexDirection: 'column', gap: '6.5px',
              }}>
                {[1,2,3,4,5].map(n => (
                  <span key={n} style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(0,229,255,0.15)', display: 'block', lineHeight: 1 }}>{n}</span>
                ))}
              </div>
              <p style={{
                margin: 0,
                paddingLeft: '20px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                lineHeight: 2.0,
                color: 'rgba(180,220,255,0.65)',
                fontWeight: 400,
              }}>
                I'm a <span style={{ color: '#e8f4ff', fontWeight: 600 }}>full-stack web developer</span> passionate
                about creating modern, <span style={{ color: '#00e5ff', fontWeight: 600 }}>tech-driven
                interfaces</span> that help brands stand out and increase their{' '}
                <span style={{ color: '#e8f4ff', fontWeight: 600 }}>visibility</span> and{' '}
                <span style={{ color: '#e8f4ff', fontWeight: 600 }}>revenue</span>. Clean code meets
                stunning design to deliver experiences that <em style={{ color: '#7df3e1' }}>convert</em>.
              </p>
            </div>

            {/* Terminal chat */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{
                margin: 0,
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px', fontWeight: 700,
                letterSpacing: '0.2em', color: 'rgba(0,229,255,0.35)',
                textTransform: 'uppercase',
              }}>// stdout — in my own words</p>
              <TerminalChat />
            </div>
          </div>

          {/* ════ RIGHT COLUMN ════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', animation: 'fadeSlideUp 0.65s ease 0.12s both' }}>

            {/* Tab switcher */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { id: 'skills',    label: 'Tech Stack' },
                { id: 'interests', label: 'Interests'  },
              ].map(t => (
                <button
                  key={t.id}
                  className={`tech-tab-btn${tab === t.id ? ' active' : ''}`}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Skills tab */}
            {tab === 'skills' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {skills.map((s, i) => (
                  <SkillBar key={s.label} {...s} index={i} />
                ))}

                {/* Tech badges */}
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '8px',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(0,229,255,0.08)',
                  marginTop: '2px',
                }}>
                  {['React', 'Tailwind', 'Vite', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'Figma'].map(tech => (
                    <span key={tech} style={{
                      padding: '5px 12px',
                      background: 'rgba(0,229,255,0.04)',
                      border: '1px solid rgba(0,229,255,0.15)',
                      borderRadius: '2px',
                      fontSize: '10px', fontWeight: 700,
                      color: 'rgba(0,229,255,0.5)',
                      fontFamily: "'Space Mono', monospace",
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      transition: 'all 0.2s',
                      cursor: 'default',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0,229,255,0.1)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(0,229,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(0,229,255,0.15)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Interests tab */}
            {tab === 'interests' && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[
                  '🎵 Music Production',
                  '🤖 Artificial Intelligence',
                  '🎮 Gaming',
                  '🔍 Pattern Recognition',
                  '🌍 Exploration',
                  '🇩🇪 Deutsch',
                  '💡 Problem Solving',
                  '✨ Creative Coding',
                ].map(tag => (
                  <span key={tag} className="interest-chip">{tag}</span>
                ))}
              </div>
            )}

            {/* Divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(0,229,255,0.08)' }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(0,229,255,0.2)', letterSpacing: '0.1em' }}>// services</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(0,229,255,0.08)' }} />
            </div>

            {/* Feature cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  ),
                  title: 'Clean Code',
                  body: 'Semantic, maintainable & well-structured.',
                  accent: '#00e5ff',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7df3e1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  ),
                  title: 'Responsive',
                  body: 'Pixel-perfect on every screen size.',
                  accent: '#7df3e1',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  ),
                  title: 'Fast Delivery',
                  body: 'On time, every time. No excuses.',
                  accent: '#34d399',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                  ),
                  title: 'SEO Ready',
                  body: 'Optimized for search visibility.',
                  accent: '#a78bfa',
                },
              ].map(({ icon, title, body, accent }) => (
                <div key={title} className="feature-card">
                  <div style={{
                    width: '34px', height: '34px',
                    background: `${accent}0f`,
                    border: `1px solid ${accent}30`,
                    borderRadius: '3px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{icon}</div>
                  <div>
                    <p style={{ margin: '0 0 4px', fontFamily: "'Space Mono', monospace", fontSize: '11px', fontWeight: 700, color: '#e8f4ff', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{title}</p>
                    <p style={{ margin: 0, fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(180,220,255,0.4)', lineHeight: 1.5 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '4px' }}>
              <a href="#portfolio" className="cta-primary">
                View My Work
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#contact" className="cta-secondary">
                Get in Touch
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom accent */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,229,255,0.3),transparent)', pointerEvents: 'none' }} />
    </section>
  );
}
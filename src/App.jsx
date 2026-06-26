import { useState, useEffect, useRef } from "react";

const COLORS = {
  primary: "#1e3a5f",
  primaryDark: "#0B1E33",
  primaryLight: "#2a5298",
  accent: "#c9a84c",
  accentLight: "#f0d080",
  bg: "#ffffff",
  bgCream: "#faf8f5",
  bgLight: "#f5f3ef",
  textDark: "#1F1F1F",
  textMid: "#4a4a4a",
  textLight: "#6b7280",
  border: "#e5e7eb",
  success: "#16a34a",
  white: "#ffffff",
};

const FONT = {
  serif: "'Georgia', 'Times New Roman', serif",
  sans: "'Segoe UI', system-ui, -apple-system, sans-serif",
};

// ─── Utilidades ───────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

// ─── Iconos SVG inline ─────────────────────────────────────────────────────────
const IconMusic = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
  </svg>
);
const IconStar = ({ size = 16, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconCheck = ({ size = 18, color = COLORS.success }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconHeart = ({ size = 20, color = "#e53e3e" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconPlay = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
  </svg>
);
const IconPause = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
  </svg>
);
const IconChevronDown = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const IconMenu = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
  </svg>
);
const IconX = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);
const IconClock = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconShield = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconGift = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);
const IconArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── Datos ─────────────────────────────────────────────────────────────────────
const occasions = [
  { icon: "💍", label: "Aniversario", desc: "Celebra vuestro amor único" },
  { icon: "🎂", label: "Cumpleaños", desc: "El regalo que jamás olvidarán" },
  { icon: "💒", label: "Boda", desc: "La canción perfecta para tu día" },
  { icon: "🤱", label: "Bebé", desc: "Una nana llena de amor" },
  { icon: "👩", label: "Día de la Madre", desc: "Hazla llorar de alegría" },
  { icon: "👨", label: "Día del Padre", desc: "El mejor tributo para papá" },
  { icon: "🎓", label: "Graduación", desc: "Celebra su gran logro" },
  { icon: "🕊️", label: "Memorial", desc: "Honra su memoria para siempre" },
  { icon: "💝", label: "San Valentín", desc: "Declara tu amor con música" },
  { icon: "🏠", label: "Amistad", desc: "Para los amigos de toda la vida" },
  { icon: "✈️", label: "Despedida", desc: "Un adiós que será recordado" },
  { icon: "🎊", label: "Cualquier Ocasión", desc: "Cada momento merece una canción" },
];

const steps = [
  { num: "01", title: "Cuéntanos tu historia", desc: "Completa nuestro formulario con los detalles especiales: nombres, recuerdos, momentos únicos que quieres capturar en la canción.", icon: "✍️" },
  { num: "02", title: "Elige el estilo musical", desc: "Selecciona entre pop, balada, country, jazz, reggaetón y más. También puedes pedir un género o artista de referencia.", icon: "🎵" },
  { num: "03", title: "Nuestros artistas crean tu canción", desc: "Compositores y músicos profesionales crean tu canción personalizada con letra y producción de estudio de calidad.", icon: "🎼" },
  { num: "04", title: "Recibe y sorprende", desc: "En tan solo 24 horas recibirás tu canción lista para descargar. Compártela con tu ser querido y vívela para siempre.", icon: "🎁" },
];

const reviews = [
  { name: "María García", location: "Madrid, España", rating: 5, text: "Hice una canción para el aniversario de mis padres. Mi madre lloró de la emoción. Fue el regalo más especial que he podido darles. ¡Absolutamente recomendable!", occasion: "Aniversario" },
  { name: "Carlos Ruiz", location: "Barcelona, España", rating: 5, text: "La canción para el cumpleaños de mi novia superó todas mis expectativas. Letra personalizada perfecta, producción increíble. Ella dice que es el mejor regalo de su vida.", occasion: "Cumpleaños" },
  { name: "Ana Martínez", location: "Sevilla, España", rating: 5, text: "Pedí una canción para la boda de mi hermana. Todos en la ceremonia lloraron de felicidad. El equipo fue muy profesional y entregaron antes de tiempo.", occasion: "Boda" },
  { name: "Pablo López", location: "Valencia, España", rating: 5, text: "Para el día de la madre, una canción que habla de todos los momentos especiales con mi mamá. No existe regalo más bonito ni más personal.", occasion: "Día de la Madre" },
  { name: "Laura Sánchez", location: "Bilbao, España", rating: 5, text: "Increíble servicio. Hice una canción de memorial para honrar a mi abuela. Es tan hermosa que la escucho cada vez que la echo de menos. Gracias por esto.", occasion: "Memorial" },
  { name: "Javier Torres", location: "Málaga, España", rating: 5, text: "Regalé una canción de cumpleaños a mi mejor amigo con referencias a nuestros mejores momentos. Se emocionó muchísimo. ¡Servicio 10 de 10!", occasion: "Amistad" },
];

const genres = ["Pop", "Balada", "Country", "Rock", "Jazz", "R&B", "Reggaetón", "Clásico", "Folk", "Latin Pop"];

const faqs = [
  { q: "¿Cuánto tiempo tarda en estar lista mi canción?", a: "La mayoría de las canciones están listas en 24 horas desde que confirmas el pedido. Para pedidos exprés, podemos entregarla en menos de 12 horas." },
  { q: "¿Cuánto cuesta una canción personalizada?", a: "Los precios comienzan desde 59€ para una canción básica. Ofrecemos diferentes paquetes según la duración, número de revisiones y velocidad de entrega." },
  { q: "¿Puedo solicitar cambios en la canción?", a: "¡Por supuesto! Todos nuestros paquetes incluyen al menos una revisión gratuita. Nuestro objetivo es que quedes completamente satisfecho/a." },
  { q: "¿En qué formato recibiré la canción?", a: "Recibirás un archivo MP3 de alta calidad (320 kbps) por correo electrónico. También puedes solicitar formato WAV sin pérdida de calidad." },
  { q: "¿Qué idiomas están disponibles para las letras?", a: "Creamos canciones en español, inglés, portugués, francés, italiano y muchos más. Indícanos el idioma que prefieres al hacer el pedido." },
  { q: "¿Hay garantía de satisfacción?", a: "Sí, ofrecemos garantía de satisfacción del 100%. Si no estás satisfecho/a con el resultado, trabajamos contigo hasta que lo estés, o te devolvemos el dinero." },
];

const packages = [
  {
    name: "Esencial",
    price: "59",
    popular: false,
    delivery: "48 horas",
    features: ["Canción original personalizada", "Hasta 2 minutos de duración", "1 revisión incluida", "Entrega en MP3", "Letra personalizada"],
    cta: "Comenzar",
    color: COLORS.primaryLight,
  },
  {
    name: "Premium",
    price: "99",
    popular: true,
    delivery: "24 horas",
    features: ["Canción original personalizada", "Hasta 3 minutos de duración", "3 revisiones incluidas", "Entrega en MP3 y WAV", "Letra personalizada", "Instrumentación enriquecida", "Certificado digital"],
    cta: "Más Popular",
    color: COLORS.primary,
  },
  {
    name: "Maestro",
    price: "179",
    popular: false,
    delivery: "12 horas",
    features: ["Canción original personalizada", "Duración sin límite", "Revisiones ilimitadas", "Todos los formatos", "Letra personalizada", "Orquestación completa", "Certificado digital", "Video lyric personalizado"],
    cta: "Máxima Calidad",
    color: COLORS.primaryDark,
  },
];

// ─── AudioPlayer ───────────────────────────────────────────────────────────────
function AudioPlayer({ src, label }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play().catch(() => {}); setPlaying(true); }
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
  };
  const onLoadedMetadata = () => { if (audioRef.current) setDuration(audioRef.current.duration); };
  const onEnded = () => setPlaying(false);

  const seek = (e) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * audioRef.current.duration;
  };

  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(80,80,80,0.88)", borderRadius: 40, padding: "8px 16px 8px 8px", color: COLORS.white, minWidth: 220 }}>
      <audio ref={audioRef} src={src} preload="metadata" onTimeUpdate={onTimeUpdate} onLoadedMetadata={onLoadedMetadata} onEnded={onEnded} />
      <button onClick={toggle} style={{ width: 32, height: 32, borderRadius: "50%", background: COLORS.white, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} aria-label={playing ? "Pausar" : "Reproducir"}>
        <span style={{ color: COLORS.textDark, marginLeft: playing ? 0 : 2 }}>{playing ? <IconPause size={14} /> : <IconPlay size={14} />}</span>
      </button>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontSize: 12, fontWeight: 600 }}>{label}</span>
        <div onClick={seek} style={{ height: 4, background: "rgba(255,255,255,0.3)", borderRadius: 2, cursor: "pointer", position: "relative" }}>
          <div style={{ width: `${progress}%`, height: "100%", background: COLORS.accentLight, borderRadius: 2, transition: "width 0.1s" }} />
        </div>
      </div>
      {duration > 0 && <span style={{ fontSize: 11, opacity: 0.8 }}>{fmt(audioRef.current?.currentTime || 0)}</span>}
    </div>
  );
}

// ─── OrderModal ────────────────────────────────────────────────────────────────
function OrderModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ occasion: "", recipientName: "", senderName: "", story: "", genre: "", style: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const canNext1 = form.occasion && form.recipientName && form.senderName;
  const canNext2 = form.story.length >= 20;
  const canNext3 = form.genre;
  const canSubmit = form.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Enviar datos al backend real de Gift a Song
    setSubmitted(true);
  };

  const modalOverlay = { position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" };
  const modalBox = { background: COLORS.white, borderRadius: 16, width: "100%", maxWidth: 520, maxHeight: "90vh", overflowY: "auto", position: "relative", boxShadow: "0 24px 60px rgba(0,0,0,0.3)" };
  const modalHeader = { background: COLORS.primary, color: COLORS.white, padding: "20px 24px", borderRadius: "16px 16px 0 0", display: "flex", alignItems: "center", justifyContent: "space-between" };
  const inputStyle = { width: "100%", padding: "10px 14px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 15, fontFamily: FONT.sans, boxSizing: "border-box", outline: "none", transition: "border-color 0.2s" };
  const labelStyle = { display: "block", fontSize: 13, fontWeight: 600, color: COLORS.textMid, marginBottom: 6 };
  const btnPrimary = { background: COLORS.primary, color: COLORS.white, border: "none", borderRadius: 10, padding: "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: FONT.sans, transition: "background 0.2s" };

  const steps_labels = ["Destinatario", "Tu Historia", "Estilo Musical", "Contacto"];

  return (
    <div style={modalOverlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={modalBox}>
        <div style={modalHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <IconMusic size={20} color={COLORS.white} />
            <span style={{ fontFamily: FONT.serif, fontSize: 18, fontWeight: 700 }}>Crear Mi Canción</span>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", color: COLORS.white, display: "flex", alignItems: "center", justifyContent: "center" }}><IconX size={16} /></button>
        </div>

        {/* Progress */}
        <div style={{ padding: "16px 24px 0", display: "flex", gap: 6 }}>
          {steps_labels.map((s, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center" }}>
              <div style={{ height: 4, borderRadius: 2, background: i + 1 <= step ? COLORS.primary : COLORS.border, marginBottom: 4 }} />
              <span style={{ fontSize: 11, color: i + 1 <= step ? COLORS.primary : COLORS.textLight, fontWeight: i + 1 === step ? 700 : 400 }}>{s}</span>
            </div>
          ))}
        </div>

        <div style={{ padding: "20px 24px 28px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontFamily: FONT.serif, fontSize: 22, color: COLORS.primary, marginBottom: 8 }}>¡Pedido Recibido!</h3>
              <p style={{ color: COLORS.textMid, lineHeight: 1.6, marginBottom: 20 }}>Nuestros artistas comenzarán a crear la canción de <strong>{form.recipientName}</strong> de inmediato. La recibirás en <strong>{form.email}</strong> en menos de 24 horas.</p>
              <div style={{ background: COLORS.bgCream, borderRadius: 10, padding: "14px 18px", marginBottom: 20, textAlign: "left" }}>
                <p style={{ fontSize: 13, color: COLORS.textMid, margin: 0 }}>💌 Ocasión: <strong>{form.occasion}</strong></p>
                <p style={{ fontSize: 13, color: COLORS.textMid, margin: "4px 0 0" }}>🎵 Género: <strong>{form.genre}</strong></p>
              </div>
              <button onClick={onClose} style={{ ...btnPrimary, width: "100%" }}>Cerrar</button>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div>
                  <h3 style={{ fontFamily: FONT.serif, fontSize: 18, color: COLORS.primary, marginBottom: 20, margin: "0 0 20px" }}>¿Para quién es la canción?</h3>
                  <div style={{ marginBottom: 14 }}>
                    <label style={labelStyle}>Ocasión *</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                      {["Cumpleaños", "Aniversario", "Boda", "Día de la Madre", "Día del Padre", "Memorial", "Graduación", "Otro"].map(o => (
                        <button key={o} onClick={() => set("occasion", o)} style={{ padding: "9px 12px", border: `2px solid ${form.occasion === o ? COLORS.primary : COLORS.border}`, borderRadius: 8, background: form.occasion === o ? `${COLORS.primary}15` : COLORS.white, cursor: "pointer", fontSize: 13, fontWeight: form.occasion === o ? 700 : 400, color: form.occasion === o ? COLORS.primary : COLORS.textMid, transition: "all 0.2s" }}>{o}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={labelStyle}>Nombre del destinatario *</label>
                    <input style={inputStyle} value={form.recipientName} onChange={e => set("recipientName", e.target.value)} placeholder="Ej. María, papá, amor mío..." />
                  </div>
                  <div style={{ marginBottom: 22 }}>
                    <label style={labelStyle}>Tu nombre *</label>
                    <input style={inputStyle} value={form.senderName} onChange={e => set("senderName", e.target.value)} placeholder="Ej. Carlos" />
                  </div>
                  <button onClick={() => canNext1 && setStep(2)} style={{ ...btnPrimary, width: "100%", opacity: canNext1 ? 1 : 0.5 }}>Siguiente <IconArrowRight size={14} /></button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 style={{ fontFamily: FONT.serif, fontSize: 18, color: COLORS.primary, margin: "0 0 6px" }}>Cuéntanos vuestra historia</h3>
                  <p style={{ fontSize: 13, color: COLORS.textLight, marginBottom: 18 }}>Cuantos más detalles compartas, más personalizada y especial será la canción.</p>
                  <div style={{ marginBottom: 14 }}>
                    <label style={labelStyle}>Tu historia, recuerdos y momentos especiales *</label>
                    <textarea style={{ ...inputStyle, minHeight: 140, resize: "vertical" }} value={form.story} onChange={e => set("story", e.target.value)} placeholder="Ej. Nos conocimos en la universidad, el primer viaje que hicimos juntos fue a Roma, siempre recuerdo cómo ríes cuando cuentas ese chiste..." />
                    <p style={{ fontSize: 11, color: canNext2 ? COLORS.success : COLORS.textLight, marginTop: 4 }}>{form.story.length < 20 ? `Mínimo 20 caracteres (${form.story.length}/20)` : "✓ Perfecto"}</p>
                  </div>
                  <div style={{ marginBottom: 22 }}>
                    <label style={labelStyle}>Palabras o frases especiales que quieras incluir (opcional)</label>
                    <input style={inputStyle} value={form.style} onChange={e => set("style", e.target.value)} placeholder="Ej. 'te quiero hasta la luna', apodos, lugares especiales..." />
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={() => setStep(1)} style={{ ...btnPrimary, background: COLORS.bgLight, color: COLORS.textMid, flex: 1 }}>Atrás</button>
                    <button onClick={() => canNext2 && setStep(3)} style={{ ...btnPrimary, flex: 2, opacity: canNext2 ? 1 : 0.5 }}>Siguiente <IconArrowRight size={14} /></button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 style={{ fontFamily: FONT.serif, fontSize: 18, color: COLORS.primary, margin: "0 0 6px" }}>¿Qué estilo musical prefieres?</h3>
                  <p style={{ fontSize: 13, color: COLORS.textLight, marginBottom: 18 }}>Elige el género que mejor representa el mensaje de tu canción.</p>
                  <div style={{ marginBottom: 22 }}>
                    <label style={labelStyle}>Género musical *</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                      {genres.map(g => (
                        <button key={g} onClick={() => set("genre", g)} style={{ padding: "9px 12px", border: `2px solid ${form.genre === g ? COLORS.primary : COLORS.border}`, borderRadius: 8, background: form.genre === g ? `${COLORS.primary}15` : COLORS.white, cursor: "pointer", fontSize: 13, fontWeight: form.genre === g ? 700 : 400, color: form.genre === g ? COLORS.primary : COLORS.textMid, transition: "all 0.2s" }}>{g}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={() => setStep(2)} style={{ ...btnPrimary, background: COLORS.bgLight, color: COLORS.textMid, flex: 1 }}>Atrás</button>
                    <button onClick={() => canNext3 && setStep(4)} style={{ ...btnPrimary, flex: 2, opacity: canNext3 ? 1 : 0.5 }}>Siguiente <IconArrowRight size={14} /></button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: FONT.serif, fontSize: 18, color: COLORS.primary, margin: "0 0 6px" }}>¿Dónde enviamos tu canción?</h3>
                  <p style={{ fontSize: 13, color: COLORS.textLight, marginBottom: 18 }}>Recibirás un archivo MP3 de alta calidad en menos de 24 horas.</p>
                  <div style={{ marginBottom: 18 }}>
                    <label style={labelStyle}>Tu correo electrónico *</label>
                    <input type="email" style={inputStyle} required value={form.email} onChange={e => set("email", e.target.value)} placeholder="tu@correo.com" />
                  </div>
                  <div style={{ background: COLORS.bgCream, borderRadius: 10, padding: "14px 16px", marginBottom: 20 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: COLORS.primary, marginBottom: 8 }}>Resumen de tu pedido:</p>
                    <p style={{ fontSize: 13, color: COLORS.textMid, margin: "2px 0" }}>🎁 Para: <strong>{form.recipientName}</strong> • {form.occasion}</p>
                    <p style={{ fontSize: 13, color: COLORS.textMid, margin: "2px 0" }}>🎵 Género: <strong>{form.genre}</strong></p>
                    <p style={{ fontSize: 13, color: COLORS.textMid, margin: "2px 0" }}>⏱ Entrega: <strong>menos de 24 horas</strong></p>
                  </div>
                  {/* TODO: Integrar pasarela de pago real (Stripe, etc.) */}
                  <div style={{ display: "flex", gap: 10 }}>
                    <button type="button" onClick={() => setStep(3)} style={{ ...btnPrimary, background: COLORS.bgLight, color: COLORS.textMid, flex: 1 }}>Atrás</button>
                    <button type="submit" style={{ ...btnPrimary, flex: 2, background: COLORS.accent, color: COLORS.primaryDark }}>🎵 Crear Mi Canción</button>
                  </div>
                  <p style={{ fontSize: 11, color: COLORS.textLight, textAlign: "center", marginTop: 12 }}>🔒 Pago seguro · Garantía 100% satisfacción</p>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Stars ─────────────────────────────────────────────────────────────────────
function Stars({ count = 5 }) {
  return <div style={{ display: "flex", gap: 2 }}>{Array.from({ length: count }).map((_, i) => <IconStar key={i} size={14} />)}</div>;
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredPkg, setHoveredPkg] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (modalOpen || menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen, menuOpen]);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const navLinks = [
    { label: "Cómo Funciona", id: "how-it-works" },
    { label: "Reseñas", id: "reviews" },
    { label: "Ocasiones", id: "occasions" },
    { label: "Precios", id: "pricing" },
    { label: "Preguntas", id: "faq" },
  ];

  // ── Estilos base ──
  const S = {
    page: { fontFamily: FONT.sans, color: COLORS.textDark, background: COLORS.bg, overflowX: "hidden" },
    header: { position: "sticky", top: 0, zIndex: 100, background: COLORS.white, borderBottom: `1px solid ${scrolled ? COLORS.border : "transparent"}`, boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.07)" : "none", transition: "all 0.3s" },
    headerInner: { maxWidth: 1100, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" },
    logo: { fontFamily: FONT.serif, fontSize: 22, fontWeight: 700, color: COLORS.primary, textDecoration: "none", letterSpacing: "-0.5px" },
    navLink: { background: "none", border: "none", cursor: "pointer", color: COLORS.textMid, fontSize: 14, fontWeight: 500, fontFamily: FONT.sans, padding: "4px 0", transition: "color 0.2s" },
    btnPrimary: { background: COLORS.primary, color: COLORS.white, border: "none", borderRadius: 10, padding: "11px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: FONT.sans, display: "inline-flex", alignItems: "center", gap: 7, transition: "background 0.2s, transform 0.15s", whiteSpace: "nowrap" },
    btnAccent: { background: COLORS.accent, color: COLORS.primaryDark, border: "none", borderRadius: 12, padding: "15px 32px", fontSize: 17, fontWeight: 800, cursor: "pointer", fontFamily: FONT.sans, display: "inline-flex", alignItems: "center", gap: 10, transition: "background 0.2s, transform 0.15s", boxShadow: "0 4px 20px rgba(201,168,76,0.35)" },
    section: { padding: "72px 20px" },
    sectionNarrow: { maxWidth: 800, margin: "0 auto" },
    sectionWide: { maxWidth: 1100, margin: "0 auto" },
    sectionTitle: { fontFamily: FONT.serif, fontSize: "clamp(26px, 5vw, 42px)", fontWeight: 700, color: COLORS.primary, textAlign: "center", marginBottom: 12, lineHeight: 1.2 },
    sectionSub: { textAlign: "center", color: COLORS.textMid, fontSize: "clamp(15px, 2.5vw, 18px)", lineHeight: 1.7, marginBottom: 48 },
    card: { background: COLORS.white, borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: `1px solid ${COLORS.border}` },
  };

  return (
    <div style={S.page}>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header style={S.header}>
        <div style={S.headerInner}>
          <a href="#" style={S.logo} aria-label="Gift a Song">
            <span style={{ fontWeight: 400 }}>Gift a</span>
            <span style={{ fontWeight: 700 }}> Song</span>
            <span style={{ color: COLORS.accent }}>.</span>
          </a>
          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 24 }} className="desktop-nav">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} style={S.navLink}
                onMouseEnter={e => e.target.style.color = COLORS.primary}
                onMouseLeave={e => e.target.style.color = COLORS.textMid}
              >{l.label}</button>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={() => setModalOpen(true)} style={S.btnPrimary}
              onMouseEnter={e => { e.currentTarget.style.background = COLORS.primaryDark; e.currentTarget.style.transform = "scale(1.02)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = COLORS.primary; e.currentTarget.style.transform = "scale(1)"; }}
            >
              <IconMusic size={14} color={COLORS.white} />Crear Mi Canción
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: COLORS.textDark, display: "none" }} className="mobile-menu-btn" aria-label="Menú">
              {menuOpen ? <IconX size={22} /> : <IconMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div style={{ background: COLORS.white, borderTop: `1px solid ${COLORS.border}`, padding: "16px 20px 20px" }}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} style={{ ...S.navLink, display: "block", width: "100%", textAlign: "left", padding: "12px 0", fontSize: 16, borderBottom: `1px solid ${COLORS.border}` }}>{l.label}</button>
            ))}
            <button onClick={() => { setModalOpen(true); setMenuOpen(false); }} style={{ ...S.btnPrimary, marginTop: 16, width: "100%", justifyContent: "center" }}>
              <IconMusic size={14} color={COLORS.white} />Crear Mi Canción
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{ background: COLORS.bgCream, position: "relative", overflow: "hidden" }}>
        {/* Top bar */}
        <div style={{ background: COLORS.primaryDark, padding: "10px 20px", textAlign: "center" }}>
          <p style={{ margin: 0, color: COLORS.white, fontSize: "clamp(11px, 2.5vw, 13px)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            La Plataforma #1 de Canciones Personalizadas · Entrega en 24 Horas
          </p>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", minHeight: "72vh" }} className="hero-grid">
          {/* Left */}
          <div style={{ padding: "60px 0 60px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${COLORS.accent}22`, border: `1px solid ${COLORS.accent}55`, borderRadius: 24, padding: "6px 14px", marginBottom: 24 }}>
              <span style={{ fontSize: 14 }}>⭐</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.primary }}>+50,000 canciones creadas · Valoración 4.9/5</span>
            </div>
            <h1 style={{ fontFamily: FONT.serif, fontSize: "clamp(30px, 5.5vw, 54px)", fontWeight: 700, color: COLORS.primary, lineHeight: 1.15, marginBottom: 20, letterSpacing: "-1px" }}>
              Convierte Tu Historia<br />
              <span style={{ color: COLORS.accent }}>en una Canción</span><br />
              Inolvidable
            </h1>
            <p style={{ fontSize: "clamp(16px, 2.2vw, 19px)", color: COLORS.textMid, lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
              Transformamos tus recuerdos, amor e historias en hermosas canciones personalizadas que hacen llorar de alegría. Producción profesional, letra única, entregada en 24 horas.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 36 }}>
              <button onClick={() => setModalOpen(true)} style={S.btnAccent}
                onMouseEnter={e => { e.currentTarget.style.background = COLORS.accentLight; e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = COLORS.accent; e.currentTarget.style.transform = "scale(1)"; }}
              >
                <IconGift size={20} />Crear Mi Canción Ahora
              </button>
              <AudioPlayer
                src="https://pub-c5934d753e714115b497bb6bce71a808.r2.dev/marketing/gift-experiment-sample.mp3"
                label="Escuchar Ejemplo"
              />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              {[["⚡", "Entrega en 24h"], ["🎤", "Artistas Profesionales"], ["💯", "Garantía Total"]].map(([ic, t]) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: COLORS.textMid, fontWeight: 600 }}>
                  <span>{ic}</span><span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero visual */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 0" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 420, borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(30,58,95,0.2)", aspectRatio: "4/3" }}>
              <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=840&q=80" alt="Músico creando una canción personalizada" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(30,58,95,0.65) 100%)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                <div style={{ background: "rgba(255,255,255,0.95)", borderRadius: 12, padding: "12px 16px", backdropFilter: "blur(8px)" }}>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: COLORS.primary }}>🎵 Canción en progreso...</p>
                  <p style={{ margin: "4px 0 0", fontSize: 12, color: COLORS.textMid }}>"Para el aniversario de Carlos y María"</p>
                  <div style={{ marginTop: 8, height: 4, background: COLORS.border, borderRadius: 2 }}>
                    <div style={{ width: "65%", height: "100%", background: COLORS.accent, borderRadius: 2 }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div style={{ position: "absolute", top: 30, right: -10, background: COLORS.white, borderRadius: 12, padding: "10px 14px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", border: `1px solid ${COLORS.border}` }}>
              <p style={{ margin: 0, fontSize: 22, fontWeight: 800, color: COLORS.primary }}>4.9 ★</p>
              <p style={{ margin: 0, fontSize: 11, color: COLORS.textLight }}>+2,800 reseñas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────── */}
      <section style={{ background: COLORS.white, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}`, padding: "24px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, alignItems: "center" }}>
          {[
            ["🎵", "+50.000", "Canciones Creadas"],
            ["⭐", "4.9/5", "Valoración Media"],
            ["⚡", "24h", "Entrega Garantizada"],
            ["🌍", "15+", "Idiomas Disponibles"],
            ["💯", "100%", "Satisfacción Garantizada"],
          ].map(([ic, val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p style={{ margin: "0 0 2px", fontSize: 22 }}>{ic}</p>
              <p style={{ margin: 0, fontSize: 20, fontWeight: 800, color: COLORS.primary }}>{val}</p>
              <p style={{ margin: 0, fontSize: 12, color: COLORS.textLight }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────── */}
      <section id="how-it-works" style={{ ...S.section, background: COLORS.bgCream }}>
        <div style={S.sectionWide}>
          <FadeIn>
            <h2 style={S.sectionTitle}>Cómo Funciona</h2>
            <p style={S.sectionSub}>Crear tu canción personalizada es fácil y rápido. Solo 4 pasos sencillos.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.1}>
                <div style={{ ...S.card, textAlign: "center", position: "relative" }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>{s.icon}</div>
                  <div style={{ position: "absolute", top: 16, right: 16, fontSize: 11, fontWeight: 800, color: COLORS.accent, letterSpacing: "0.1em" }}>{s.num}</div>
                  <h3 style={{ fontFamily: FONT.serif, fontSize: 18, fontWeight: 700, color: COLORS.primary, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: COLORS.textMid, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button onClick={() => setModalOpen(true)} style={S.btnAccent}
                onMouseEnter={e => { e.currentTarget.style.background = COLORS.accentLight; e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = COLORS.accent; e.currentTarget.style.transform = "scale(1)"; }}
              >
                <IconMusic size={18} />Comenzar Ahora
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── OCASIONES ─────────────────────────────────────── */}
      <section id="occasions" style={{ ...S.section, background: COLORS.white }}>
        <div style={S.sectionWide}>
          <FadeIn>
            <h2 style={S.sectionTitle}>Una Canción Para Cada Ocasión</h2>
            <p style={S.sectionSub}>Desde bodas hasta memoriales, cada momento especial merece una canción única creada con amor.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 16 }}>
            {occasions.map((o, i) => (
              <FadeIn key={o.label} delay={i * 0.05}>
                <div onClick={() => setModalOpen(true)} style={{ ...S.card, textAlign: "center", cursor: "pointer", transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(30,58,95,0.12)`; e.currentTarget.style.borderColor = COLORS.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)"; e.currentTarget.style.borderColor = COLORS.border; }}
                >
                  <div style={{ fontSize: 34, marginBottom: 8 }}>{o.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: COLORS.primary, margin: "0 0 4px" }}>{o.label}</h3>
                  <p style={{ fontSize: 12, color: COLORS.textLight, margin: 0 }}>{o.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ───────────────────────────────────────── */}
      <section id="reviews" style={{ ...S.section, background: COLORS.bgCream }}>
        <div style={S.sectionWide}>
          <FadeIn>
            <h2 style={S.sectionTitle}>Lo Que Dicen Nuestros Clientes</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 48 }}>
              <div style={{ display: "flex", gap: 3 }}>{Array.from({ length: 5 }).map((_, i) => <IconStar key={i} size={20} />)}</div>
              <span style={{ fontWeight: 700, fontSize: 18, color: COLORS.primary }}>4.9 de 5</span>
              <span style={{ color: COLORS.textLight, fontSize: 14 }}>+2,800 reseñas verificadas</span>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {reviews.map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.08}>
                <div style={{ ...S.card, position: "relative" }}>
                  <div style={{ position: "absolute", top: 16, right: 16, background: `${COLORS.accent}22`, borderRadius: 20, padding: "3px 10px" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: COLORS.primary }}>{r.occasion}</span>
                  </div>
                  <Stars count={r.rating} />
                  <p style={{ color: COLORS.textDark, lineHeight: 1.7, margin: "12px 0 16px", fontSize: 14, fontStyle: "italic" }}>"{r.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.white, fontWeight: 700, fontSize: 14 }}>{r.name[0]}</div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: COLORS.textDark }}>{r.name}</p>
                      <p style={{ margin: 0, fontSize: 12, color: COLORS.textLight }}>{r.location}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIOS ───────────────────────────────────────── */}
      <section id="pricing" style={{ ...S.section, background: COLORS.white }}>
        <div style={S.sectionWide}>
          <FadeIn>
            <h2 style={S.sectionTitle}>Precios Transparentes</h2>
            <p style={S.sectionSub}>Sin sorpresas. Elige el paquete que mejor se adapte a ti.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 960, margin: "0 auto" }}>
            {packages.map((pkg, i) => (
              <FadeIn key={pkg.name} delay={i * 0.1}>
                <div
                  style={{ ...S.card, position: "relative", border: pkg.popular ? `2px solid ${COLORS.primary}` : `1px solid ${COLORS.border}`, transform: hoveredPkg === pkg.name ? "translateY(-6px)" : pkg.popular ? "translateY(-4px)" : "none", transition: "all 0.25s", boxShadow: pkg.popular ? `0 8px 30px rgba(30,58,95,0.15)` : "0 2px 16px rgba(0,0,0,0.07)" }}
                  onMouseEnter={() => setHoveredPkg(pkg.name)}
                  onMouseLeave={() => setHoveredPkg(null)}
                >
                  {pkg.popular && (
                    <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: COLORS.primary, color: COLORS.white, borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
                      ⭐ Más Popular
                    </div>
                  )}
                  <div style={{ marginBottom: 20 }}>
                    <h3 style={{ fontFamily: FONT.serif, fontSize: 22, fontWeight: 700, color: pkg.color, marginBottom: 4 }}>{pkg.name}</h3>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span style={{ fontSize: 40, fontWeight: 800, color: COLORS.textDark }}>€{pkg.price}</span>
                      <span style={{ fontSize: 14, color: COLORS.textLight }}>/canción</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 6, color: pkg.color }}>
                      <IconClock size={14} /><span style={{ fontSize: 13, fontWeight: 600 }}>Entrega en {pkg.delivery}</span>
                    </div>
                  </div>
                  <ul style={{ listStyle: "none", margin: "0 0 24px", padding: 0 }}>
                    {pkg.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10, fontSize: 14, color: COLORS.textMid }}>
                        <span style={{ marginTop: 1, flexShrink: 0 }}><IconCheck size={16} color={COLORS.success} /></span>{f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setModalOpen(true)} style={{ ...S.btnPrimary, width: "100%", justifyContent: "center", background: pkg.color, fontSize: 15, padding: "13px 20px" }}
                    onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.1)"}
                    onMouseLeave={e => e.currentTarget.style.filter = ""}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginTop: 36 }}>
              {[["🔒", "Pago 100% Seguro"], ["💳", "Todas las Tarjetas"], ["♻️", "Garantía de Devolución"]].map(([ic, t]) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: COLORS.textMid, fontWeight: 600 }}>
                  <span style={{ fontSize: 18 }}>{ic}</span>{t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BANNER CTA ────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, ${COLORS.primaryDark} 0%, ${COLORS.primary} 60%, ${COLORS.primaryLight} 100%)`, padding: "72px 20px", textAlign: "center" }}>
        <FadeIn>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎵</div>
            <h2 style={{ fontFamily: FONT.serif, fontSize: "clamp(24px, 5vw, 40px)", fontWeight: 700, color: COLORS.white, marginBottom: 16, lineHeight: 1.2 }}>
              ¿Listo para regalar algo que nunca olvidarán?
            </h2>
            <p style={{ fontSize: "clamp(15px, 2.5vw, 18px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 36 }}>
              Únete a más de 50,000 personas que ya han creado canciones personalizadas con Gift a Song. El regalo más especial está a solo unos clics.
            </p>
            <button onClick={() => setModalOpen(true)} style={{ ...S.btnAccent, fontSize: 18, padding: "18px 40px" }}
              onMouseEnter={e => { e.currentTarget.style.background = COLORS.accentLight; e.currentTarget.style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = COLORS.accent; e.currentTarget.style.transform = "scale(1)"; }}
            >
              <IconGift size={22} />Crear Mi Canción Personalizada
            </button>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 16 }}>✓ Entrega en 24 horas · ✓ Garantía de satisfacción · ✓ Sin suscripciones</p>
          </div>
        </FadeIn>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section id="faq" style={{ ...S.section, background: COLORS.bgCream }}>
        <div style={{ ...S.sectionNarrow }}>
          <FadeIn>
            <h2 style={S.sectionTitle}>Preguntas Frecuentes</h2>
            <p style={S.sectionSub}>¿Tienes dudas? Te lo explicamos todo.</p>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.05}>
                <div style={{ background: COLORS.white, borderRadius: 12, border: `1px solid ${openFaq === i ? COLORS.primary : COLORS.border}`, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: "none", border: "none", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", textAlign: "left", gap: 16 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: COLORS.primary }}>{f.q}</span>
                    <span style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", flexShrink: 0, color: COLORS.primary }}><IconChevronDown size={18} /></span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 20px 18px", borderTop: `1px solid ${COLORS.border}` }}>
                      <p style={{ margin: "14px 0 0", fontSize: 14, color: COLORS.textMid, lineHeight: 1.7 }}>{f.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer style={{ background: COLORS.primaryDark, color: "rgba(255,255,255,0.75)", padding: "52px 20px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 36, marginBottom: 40 }}>
            <div>
              <h3 style={{ fontFamily: FONT.serif, fontSize: 22, fontWeight: 700, color: COLORS.white, marginBottom: 12 }}>
                Gift a<span style={{ color: COLORS.accent }}> Song</span>
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 16, color: "rgba(255,255,255,0.65)" }}>
                Transformamos tus historias en canciones únicas que emocionan para siempre.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {["📘", "📸", "🐦", "▶️"].map((ic, idx) => (
                  <button key={idx} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8, width: 36, height: 36, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                  >{ic}</button>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ color: COLORS.white, fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Ocasiones</h4>
              {["Aniversario", "Cumpleaños", "Boda", "Día de la Madre", "Memorial", "Graduación"].map(t => (
                <p key={t} style={{ margin: "0 0 8px", fontSize: 14 }}><button onClick={() => setModalOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.65)", fontSize: 14, padding: 0, fontFamily: FONT.sans, transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = COLORS.white}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
                >{t}</button></p>
              ))}
            </div>
            <div>
              <h4 style={{ color: COLORS.white, fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Empresa</h4>
              {["Sobre Nosotros", "Cómo Funciona", "Precios", "Blog", "Afiliados"].map(t => (
                <p key={t} style={{ margin: "0 0 8px", fontSize: 14 }}>
                  {/* TODO: Añadir rutas reales de navegación */}
                  <span style={{ color: "rgba(255,255,255,0.65)", cursor: "pointer" }}
                    onMouseEnter={e => e.target.style.color = COLORS.white}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
                  >{t}</span>
                </p>
              ))}
            </div>
            <div>
              <h4 style={{ color: COLORS.white, fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Soporte</h4>
              {["Centro de Ayuda", "Rastrear Pedido", "Política de Privacidad", "Términos de Uso", "Contacto"].map(t => (
                <p key={t} style={{ margin: "0 0 8px", fontSize: 14 }}>
                  {/* TODO: Añadir rutas reales */}
                  <span style={{ color: "rgba(255,255,255,0.65)", cursor: "pointer" }}
                    onMouseEnter={e => e.target.style.color = COLORS.white}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
                  >{t}</span>
                </p>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
            <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
              © 2024 Gift a Song. Todos los derechos reservados.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <IconShield size={14} />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Pago seguro · SSL cifrado</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── FAB ───────────────────────────────────────────── */}
      <button onClick={() => setModalOpen(true)} style={{ position: "fixed", bottom: 24, right: 24, zIndex: 90, background: COLORS.accent, color: COLORS.primaryDark, border: "none", borderRadius: "50%", width: 56, height: 56, cursor: "pointer", boxShadow: "0 6px 20px rgba(201,168,76,0.45)", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s, box-shadow 0.2s" }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(201,168,76,0.55)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(201,168,76,0.45)"; }}
        aria-label="Crear canción"
      >
        <IconMusic size={22} color={COLORS.primaryDark} />
      </button>

      {/* ── MODAL ─────────────────────────────────────────── */}
      {modalOpen && <OrderModal onClose={() => setModalOpen(false)} />}

      {/* ── RESPONSIVE CSS ────────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          .desktop-nav { display: none !important; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        button:focus-visible { outline: 2px solid #1e3a5f; outline-offset: 2px; }
      `}</style>
    </div>
  );
}
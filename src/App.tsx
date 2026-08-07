import { useState, useEffect } from 'react';
import {
  Music,
  FolderTree,
  WifiOff,
  FileText,
  Smartphone,
  Printer,
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowDown,
  ChevronDown,
  ShieldCheck,
  Quote,
  Search,
  FolderOpen,
  Clock,
  BookOpen,
  Users,
  Heart,
  Guitar,
  Church,
  Sparkles,
  Download,
} from 'lucide-react';

const features = [
  { icon: FileText, title: '1.300 cifras em PDF', desc: 'Um repertório completo de músicas católicas, prontas para tocar.' },
  { icon: FolderTree, title: 'Separadas por artista', desc: 'Cada artista com sua própria pasta, facilitando a busca.' },
  { icon: BookOpen, title: 'Ordem alfabética', desc: 'Músicas organizadas de A a Z dentro de cada pasta de artista.' },
  { icon: CheckCircle2, title: 'Formatação preservada', desc: 'PDFs mantêm os acordes na posição correta sobre a letra.' },
  { icon: WifiOff, title: 'Funciona offline', desc: 'Baixe uma vez e acesse sempre, mesmo sem conexão com a internet.' },
  { icon: Smartphone, title: 'Compatível com tudo', desc: 'Celular, tablet, notebook e computador. Abra em qualquer dispositivo.' },
  { icon: Printer, title: 'Pode imprimir', desc: 'Imprima as cifras que precisar, sempre que desejar.' },
  { icon: Zap, title: 'Acesso imediato', desc: 'Após a confirmação da compra, você recebe o link de download na hora.' },
];

const idealFor = [
  'Ministérios de música', 'Violonistas iniciantes', 'Violonistas experientes',
  'Grupos de oração', 'Comunidades católicas', 'Equipes de liturgia',
  'Missas', 'Adoração', 'Retiros', 'Encontros', 'Ensaios',
];

const beforeItems = [
  'Procurar músicas em vários sites',
  'Depender da internet',
  'Fechar anúncios',
  'Cifras desconfiguradas',
  'Perder tempo antes dos ensaios',
  'Dificuldade para imprimir',
];

const afterItems = [
  'Todo o repertório organizado',
  'Pesquisa rápida',
  'Funciona offline',
  'PDFs bem formatados',
  'Arquivos separados por artista',
  'Mais tranquilidade para tocar',
];

const faqs = [
  { q: 'Funciona no celular?', a: 'Sim. Você pode abrir normalmente em celulares Android e iPhone.' },
  { q: 'Precisa de internet?', a: 'Não. Depois de baixar os arquivos, tudo funciona totalmente offline.' },
  { q: 'Posso imprimir?', a: 'Sim. Os arquivos estão em PDF e podem ser impressos sempre que desejar.' },
  { q: 'As cifras ficam desconfiguradas?', a: 'Não. Os PDFs preservam a posição correta dos acordes sobre a letra da música.' },
  { q: 'Recebo imediatamente?', a: 'Sim. Após a confirmação do pagamento, você recebe acesso para fazer o download do material.' },
];

const sceneSteps = [
  'A missa vai começar. O padre já entrou.',
  'O ministério olha para você esperando o início da próxima música...',
  'E justamente naquele momento você não consegue encontrar a cifra.',
  'Você abre um site. Espera carregar. Fecha propagandas. A internet está lenta.',
  'A cifra abre toda desconfigurada. Os acordes ficam fora do lugar.',
  'Você procura outra versão... e perde minutos preciosos enquanto todos aguardam.',
];

const whyBad = [
  'A maioria das cifras está espalhada em diversos sites',
  'Cada música está em um lugar diferente',
  'Algumas possuem propagandas',
  'Outras demoram para carregar',
  'Muitas ficam desconfiguradas no celular',
  'Algumas simplesmente desaparecem da internet',
];

const whyGood = [
  'Você não depende mais de sites',
  'Depois de baixar, todo o repertório fica disponível',
  'Funciona sempre que precisar',
  'Mesmo sem internet',
  'Os acordes permanecem no lugar certo',
  'Tudo em um único lugar',
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showFloating, setShowFloating] = useState(false);
  const [buying, setBuying] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const offer = document.getElementById('comprar');
      if (offer) {
        const rect = offer.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setShowFloating(window.scrollY > 600 && !inView);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleBuy = () => {
    setBuying(true);
    setTimeout(() => setBuying(false), 2000);
  };

  const headerStyle: React.CSSProperties = scrolled
    ? { background: 'rgba(46,10,24,.95)', backdropFilter: 'blur(12px)', boxShadow: '0 2px 20px rgba(0,0,0,.2)' }
    : { background: 'transparent' };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#27272a', background: '#fefcf8', overflowX: 'hidden' }}>
      {/* DOWNLOAD BAR */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000, background: 'linear-gradient(90deg, #e8c544, #d4ab2c)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '0.5rem 1rem', fontSize: '0.85rem', fontWeight: 600, color: '#4a1327', flexWrap: 'wrap', textAlign: 'center' }}>
        <span>Baixe os arquivos da página de vendas:</span>
        <a href="/download/index.html" download style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#4a1327', color: '#fff', padding: '0.35rem 0.85rem', borderRadius: 6, textDecoration: 'none', fontSize: '0.8rem' }}><Download size={14} /> index.html</a>
        <a href="/download/style.css" download style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#4a1327', color: '#fff', padding: '0.35rem 0.85rem', borderRadius: 6, textDecoration: 'none', fontSize: '0.8rem' }}><Download size={14} /> style.css</a>
        <a href="/download/script.js" download style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#4a1327', color: '#fff', padding: '0.35rem 0.85rem', borderRadius: 6, textDecoration: 'none', fontSize: '0.8rem' }}><Download size={14} /> script.js</a>
        <a href="/biblioteca-cifras-catolicas.zip" download style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#4a1327', color: '#fff', padding: '0.35rem 0.85rem', borderRadius: 6, textDecoration: 'none', fontSize: '0.8rem' }}><Download size={14} /> Tudo (.zip)</a>
      </div>

      {/* HEADER */}
      <header style={{ position: 'fixed', top: 36, left: 0, right: 0, zIndex: 1000, transition: 'all 0.4s ease', ...headerStyle }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fefcf8' }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, background: 'linear-gradient(135deg, #e8c544, #b8901f)', borderRadius: 10, color: '#4a1327' }}>
              <Music size={22} />
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', fontWeight: 600 }}>Cifras Católicas</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="nav-desktop">
            {[
              { label: 'Benefícios', id: 'beneficios' },
              { label: 'Antes & Depois', id: 'antes-depois' },
              { label: 'Dúvidas', id: 'faq' },
            ].map((l) => (
              <a key={l.id} onClick={() => scrollTo(l.id)} style={{ color: 'rgba(255,255,255,.75)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>{l.label}</a>
            ))}
            <button onClick={() => scrollTo('comprar')} style={{ background: '#e8c544', color: '#4a1327', border: 'none', padding: '0.5rem 1.25rem', borderRadius: 8, fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>Adquirir</button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', padding: '6rem 1.5rem 4rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 30%, rgba(212,171,44,.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(122,31,58,.2) 0%, transparent 50%), linear-gradient(160deg, #2e0a18 0%, #4a1327 40%, #5e1830 100%)', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(212,171,44,.15)', border: '1px solid rgba(212,171,44,.3)', color: '#f5e8a8', padding: '0.5rem 1.25rem', borderRadius: 100, fontSize: '0.85rem', fontWeight: 500, marginBottom: '2rem' }}>
            <span style={{ width: 8, height: 8, background: '#e8c544', borderRadius: '50%', animation: 'pulseDot 2s ease-in-out infinite' }} />
            Acesso imediato após a compra
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#fefcf8', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Biblioteca de <span style={{ color: '#e8c544', fontStyle: 'italic' }}>Cifras Católicas</span> em PDF
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: 'rgba(255,255,255,.8)', fontWeight: 300, marginBottom: '2.5rem' }}>
            <strong style={{ color: '#efd975', fontWeight: 600 }}>1.300 cifras</strong> organizadas, prontas para tocar e disponíveis mesmo sem internet.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <button onClick={() => scrollTo('comprar')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #9b2b48, #5e1830)', color: '#fff', border: 'none', padding: '1.1rem 2.25rem', borderRadius: 8, fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 8px 30px rgba(122,31,58,.3)', transition: 'all 0.3s ease' }}>
              Quero minha biblioteca <ArrowRight size={20} />
            </button>
            <button onClick={() => scrollTo('beneficios')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#fefcf8', border: '2px solid rgba(255,255,255,.25)', padding: '1.1rem 2.25rem', borderRadius: 8, fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease' }}>
              Ver benefícios
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {[
              { num: '1.300', label: 'Cifras em PDF' },
              { num: '100%', label: 'Offline' },
              { num: '50+', label: 'Artistas' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 700, color: '#e8c544' }}>{s.num}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,.6)', fontWeight: 500, letterSpacing: '0.05em', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problema" style={{ padding: '6rem 0', background: '#fefcf8' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9b2b48', marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: '50%', width: '1.5rem', height: 2, background: '#e8c544', borderRadius: 2 }} />
            A situação que você conhece
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#4a1327', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>Você já passou por essa situação?</h2>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
            {sceneSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.25rem 1.5rem', background: '#faf5ea', borderRadius: 12, borderLeft: '3px solid #eb9fac', transition: 'all 0.3s ease' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, color: '#d96d82', flexShrink: 0, minWidth: '2rem' }}>0{i + 1}</span>
                <p style={{ color: '#3f3f46', fontSize: '1.05rem' }}>{step}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#52525b', lineHeight: 1.7, padding: '0 1rem' }}>
            Se você toca em missas, grupos de oração, adorações ou retiros, provavelmente essa cena já aconteceu com você.<br />
            Foi exatamente por viver isso durante anos que decidi criar uma solução definitiva.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solucao" style={{ padding: '6rem 0', background: 'linear-gradient(160deg, #4a1327, #2e0a18)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="solution-grid">
          <div>
            <div style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#efd975', marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: '50%', width: '1.5rem', height: 2, background: '#e8c544', borderRadius: 2 }} />
              A solução
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fefcf8', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>A solução que eu gostaria de ter encontrado anos atrás</h2>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>Depois de muito tempo tocando em celebrações, ensaios e encontros, fui organizando meu próprio repertório.</p>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>Sempre que encontrava uma cifra bem feita, eu salvava. Quando encontrava uma versão melhor, substituía. Quando percebia erros de formatação, corrigia.</p>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>Após anos fazendo isso, reuni um acervo com <strong style={{ color: '#efd975' }}>1.300 cifras católicas</strong>, organizado para facilitar a vida de quem realmente toca na igreja.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: '#efd975', marginTop: '1.5rem' }}>Agora você também pode ter esse material.</p>
          </div>
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {[
              { icon: Music, title: '1.300 Cifras', desc: 'Um acervo completo, construído ao longo de anos de experiência em celebrações.' },
              { icon: FolderTree, title: 'Organizadas por artista', desc: 'Cada artista em sua pasta. Músicas em ordem alfabética. Encontre em segundos.' },
              { icon: WifiOff, title: 'Totalmente offline', desc: 'Baixe uma vez e use para sempre. Sem internet, sem anúncios, sem travamentos.' },
            ].map((c) => (
              <div key={c.title} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '1.75rem', backdropFilter: 'blur(10px)', transition: 'all 0.4s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, background: 'linear-gradient(135deg, rgba(212,171,44,.2), rgba(212,171,44,.05))', borderRadius: 12, color: '#e8c544', marginBottom: '1rem' }}>
                  <c.icon size={28} />
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fefcf8', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{c.title}</h3>
                <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="beneficios" style={{ padding: '6rem 0', background: '#fefcf8' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9b2b48', marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: '50%', width: '1.5rem', height: 2, background: '#e8c544', borderRadius: 2 }} />
            O que você recebe
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#4a1327', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>Tudo o que está incluso</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="features-grid">
            {features.map((f) => (
              <div key={f.title} style={{ background: '#fff', borderRadius: 20, padding: '1.75rem 1.5rem', border: '1px solid #e4e4e7', transition: 'all 0.4s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, background: 'linear-gradient(135deg, #fdf2f4, #fbe4e8)', color: '#9b2b48', borderRadius: 12, marginBottom: '1.25rem' }}>
                  <f.icon size={24} />
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', color: '#4a1327', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#52525b', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="porque" style={{ padding: '6rem 0', background: '#faf5ea' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9b2b48', marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: '50%', width: '1.5rem', height: 2, background: '#e8c544', borderRadius: 2 }} />
            Por que faz diferença
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#4a1327', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>Por que este material faz tanta diferença?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'start' }} className="why-grid">
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center' }}>O problema de hoje</h3>
              <div style={{ display: 'grid', gap: '0.875rem' }}>
                {whyBad.map((item) => (
                  <div key={item} style={{ padding: '1rem 1.25rem 1rem 2.75rem', background: '#fff', color: '#3f3f46', border: '1px solid #e4e4e7', borderRadius: 12, position: 'relative', fontSize: '1rem', lineHeight: 1.5 }}>
                    <XCircle size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#dc2626' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '3rem', color: '#b8901f' }} className="why-arrow">
              <ArrowRight size={48} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center' }}>Com a biblioteca</h3>
              <div style={{ display: 'grid', gap: '0.875rem' }}>
                {whyGood.map((item) => (
                  <div key={item} style={{ padding: '1rem 1.25rem 1rem 2.75rem', background: 'rgba(22,163,74,.06)', color: '#27272a', border: '1px solid rgba(22,163,74,.15)', borderRadius: 12, position: 'relative', fontSize: '1rem', lineHeight: 1.5 }}>
                    <CheckCircle2 size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#16a34a' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF SECTION */}
      <section id="pdf" style={{ padding: '6rem 0', background: 'linear-gradient(160deg, #4a1327, #2e0a18)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="pdf-grid">
          <div>
            <div style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#efd975', marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: '50%', width: '1.5rem', height: 2, background: '#e8c544', borderRadius: 2 }} />
              Formatação que importa
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fefcf8', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>PDFs mantêm os acordes no lugar certo</h2>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>Quem toca sabe como isso faz diferença.</p>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>Em muitos sites, os acordes mudam de posição dependendo do tamanho da tela. Isso dificulta a leitura e aumenta a chance de erros durante a execução.</p>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>Nos arquivos em PDF, a formatação permanece preservada. Os acordes continuam posicionados corretamente sobre a letra, facilitando muito a leitura enquanto você toca.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 24px 60px rgba(0,0,0,.2)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: '#f1f1f3', borderBottom: '1px solid #e4e4e7' }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28ca42' }} />
              <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem', color: '#71717a' }}>cifra.pdf</span>
            </div>
            <div style={{ padding: '2rem', fontFamily: "'Courier New', monospace" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 600, color: '#4a1327', marginBottom: '1.5rem', textAlign: 'center', borderBottom: '2px solid #e8c544', paddingBottom: '0.75rem' }}>Pai Nosso</div>
              {[
                { chord: 'C', lyric: 'Pai nosso que estais nos céus' },
                { chord: 'G   Am', lyric: 'santificado seja o vosso nome' },
                { chord: 'F   C', lyric: 'venha a nós o vosso reino' },
                { chord: 'G   C', lyric: 'seja feita a vossa vontade' },
                { chord: 'F  G  C', lyric: 'assim na terra como no céu' },
              ].map((line, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.3rem', lineHeight: 1.5 }}>
                  <span style={{ color: '#9b2b48', fontWeight: 700, whiteSpace: 'pre', minWidth: '4rem' }}>{line.chord}</span>
                  <span style={{ color: '#3f3f46' }}>{line.lyric}</span>
                </div>
              ))}
              <div style={{ height: 1, background: '#e4e4e7', margin: '1rem 0' }} />
              {[
                { chord: 'Am   Em', lyric: 'O pão nosso de cada dia' },
                { chord: 'F   G', lyric: 'nos dai hoje' },
              ].map((line, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.3rem', lineHeight: 1.5 }}>
                  <span style={{ color: '#9b2b48', fontWeight: 700, whiteSpace: 'pre', minWidth: '4rem' }}>{line.chord}</span>
                  <span style={{ color: '#3f3f46' }}>{line.lyric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICALITY */}
      <section id="praticidade" style={{ padding: '6rem 0', background: '#fefcf8', textAlign: 'center' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9b2b48', marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: '50%', width: '1.5rem', height: 2, background: '#e8c544', borderRadius: 2 }} />
            Imagine a praticidade
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#4a1327', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>Imagine a praticidade</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: FolderOpen, label: 'Abra a pasta do artista' },
              { icon: Search, label: 'Escolha a música' },
              { icon: CheckCircle2, label: 'Encontre a cifra em poucos segundos' },
            ].map((s, i, arr) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '1.5rem 2rem', background: '#fff', borderRadius: 20, border: '1px solid #e4e4e7', minWidth: 180, transition: 'all 0.3s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, background: 'linear-gradient(135deg, #fdf2f4, #fbe4e8)', color: '#9b2b48', borderRadius: '50%' }}>
                    <s.icon size={28} />
                  </div>
                  <h4 style={{ fontSize: '1rem', color: '#4a1327', fontWeight: 600 }}>{s.label}</h4>
                </div>
                {i < arr.length - 1 && <div style={{ width: 40, height: 2, background: '#e8c544', borderRadius: 2 }} className="connector" />}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {['Sem pesquisar', 'Sem internet', 'Sem anúncios', 'Sem perder tempo'].map((t) => (
              <span key={t} style={{ background: '#fdf2f4', color: '#7a1f3a', padding: '0.5rem 1.25rem', borderRadius: 100, fontSize: '0.9rem', fontWeight: 500, border: '1px solid #fbe4e8' }}>{t}</span>
            ))}
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: '#5e1830', fontStyle: 'italic', maxWidth: 600, margin: '0 auto' }}>
            Enquanto outras pessoas ainda procuram a música, você já está pronto para tocar.
          </p>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section id="ideal" style={{ padding: '5rem 0', background: '#faf5ea' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9b2b48', marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: '50%', width: '1.5rem', height: 2, background: '#e8c544', borderRadius: 2 }} />
            Para quem é
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#4a1327', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>Ideal para</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {idealFor.map((item) => (
              <span key={item} style={{ background: '#fff', color: '#7a1f3a', padding: '0.75rem 1.5rem', borderRadius: 8, fontSize: '0.95rem', fontWeight: 500, border: '1px solid #e4e4e7', transition: 'all 0.3s ease', cursor: 'default' }}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section id="antes-depois" style={{ padding: '6rem 0', background: '#fefcf8' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9b2b48', marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: '50%', width: '1.5rem', height: 2, background: '#e8c544', borderRadius: 2 }} />
              A transformação
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#4a1327', letterSpacing: '-0.02em' }}>Antes e Depois</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="ba-grid">
            <div style={{ background: '#f1f1f3', border: '1px solid #e4e4e7', borderRadius: 20, padding: '2.5rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: '#dc2626', color: '#fff' }}><XCircle size={22} /></span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#3f3f46' }}>Antes</h3>
              </div>
              <div style={{ display: 'grid', gap: '0.875rem' }}>
                {beforeItems.map((item) => (
                  <div key={item} style={{ paddingLeft: '1.75rem', position: 'relative', lineHeight: 1.5, fontSize: '1rem', color: '#52525b' }}>
                    <XCircle size={16} style={{ position: 'absolute', left: 0, top: 2, color: '#dc2626' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'linear-gradient(160deg, #5e1830, #2e0a18)', border: '1px solid #7a1f3a', borderRadius: 20, padding: '2.5rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: '#16a34a', color: '#fff' }}><CheckCircle2 size={22} /></span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#fefcf8' }}>Depois</h3>
              </div>
              <div style={{ display: 'grid', gap: '0.875rem' }}>
                {afterItems.map((item) => (
                  <div key={item} style={{ paddingLeft: '1.75rem', position: 'relative', lineHeight: 1.5, fontSize: '1rem', color: 'rgba(255,255,255,.85)' }}>
                    <CheckCircle2 size={16} style={{ position: 'absolute', left: 0, top: 2, color: '#e8c544' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIME QUOTE */}
      <section id="tempo" style={{ padding: '6rem 0', background: 'linear-gradient(160deg, #2e0a18, #4a1327)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <Quote size={48} style={{ color: '#e8c544', opacity: 0.5, marginBottom: '0.5rem' }} />
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#fefcf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Quanto tempo você já perdeu procurando cifras?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1rem' }}>Pense em quantas vezes você precisou pesquisar uma música poucos minutos antes da missa.</p>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1rem' }}>Agora imagine ter praticamente todo o seu repertório organizado em um único lugar.</p>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1rem' }}>Você economiza tempo em todos os ensaios. Evita estresse. Encontra as músicas rapidamente.</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: '#efd975', fontStyle: 'italic', marginTop: '1.5rem' }}>E pode dedicar sua atenção ao que realmente importa: servir a Deus através da música.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '6rem 0', background: '#fefcf8' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9b2b48', marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: '50%', width: '1.5rem', height: 2, background: '#e8c544', borderRadius: 2 }} />
              Dúvidas frequentes
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#4a1327', letterSpacing: '-0.02em' }}>Perguntas Frequentes</h2>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#fff', border: `1px solid ${activeFaq === i ? '#e8c544' : '#e4e4e7'}`, borderRadius: 12, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: activeFaq === i ? '0 4px 16px rgba(0,0,0,.1)' : 'none' }}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 600, color: '#4a1327' }}>
                  <span>{faq.q}</span>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: activeFaq === i ? '#e8c544' : '#fdf2f4', color: '#9b2b48', flexShrink: 0, transition: 'all 0.3s ease', transform: activeFaq === i ? 'rotate(180deg)' : 'none' }}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                <div style={{ maxHeight: activeFaq === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                  <p style={{ padding: '0 1.5rem 1.25rem', color: '#52525b', fontSize: '1rem', lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="comprar" style={{ padding: '6rem 0', background: '#faf5ea' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ background: '#fff', borderRadius: 28, boxShadow: '0 24px 60px rgba(0,0,0,.2)', overflow: 'hidden', position: 'relative', border: '1px solid #e4e4e7' }}>
            <div style={{ position: 'absolute', top: -2, left: -2, right: -2, height: 6, background: 'linear-gradient(90deg, #e8c544, #c0445f, #e8c544)', borderRadius: '28px 28px 0 0' }} />
            <div style={{ padding: '3rem 2.5rem 2.5rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-block', background: '#fdf2f4', color: '#7a1f3a', padding: '0.5rem 1.25rem', borderRadius: 100, fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>Comece a usar hoje mesmo</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.7rem', color: '#4a1327', marginBottom: '1rem', lineHeight: 1.3 }}>Biblioteca de 1.300 Cifras Católicas em PDF</h2>
              <p style={{ color: '#52525b', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>Em poucos minutos você poderá ter um repertório completo, organizado e sempre disponível para acompanhar você em missas, ensaios, grupos de oração e momentos de adoração.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem', textAlign: 'left' }}>
                {['1.300 cifras em PDF', 'Separadas por artista', 'Funciona offline', 'Acesso imediato'].map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500, color: '#3f3f46' }}>
                    <CheckCircle2 size={18} style={{ color: '#16a34a', flexShrink: 0 }} /> {f}
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#faf5ea', borderRadius: 12 }}>
                <div style={{ marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '1rem', color: '#a1a1aa', textDecoration: 'line-through' }}>De R$ 97,00</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '0.15rem' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 600, color: '#7a1f3a', marginTop: '0.5rem' }}>R$</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '4rem', fontWeight: 700, color: '#5e1830', lineHeight: 1 }}>47</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 600, color: '#7a1f3a', marginTop: '0.5rem' }}>{',00'}</span>
                </div>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#71717a', marginTop: '0.5rem' }}>ou 2x de R$ 24,50</span>
              </div>
              <button onClick={handleBuy} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #9b2b48, #5e1830)', color: '#fff', border: 'none', padding: '1.1rem 2.25rem', borderRadius: 8, fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 8px 30px rgba(122,31,58,.3)', transition: 'all 0.3s ease' }}>
                {buying ? <><CheckCircle2 size={20} /> Redirecionando...</> : <>Adquirir agora <ArrowRight size={20} /></>}
              </button>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', margin: '1.5rem 0' }}>
                {[
                  { icon: ShieldCheck, text: 'Compra 100% segura' },
                  { icon: Zap, text: 'Acesso imediato' },
                  { icon: WifiOff, text: 'Funciona offline' },
                ].map((g) => (
                  <span key={g.text} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: '#71717a' }}>
                    <g.icon size={16} style={{ color: '#16a34a' }} /> {g.text}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '0.95rem', color: '#52525b', lineHeight: 1.6, marginTop: '1.5rem', fontStyle: 'italic' }}>Chega de perder tempo procurando cifras na internet. Tenha tudo organizado em um único lugar e toque com mais tranquilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#2e0a18', padding: '3rem 0 2rem' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', color: '#fefcf8', marginBottom: '1rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 600 }}>
            <Music size={20} /> Cifras Católicas
          </div>
          <p style={{ color: 'rgba(255,255,255,.5)', fontSize: '0.9rem', maxWidth: 500, margin: '0 auto 1.5rem', lineHeight: 1.6 }}>Biblioteca de 1.300 Cifras Católicas em PDF. Organizadas, prontas para tocar e disponíveis mesmo sem internet.</p>
          <p style={{ color: 'rgba(255,255,255,.3)', fontSize: '0.8rem' }}>&copy; 2025 Biblioteca de Cifras Católicas. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* FLOATING CTA */}
      {showFloating && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999, display: 'flex', justifyContent: 'center', padding: '1rem', background: 'linear-gradient(to top, #2e0a18, transparent)' }}>
          <button onClick={() => scrollTo('comprar')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #9b2b48, #5e1830)', color: '#fff', border: 'none', padding: '0.875rem 1.75rem', borderRadius: 8, fontSize: '1rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 8px 30px rgba(0,0,0,.4)' }}>
            Adquirir agora — R$ 47
          </button>
        </div>
      )}


    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from 'react'
import { Heart, Handshake, HeartHandshake, HeartCrack, Puzzle, Wallet, Stethoscope, Smile } from 'lucide-react'
import './LeituraAnjoGuarda.css'

// --- Zodiac sign → months data ---
interface MonthData {
  month: string
  days: number[]
}

// --- Decades for Step 3 ---
const DECADES = [1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010]

function getYearsForDecade(decade: number): number[] {
  return Array.from({ length: 10 }, (_, i) => decade + i)
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

/* <!-- TRADUZIDO --> */
const SIGN_MONTHS: Record<string, MonthData[]> = {
  'Aries':       [{ month: 'Marzo',      days: range(21, 31) }, { month: 'Abril',      days: range(1, 19) }],
  'Tauro':       [{ month: 'Abril',      days: range(20, 30) }, { month: 'Mayo',       days: range(1, 20) }],
  'Géminis':     [{ month: 'Mayo',       days: range(21, 31) }, { month: 'Junio',      days: range(1, 21) }],
  'Cáncer':      [{ month: 'Junio',      days: range(22, 30) }, { month: 'Julio',      days: range(1, 22) }],
  'Leo':         [{ month: 'Julio',      days: range(23, 31) }, { month: 'Agosto',     days: range(1, 22) }],
  'Virgo':       [{ month: 'Agosto',     days: range(23, 31) }, { month: 'Septiembre', days: range(1, 22) }],
  'Libra':       [{ month: 'Septiembre', days: range(23, 30) }, { month: 'Octubre',    days: range(1, 22) }],
  'Escorpio':    [{ month: 'Octubre',    days: range(23, 31) }, { month: 'Noviembre',  days: range(1, 21) }],
  'Sagitario':   [{ month: 'Noviembre',  days: range(22, 30) }, { month: 'Diciembre',  days: range(1, 21) }],
  'Capricornio': [{ month: 'Diciembre',  days: range(22, 31) }, { month: 'Enero',      days: range(1, 19) }],
  'Acuario':     [{ month: 'Enero',      days: range(20, 31) }, { month: 'Febrero',    days: range(1, 18) }],
  'Piscis':      [{ month: 'Febrero',    days: range(19, 28) }, { month: 'Marzo',      days: range(1, 20) }],
}

// --- Step 2 Component ---
interface Step2Props {
  sign: string
  onBack: () => void
  onSelectDay: (day: number, month: string) => void
}

function Step2({ sign, onBack, onSelectDay }: Step2Props) {
  const [selectedDay, setSelectedDay] = useState<{ month: string; day: number } | null>(null)
  const months = SIGN_MONTHS[sign] ?? []

  const handleDayClick = (month: string, day: number) => {
    setSelectedDay({ month, day })
    onSelectDay(day, month)
  }

  return (
    <div className="quiz-step2 ga4983248">
      <div className="background-image-sign">
        <img src="/bg-anjo.png" alt="" />
      </div>
      <section className="eh90427">
        <div className="hf-4920" style={{ paddingTop: 200 }}>
          <div className="alerta-vibracional">
            <span className="alerta-icon">⚠️</span>
            <span className="alerta-text">Alerta Vibracional</span>
            <span className="alerta-icon">⚠️</span>
          </div>
          {/* <!-- TRADUZIDO --> */}
          <h1 className="titulo-principal">
            ¿Tu Ángel está tratando de hablarte, pero tu radio está apagado?
          </h1>
          <h2 className="subtitulo-principal">
            Este test de 30 segundos te revela tu Ángel de la Guarda y te sintoniza con él
          </h2>
        </div>

        <div className="form-modal-og">
          <div className="progress-container">
            <div className="progress-step-text">Paso 2 de 8</div>
            <div className="progress-bar-top">
              <div className="progress-bar-fill" style={{ width: '25%' }} />
            </div>
          </div>

          <div className="form-container">
            <div className="form-content">
              {/* <!-- TRADUZIDO --> */}
              <h3>¿Cuál es tu Día de Nacimiento?</h3>
              <div className="dsc698">
                {months.map((m) => (
                  <div key={m.month} className="dc48194">
                    <div className="header31283">
                      <h4 style={{ margin: 0 }}>{m.month}</h4>
                    </div>
                    <div className="dt948389">
                      <ul className="ls318329">
                        {m.days.map((day) => (
                          <li
                            key={`${m.month}-${day}`}
                            data-value={day}
                            className={
                              selectedDay?.month === m.month && selectedDay?.day === day
                                ? 'active'
                                : ''
                            }
                            onClick={() => handleDayClick(m.month, day)}
                          >
                            {day}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="navigation-container">
                {/* <!-- TRADUZIDO --> */}
                <button className="btn-voltar" onClick={onBack}>
                  {'< Volver'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// --- Step 3 Component ---
interface Step3Props {
  onBack: () => void
  onSelectDecade: (decade: number) => void
  selectedDecade: number | null
}

function Step3({ onBack, onSelectDecade, selectedDecade }: Step3Props) {
  return (
    <div className="quiz-step2 ga4983248">
      <div className="background-image-sign">
        <img src="/bg-anjo.png" alt="" />
      </div>
      <section className="eh90427">
        <div className="hf-4920" style={{ paddingTop: 200 }}>
          <div className="alerta-vibracional">
            <span className="alerta-icon">⚠️</span>
            <span className="alerta-text">Alerta Vibracional</span>
            <span className="alerta-icon">⚠️</span>
          </div>
          {/* <!-- TRADUZIDO --> */}
          <h1 className="titulo-principal">
            ¿Tu Ángel está tratando de hablarte, pero tu radio está apagado?
          </h1>
          <h2 className="subtitulo-principal">
            Este test de 30 segundos te revela tu Ángel de la Guarda y te sintoniza con él
          </h2>
        </div>

        <div className="form-modal-og">
          <div className="progress-container">
            <div className="progress-step-text">Paso 3 de 8</div>
            <div className="progress-bar-top">
              <div className="progress-bar-fill" style={{ width: '37.5%' }} />
            </div>
          </div>

          <div className="form-container">
            <div className="form-content">
              {/* <!-- TRADUZIDO --> */}
              <h3 className="titulo-pergunta-signo">¿En qué Década Naciste?</h3>
              <div className="decade-selector">
                <ul className="decade-grid">
                  {DECADES.map((decade) => (
                    <li key={decade} className="decade-grid-item">
                      <button
                        className={`decade-button ${selectedDecade === decade ? 'decade-button--highlight' : ''}`}
                        onClick={() => onSelectDecade(decade)}
                      >
                        {decade}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="navigation-container">
                {/* <!-- TRADUZIDO --> */}
                <button className="btn-voltar" onClick={onBack}>
                  {'< Volver'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// --- Step 4 Component ---
interface Step4Props {
  decade: number
  selectedYear: number | null
  onBack: () => void
  onSelectYear: (year: number) => void
}

function Step4({ decade, selectedYear, onBack, onSelectYear }: Step4Props) {
  const years = getYearsForDecade(decade)

  return (
    <div className="quiz-step2 ga4983248">
      <div className="background-image-sign">
        <img src="/bg-anjo.png" alt="" />
      </div>
      <section className="eh90427">
        <div className="hf-4920" style={{ paddingTop: 200 }}>
          <div className="alerta-vibracional">
            <span className="alerta-icon">⚠️</span>
            <span className="alerta-text">Alerta Vibracional</span>
            <span className="alerta-icon">⚠️</span>
          </div>
          {/* <!-- TRADUZIDO --> */}
          <h1 className="titulo-principal">
            ¿Tu Ángel está tratando de hablarte, pero tu radio está apagado?
          </h1>
          <h2 className="subtitulo-principal">
            Este test de 30 segundos te revela tu Ángel de la Guarda y te sintoniza con él
          </h2>
        </div>

        <div className="form-modal-og">
          <div className="progress-container">
            <div className="progress-step-text">Paso 4 de 8</div>
            <div className="progress-bar-top">
              <div className="progress-bar-fill" style={{ width: '50%' }} />
            </div>
          </div>

          <div className="form-container">
            <div className="form-content">
              {/* <!-- TRADUZIDO --> */}
              <h3 className="titulo-pergunta-signo">¿En qué Año Naciste?</h3>
              <div className="decade-selector">
                <ul className="decade-grid">
                  {years.map((year) => (
                    <li key={year} className="decade-grid-item" style={{ flexBasis: 'calc(33.333% - 10px)' }}>
                      <button
                        className={`decade-button ${selectedYear === year ? 'decade-button--highlight' : ''}`}
                        onClick={() => onSelectYear(year)}
                      >
                        {year}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="navigation-container">
                {/* <!-- TRADUZIDO --> */}
                <button className="btn-voltar" onClick={onBack}>
                  {'< Volver'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// --- Step 5 Component ---
interface Step5Props {
  onBack: () => void
  selectedCivilState: string | null
  onSelectCivilState: (value: string) => void
}

function Step5({ onBack, selectedCivilState, onSelectCivilState }: Step5Props) {
  /* <!-- TRADUZIDO --> */
  const civilStates = [
    { key: 'casado', label: 'Casado(a)', Icon: Handshake },
    { key: 'namorando', label: 'En una relación', Icon: Heart },
    { key: 'noivo', label: 'Comprometido(a)', Icon: HeartHandshake },
    { key: 'solteiro', label: 'Soltero(a)', Icon: Heart },
    { key: 'separado', label: 'Separado(a)', Icon: Puzzle },
    { key: 'viuvo', label: 'Viudo(a)', Icon: HeartCrack },
  ]

  return (
    <div className="quiz-step2 ga4983248">
      <div className="background-image-sign">
        <img src="/bg-anjo.png" alt="" />
      </div>
      <section className="eh90427">
        <div className="hf-4920" style={{ paddingTop: 200 }}>
          <div className="alerta-vibracional">
            <span className="alerta-icon">⚠️</span>
            <span className="alerta-text">Alerta Vibracional</span>
            <span className="alerta-icon">⚠️</span>
          </div>
          {/* <!-- TRADUZIDO --> */}
          <h1 className="titulo-principal">
            ¿Tu Ángel está tratando de hablarte, pero tu radio está apagado?
          </h1>
          <h2 className="subtitulo-principal">
            Este test de 30 segundos te revela tu Ángel de la Guarda y te sintoniza con él
          </h2>
        </div>

        <div className="form-modal-og">
          <div className="progress-container">
            <div className="progress-step-text">Paso 5 de 8</div>
            <div className="progress-bar-top">
              <div className="progress-bar-fill" style={{ width: '62.5%' }} />
            </div>
          </div>

          <div className="form-container">
            <div className="form-content">
              {/* <!-- TRADUZIDO --> */}
              <h3 className="titulo-pergunta-signo">¿Cuál es tu Estado Civil?</h3>
              <div className="decade-selector">
                <ul className="decade-grid">
                  {civilStates.map(({ key, label, Icon }) => (
                    <li key={key} className="decade-grid-item" style={{ flexBasis: 'calc(50% - 10px)' }}>
                      <button
                        className={`decade-button ${selectedCivilState === key ? 'decade-button--highlight' : ''}`}
                        onClick={() => onSelectCivilState(key)}
                        style={{ minHeight: 120, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Icon size={36} strokeWidth={2.25} />
                        <span>{label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="navigation-container">
                {/* <!-- TRADUZIDO --> */}
                <button className="btn-voltar" onClick={onBack}>
                  {'< Volver'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// --- Step 6 Component ---
interface Step6Props {
  onBack: () => void
  selectedChallenge: string | null
  onSelectChallenge: (value: string) => void
}

function Step6({ onBack, selectedChallenge, onSelectChallenge }: Step6Props) {
  /* <!-- TRADUZIDO --> */
  const challenges = [
    { key: 'vida-amorosa', label: 'Vida Amorosa', Icon: Heart },
    { key: 'financas', label: 'Finanzas', Icon: Wallet },
    { key: 'saude', label: 'Salud', Icon: Stethoscope },
    { key: 'felicidade', label: 'Felicidad', Icon: Smile },
  ]

  return (
    <div className="quiz-step2 ga4983248">
      <div className="background-image-sign">
        <img src="/bg-anjo.png" alt="" />
      </div>
      <section className="eh90427">
        <div className="hf-4920" style={{ paddingTop: 200 }}>
          <div className="alerta-vibracional">
            <span className="alerta-icon">⚠️</span>
            <span className="alerta-text">Alerta Vibracional</span>
            <span className="alerta-icon">⚠️</span>
          </div>
          {/* <!-- TRADUZIDO --> */}
          <h1 className="titulo-principal">
            ¿Tu Ángel está tratando de hablarte, pero tu radio está apagado?
          </h1>
          <h2 className="subtitulo-principal">
            Este test de 30 segundos te revela tu Ángel de la Guarda y te sintoniza con él
          </h2>
        </div>

        <div className="form-modal-og">
          <div className="progress-container">
            <div className="progress-step-text">Paso 6 de 8</div>
            <div className="progress-bar-top">
              <div className="progress-bar-fill" style={{ width: '75%' }} />
            </div>
          </div>

          <div className="form-container">
            <div className="form-content">
              {/* <!-- TRADUZIDO --> */}
              <h3 className="titulo-pergunta-signo">¿Cuál es el Mayor Desafío de tu Vida en Este Momento?</h3>
              <div className="decade-selector">
                <ul className="decade-grid">
                  {challenges.map(({ key, label, Icon }) => (
                    <li key={key} className="decade-grid-item" style={{ flexBasis: 'calc(50% - 10px)' }}>
                      <button
                        className={`decade-button ${selectedChallenge === key ? 'decade-button--highlight' : ''}`}
                        onClick={() => onSelectChallenge(key)}
                        style={{ minHeight: 120, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Icon size={36} strokeWidth={2.25} />
                        <span>{label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="navigation-container">
                {/* <!-- TRADUZIDO --> */}
                <button className="btn-voltar" onClick={onBack}>
                  {'< Volver'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// --- Step 7 Component ---
interface Step7Props {
  onBack: () => void
  selectedGender: string | null
  onSelectGender: (value: string) => void
}

function Step7({ onBack, selectedGender, onSelectGender }: Step7Props) {
  /* <!-- TRADUZIDO --> */
  const genders = [
    { key: 'masculino', label: 'Masculino', symbol: '♂', symbolColor: '#2f6ee5' },
    { key: 'feminino', label: 'Femenino', symbol: '♀', symbolColor: '#eb3b92' },
  ]

  return (
    <div className="quiz-step2 ga4983248">
      <div className="background-image-sign">
        <img src="/bg-anjo.png" alt="" />
      </div>
      <section className="eh90427">
        <div className="hf-4920" style={{ paddingTop: 200 }}>
          <div className="alerta-vibracional">
            <span className="alerta-icon">⚠️</span>
            <span className="alerta-text">Alerta Vibracional</span>
            <span className="alerta-icon">⚠️</span>
          </div>
          {/* <!-- TRADUZIDO --> */}
          <h1 className="titulo-principal">
            ¿Tu Ángel está tratando de hablarte, pero tu radio está apagado?
          </h1>
          <h2 className="subtitulo-principal">
            Este test de 30 segundos te revela tu Ángel de la Guarda y te sintoniza con él
          </h2>
        </div>

        <div className="form-modal-og">
          <div className="progress-container">
            <div className="progress-step-text">Paso 7 de 8</div>
            <div className="progress-bar-top">
              <div className="progress-bar-fill" style={{ width: '87.5%' }} />
            </div>
          </div>

          <div className="form-container">
            <div className="form-content">
              {/* <!-- TRADUZIDO --> */}
              <h3 className="titulo-pergunta-signo">¿Cuál es tu Sexo?</h3>
              <div className="decade-selector" style={{ maxWidth: 360 }}>
                <ul className="decade-grid" style={{ gap: 12, margin: 0 }}>
                  {genders.map(({ key, label, symbol, symbolColor }) => (
                    <li key={key} className="decade-grid-item" style={{ flexBasis: '100%', margin: 0 }}>
                      <button
                        className={`decade-button ${selectedGender === key ? 'decade-button--highlight' : ''}`}
                        onClick={() => onSelectGender(key)}
                        style={{ minHeight: 130, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center' }}
                      >
                        <span style={{ fontSize: 84, lineHeight: 1, color: symbolColor, fontWeight: 700 }}>{symbol}</span>
                        <span>{label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="navigation-container">
                {/* <!-- TRADUZIDO --> */}
                <button className="btn-voltar" onClick={onBack}>
                  {'< Volver'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// --- Step 8 Placeholder Component ---
interface Step8Props {
  firstName: string
  onFirstNameChange: (value: string) => void
  onContinue: () => void
  onBack: () => void
}

function Step8({ firstName, onFirstNameChange, onContinue, onBack }: Step8Props) {
  return (
    <div className="quiz-step2 ga4983248">
      <div className="background-image-sign">
        <img src="/bg-anjo.png" alt="" />
      </div>
      <section className="eh90427">
        <div className="hf-4920" style={{ paddingTop: 200 }}>
          <div className="alerta-vibracional">
            <span className="alerta-icon">⚠️</span>
            <span className="alerta-text">Alerta Vibracional</span>
            <span className="alerta-icon">⚠️</span>
          </div>
          {/* <!-- TRADUZIDO --> */}
          <h1 className="titulo-principal">
            ¿Tu Ángel está tratando de hablarte, pero tu radio está apagado?
          </h1>
          <h2 className="subtitulo-principal">
            Este test de 30 segundos te revela tu Ángel de la Guarda y te sintoniza con él
          </h2>
        </div>

        <div className="form-modal-og">
          <div className="progress-container">
            <div className="progress-step-text">Paso 8 de 8</div>
            <div className="progress-bar-top">
              <div className="progress-bar-fill" style={{ width: '100%' }} />
            </div>
          </div>

          <div className="form-container">
            <div className="form-content">
              {/* <!-- TRADUZIDO --> */}
              <h3 className="titulo-pergunta-signo">¿Cuál es tu Primer Nombre?</h3>

              <div style={{ width: '100%', maxWidth: 520, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <input
                  value={firstName}
                  onChange={(e) => onFirstNameChange(e.target.value)}
                  placeholder="Escribe tu nombre"
                  style={{
                    width: '100%',
                    height: 56,
                    borderRadius: 8,
                    border: 'none',
                    outline: 'none',
                    padding: '0 18px',
                    fontSize: 20,
                    fontWeight: 600,
                    color: '#111',
                    background: '#fff',
                  }}
                />

                <button
                  className="decade-button"
                  onClick={onContinue}
                  style={{
                    width: '100%',
                    minHeight: 72,
                    fontSize: 38,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                    borderColor: '#4aa355',
                    boxShadow: '0 0 0 2px rgba(74, 163, 85, 0.45) inset',
                    opacity: firstName.trim() ? 1 : 0.7,
                  }}
                  disabled={!firstName.trim()}
                >
                  {/* <!-- TRADUZIDO --> */}
                  ¡Haz Clic Aquí Para Continuar!
                </button>
              </div>

              <div className="navigation-container">
                {/* <!-- TRADUZIDO --> */}
                <button className="btn-voltar" onClick={onBack}>
                  {'< Volver'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// --- Main Page ---
export default function LeituraAnjoGuarda() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>(1)
  const [selectedSign, setSelectedSign] = useState<string | null>(null)
  const [selectedBirthDate, setSelectedBirthDate] = useState<{ month: string; day: number } | null>(null)
  const [selectedDecade, setSelectedDecade] = useState<number | null>(null)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedCivilState, setSelectedCivilState] = useState<string | null>(null)
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null)
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [firstName, setFirstName] = useState('')

  // Inject click interceptor into the iframe after it loads
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      try {
        const doc = iframe.contentDocument
        if (!doc?.body) return

        const script = doc.createElement('script')
        script.textContent = `
          (function() {
            function attachListeners() {
              var buttons = document.querySelectorAll('.bs5829');
              buttons.forEach(function(btn) {
                btn.addEventListener('click', function() {
                  var p = btn.querySelector('p');
                  var sign = p ? p.textContent.trim() : '';
                  if (sign) {
                    window.parent.postMessage({ type: 'SIGN_SELECTED', sign: sign }, '*');
                  }
                });
              });
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', attachListeners);
            } else {
              attachListeners();
            }
          })();
        `
        doc.body.appendChild(script)
      } catch {
        // Cross-origin or sandbox restriction — no-op
      }
    }

    iframe.addEventListener('load', handleLoad)
    return () => iframe.removeEventListener('load', handleLoad)
  }, [])

  // Listen for postMessage from iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'SIGN_SELECTED' && typeof e.data.sign === 'string') {
        setSelectedSign(e.data.sign)
        setStep(2)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const handleVoltar = () => {
    setSelectedBirthDate(null)
    setSelectedDecade(null)
    setSelectedYear(null)
    setSelectedCivilState(null)
    setSelectedChallenge(null)
    setSelectedGender(null)
    setFirstName('')
    setSelectedSign(null)
    setStep(1)
    // Reload the iframe to reset Vue app back to step 1
    if (iframeRef.current) {
      iframeRef.current.src = '/Leitura do Anjo da Guarda.html'
    }
  }

  const handleSelectBirthDay = (day: number, month: string) => {
    setSelectedBirthDate({ day, month })
    setStep(3)
  }

  const handleStep3Back = () => {
    setStep(2)
  }

  const handleSelectDecade = (decade: number) => {
    setSelectedDecade(decade)
    setSelectedYear(null)
    setStep(4)
  }

  const handleStep4Back = () => {
    setStep(3)
  }

  const handleSelectYear = (year: number) => {
    setSelectedYear(year)
    setSelectedCivilState(null)
    setStep(5)
  }

  const handleStep5Back = () => {
    setStep(4)
  }

  const handleSelectCivilState = (value: string) => {
    setSelectedCivilState(value)
    setSelectedChallenge(null)
    setStep(6)
  }

  const handleStep6Back = () => {
    setStep(5)
  }

  const handleSelectChallenge = (value: string) => {
    setSelectedChallenge(value)
    setSelectedGender(null)
    setStep(7)
  }

  const handleStep7Back = () => {
    setStep(6)
  }

  const handleSelectGender = (value: string) => {
    setSelectedGender(value)
    setFirstName('')
    setStep(8)
  }

  const handleStep8Back = () => {
    setStep(7)
  }

  const handleContinueStep8 = () => {
    if (!firstName.trim()) {
      return
    }
    // Final step reached: keep state ready for the next integration point.
    setFirstName(firstName.trim())
  }

  return (
    <>
      {/* Step 1 — original HTML in iframe */}
      <div style={{ display: step === 1 ? 'block' : 'none' }}>
        <iframe
          ref={iframeRef}
          src="/Leitura do Anjo da Guarda.html"
          title="Lectura del Ángel de la Guarda" /* <!-- TRADUZIDO --> */
          style={{ width: '100%', minHeight: '100vh', display: 'block', border: 'none' }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>

      {/* Step 2 — React date picker */}
      {step === 2 && selectedSign && (
        <Step2 sign={selectedSign} onBack={handleVoltar} onSelectDay={handleSelectBirthDay} />
      )}

      {/* Step 3 — React decade picker */}
      {step === 3 && selectedSign && selectedBirthDate && (
        <Step3 onBack={handleStep3Back} onSelectDecade={handleSelectDecade} selectedDecade={selectedDecade} />
      )}

      {/* Step 4 — React year picker */}
      {step === 4 && selectedSign && selectedBirthDate && selectedDecade && (
        <Step4
          decade={selectedDecade}
          selectedYear={selectedYear}
          onBack={handleStep4Back}
          onSelectYear={handleSelectYear}
        />
      )}

      {/* Step 5 — Civil state picker */}
      {step === 5 && selectedSign && selectedBirthDate && selectedDecade && selectedYear && (
        <Step5
          onBack={handleStep5Back}
          selectedCivilState={selectedCivilState}
          onSelectCivilState={handleSelectCivilState}
        />
      )}

      {/* Step 6 — Main challenge picker */}
      {step === 6 && selectedSign && selectedBirthDate && selectedDecade && selectedYear && selectedCivilState && (
        <Step6
          onBack={handleStep6Back}
          selectedChallenge={selectedChallenge}
          onSelectChallenge={handleSelectChallenge}
        />
      )}

      {/* Step 7 — Gender picker */}
      {step === 7 && selectedSign && selectedBirthDate && selectedDecade && selectedYear && selectedCivilState && selectedChallenge && (
        <Step7
          onBack={handleStep7Back}
          selectedGender={selectedGender}
          onSelectGender={handleSelectGender}
        />
      )}

      {/* Step 8 — Placeholder */}
      {step === 8 && selectedSign && selectedBirthDate && selectedDecade && selectedYear && selectedCivilState && selectedChallenge && selectedGender && (
        <Step8
          firstName={firstName}
          onFirstNameChange={setFirstName}
          onContinue={handleContinueStep8}
          onBack={handleStep8Back}
        />
      )}
    </>
  )
}

import { useState, type FormEvent } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Droplets,
  Flame,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { SiteFooter, SiteHeader } from './SiteLayout'

const services = [
  {
    number: '01',
    icon: Droplets,
    title: 'Plumbing',
    description: 'From everyday leaks to a bathroom refresh, practical help for the water around your home.',
    detail: 'Repairs · Installations · Bathrooms',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Carefully finished pipework in a home',
    imageClass: 'plumbing-image',
  },
  {
    number: '02',
    icon: Flame,
    title: 'Heating',
    description: 'Help with the systems that keep your home warm and comfortable through the seasons.',
    detail: 'Boilers · Radiators · Heating systems',
    image: 'https://images.unsplash.com/photo-1591821290513-f8ad9d391909?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'A white radiator beneath a window in a home',
    imageClass: 'heating-image',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Repairs & maintenance',
    description: 'Straightforward support to find the issue, talk through options and get things working again.',
    detail: 'Diagnostics · Servicing · Maintenance',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'A serene, modern bathroom interior',
    imageClass: 'maintenance-image',
  },
]

function App() {
  const [enquirySubmitted, setEnquirySubmitted] = useState(false)

  const handleEnquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEnquirySubmitted(true)
  }

  return (
    <main>
      <SiteHeader activePage="home" />

      <section className="hero" id="home">
        <div className="hero-media">
          <img src="https://images.unsplash.com/photo-1749532125405-70950966b0e5?auto=format&fit=crop&w=1800&q=90" alt="A plumber working on plumbing fittings in a bathroom" />
          <div className="hero-image-wash" />
          <div className="hero-image-caption"><span className="caption-line" /> Thoughtful work for everyday living</div>
          <div className="hero-image-card"><span className="image-card-icon"><Droplets size={19} /></span><span>At home in<br /><strong>Nuneaton</strong></span><ArrowUpRight size={16} /></div>
        </div>
        <div className="page-shell hero-inner">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light"><span /> LOCAL PLUMBING &amp; HEATING</div>
            <h1>Better care<br />for your <em>home.</em></h1>
            <p className="hero-intro">Good plumbing is the kind you don’t have to think about. We’re here to help keep everything flowing, warm and working as it should.</p>
            <div className="hero-actions">
              <a className="button button-blue" href="/contact">Request a quote <ArrowRight size={17} /></a>
              <a className="button button-outline" href="#contact"><Phone size={16} /> Call now</a>
            </div>
            <p className="hero-placeholder"><span className="placeholder-dot" /> Phone number to be added</p>
            <a className="hero-scroll" href="#services">Discover what we do <ArrowDownRight size={15} /></a>
          </div>
        </div>
        <div className="hero-count"><span>01</span> <i /> APEX PLUMBING &amp; HEATING</div>
      </section>

      <section className="trust-strip" aria-label="Our service approach">
        <div className="page-shell trust-inner">
          <div className="trust-lead">A little more care<br /><span>goes a long way.</span></div>
          <div className="trust-item"><span className="trust-icon"><ShieldCheck size={21} /></span><span><strong>Considered workmanship</strong><small>Careful service at every step</small></span></div>
          <div className="trust-item"><span className="trust-icon"><Clock3 size={21} /></span><span><strong>Clear communication</strong><small>Know what to expect</small></span></div>
          <div className="trust-location"><MapPin size={17} /><span>BASED IN<br /><strong>NUNEATON, UK</strong></span></div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> HERE FOR THE EVERYDAY</div>
              <h2>Comfort starts<br />with <em>the right care.</em></h2>
            </div>
            <div className="heading-aside">
              <p>From a small repair to a bigger home project, find the right help for your plumbing and heating.</p>
              <a href="#contact" className="text-link">Talk through your project <ArrowRight size={16} /></a>
            </div>
          </div>

          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, description, detail, image, imageAlt, imageClass }) => (
              <article className="service-card" key={number}>
                <a className="service-image-wrap" href="#contact" aria-label={`Ask about ${title}`}>
                  <img className={imageClass} src={image} alt={imageAlt} loading="lazy" />
                  <span className="service-image-number">{number} <i /> 03</span>
                  <span className="service-image-link"><ArrowUpRight size={17} /></span>
                </a>
                <div className="service-card-body">
                  <div className="service-title-row"><span className="service-icon"><Icon size={18} strokeWidth={1.8} /></span><h3>{title}</h3></div>
                  <p>{description}</p>
                  <div className="service-bottom"><span>{detail}</span><a href="#contact" aria-label={`Enquire about ${title}`}><ArrowRight size={16} /></a></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-visual">
          <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1300&q=85" alt="Neatly finished plumbing pipework in a contemporary home" loading="lazy" />
          <div className="about-image-label"><span>THE APEX APPROACH</span><i /></div>
        </div>
        <div className="about-copy">
          <div className="eyebrow eyebrow-light"><span /> A GOOD FIT FOR YOUR HOME</div>
          <h2>Respect for<br />your space.<br /><em>Care in every detail.</em></h2>
          <p>Good work is about more than fixing a problem. It’s listening, keeping you in the loop and treating your home with the care it deserves.</p>
          <a href="#contact" className="text-link text-link-light">Meet your local plumbing team <ArrowRight size={16} /></a>
          <div className="about-signature"><span className="signature-rule" /><span>APEX <i>·</i> NUNEATON</span></div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="page-shell contact-inner">
          <div className="contact-intro">
            <div className="eyebrow"><span /> A GOOD PLACE TO START</div>
            <h2>Let’s talk about<br />what you <em>need.</em></h2>
            <p>Tell us a little about the job and we’ll help you figure out the next step.</p>
            <div className="contact-note"><Phone size={15} /><span>Phone number to be added</span></div>
            <div className="contact-demo-note"><span className="demo-note-icon"><ShieldCheck size={17} /></span><span><strong>Demonstration form</strong><small>Your details won’t be sent or stored.</small></span></div>
          </div>
          <form className="enquiry-form" onSubmit={handleEnquirySubmit}>
            <div className="form-heading"><span>REQUEST A QUOTE</span><i>All fields required</i></div>
            <div className="form-fields">
              <label className="form-field">
                <span>Your name</span>
                <input autoComplete="name" name="name" type="text" placeholder="e.g. Alex Taylor" required />
              </label>
              <label className="form-field">
                <span>Email address</span>
                <input autoComplete="email" name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label className="form-field">
                <span>Telephone number</span>
                <input autoComplete="tel" name="telephone" type="tel" placeholder="Your contact number" pattern="[0-9+().\s-]{7,}" title="Enter at least 7 digits or common phone number characters." required />
              </label>
              <label className="form-field">
                <span>Service required</span>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="heating">Heating</option>
                  <option value="repairs">Repairs &amp; maintenance</option>
                  <option value="other">Something else</option>
                </select>
              </label>
              <label className="form-field form-field-wide">
                <span>Brief description of the job</span>
                <textarea name="description" placeholder="Tell us a little about what you need help with…" rows={4} minLength={10} required />
              </label>
            </div>
            <div className="form-submit-row">
              <button className="button button-blue" type="submit">Send enquiry <ArrowRight size={17} /></button>
              <span>Demo only · No enquiry will be sent</span>
            </div>
            {enquirySubmitted && (
              <p className="form-status" role="status" aria-live="polite">
                <ShieldCheck size={18} />
                <span><strong>This is a demonstration form.</strong> No enquiry has been sent or stored.</span>
              </p>
            )}
            <span className="demo-note">Fictional demonstration business · Contact details are placeholders</span>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export default App

import { ArrowRight, Droplets, House, MessageCircle, ShieldCheck } from 'lucide-react'
import { SiteFooter, SiteHeader } from './SiteLayout'

const principles = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Quality workmanship',
    description: 'A thoughtful approach to the details, from understanding the job to taking care with the finish.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Clear communication',
    description: 'Plain, helpful conversations so you can understand the work and the next steps.',
  },
  {
    number: '03',
    icon: House,
    title: 'Respect for your home',
    description: 'Consideration for your space and routines while plumbing, heating and maintenance work is underway.',
  },
]

function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader activePage="about" />

      <section className="about-page-hero">
        <div className="about-page-image">
          <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1700&q=85" alt="Pipework and fixtures in a home" />
          <div className="about-page-image-wash" />
        </div>
        <div className="page-shell about-page-hero-inner">
          <div className="eyebrow eyebrow-light"><span /> APEX PLUMBING &amp; HEATING</div>
          <h1>Local care for<br /><em>the place you call home.</em></h1>
          <p>A fictional demonstration plumbing and heating business based around Nuneaton and the surrounding Warwickshire areas.</p>
          <a className="button button-blue" href="/contact">Request a quote <ArrowRight size={17} /></a>
          <span className="about-demo-tag"><span /> DEMONSTRATION BUSINESS</span>
        </div>
        <div className="about-page-image-caption"><span /> NUNEATON · WARWICKSHIRE</div>
      </section>

      <section className="about-story section-pad">
        <div className="page-shell about-story-inner">
          <div className="about-story-label"><span>01</span><i /> THE APEX APPROACH</div>
          <div className="about-story-copy">
            <h2>Good work begins<br />with <em>good care.</em></h2>
            <p>Apex Plumbing &amp; Heating is presented here as a local demonstration business for plumbing, heating and maintenance work. The idea is simple: understand what your home needs, explain the options clearly and approach the job with care.</p>
            <p>Whether it’s a plumbing repair, a heating issue or general home maintenance, the experience should feel considered from the first conversation through to the final details.</p>
            <a className="text-link" href="/services">See how we can help <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="principles-section section-pad">
        <div className="page-shell">
          <div className="principles-heading">
            <div className="eyebrow"><span /> WHAT MATTERS TO US</div>
            <h2>A better experience,<br /><em>by design.</em></h2>
            <p>Three simple principles shape the way this demonstration business approaches home service.</p>
          </div>
          <div className="principle-grid">
            {principles.map(({ number, icon: Icon, title, description }) => (
              <article className="principle-card" key={number}>
                <div className="principle-card-top"><span>{number} / 03</span><span className="principle-icon"><Icon size={20} strokeWidth={1.7} /></span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="principle-rule" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-cta">
        <div className="page-shell about-page-cta-inner">
          <div className="eyebrow eyebrow-light"><span /> A GOOD PLACE TO START</div>
          <h2>Tell us what your<br />home <em>needs.</em></h2>
          <p>For this demonstration, use the enquiry form to explore the contact experience. It won’t send or store your details.</p>
          <a className="button button-blue" href="/contact">Request a quote <ArrowRight size={17} /></a>
          <span className="about-cta-mark"><Droplets size={18} /> APEX <i>·</i> NUNEATON</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export default AboutPage

import {
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Flame,
  Wrench,
} from 'lucide-react'
import { SiteFooter, SiteHeader } from './SiteLayout'

const serviceDetails = [
  {
    id: 'plumbing',
    number: '01',
    icon: Droplets,
    title: 'Plumbing',
    intro: 'From the first sign of a leak to a bathroom refresh, practical plumbing support for the spaces you use every day.',
    items: ['Leaks and repairs', 'Pipework', 'Bathroom installations', 'General plumbing'],
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Pipework and plumbing fixtures in a home',
    imageClass: 'service-detail-plumbing',
    note: 'FOR THE FLOW OF HOME',
  },
  {
    id: 'heating',
    number: '02',
    icon: Flame,
    title: 'Heating',
    intro: 'Make your home feel comfortable with considered help for heating repairs, radiators and heating system needs.',
    items: ['Boiler-related services', 'Radiators', 'Heating systems', 'Heating repairs'],
    image: 'https://images.unsplash.com/photo-1591821290513-f8ad9d391909?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'A white radiator beneath a window in a home',
    imageClass: 'service-detail-heating',
    note: 'FOR A WARMER HOME',
  },
  {
    id: 'repairs',
    number: '03',
    icon: Wrench,
    title: 'Repairs & maintenance',
    intro: 'Help find the cause of a problem and take care of the small jobs that keep your home running smoothly.',
    items: ['General maintenance', 'Fault finding', 'Plumbing repairs', 'Home maintenance'],
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'A calm, modern bathroom interior',
    imageClass: 'service-detail-maintenance',
    note: 'FOR EVERYDAY PEACE OF MIND',
  },
]

function ServicesPage() {
  return (
    <main className="services-page">
      <SiteHeader activePage="services" />

      <section className="services-hero">
        <div className="services-hero-photo">
          <img src="https://images.unsplash.com/photo-1749532125405-70950966b0e5?auto=format&fit=crop&w=2000&q=90" alt="A plumber working on plumbing fittings in a bathroom" />
          <div className="services-hero-overlay" />
        </div>
        <div className="page-shell services-hero-inner">
          <div className="eyebrow eyebrow-light"><span /> PLUMBING &amp; HEATING, MADE SIMPLE</div>
          <h1>Care for the<br /><em>things that make</em><br />a home.</h1>
          <p>From a dripping tap to a heating repair, find thoughtful, practical help for your Nuneaton home.</p>
          <a className="button button-blue" href="#service-overview">Explore our services <ArrowRight size={17} /></a>
        </div>
        <div className="services-hero-mark"><span>APEX</span><i /> NUNEATON, UK</div>
      </section>

      <section className="service-overview" id="service-overview" aria-label="Service overview">
        <div className="page-shell service-overview-inner">
          <span>HELP AROUND THE HOME</span>
          {serviceDetails.map(({ id, number, title, icon: Icon }) => (
            <a href={`#${id}`} key={id}><Icon size={17} /><span>{number}</span>{title}<ArrowUpRight size={14} /></a>
          ))}
        </div>
      </section>

      <section className="service-details-section section-pad">
        <div className="page-shell">
          <div className="service-details-heading">
            <div className="eyebrow"><span /> HOW WE CAN HELP</div>
            <h2>Good work for<br />your <em>everyday.</em></h2>
            <p>A clear place to start, whatever needs attention around your home.</p>
          </div>

          <div className="service-details-list">
            {serviceDetails.map(({ id, number, icon: Icon, title, intro, items, image, imageAlt, imageClass, note }) => (
              <article className="service-detail" id={id} key={id}>
                <div className="service-detail-image">
                  <img className={imageClass} src={image} alt={imageAlt} loading="lazy" />
                  <span className="service-detail-image-note"><i /> {note}</span>
                  <span className="service-detail-index">{number} <i /> 03</span>
                </div>
                <div className="service-detail-copy">
                  <div className="service-detail-kicker"><span className="service-detail-icon"><Icon size={19} /></span><span>SERVICE {number}</span></div>
                  <h3>{title}</h3>
                  <p>{intro}</p>
                  <ul>
                    {items.map((item) => <li key={item}><span className="service-list-dot" />{item}</li>)}
                  </ul>
                  <a className="button button-blue" href="/contact">Request a quote <ArrowRight size={17} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="page-shell services-cta-inner">
          <div className="eyebrow eyebrow-light"><span /> A GOOD PLACE TO START</div>
          <h2>Something needs<br />a little <em>attention?</em></h2>
          <p>Tell us what’s going on and request a quote. We’ll help you figure out the next step.</p>
          <a className="button button-blue" href="/contact">Request a quote <ArrowRight size={17} /></a>
          <span className="services-cta-demo">Fictional demonstration business · Contact details are placeholders</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export default ServicesPage

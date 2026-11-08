import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Clock3, Mail, MapPin, ShieldCheck } from 'lucide-react'
import { SiteFooter, SiteHeader } from './SiteLayout'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <SiteHeader activePage="contact" />

      <section className="contact-page-hero">
        <div className="page-shell contact-page-hero-inner">
          <div className="eyebrow eyebrow-light"><span /> YOUR PROJECT, OUR STARTING POINT</div>
          <h1>Let’s talk about<br />your <em>project.</em></h1>
          <p>Whether it’s plumbing, heating or home maintenance, tell us a little about what you need help with.</p>
        </div>
        <div className="contact-page-hero-index"><span>APEX</span><i /> CONTACT</div>
      </section>

      <section className="contact-page-content section-pad">
        <div className="page-shell contact-page-grid">
          <div className="contact-page-aside">
            <div className="eyebrow"><span /> ENQUIRY FORM</div>
            <h2>A good place<br />to <em>begin.</em></h2>
            <p>Share a few details and the kind of work you have in mind. This is a demonstration form, so your information stays in this page and is not sent anywhere.</p>

            <div className="contact-alternative">
              <span className="alternative-icon"><Mail size={18} /></span>
              <div>
                <span className="alternative-kicker">ALTERNATIVE CONTACT</span>
                <h3>Genuine details will appear here.</h3>
                <p>A real phone number, email address and any service address would be added once supplied. This fictional demo has no live contact details or opening hours.</p>
              </div>
            </div>

            <div className="contact-area-note"><MapPin size={16} /><span>Demonstration service area<br /><strong>Nuneaton &amp; surrounding Warwickshire areas</strong></span></div>
          </div>

          <form className="enquiry-form contact-page-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span>PROJECT ENQUIRY</span><i><span className="required-star">*</span> Required fields</i></div>
            <p className="contact-form-intro">All fields are required to demonstrate the enquiry flow.</p>
            <div className="form-fields">
              <label className="form-field">
                <span>Full name <span className="required-star">*</span></span>
                <input autoComplete="name" name="name" type="text" placeholder="Your full name" required />
              </label>
              <label className="form-field">
                <span>Email address <span className="required-star">*</span></span>
                <input autoComplete="email" name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label className="form-field">
                <span>Phone number <span className="required-star">*</span></span>
                <input autoComplete="tel" name="phone" type="tel" placeholder="Your phone number" pattern="[0-9+().\s-]{7,}" title="Enter at least 7 digits or common phone number characters." required />
              </label>
              <label className="form-field">
                <span>Type of service <span className="required-star">*</span></span>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="heating">Heating</option>
                  <option value="maintenance">Repairs &amp; maintenance</option>
                  <option value="other">Something else</option>
                </select>
              </label>
              <label className="form-field form-field-wide">
                <span>Message <span className="required-star">*</span></span>
                <textarea name="message" placeholder="Describe the job you’d like help with…" rows={5} minLength={10} required />
                <small className="field-hint">Please include enough detail to describe the work you have in mind.</small>
              </label>
            </div>
            <div className="contact-form-submit">
              <button className="button button-blue" type="submit">Send enquiry <ArrowRight size={17} /></button>
              <span><ShieldCheck size={15} /> Demonstration only · Nothing will be sent</span>
            </div>
            {submitted && (
              <div className="form-status" role="status" aria-live="polite">
                <Check size={18} />
                <span><strong>Demonstration form complete.</strong> No enquiry has been sent or stored.</span>
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="contact-page-footnote">
        <div className="page-shell contact-page-footnote-inner">
          <Clock3 size={17} />
          <p><strong>No business hours are listed for this demo.</strong> Real contact channels and availability can be added when genuine business information is supplied.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export default ContactPage

import QuoteForm from "./components/QuoteForm";
import ReviewCarousel, { type Review } from "./components/ReviewCarousel";

const PHONE = "03 9000 0000";
const PHONE_HREF = "tel:0390000000";
const EMAIL = "hello@gumleaf.example";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#plans", label: "Maintenance plans" },
  { href: "#gallery", label: "Our work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#area", label: "Service area" },
  { href: "#faq", label: "FAQ" },
];

const heroPoints = [
  "Fully insured, $20M public liability",
  "Green waste removed every visit",
  "No lock-in contracts",
];

const stats = [
  { value: "12 yrs", label: "maintaining gardens in Melbourne's east" },
  { value: "380+", label: "regular clients across 16 suburbs" },
  { value: "24 hr", label: "quote turnaround" },
  { value: "4.9 / 5", label: "average customer rating" },
];

const services = [
  {
    title: "Lawn mowing & edging",
    img: "https://images.pexels.com/photos/6728926/pexels-photo-6728926.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Gardener mowing a lawn with a push mower",
    text: "Clean, striped couch, kikuyu and buffalo lawns with crisp edges, cut to suit Melbourne's seasons.",
    items: ["Mowing, edging and whipper-snipping", "Clippings blown off hard surfaces", "Spring and autumn feeding, plus bindii and clover control"],
    price: "From $55 per visit",
  },
  {
    title: "Garden maintenance",
    img: "https://images.unsplash.com/photo-1724556295135-ff92b9aa0a55?auto=format&fit=crop&w=900&q=75",
    alt: "Gardener in a hat and gloves weeding a lawn",
    text: "Regular visits that keep beds weeded, mulched and healthy through Melbourne's hot summers and wet winters.",
    items: ["Weeding and bed clean-ups", "Mulching and soil conditioning", "Leaf and green waste removal"],
    price: "From $65 per hour",
  },
  {
    title: "Hedging & pruning",
    img: "https://images.unsplash.com/photo-1763909129689-0ef3655fc03c?auto=format&fit=crop&w=900&q=75",
    alt: "Neatly clipped hedges beside a brick garden path",
    text: "Sharp, even hedges and shrubs, timed around the spring growth flush in the eastern suburbs.",
    items: ["Hedge shaping and height reduction", "Shrub and small tree pruning", "All cuttings taken away"],
    price: "From $90 per job",
  },
  {
    title: "Planting & garden beds",
    img: "https://images.pexels.com/photos/27176773/pexels-photo-27176773/free-photo-of-woman-planting-flowers-in-garden.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Gardener planting flowers in a garden bed",
    text: "New beds designed for the eastern suburbs' heavy clay soils, with natives suited to Melbourne's climate.",
    items: ["Bed design and soil preparation", "Local natives: grevilleas, correas, lomandras", "Edging, mulch and drip lines"],
    price: "From $65 per m²",
  },
  {
    title: "Landscaping & paving",
    img: "https://images.unsplash.com/photo-1761637822930-fb1c1a3df94d?auto=format&fit=crop&w=900&q=75",
    alt: "Modern garden with a stone retaining wall, paved path and hedges",
    text: "Paths, patios and retaining walls built to last on Melbourne's reactive clay, from a single step to a full backyard.",
    items: ["Bluestone, sandstone and pavers", "Sleeper and block retaining walls", "Turf laying and levelling"],
    price: "From $120 per m²",
  },
  {
    title: "Large blocks & commercial",
    img: "https://images.unsplash.com/photo-1629335493470-f22db7852d39?auto=format&fit=crop&w=900&q=75",
    alt: "Ride-on mower on a large green lawn",
    text: "Ride-on mowing and grounds care for acreage in Warrandyte and the Yarra Valley fringe, plus body corporates, schools and offices.",
    items: ["Ride-on and slasher mowing", "Council fire hazard clearances before summer", "Scheduled body corporate visits"],
    price: "Quoted per site",
  },
];

const aboutPhotos = [
  { src: "https://images.pexels.com/photos/6728930/pexels-photo-6728930.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Lawn being mowed on a sunny day" },
  { src: "https://images.pexels.com/photos/7728869/pexels-photo-7728869.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Gloved hands planting seedlings" },
  { src: "https://images.pexels.com/photos/6728919/pexels-photo-6728919.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Close-up of a mower cutting grass" },
];

const aboutChecks = [
  "Fixed visit day and crew",
  "Photo report after each visit",
  "Police-checked, uniformed staff",
  "Rain-day rescheduling by SMS",
];

const steps = [
  { title: "Tell us about your garden", text: "Call, or send the form below with your suburb and what needs doing. Photos help." },
  { title: "Free site visit", text: "We measure up and walk the garden with you, usually within 2 business days." },
  { title: "Fixed-price quote", text: "You get a written quote within 24 hours. The price you see is the price you pay." },
  { title: "We get to work", text: "Your crew starts on the agreed day and sends before-and-after photos when done." },
];

const plans = [
  {
    name: "Lawn Care",
    amount: "$55",
    text: "For gardens that mostly need the lawn kept in shape.",
    items: ["Fortnightly mowing in spring and summer", "Monthly in autumn and winter", "Edging, snipping and blow-down"],
    featured: false,
  },
  {
    name: "Full Garden",
    amount: "$120",
    text: "Everything in Lawn Care, plus the garden beds.",
    items: ["Weeding and bed tidy every visit", "Hedge and shrub trim each quarter", "Mulch top-up twice a year", "Green waste removal included"],
    featured: true,
  },
  {
    name: "Property Manager",
    amount: "$95",
    text: "For rentals and body corporates that need to stay inspection-ready.",
    items: ["Monthly visits with photo reports", "Invoices sent to agent or owner", "Pre-inspection tidy on request"],
    featured: false,
  },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1761637822930-fb1c1a3df94d?auto=format&fit=crop&w=1200&q=75", alt: "Landscaped garden with stone wall, path and hedges", caption: "Stone wall and path rebuild, Mitcham" },
  { src: "https://images.pexels.com/photos/6728925/pexels-photo-6728925.jpeg?auto=compress&cs=tinysrgb&w=700", alt: "Lawn mower cutting grass", caption: "Fortnightly mowing, Croydon" },
  { src: "https://images.pexels.com/photos/27176062/pexels-photo-27176062/free-photo-of-gardener-working-in-garden.jpeg?auto=compress&cs=tinysrgb&w=700", alt: "Gardener planting seedlings in a garden bed", caption: "New native bed, Ringwood" },
  { src: "https://images.unsplash.com/photo-1763909129689-0ef3655fc03c?auto=format&fit=crop&w=1200&q=75", alt: "Brick path through clipped hedges", caption: "Hedge maintenance, Box Hill" },
];

const reviews: Review[] = [
  {
    quote: "Same two guys every second Tuesday, and the photo they send afterwards means I don't even need to check. The edges have never looked this good.",
    initials: "SM",
    name: "Sample customer",
    detail: "Full Garden plan · Mitcham",
  },
  {
    quote: "We manage 40 rentals across the eastern suburbs and the monthly reports make our routine inspections far easier. Invoices come straight to the office.",
    initials: "PM",
    name: "Sample property manager",
    detail: "Property Manager plan · Ringwood",
  },
  {
    quote: "They rebuilt our collapsing sleeper wall and replanted the bed in natives. Quote was exactly the final bill, and they left the site spotless.",
    initials: "JT",
    name: "Sample customer",
    detail: "Landscaping · Croydon North",
  },
  {
    quote: "Our photinia hedge had got away from us. They brought it back to a clean line in one visit and now trim it every quarter before it gets out of hand.",
    initials: "KL",
    name: "Sample customer",
    detail: "Hedging & pruning · Blackburn",
  },
  {
    quote: "We needed the garden ready for an auction campaign with a week's notice. Mulched, edged and weeded in a day, and the agent noticed straight away.",
    initials: "RD",
    name: "Sample customer",
    detail: "One-off clean-up · Wantirna",
  },
  {
    quote: "Our lawn struggled every summer. After a season of proper feeding and a higher cut it stayed green right through February.",
    initials: "AN",
    name: "Sample customer",
    detail: "Lawn Care plan · Doncaster East",
  },
];

const suburbs = [
  "Ringwood", "Croydon", "Mitcham", "Box Hill", "Blackburn", "Nunawading", "Vermont", "Wantirna",
  "Bayswater", "Boronia", "Heathmont", "Donvale", "Warrandyte", "Mooroolbark", "Lilydale", "Doncaster East",
];

const faqs = [
  { q: "Which Melbourne suburbs do you service?", a: "We cover Melbourne's eastern suburbs within about 25 km of our Ringwood base, including Croydon, Mitcham, Box Hill, Blackburn, Doncaster East, Wantirna, Boronia, Warrandyte and Lilydale. Send us your suburb if you're not sure." },
  { q: "Do I need to be home when you visit?", a: "No. Most clients leave side gates unlocked or give us a code. We'll send a photo of the finished garden and a message when we've left." },
  { q: "Do you take the green waste away?", a: "Yes. All clippings, prunings and weeds are removed at the end of every visit and taken to a green waste recycler. It's included in our plan prices." },
  { q: "What happens if it rains on my visit day?", a: "We'll text you the evening before or that morning and move your visit to the next dry day, usually within 48 hours." },
  { q: "Am I locked into a contract?", a: "No. Maintenance plans run visit to visit. You can pause over holidays or cancel with one week's notice." },
  { q: "Are you insured?", a: "Yes. We carry $20 million public liability insurance and all staff are covered by WorkCover. Certificates are available on request." },
  { q: "Can you work with my real estate agent or body corporate?", a: "Yes. Our Property Manager plan sends invoices and photo reports directly to agents, owners or strata managers." },
  { q: "When is the best time to plant natives in Melbourne?", a: "Autumn is ideal. The soil is still warm and winter rain helps roots establish before summer. Spring planting works too, with drip irrigation to get plants through their first hot months." },
  { q: "How do I pay?", a: "We invoice after each visit or monthly. You can pay by bank transfer or card, or set up automatic payments." },
];

function Logo({ size }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" width={size} height={size}>
      <circle cx="20" cy="20" r="19" fill="#4f7a5a" />
      <path d="M20 31c-1-9 2-17 9-21-1 9-4 16-9 21z" fill="#e8b864" />
      <path d="M20 31c-4-6-5-12-2-18 3 6 3 12 2 18z" fill="#dfe8dc" />
    </svg>
  );
}

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Gumleaf Landscapes",
  description:
    "Lawn mowing, garden maintenance, hedging, planting and landscaping across Melbourne's eastern suburbs.",
  telephone: "+61 3 9000 0000",
  email: EMAIL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ringwood",
    addressRegion: "VIC",
    postalCode: "3134",
    addressCountry: "AU",
  },
  geo: { "@type": "GeoCoordinates", latitude: -37.8136, longitude: 145.229 },
  areaServed: suburbs.map((suburb) => ({ "@type": "Place", name: `${suburb} VIC` })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "16:30",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
      />
      <div className="topbar">
        <div className="wrap">
          <span className="hours">Mon – Fri 7:00am – 4:30pm · Sat 8:00am – 12:00pm</span>
          <span>
            Call for a free quote: <a href={PHONE_HREF}>{PHONE}</a>
          </span>
        </div>
      </div>

      <header className="site-header">
        <nav className="nav wrap" aria-label="Main">
          <a className="brand" href="#top" aria-label="Gumleaf Landscapes home">
            <Logo />
            Gumleaf Landscapes
          </a>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href="#contact">
            Get a free quote
          </a>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="photo">
            <img
              src="https://images.unsplash.com/photo-1734303023491-db8037a21f09?auto=format&fit=crop&w=1920&q=75"
              alt=""
              fetchPriority="high"
            />
          </div>
          <div className="hero-inner">
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              Melbourne lawn care · Garden maintenance · Landscaping
            </span>
            <h1>
              A tidy garden, <em>every fortnight</em>, without lifting a finger.
            </h1>
            <p className="lede">
              Gumleaf Landscapes looks after homes, rentals and body corporate grounds across Melbourne&apos;s eastern
              suburbs, from Ringwood and Croydon to Box Hill and Doncaster East. Mowing, hedging, weeding, planting and
              garden makeovers, all handled by one reliable local crew.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Get a free quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn btn-ghost" href="#services">
                View our services
              </a>
            </div>
            <ul className="hero-points">
              {heroPoints.map((point) => (
                <li key={point}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#e8b864" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="trust" aria-label="Key figures">
          <div className="wrap">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Our services</span>
              <h2>Garden services across Melbourne&apos;s east, from a quick mow to a full makeover.</h2>
              <p>
                Book a one-off tidy-up before a rental inspection or auction, or set up a regular visit and stop
                thinking about the garden altogether. Every service is priced for Melbourne suburban blocks.
              </p>
            </div>
            <div className="services">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <div className="photo">
                    <img src={service.img} alt={service.alt} loading="lazy" />
                  </div>
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="price">{service.price}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section band-sage" id="about">
          <div className="wrap about">
            <div className="about-photos">
              {aboutPhotos.map((photo) => (
                <div className="photo" key={photo.src}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
              ))}
            </div>
            <div className="about-copy">
              <span className="eyebrow">Why Melbourne chooses Gumleaf</span>
              <h2>The same crew, the same day, every visit.</h2>
              <p>
                Most garden services send whoever is free that week. We give every client a regular crew and a fixed
                visit day, so the people working on your garden know where the sprinkler heads are, which plants are new
                and how you like the edges cut.
              </p>
              <p>
                We started in Ringwood in 2014 with one ute and a mower. Today our crews look after more than 380
                properties across Melbourne&apos;s eastern suburbs, and most of our new clients come from neighbours who
                saw the work over the fence. We know the local clay soils, the council green waste rules and which
                plants handle a 40-degree January.
              </p>
              <ul className="checks">
                {aboutChecks.map((check) => (
                  <li key={check}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#4f7a5a" strokeWidth="2.6">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M7 12l3.5 3.5L17 9" />
                    </svg>
                    {check}
                  </li>
                ))}
              </ul>
              <div>
                <a className="btn btn-outline" href="#contact">
                  Book a free site visit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section" id="process">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">How it works</span>
              <h2>From first call to a tidy garden in under a week.</h2>
            </div>
            <ol className="steps">
              {steps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* MAINTENANCE PLANS */}
        <section className="section band-dark on-dark" id="plans">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Maintenance plans</span>
              <h2>Pick a plan and forget about the garden.</h2>
              <p>Prices below are for a typical Melbourne suburban block up to 650 m². Larger blocks are quoted after a site visit.</p>
            </div>
            <div className="plans">
              {plans.map((plan) => (
                <div className={`plan${plan.featured ? " featured" : ""}`} key={plan.name}>
                  {plan.featured && <span className="badge">Most popular</span>}
                  <h3>{plan.name}</h3>
                  <div className="amount">
                    {plan.amount} <small>per visit</small>
                  </div>
                  <p>{plan.text}</p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"}`} href="#contact">
                    Choose {plan.name}
                  </a>
                </div>
              ))}
            </div>
            <p className="plans-note">All prices include GST. No lock-in contracts: pause or cancel with one week&apos;s notice.</p>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section" id="gallery">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Our work</span>
              <h2>Gardens we look after.</h2>
              <p>A few examples of the mowing, maintenance and landscaping work our crews do every week across Melbourne&apos;s east.</p>
            </div>
            <div className="gallery">
              {gallery.map((item) => (
                <figure className="photo" key={item.caption}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="cta">
          <div className="photo">
            <img
              src="https://images.unsplash.com/photo-1629335493470-f22db7852d39?auto=format&fit=crop&w=1920&q=70"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="wrap">
            <div>
              <h2>Selling, leasing or just sick of the weeds in Melbourne&apos;s east?</h2>
              <p>
                Book a one-off garden clean-up before your auction or rental inspection and we&apos;ll have it looking
                its best within the week. Free quotes, no obligation.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="#contact">
                Get a free quote
              </a>
              <a className="btn btn-ghost" href={PHONE_HREF}>
                Call {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section band-sage" id="reviews">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Reviews</span>
              <h2>What customers across Melbourne&apos;s east say.</h2>
              <span className="sample-note">
                Sample reviews for this demo site. A live site would pull in real Google reviews here.
              </span>
            </div>
            <ReviewCarousel reviews={reviews} />
          </div>
        </section>

        {/* SERVICE AREA / MAP */}
        <section className="section" id="area">
          <div className="wrap area">
            <div className="area-copy">
              <span className="eyebrow">Service area</span>
              <h2>Based in Ringwood, working across Melbourne&apos;s east.</h2>
              <p>
                Our crews cover Melbourne&apos;s eastern suburbs within about 25 km of Ringwood, from Box Hill and
                Doncaster East out to Lilydale and Warrandyte. Site visits and quotes are free anywhere in this area. Not sure if you&apos;re covered? Send us your suburb and we&apos;ll let you know the same day.
              </p>
              <ul className="suburbs">
                {suburbs.map((suburb) => (
                  <li key={suburb}>{suburb}</li>
                ))}
              </ul>
            </div>
            <div className="map">
              <iframe
                title="Map of the Gumleaf Landscapes service area around Ringwood, Victoria"
                src="https://www.google.com/maps?q=Ringwood+VIC+3134&z=11&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section band-sage" id="faq">
          <div className="wrap faq-grid">
            <div className="section-head">
              <span className="eyebrow">FAQ</span>
              <h2>Common questions.</h2>
              <p>Can&apos;t see your question here? Call us on {PHONE} or send it through the contact form.</p>
            </div>
            <div className="faq">
              {faqs.map((faq, i) => (
                <details key={faq.q} open={i === 0}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section band-dark on-dark" id="contact">
          <div className="wrap contact-grid">
            <div className="contact-info">
              <span className="eyebrow">Contact us</span>
              <h2>Get your free Melbourne garden quote.</h2>
              <p>Tell us a little about your garden and we&apos;ll reply within one business day to book a free site visit.</p>
              <ul className="contact-list">
                <li>
                  <span>Phone</span>
                  <a href={PHONE_HREF}>{PHONE}</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <span>Office</span>
                  <strong>Ringwood VIC 3134</strong>
                </li>
                <li>
                  <span>Hours</span>
                  <strong>
                    Mon – Fri 7:00am – 4:30pm
                    <br />
                    Sat 8:00am – 12:00pm
                  </strong>
                </li>
              </ul>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand" href="#top" style={{ color: "#fff" }}>
                <Logo size={34} />
                Gumleaf Landscapes
              </a>
              <p>Lawn mowing, garden maintenance and landscaping for Melbourne&apos;s eastern suburbs, based in Ringwood VIC.</p>
            </div>
            <div>
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Lawn mowing</a></li>
                <li><a href="#services">Garden maintenance</a></li>
                <li><a href="#services">Hedging &amp; pruning</a></li>
                <li><a href="#services">Landscaping &amp; paving</a></li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About us</a></li>
                <li><a href="#plans">Maintenance plans</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3>Contact</h3>
              <ul>
                <li><a href={PHONE_HREF}>{PHONE}</a></li>
                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li>Ringwood VIC 3134</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Gumleaf Landscapes. Demo site for a fictional business.</span>
            <span>Photos: Unsplash and Pexels</span>
          </div>
        </div>
      </footer>

      <div className="call-bar">
        <a href={PHONE_HREF}>Call now</a>
        <a href="#contact">Free quote</a>
      </div>
    </>
  );
}

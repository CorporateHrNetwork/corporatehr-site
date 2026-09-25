import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin, FiMenu } from 'react-icons/fi';
import './styles.css';
import zermattLiquor from './assets/zermatt-liquor.webp';
import beerBarn from './assets/beer-barn.webp';
import twizellEducation from './assets/twizell-education.webp';
import viewpoint from './assets/viewpoint.webp';
import twizellImmigration from './assets/twizell-immigration.webp';
import zermattWine from './assets/zermatt-wine.webp';

const fade={hidden:{opacity:0,y:22},show:{opacity:1,y:0,transition:{duration:.55}}};
const clients=[
 {name:'Zermatt Liquor Limited',logo:zermattLiquor,quote:'CorporateHr Network has helped us strengthen structure, accountability and consistency across our people operations.'},
 {name:'Beer Barn',logo:beerBarn,quote:'Their HR and training support is practical, relevant and closely connected to business performance.'},
 {name:'Zermatt Wine, Champagne & Spirits',logo:zermattWine,quote:'Their guidance has improved clarity, workforce coordination and accountability across our operations.'},
 {name:'Twizell Education Services',logo:twizellEducation,quote:'CorporateHr Network brings a structured, practical approach to people management.'},
 {name:'Twizell Immigration Consulting',logo:twizellImmigration,quote:'Their support has helped us strengthen internal processes and build sustainable people systems.'},
 {name:'Viewpoint Management Consultants Ltd',logo:viewpoint,quote:'They combine practical HR knowledge with a strong understanding of organisational performance.'},
];
const services=[
 ['HR Advisory & Outsourcing','Policies, people governance, HR operations and practical workforce administration.'],
 ['Recruitment & Talent Solutions','Structured sourcing, screening and evidence-led assessment for better hiring decisions.'],
 ['Performance Management','Clear expectations, coaching, review systems and documented improvement.'],
 ['Payroll & Workforce Administration','Reliable employee administration, payroll coordination and workforce reporting.'],
 ['Training & Capability Development','Leadership, workplace effectiveness and operational capability programmes.'],
 ['CHRiS HR Technology','Connected HR technology built for control, compliance, visibility and better decisions.']
];
function Header(){const [open,setOpen]=React.useState(false);return <header className="site-header"><a className="brand" href="#home"><span className="brand-mark">C</span><span><b>CorporateHr Network</b><small>PEOPLE • PERFORMANCE • PARTNERSHIPS</small></span></a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu"><FiMenu/></button><nav className={open?'open':''}><a href="#solutions">Solutions</a><a href="#training">Training</a><a href="#clients">Clients</a><a href="#about">About</a><a href="#contact">Contact</a><a className="nav-cta" href="https://www.chris.crnetwork.com.ng/">CHRiS <FiArrowUpRight/></a></nav></header>}
function App(){return <>
<Header/>
<main>
<section id="home" className="hero dark"><motion.div initial="hidden" animate="show" variants={fade} className="hero-copy"><span className="eyebrow">PEOPLE • PERFORMANCE • PARTNERSHIPS</span><h1>Build stronger people systems for better business performance.</h1><p>CorporateHr Network delivers practical HR advisory, outsourcing, recruitment, training and HR technology solutions that help organisations attract, develop, manage and retain great people.</p><div className="actions"><a className="btn gold" href="#contact">Talk to an HR Expert</a><a className="btn light" href="https://www.chris.crnetwork.com.ng/">Explore CHRiS</a></div></motion.div><motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:.7}} className="hero-panel"><div className="metric"><b>People</b><span>Clearer systems</span></div><div className="metric"><b>Performance</b><span>Better accountability</span></div><div className="metric"><b>Partnerships</b><span>Practical delivery</span></div></motion.div></section>
<section className="gold-band"><b>PEOPLE</b><span>We value people.</span><b>PERFORMANCE</b><span>We drive performance.</span><b>PARTNERSHIPS</b><span>We build lasting partnerships.</span></section>
<section id="solutions" className="section"><span className="eyebrow green">OUR SOLUTIONS</span><h2>Integrated HR solutions for a stronger tomorrow.</h2><p className="lead">From strategy to execution, we provide end-to-end people solutions that help organisations build high-performing teams, stronger controls and sustainable growth.</p><div className="grid3">{services.map((s,i)=><motion.article variants={fade} initial="hidden" whileInView="show" viewport={{once:true}} className="card" key={s[0]}><span className="num">0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></motion.article>)}</div></section>
<section className="section dark split"><div><span className="eyebrow">CHRiS • CORPORATEHR NETWORK INFORMATION SYSTEM</span><h2>Smarter people management with CHRiS.</h2><p className="lead">Bring employee records, attendance, leave, payroll, loans, statutory compliance, exits and management analytics into one connected HR platform.</p><a className="btn gold" href="https://www.chris.crnetwork.com.ng/#book-demo">Book a CHRiS Demo</a></div><div className="feature-list"><div>Employee lifecycle & workforce records</div><div>Leave, attendance & approvals</div><div>Payroll, loans & statutory compliance</div><div>Analytics, reports & branch controls</div></div></section>
<section id="training" className="section warm"><span className="eyebrow green">GET TRAINED-4-HIRE NETWORK</span><h2>Train for work. Train for performance. Train for growth.</h2><p className="lead">Practical employability and role-readiness pathways designed for hospitality, service, retail and operational roles.</p><div className="actions"><a className="btn green" href="#contact">Explore Training</a><a className="text-link" href="#contact">Registration Enquiries <FiArrowUpRight/></a></div></section>
<section id="clients" className="section dark"><span className="eyebrow">CLIENTS & PARTNERSHIPS</span><h2>Trusted relationships across business, education and professional services.</h2><div className="logo-grid">{clients.map(c=><div className="logo-card" key={c.name}><img src={c.logo} alt={c.name+' logo'}/><b>{c.name}</b></div>)}</div></section>
<section className="section warm"><span className="eyebrow green">WHAT OUR CLIENTS ARE SAYING</span><h2>Trusted by organisations that value stronger people systems.</h2><div className="grid3 testimonials">{clients.map(c=><blockquote key={c.name}><p>“{c.quote}”</p><cite>{c.name}</cite></blockquote>)}</div></section>
<section id="about" className="section"><span className="eyebrow green">ABOUT CORPORATEHR NETWORK</span><div className="split"><div><h2>Great people. Stronger organisations.</h2><p className="lead">CorporateHr Network is a people-focused HR solutions organisation committed to helping businesses build high-performing teams through practical HR advisory, workforce systems, technology, training and strategic partnerships.</p></div><div className="feature-list light-list"><div><b>Proven Expertise</b><span>Hands-on HR and organisational development experience.</span></div><div><b>People-Centred</b><span>Systems that strengthen employee experience and accountability.</span></div><div><b>Technology-Enabled</b><span>Modern tools and connected workflows.</span></div><div><b>Trusted Partnership</b><span>Support grounded in business realities.</span></div></div></div></section>
<section id="contact" className="section green-bg"><span className="eyebrow">LET'S WORK TOGETHER</span><h2>Ready to build a stronger, people-centred organisation?</h2><div className="contact-grid"><a href="mailto:corporatehr@crnetwork.com.ng"><FiMail/>corporatehr@crnetwork.com.ng</a><a href="tel:+2348100206839"><FiPhone/>+234 810 020 6839</a><span><FiMapPin/>72 Aminu Kano Crescent, Wuse 2, FCT-Abuja, Nigeria</span></div></section>
</main><footer><div><b>CorporateHr Network</b><p>Part of Corporate Resources Network.</p></div><div><a href="https://crnetwork.com.ng/">Corporate Resources Network</a><a href="https://www.chris.crnetwork.com.ng/">CHRiS</a></div><span>© 2026 CorporateHr Network</span></footer></>}
createRoot(document.getElementById('root')).render(<App/>);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ServicesPage from './ServicesPage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import './styles.css'

const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
const page = {
  '/services': { title: 'Services', component: <ServicesPage /> },
  '/about': { title: 'About', component: <AboutPage /> },
  '/contact': { title: 'Contact', component: <ContactPage /> },
}[currentPath]

if (page) document.title = `Apex Plumbing & Heating | ${page.title} | Nuneaton`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {page?.component ?? <App />}
  </React.StrictMode>,
)

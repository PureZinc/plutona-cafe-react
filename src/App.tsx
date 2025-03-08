import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { ReactElement } from "react";

// Common Types
type PageLink = {
  element: ReactElement;
  path: string;
}

type NavLink = {
  text: string;
  href: string;
};

type SocialLink = {
  symbol: string;
  link: string;
};

type HeaderProps = {
  links: NavLink[];
};

type FooterProps = {
  navItems: NavLink[];
  socialLinks: SocialLink[];
};

type PageHandlerProps = {
  pages: PageLink[]
}

// Web Details
const pages: PageLink[] = [
  {element: <HomePage />, path:"/"}
]

const headerLinks: NavLink[] = [
  { text: "Home", href: "/" },
  { text: "Menu", href: "/menu" },
  { text: "About Us", href: "/about" },
  { text: "Events", href: "/events" },
  { text: "Contact", href: "/contact" },
];

const footerLinks: NavLink[] = [
  { text: "Home Base", href: "/home" },
  { text: "Consumption Options", href: "/menu" },
  { text: "Historical Data", href: "#about" },
  { text: "Scheduled Events", href: "#events" },
  { text: "Communication", href: "#contact" },
];

const socialLinks: SocialLink[] = [
  { symbol: "TW", link: "#" },
  { symbol: "IG", link: "#" },
  { symbol: "FB", link: "#" },
];

// Global Components
function Header({ links }: HeaderProps) {
  return (
    <header className="header-container">
      <div className="logo">
        <h1 className="uppercase">
          plutona <span className="uppercase">cafe</span>
        </h1>
      </div>
      <nav>
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

function Footer({ navItems, socialLinks }: FooterProps) {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h3 className="uppercase">Plutona Cafe</h3>
        <p>
          Where space exploration meets coffee culture in a unique interstellar
          experience.
        </p>
        <div className="social-links">
          {socialLinks.map((platform, index) => (
            <a key={index} href={platform.link}>
              <span>{platform.symbol}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-column">
        <h3 className="uppercase">Navigation</h3>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="uppercase">Opening Hours</h3>
        <ul>
          <li>Monday - Friday: 07:00 - 23:00</li>
          <li>Saturday: 08:00 - 00:00</li>
          <li>Sunday: 08:00 - 22:00</li>
          <li>Earth Standard Time</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="uppercase">Newsletter</h3>
        <p>Subscribe to receive updates and special offers.</p>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Your email here" />
          </div>
          <button type="submit" className="cta-button">Subscribe</button>
        </form>
      </div>
      <div className="copyright">
        <p>&copy; 2025 Plutona Cafe. All rights reserved across the known universe.</p>
      </div>
    </footer>
  );
};

function PageHandler({pages}: PageHandlerProps) { 
  return (
    <Routes>
      {pages.map((page, index) => (
        <Route key={index} element={page.element} path={page.path} />
      ))}
    </Routes>
  )
};

// Actual App
function App() {
  return (
    <Router>
      <Header links={headerLinks} />
      <PageHandler pages={pages} />
      <Footer navItems={footerLinks} socialLinks={socialLinks} />
    </Router>
  )
}

export default App

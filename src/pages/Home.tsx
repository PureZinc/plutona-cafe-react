import SpecialOfferPopup, { PopupProps } from "../components/Popup";
import MenuList from "../components/MenuItem";
import { ContactSection } from "../components/ContactForm";
import { Link } from "react-router-dom";


const specialOfferDetails: PopupProps = {
  header: "We Invite you on a Mission!",
  content: "Our galaxy's best offer is ending soon! With 30% off ALL beverages & a ticket to outer space in 2050!",
  duration: 4997
} 


function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2 className="uppercase">The Cafe Embracing the Future</h2>
        <p>
          Journey through space and emerging technologies with our brews, made
          with STEM lovers, space nerds, and futurists in mind.
        </p>
        <a href="#menu" className="cta-button">Explore Menu</a>
      </div>
    </section>
  );
};

function FeaturedMenu() {
  return (
    <section id="menu" className="featured-menu">
      <div className="section-header">
        <h2 className="uppercase">Featured Specials</h2>
        <p>
          Our signature brews are inspired by the vast cosmos and planets
          inspired by futuristic technology.
        </p>
      </div>
      <MenuList filter={"featured"} />
      <div className="container">
        <Link to="/menu" className="cta-button">View Full Menu</Link>
      </div>
    </section>
  );
};

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2 className="uppercase">Our Mission</h2>
          <p>
            Plutona.inc was established in 2002 as an interplanetary tech
            company. We established a cafe determined to bring Earth's finest
            beans to the outer colonies of the Solar System. Now, in our
            retro-futuristic establishment, we recreate that pioneering spirit
            with a blend of classic coffee craftsmanship and advanced brewing
            technology.
          </p>
          <p>
            Our baristas are trained in both traditional methods and quantum
            brewing techniques, ensuring every cup offers a journey through time
            and space. The café's design elements are inspired by vintage sci-fi,
            creating an atmosphere where past visions of the future come alive.
          </p>
          <Link to="/about" className="cta-button">Learn More</Link>
        </div>
        <div className="about-image">
          <img src="/cafeinterior.jpeg" alt="Plutona Cafe Interior" />
        </div>
      </div>
    </section>
  );
};

function HomePage() {
  return (
    <>
      <SpecialOfferPopup {...specialOfferDetails} />
      <HeroSection />
      <FeaturedMenu />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

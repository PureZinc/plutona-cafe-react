import { Link } from "react-router-dom";


export default function AboutPage() {
    return (
      <>
        <section className="hero">
                <div className="hero-content">
                    <h2 className="uppercase">about us</h2>
                    <p>
                    We're on a mission to make humanity interplanetary through human
                    connection!
                    </p>
                    <a href="#inspired-by-space" className="cta-button">Learn More</a>
                </div>
            </section>

            <section id="inspired-by-space" className="about">
                <div className="about-container">
                    <div className="about-text">
                    <h2 className="uppercase">inspired by space</h2>
                    <p>
                        As humans, we inspire to explore the mysteries beyond our blue sky!
                        Planetary exploration has always been an exciting event to look
                        forward to ever since the Moon Landing of 1969. From unknown
                        organisms that could live on Saturn's moons to potential
                        civilizations we could establish on Mars, the future has never
                        looked so bright!
                    </p>
                    <p>
                        Here at Plutona Cafe, we know that the best way to become
                        interplanetary is through human connection. That's why we made a
                        cafe inspired by science fiction: Not only for the asthetic, but for
                        the potential. We don't only provide the best brews on Earth, but
                        the capabilities of mankind to once again explore the galaxy!
                    </p>
                    </div>
                    <div className="about-image">
                    <img
                        src="https://media.gettyimages.com/id/51098545/photo/30th-anniversary-of-apollo-11-landing-on-the-moon-astronaut-edwin-e-aldrin-jr-lunar-module.jpg?s=612x612&w=0&k=20&c=XmkyvVgbijQk4ipzJJNzMNAm2ICuozpEoqT6ClZVYHM="
                        alt="The 1969 Moon Landing"
                    />
                    </div>
                </div>
            </section>

            <section id="building-the-future" className="about">
                <div className="about-container">
                    <div className="about-image">
                    <img src="/cafeinterior.jpeg" alt="The 1969 Moon Landing" />
                    </div>
                    <div className="about-text">
                    <h2 className="uppercase">building the future</h2>
                    <p>
                        We're more than just a coffee shop: We're a culture of futurists
                        with a will to make something to look forward to. From new
                        technologies to exciting experiences that bring hope to the future
                        of humanity!
                    </p>
                    <p>
                        Plutona Cafe invests in new technologies without replacing the human
                        spirit, creating a connection between us and our creations. From
                        cosmic coffee machines and robotic coffee makers to human baristas
                        and software developers, our culture is dedicated towards creating a
                        future of hope and prosperity, even beyond our own planet!
                    </p>
                    </div>
                </div>
            </section>
                <div className="container">
                    <div className="container">
                        <h2 className="uppercase">Are you ready for our mission?</h2>
                    </div>
                <Link to="/menu" className="cta-button">Explore Menu</Link>
            </div>
        </>
  )
}

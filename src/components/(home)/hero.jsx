import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div
                className="blaise-hero-section8 bg-cover"
                style={{ backgroundImage: "url(/assets/images/hero/bg4.png)" }}
            >
                <div className="container">
                    <div className="blaise-hero-content center medium">
                        <h1>
                            We provide best tech solutions for your business
                        </h1>
                        <p>
                            We are architects of innovation, trailblazers of
                            technological advancement, and partners in your
                            success. As a dynamic and forward-thinking
                            organization
                        </p>
                        <div className="blaise-extra-mt">
                            <div className="blaise-btn-wrap center">
                                <Link
                                    className="blaise-default-btn"
                                    data-aos-duration={600}
                                    data-aos="fade-up"
                                    data-text="Work With Us"
                                    href="/contact"
                                >
                                    <span className="btn-wraper">
                                        Work With Us
                                    </span>
                                </Link>
                                <Link
                                    className="blaise-default-btn blaise-white-btn"
                                    data-aos-duration={800}
                                    data-aos="fade-up"
                                    data-text="View Services"
                                    href="/service"
                                >
                                    <span className="btn-wraper">
                                        View Services
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

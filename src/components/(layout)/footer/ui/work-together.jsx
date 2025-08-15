import Link from "next/link";

export default function WorkTogether() {
    return (
        <>
            <div className="container">
                <div
                    className="blaise-footer-cta-wrap"
                    style={{
                        backgroundImage: "url(/assets/images/cta/cta.png)",
                    }}
                >
                    <div className="row">
                        <div className="col-xl-7 col-lg-8">
                            <div className="blaise-footer-cta-content">
                                <h2>Let’s work together</h2>
                                <p>
                                    Each demo built with Teba will look
                                    different. You can customize anything
                                    appearance of your website with only a few
                                    clicks
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 d-flex align-items-center justify-content-end">
                            <div
                                className="blaise-footer-cta-btn"
                                data-aos="fade-up"
                                data-aos-duration={800}
                            >
                                <Link
                                    className="blaise-default-btn blaise-white-btn"
                                    data-text="Let’s Start a Project"
                                    href="/contact"
                                >
                                    <span className="btn-wraper">
                                        Let’s Start a Project
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

import Link from "next/link";

export default function WorkTogether2() {
    return (
        <>
            <div
                className="section bg-cover blaise-section-padding"
                style={{
                    backgroundImage: "url(/assets/images/cta/cta-bg3.png)",
                }}
            >
                <div className="container">
                    <div className="blaise-cta-wrap">
                        <div className="blaise-cta-content center">
                            <h2>Let’s work together</h2>
                            <p>
                                Each demo built with Teba will look different.
                                You can customize anything appearance of your
                                website with only a few clicks
                            </p>
                            <div
                                className="blaise-extra-mt"
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

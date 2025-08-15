import Link from "next/link";

export default function FaqQuestion() {
    return (
        <>
            <div className="section blaise-section-padding-bottom">
                <div className="container">
                    <div className="blaise-default-content sm-mw">
                        <h2>Still have questions?</h2>
                        <p>
                            Each demo built with Teba will look different. You
                            can customize almost anything in the appearance of
                            your website with only
                        </p>
                        <div
                            className="blaise-extra-mt"
                            data-aos="fade-up"
                            data-aos-duration={800}
                        >
                            <Link
                                className="blaise-default-btn blaise-light-btn"
                                data-text="Ask Any Question"
                                href="/contact"
                            >
                                <span className="btn-wraper">
                                    Ask Any Question
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

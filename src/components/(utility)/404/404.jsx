import Image from "next/image";
import Link from "next/link";

export default function NotFundSection() {
    return (
        <>
            <div className="blaise-errors-section">
                <div className="container">
                    <div className="blaise-errors-content">
                        <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            src="/assets/images/breadcrumb/errors404.svg"
                            alt="404"
                            className="h-auto w-100"
                        />
                        <h2>Oops, this page is not found</h2>
                        <p>
                            The page you’re looking for can’t be found.
                            Double-check the URL and try again. we invite you to
                            visit our homepage.
                        </p>
                        <div
                            className="blaise-extra-mt"
                            data-aos="fade-up"
                            data-aos-duration={800}
                        >
                            <Link
                                className="blaise-default-btn blaise-light-btn"
                                data-text="Ask Any Question"
                                href="/"
                            >
                                <span className="btn-wraper">
                                    Back to Homepage
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

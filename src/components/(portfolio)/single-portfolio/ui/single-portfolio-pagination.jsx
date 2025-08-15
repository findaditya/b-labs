import Link from "next/link";

export default function SinglePortfolioPagination() {
    return (
        <>
            <div className="blaise-post-navigation2">
                <Link className="p-nav-previous" href="/portfolio-grid">
                    <div className="blaise-post-icon">
                        <i className="ri-arrow-left-s-line" />
                    </div>
                    <div className="blaise-post-data">
                        <p>Perv Project</p>
                        <h5>CMS Software Solution</h5>
                    </div>
                </Link>
                <Link className="p-nav-next" href="/portfolio-grid">
                    <div className="blaise-post-data">
                        <p>NextProject</p>
                        <h5>Health App Development</h5>
                    </div>
                    <div className="blaise-post-icon">
                        <i className="ri-arrow-right-s-line" />
                    </div>
                </Link>
            </div>
        </>
    );
}

import PortfolioCard from "@/components/ui/cards/portfolio-card";

export default function PortfolioMasonryItem({ data, title, subtitle, showTitle = true }) {
    return (
        <>
            <div className="section large-padding-tb6 overflow-hidden bg-light1">
                <div className="container">
                    {showTitle && (
                        <div className="optech-section-title center">
                            <h2>{title}</h2>
                            {subtitle && <p>{subtitle}</p>}
                        </div>
                    )}
                    <div className="row g-4">
                        {/* portfolio card start */}
                        {data?.map((item, i) => (
                            <div
                                className={
                                    i === 4
                                        ? "col-xl-8"
                                        : "col-xl-4 col-md-6"
                                }
                                data-aos="fade-up"
                                data-aos-duration={500 + (i % 3) * 200}
                                key={i}
                            >
                                <div className="h-100">
                                    <PortfolioCard data={item} />
                                </div>
                            </div>
                        ))}
                        {/* portfolio card end */}
                    </div>
                </div>
            </div>
        </>
    );
}

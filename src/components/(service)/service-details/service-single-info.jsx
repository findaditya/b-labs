import Image from "next/image";
import ServiceSidebar from "./service-sidebar";

export default function ServiceSingleInfo({ service }) {
    if (!service) return null;

    // Optionally, split features by comma to generate a list
    const featureList = service.features ? service.features.split(", ") : [];

    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="optech-service-details-wrap">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    data-aos="fade-up"
                                    data-aos-duration={800}
                                    src={service.imgUrl}
                                    alt={service.title}
                                    className="h-auto w-100"
                                />
                                <div className="optech-service-details-item">
                                    <h3>Overview</h3>
                                    {/* Render overview text. If it contains line breaks, split into paragraphs */}
                                    {service.overview ? (
                                        service.overview.split("\n").map((para, idx) => (
                                            <p key={idx}>{para}</p>
                                        ))
                                    ) : (
                                        <p>{service.description || "Default overview text."}</p>
                                    )}
                                </div>
                                <div className="optech-service-details-item">
                                    <h3>Features</h3>
                                    {service.features && featureList.length > 0 ? (
                                        <div className="optech-icon-list">
                                            <ul>
                                                {featureList.map((feature, index) => (
                                                    <li key={index}>
                                                        <i className="ri-check-line" /> {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <p>Default features text.</p>
                                    )}
                                </div>
                                <div className="optech-service-details-item">
                                    <h3>Goal</h3>
                                    <p>{service.goal || "Default goal text."}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* service sidebar start */}
                            <ServiceSidebar />
                            {/* service sidebar end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

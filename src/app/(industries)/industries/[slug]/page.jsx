import { notFound } from "next/navigation";
import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";
import Achievement2 from "@/components/ui/sections/achievement-2";
import ContactFormCard from "@/components/ui/cards/contact-form-card";
import PortfolioMasonryItem from "@/components/(portfolio)/portfolio-masonry/portfolio-masonry-item";
import ServiceSidebar from "@/components/(service)/service-details/service-sidebar";
import Image from "next/image";

const industries = [
    {
        slug: "healthcare",
        title: "Healthcare",
        imgUrl: "/assets/images/v3/service1.png",
        description: "Innovative technology solutions for the healthcare industry.",
        overview: "Our healthcare solutions help medical institutions improve patient care, streamline operations, and enhance data security. We provide custom software solutions, telemedicine platforms, and healthcare analytics tools.",
        features: "Electronic Health Records, Telemedicine, Patient Management, Healthcare Analytics, Compliance Management",
        challenges: "Data Security, Regulatory Compliance, Interoperability, Patient Privacy",
        solutions: "Secure Cloud Infrastructure, HIPAA Compliance, Integration Services, Data Analytics",
        projects: [
            {
                imgUrl: "/assets/images/p1/p1.png",
                title: "Healthcare Management System",
                category: "Healthcare, Software"
            },
            {
                imgUrl: "/assets/images/p1/p2.png",
                title: "Telemedicine Platform",
                category: "Healthcare, Web"
            },
            {
                imgUrl: "/assets/images/p1/p3.png",
                title: "Patient Portal",
                category: "Healthcare, Mobile"
            },
            {
                imgUrl: "/assets/images/p1/p4.png",
                title: "Medical Records System",
                category: "Healthcare, Software"
            },
            {
                imgUrl: "/assets/images/p1/p5.png",
                title: "Healthcare Analytics Dashboard",
                category: "Healthcare, Analytics"
            }
        ]
    },
    {
        slug: "finance",
        title: "Finance",
        imgUrl: "/assets/images/v3/service2.png",
        description: "Advanced financial technology solutions for modern banking.",
        overview: "We provide cutting-edge fintech solutions that help financial institutions enhance security, improve customer experience, and streamline operations.",
        features: "Digital Banking, Fraud Detection, Risk Management, Payment Processing, Financial Analytics",
        challenges: "Security Threats, Regulatory Compliance, Digital Transformation, Customer Experience",
        solutions: "Secure Banking Platforms, Compliance Management, Digital Transformation, Customer Analytics"
    },
    {
        slug: "retail",
        title: "Retail",
        imgUrl: "/assets/images/v3/service3.png",
        description: "E-commerce and retail technology solutions for modern businesses.",
        overview: "Our retail solutions help businesses enhance their online presence, improve customer experience, and optimize operations.",
        features: "E-commerce Platforms, Inventory Management, Customer Analytics, Payment Processing, Marketing Automation",
        challenges: "Omnichannel Integration, Customer Experience, Inventory Management, Data Analytics",
        solutions: "Unified Commerce Platform, Customer Engagement Tools, Inventory Optimization, Analytics Dashboard"
    },
    {
        slug: "automotive",
        title: "Automotive",
        imgUrl: "/assets/images/v3/service4.png",
        description: "Technology solutions for the automotive industry.",
        overview: "We provide innovative solutions for automotive manufacturers, dealers, and service providers to enhance operations and customer experience.",
        features: "Dealer Management, Vehicle Tracking, Service Management, Customer Relationship, Analytics",
        challenges: "Digital Transformation, Customer Experience, Supply Chain, Data Management",
        solutions: "Digital Showroom, Service Management, Supply Chain Optimization, Customer Analytics"
    },
    {
        slug: "education",
        title: "Education",
        imgUrl: "/assets/images/v3/thumb1.png",
        description: "Educational technology solutions for modern learning.",
        overview: "Our education solutions help institutions enhance learning experiences, improve administration, and engage students effectively.",
        features: "Learning Management, Student Information, Virtual Classroom, Assessment Tools, Analytics",
        challenges: "Digital Learning, Student Engagement, Data Security, Remote Education",
        solutions: "Online Learning Platform, Student Management, Security Solutions, Engagement Tools"
    }
];

export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}

export default async function IndustryDetails({ params: { slug } }) {
    const industry = industries.find((industry) => industry.slug === slug);

    if (!industry) {
        notFound();
    }

    return (
        <>
            <Header6 />
            <Breadcrumb
                title={industry.title}
                path={[
                    { title: "Home", link: "/" },
                    { title: "Industries", link: "/industries" },
                    { title: industry.title },
                ]}
            />
            
            {/* About Section */}
            <div className="section large-padding-tb4 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="optech-thumb extra-mr">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    priority
                                    data-aos="fade-up"
                                    data-aos-duration={600}
                                    src={industry.imgUrl}
                                    alt={industry.title}
                                    className="h-auto w-100"
                                />
                                <div
                                    className="optech-thumb-position"
                                    data-aos="fade-up"
                                    data-aos-duration={800}
                                >
                                    <Image
                                        height={341}
                                        width={303}
                                        priority
                                        src="/assets/images/v2/thumb2.png"
                                        alt="thumb"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="optech-default-content ml40">
                                <h2>{industry.title} Solutions</h2>
                                <p>{industry.overview}</p>
                                <div className="optech-icon-list">
                                    <ul>
                                        {industry.features.split(", ").map((feature, index) => (
                                            <li key={index}>
                                                <i className="ri-check-line" /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="optech-divider" />
            </div>

            {/* Portfolio Section */}
            <div className="section optech-section-padding">
                <div className="container">
                    <PortfolioMasonryItem 
                        data={industry.projects} 
                        title={`Our ${industry.title} Projects`}
                        subtitle={`Explore our successful implementations in the ${industry.title.toLowerCase()} sector`}
                    />
                </div>
            </div>
            <div className="container">
                <div className="optech-divider" />
            </div>

            {/* Achievements Section */}
            <Achievement2 />
            <div className="container">
                <div className="optech-divider" />
            </div>

            {/* Work Together Section */}
            <WorkTogether2 />
            <div className="container">
                <div className="optech-divider" />
            </div>

            {/* Contact Form Section */}
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="optech-default-content">
                                <h2>Get in Touch</h2>
                                <p>Have questions about our {industry.title.toLowerCase()} solutions? Our team is ready to help you transform your business.</p>
                                <div className="optech-icon-list">
                                    <ul>
                                        {industry.solutions.split(", ").map((solution, index) => (
                                            <li key={index}>
                                                <i className="ri-check-line" /> {solution}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ContactFormCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="optech-divider" />
            </div>

            <Footer8 />
        </>
    );
}

export async function generateMetadata({ params: { slug } }) {
    const industry = industries.find((industry) => industry.slug === slug);

    if (!industry) {
        return {
            title: 'Industry Not Found',
        };
    }

    return {
        title: `${industry.title} - Your Company Name`,
        description: industry.description,
    };
} 
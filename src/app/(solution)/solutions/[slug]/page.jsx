import { notFound } from "next/navigation";
import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";
import ServiceSidebar from "@/components/(service)/service-details/service-sidebar";
import { awesomeSolutions2 } from "@/data/data";

// Helper function to generate slug from title
const generateSlug = (title) => title.trim().toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

// Generate static params for all solutions
export async function generateStaticParams() {
    return awesomeSolutions2.map((solution) => ({
        slug: solution.slug ? solution.slug : generateSlug(solution.title),
    }));
}

export default async function SolutionDetails({ params }) {
    // ✅ Fix: Await params before destructuring
    const { slug } = await params;

    const solution = awesomeSolutions2.find(
        (solution) => (solution.slug ? solution.slug : generateSlug(solution.title)) === slug
    );

    if (!solution) {
        notFound();
    }

    return (
        <>
            <Header6 />
            <Breadcrumb
                title={solution.title}
                path={[
                    { title: "Home", link: "/" },
                    { title: "Solutions", link: "/solutions" },
                    { title: solution.title },
                ]}
            />
            <div className="section blaise-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blaise-solution-details-wrap">
                                <img
                                    src={solution.imgUrl}
                                    alt={solution.title}
                                    className="w-100 rounded-4 mb-5"
                                />
                                <div className="blaise-solution-details-item">
                                    <h3>Overview</h3>
                                    <p>{solution.longDescription}</p>
                                </div>
                                <div className="blaise-solution-details-item">
                                    <h3>Key Features</h3>
                                    <ul className="blaise-icon-list">
                                        {solution.features?.split(", ").map((feature, index) => (
                                            <li key={index}>
                                                <i className="ri-check-line" /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="blaise-solution-details-item">
                                    <h3>Implementation Process</h3>
                                    <p>Our implementation process ensures a smooth transition and successful deployment of the solution.</p>
                                    <div className="blaise-process-steps">
                                        <div className="step">
                                            <span className="step-number">1</span>
                                            <h4>Assessment & Planning</h4>
                                            <p>We analyze your current setup and create a detailed implementation plan.</p>
                                        </div>
                                        <div className="step">
                                            <span className="step-number">2</span>
                                            <h4>Development & Testing</h4>
                                            <p>We develop the solution and conduct thorough testing to ensure quality.</p>
                                        </div>
                                        <div className="step">
                                            <span className="step-number">3</span>
                                            <h4>Deployment & Training</h4>
                                            <p>We deploy the solution and provide comprehensive training to your team.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </div>
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}

export async function generateMetadata({ params }) {
    // ✅ Fix: Await params before destructuring
    const { slug } = await params;

    const solution = awesomeSolutions2.find(
        (solution) => (solution.slug ? solution.slug : generateSlug(solution.title)) === slug
    );

    if (!solution) {
        return {
            title: 'Solution Not Found',
        };
    }

    return {
        title: `${solution.title} - Your Company Name`,
        description: solution.description,
    };
}

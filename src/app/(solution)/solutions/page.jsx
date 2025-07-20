import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";
import PortfolioCard from "@/components/ui/cards/portfolio-card";
import { awesomeSolutions2 } from "@/data/data";

export default function SolutionsPage() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Solutions"
                path={[
                    { title: "Home", link: "/" },
                    { title: "Solutions" },
                ]}
            />
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Our Solutions</h2>
                        <p>Discover how our technology solutions can transform your business</p>
                    </div>
                    <div className="row">
                        {awesomeSolutions2?.map((item, i) => (
                            <div
                                className={
                                    i === 4 || i === 5
                                        ? "col-xl-8"
                                        : "col-xl-4 col-md-6"
                                }
                                data-aos="fade-up"
                                data-aos-duration={500 + (i % 3) * 200}
                                key={i}
                            >
                                <PortfolioCard data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}

export const metadata = {
    title: "Solutions - Your Company Name",
    description: "Explore our comprehensive technology solutions for your business needs",
}; 
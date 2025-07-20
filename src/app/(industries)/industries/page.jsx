import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";
import PortfolioMasonryItem from "@/components/(portfolio)/portfolio-masonry/portfolio-masonry-item";
import Image from "next/image";

const industries = [
    {
        slug: "healthcare",
        title: "Healthcare",
        imgUrl: "/assets/images/v3/service1.png",
        description: "Innovative technology solutions for the healthcare industry.",
        icon: "ri-hospital-line",
        category: "Healthcare"
    },
    {
        slug: "finance",
        title: "Finance",
        imgUrl: "/assets/images/v3/service2.png",
        description: "Advanced financial technology solutions for modern banking.",
        icon: "ri-bank-line",
        category: "Finance"
    },
    {
        slug: "retail",
        title: "Retail",
        imgUrl: "/assets/images/v3/service3.png",
        description: "E-commerce and retail technology solutions for modern businesses.",
        icon: "ri-store-2-line",
        category: "Retail"
    },
    {
        slug: "automotive",
        title: "Automotive",
        imgUrl: "/assets/images/v3/service4.png",
        description: "Technology solutions for the automotive industry.",
        icon: "ri-car-line",
        category: "Automotive"
    },
    {
        slug: "education",
        title: "Education",
        imgUrl: "/assets/images/v3/thumb1.png",
        description: "Educational technology solutions for modern learning.",
        icon: "ri-book-open-line",
        category: "Education"
    }
];

export default function IndustriesPage() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Industries"
                path={[
                    { title: "Home", link: "/" },
                    { title: "Industries" },
                ]}
            />
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Industries We Serve</h2>
                        <p>Discover how our technology solutions can transform your industry</p>
                    </div>
                    <PortfolioMasonryItem 
                        data={industries} 
                        title="Industries We Serve"
                        subtitle="Discover how our technology solutions can transform your industry"
                    />
                </div>
            </div>
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}

export const metadata = {
    title: "Industries - Your Company Name",
    description: "Explore how our technology solutions can transform your industry",
}; 
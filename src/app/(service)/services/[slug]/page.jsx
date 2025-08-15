import { notFound } from "next/navigation";
import { awesomeServices2 } from "@/data/data";
import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import ServiceSingleInfo from "@/components/(service)/service-details/service-single-info";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

// Helper function to generate slug from title
const generateSlug = (title) => title.trim().toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

// Generate static params for all services using explicit slug if available
export async function generateStaticParams() {
    return awesomeServices2.map((service) => ({
        slug: service.slug ? service.slug : generateSlug(service.title),
    }));
}

export default async function ServiceDetails({ params }) {
    // ✅ Fix: Await params before destructuring
    const { slug } = await params;
    
    // Find the service by using explicit slug if available
    const service = awesomeServices2.find(
        (service) => (service.slug ? service.slug : generateSlug(service.title)) === slug
    );

    // If no service is found, show 404
    if (!service) {
        notFound();
    }

    return (
        <>
            <Header6 />
            <Breadcrumb
                title={service.title}
                path={[
                    { title: "Home", link: "/" },
                    { title: "Service", link: "/service" },
                    { title: service.title },
                ]}
            />
            <ServiceSingleInfo service={service} />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    // ✅ Fix: Await params before destructuring
    const { slug } = await params;
    
    const service = awesomeServices2.find(
        (service) => (service.slug ? service.slug : generateSlug(service.title)) === slug
    );

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} - Your Company Name`,
        description: service.description,
    };
}

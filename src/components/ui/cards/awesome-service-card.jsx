import Image from "next/image";
import Link from "next/link";

export default function AwesomeServiceCard({ data }) {
    // Convert title to URL-friendly slug
    const getServiceSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '');
    };

    return (
        <>
            <div className="optech-service-box">
                <div className="optech-service-thumb">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        priority
                        src={data.imgUrl}
                        alt={data.title}
                        className="h-auto w-100"
                    />
                    <div className="optech-service-data">
                        <div className="optech-service-icon">
                            <Image
                                height={36}
                                width={36}
                                priority
                                src={data.iconUrl}
                                alt={`${data.title} icon`}
                            />
                        </div>
                        <Link href={`/services/${getServiceSlug(data.title)}`}>
                            <h5>{data.title}</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

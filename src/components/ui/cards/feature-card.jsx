import Image from "next/image";
import Link from "next/link";

export default function FeatureCard({ data }) {
    return (
        <>
            <div className="blaise-iconbox-wrap2">
                <div className="blaise-iconbox-icon2 bg-white">
                    <Image
                        height={48}
                        width={48}
                        priority
                        src={data.iconUrl}
                        alt="icon"
                    />
                </div>
                <div className="blaise-iconbox-data2">
                    <Link href="/contact">
                        <h5>{data.title}</h5>
                    </Link>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    );
}

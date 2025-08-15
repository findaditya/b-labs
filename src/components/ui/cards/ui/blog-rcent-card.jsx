import Image from "next/image";
import Link from "next/link";

export default function BlogRcentCard({ data }) {
    return (
        <>
            <Link className="blaise-recent-post-item" href="/blog-details">
                <div className="blaise-recent-post-thumb">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        src={data.imgUrl}
                        alt="recent-blog"
                        className="h-auto w-100"
                    />
                </div>
                <div className="blaise-recent-post-data">
                    <p>{data.title}</p>
                    <span>{data.date}</span>
                </div>
            </Link>
        </>
    );
}

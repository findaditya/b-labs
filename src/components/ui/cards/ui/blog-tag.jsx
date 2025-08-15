import { blogTag } from "@/data/data";
import Link from "next/link";

export default function BlogTag() {
    return (
        <>
            <div className="blaise-blog-widgets">
                <h5>Tags</h5>
                <div className="blaise-blog-tags">
                    <ul>
                        {/* blog tag start */}
                        {blogTag?.map((item, i) => (
                            <li key={i}>
                                <Link href="/blog">{item}</Link>
                            </li>
                        ))}
                        {/* blog tag end */}
                    </ul>
                </div>
            </div>
        </>
    );
}

import { blogCategory } from "@/data/data";
import Link from "next/link";

export default function BlogCategory() {
    return (
        <>
            <div className="blaise-blog-widgets">
                <h5>Categories</h5>
                <div className="blaise-blog-categorie">
                    <ul>
                        {blogCategory?.map((item, i) => (
                            <li key={i}>
                                <Link href="/blog">
                                    {item.title}
                                    <span>({item.count})</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

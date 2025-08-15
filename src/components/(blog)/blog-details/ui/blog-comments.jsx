import Image from "next/image";
import Link from "next/link";

export default function BlogComments() {
    return (
        <>
            <div className="blaise-post-comment">
                <h3>Comments:</h3>
                <ul>
                    <li>
                        <div className="blaise-post-comment-wrap">
                            <div className="blaise-post-comment-thumb">
                                <Image
                                    height={90}
                                    width={90}
                                    priority
                                    src="/assets/images/team/team1.png"
                                    alt="team"
                                />
                            </div>
                            <div className="blaise-post-comment-data">
                                <p>
                                    Legal expertise and is client focused we
                                    enhance entrepreneurial environment flexible
                                    supportive, allowing our lawyers introduced
                                </p>
                                <strong>Alexander Cameron</strong>
                                <span>June 21, 2023</span>
                                <Link className="blaise-comment-reply" href="/">
                                    <i className="ri-reply-fill" />
                                    Reply
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="children">
                        <div className="blaise-post-comment-wrap">
                            <div className="blaise-post-comment-thumb">
                                <Image
                                    height={90}
                                    width={90}
                                    priority
                                    src="/assets/images/team/team2.png"
                                    alt="team"
                                />
                            </div>
                            <div className="blaise-post-comment-data">
                                <p>
                                    Legal expertise and is client focused we
                                    enhance entrepreneurial environment flexible
                                    supportive, allowing our lawyers
                                </p>
                                <strong>Brooklyn Simmons</strong>
                                <span>September 22, 2023</span>
                                <Link className="blaise-comment-reply" href="/">
                                    <i className="ri-reply-fill" />
                                    Reply
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

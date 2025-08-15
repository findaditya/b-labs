import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PortfolioCard({ data }) {
    return (
        <>
            <div className="blaise-portfolio-wrap">
                <div className="blaise-portfolio-thumb">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        src={data.imgUrl}
                        alt="thumb"
                        className="h-auto w-100"
                    />
                    <Link
                        className="blaise-portfolio-btn p-0"
                        href="/single-portfolio"
                    >
                        <span className="p-btn-wraper">
                            <i className="ri-arrow-right-up-line" />
                        </span>
                    </Link>
                    <div className="blaise-portfolio-data">
                        <Link href="/single-portfolio">
                            <h4>{data.title}</h4>
                        </Link>
                        <p>{data.category}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

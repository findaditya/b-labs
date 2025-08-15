import Image from "next/image";

export default function TestimonialCard({ data }) {
    return (
        <>
            <div className="blaise-t-box2">
                <div className="blaise-t-quote2">
                    <Image
                        height={64}
                        width={64}
                        priority
                        src="/assets/images/v1/quote.svg"
                        alt="quote"
                    />
                </div>
                <div className="blaise-t-data2">
                    <p>{data.comment}</p>
                    <div className="blaise-t-rating2">
                        <ul>
                            {new Array(data.rating).fill(0).map((_, i) => (
                                <li key={i}>
                                    <i className="fas fa-star ui-star"></i>
                                </li>
                            ))}
                            {new Array(5 - Number(data.rating))
                                .fill(0)
                                .map((_, i) => (
                                    <li key={i}>
                                        <i className="fas fa-star ui-star-none"></i>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <h5>{data.name}</h5>
                    <span>{data.position}</span>
                </div>
            </div>
        </>
    );
}

import Image from "next/image";

export default function CustomerSayCard({ data }) {
    return (
        <>
            <div className="blaise-t-box3 mb-0">
                <div className="blaise-t-data3">
                    <div className="blaise-t-rating3">
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
                    <p>{data.comment}</p>
                    <div className="blaise-t-footer">
                        <div className="blaise-t-author">
                            <h5>{data.name}</h5>
                            <span>{data.position}</span>
                        </div>
                        <div className="blaise-t-quote3">
                            <Image
                                height={64}
                                width={64}
                                priority
                                src="/assets/images/v1/quote.svg"
                                alt="quote"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

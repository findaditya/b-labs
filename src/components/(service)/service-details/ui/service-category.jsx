import { serviceCategory } from "@/data/data";
import Link from "next/link";

export default function ServiceCategory() {
    return (
        <>
            <div className="blaise-service-menu">
                <ul>
                    {serviceCategory?.map((item, i) => (
                        <li key={i}>
                            <Link href="/service">
                                {item}
                                <i className="ri-arrow-right-up-line" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

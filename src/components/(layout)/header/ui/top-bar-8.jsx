import Link from "next/link";

export default function TopBar8() {
    return (
        <>
            <div className="blaise-header-top dark-bg3">
                <div className="container">
                    <div className="blaise-header-info-wrap">
                        <div className="blaise-header-info ">
                            <ul>
                                <li>
                                    <i className="ri-map-pin-2-fill" />
                                    Floor 7, Max Square, Noida
                                </li>
                            </ul>
                        </div>
                        <div className="blaise-header-info ">
                            <ul>
                                <li>
                                    <Link href="tel:123">
                                        <i className="ri-phone-fill" />
                                        +91-857-888-8870
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:name@email.com">
                                        <i className="ri-mail-fill" />
                                        contact@blaiselabs.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

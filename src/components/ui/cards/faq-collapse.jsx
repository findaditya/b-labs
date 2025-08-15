"use client";
import { Collapse } from "react-collapse";

export default function FaqCollapse({ data, index, isCollapse, handler }) {
    return (
        <>
            <div
                className={`blaise-accordion-item ${
                    isCollapse === index ? "open" : ""
                }`}
            >
                <div
                    onClick={() => handler(index)}
                    className="blaise-accordion-header init-header"
                >
                    <h5>{data.title}</h5>
                </div>
                <Collapse isOpened={isCollapse === index}>
                    <div className="blaise-accordion-body init-body">
                        <p>{data.description}</p>
                    </div>
                </Collapse>
            </div>
        </>
    );
}

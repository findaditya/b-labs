export default function Copyright3() {
    const date = new Date().getFullYear();

    return (
        <>
            <div className="optech-footer-bottom center">
                <div className="optech-copywright">
                    <p> Copyright © {date} Blaise Labs. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

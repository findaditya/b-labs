export default function Copyright3() {
    const date = new Date().getFullYear();

    return (
        <>
            <div className="blaise-footer-bottom center">
                <div className="blaise-copywright">
                    <p> Copyright © {date} Blaise Labs. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

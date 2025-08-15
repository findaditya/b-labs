export default function BlogSearch() {
    return (
        <>
            <div className="blaise-blog-widgets">
                <h5>Search</h5>
                <form>
                    <div className="blaise-search-box">
                        <input type="search" placeholder="Type to search..." />
                        <button id="blaise-search-btn" type="button">
                            <i className="ri-search-line" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

import React from 'react'

export default function About(props) {
    return (
        <>
            <div className={`container my-5 text-${props.mode === "black" ? "white" : "black"}`}>
                <h1 className="container my-3 text-center">About</h1>
                <div id="accordion">
                    <div className="card">
                        <div className={`card-header bg-${props.mode === "black" ? "black" : "light"}`} id="headingOne">
                            <h5 className="mb-0">
                                <button className={`btn text-${props.mode === "black" ? "white" : "black"}`} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>React News Application</strong>
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className={`card-body bg-${props.mode === "black" ? "black" : "light"} text-${props.mode === "black" ? "white" : "black"}`}>
                                <p>
                                    <strong>Latest News :</strong> The application displays a collection of the latest news articles from various categories, such as technology, business, sports, entertainment, and more. Users can quickly scan through the headlines and summaries to stay informed about current events.
                                </p>
                                <p>
                                    <strong>Search Functionality:</strong> Users can utilize the search bar to find specific news articles related to their interests or specific topics. The search feature allows for more personalized and targeted news browsing.
                                </p>
                                <p>
                                    <strong>Pagination:</strong> To ensure smooth and efficient browsing, the application implements pagination, allowing users to navigate through multiple pages of news articles.
                                </p>
                                <p>
                                    <strong>Read More:</strong> Each news article card provides a "Read More" button, which opens the full article in a new tab, directing users to the original source for an in-depth read.
                                </p>
                                <p>
                                    <strong>User-Friendly Design:</strong> The application boasts a clean and intuitive user interface, making it easy for users to interact with the content and find the news they desire.
                                </p>
                                <p>
                                    <strong>About Section:</strong> The About section of the application provides a brief overview of the React News App, explaining its purpose and functionality. It may include details about the API used, the technology stack employed (e.g., React, JavaScript, HTML, CSS), and the project's motivation.
                                </p>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

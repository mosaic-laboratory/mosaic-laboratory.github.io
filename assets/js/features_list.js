class FeaturesSection extends React.Component {
    constructor(props) {
        super(props);
    }

    renderFeatureItem(item, index) {
        const isReversed = index % 2 === 1; // Reverse order for alternating layout
        return (
            <div
                className={`row gy-4 align-items-center features-item ${
                    isReversed ? "flex-row-reverse" : ""
                }`}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
            >
                <div className="col-lg-5 d-flex justify-content-center flex-column">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.points && (
                        <ul>
                            {item.points.map((point, idx) => (
                                <li key={idx}>
                                    <i className="bi bi-check"></i>{" "}
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <a
                        href={item.link}
                        className="btn btn-get-started align-self-start"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More
                    </a>
                </div>
                <div className="col-lg-7 d-flex align-items-center justify-content-center">
                    <iframe
                        width="100%"
                        height="400"
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            borderRadius: "10px",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                        }}
                    ></iframe>
                </div>
            </div>
        );
    }

    render() {
        return (
            <section id="features" className="features section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Features</h2>
                    <a href="https://www.youtube.com/@mosaiclab-ucsd/videos" target="_blank">
                    Explore our amazing features to learn more about how we
                    deliver value and impact.
                    </a>
                </div>
                <div className="container">
                    {features.map((item, index) =>
                        this.renderFeatureItem(item, index)
                    )}
                </div>
            </section>
        );
    }
}

ReactDOM.render(<FeaturesSection />, document.getElementById("features"));
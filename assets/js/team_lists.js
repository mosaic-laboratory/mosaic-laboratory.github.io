class TeamList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderCategory(categoryName, members) {
        return (
            <div key={categoryName} className="team-category">
                <h3
                    className="category-title text-center"
                    style={{
                        paddingTop: "50px",
                        paddingBottom: "10px",
                    }}
                >
                    {this.formatCategoryName(categoryName)}
                </h3>
                <div className="row gy-5 justify-content-center">
                    {Object.entries(members).map(([name, details], index) => (
                        <div
                            className="col-lg-4 col-md-6 member"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                            key={name}
                        >
                            <div className="member-img">
                                <img
                                    src={details.img || 'assets/img/default-avatar.png'}
                                    className="img-fluid"
                                    alt={name}
                                    style={{
                                        width: "250px",
                                        height: "250px",
                                        objectFit: "cover",
                                        borderRadius: "25%",
                                        backgroundColor: "#f0f0f0",
                                    }}
                                />
                                {details.social && (
                                    <div className="social">
                                        {details.social.linkedin && (
                                            <a href={details.social.linkedin} target="_blank" rel="noopener noreferrer">
                                                <i className="bi bi-linkedin" style={{ fontSize: "24px", margin: "0 5px" }}></i>
                                            </a>
                                        )}
                                        {details.social.github && (
                                            <a href={details.social.github} target="_blank" rel="noopener noreferrer">
                                                <i className="bi bi-github" style={{ fontSize: "24px", margin: "0 5px" }}></i>
                                            </a>
                                        )}
                                        {details.social.website && (
                                            <a href={details.social.website} target="_blank" rel="noopener noreferrer">
                                                <i className="bi bi-globe" style={{ fontSize: "24px", margin: "0 5px" }}></i>
                                            </a>
                                        )}
                                        {details.social.cv && (
                                            <a href={details.social.cv} target="_blank" rel="noopener noreferrer">
                                                  <i className="bi bi-file-earmark-text" style={{ fontSize: "24px", margin: "0 5px" }}></i>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className="member-info text-center">
                                <h4>{name}</h4>
                                <span>{details.role}</span>
                                {details.affiliation && <p>{details.affiliation}</p>}
                                {details.email && (
                                    <p>Email: <a href={`mailto:${details.email}`}>{details.email}</a></p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    formatCategoryName(categoryName) {
        return categoryName
            .replace(/_/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());
    }

    renderTeamList() {
        return Object.entries(team_list).map(([category, members]) =>
            this.renderCategory(category, members)
        );
    }

    render() {
        return <div className="container">{this.renderTeamList()}</div>;
    }
}

ReactDOM.render(
    <TeamList />,
    document.getElementById('team')
);





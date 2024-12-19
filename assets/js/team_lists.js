class TeamList extends React.Component {
    constructor(props) {
        super(props);
    }

    groupByCategory() {
        const categories = {};
        Object.entries(team_list).forEach(([name, details]) => {
            const category = details.category || "uncategorized";
            if (!categories[category]) {
                categories[category] = {};
            }
            categories[category][name] = details;
        });
        return categories;
    }

    getTopFourSocialLinks(details) {
        // Define social links in priority order
        const socialLinks = [
            { type: "google_scholar", icon: "ai ai-google-scholar-square", url: details.google_scholar },
            { type: "linkedin", icon: "bi bi-linkedin", url: details.linkedin },
            { type: "github", icon: "bi bi-github", url: details.github },
            { type: "website", icon: "bi bi-globe", url: details.website },
            { type: "cv", icon: "bi bi-file-earmark-text", url: details.cv },
           
        ];

        // Filter out links that are not present
        return socialLinks.filter(link => link.url).slice(0, 4); // Top 4 links only
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
                                    // src={details.img || 'assets/img/default-avatar.png'}
                                    src={"/assets/img/team/" + name + ".png"}
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
                                <div className="social">
                                    {this.getTopFourSocialLinks(details).map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className={link.icon} style={{ fontSize: "24px", margin: "0 5px" }}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="member-info text-center">
                                <h4>{name}</h4>
                                <span>
                                    {details.role.split("\n").map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </span>
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
        const groupedCategories = this.groupByCategory();
        return Object.entries(groupedCategories).map(([category, members]) =>
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
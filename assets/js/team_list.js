class TeamList extends React.Component {
    constructor(props) {
        super(props);
    }
    renderCategory(categoryName, members) {
        return (
            <div key={categoryName} className="team-category">
                {/* Add text-center and padding using inline styles */}
                <h3
                    className="category-title text-center"
                    style={{
                        paddingTop: "50px", // Add padding before the title
                        paddingBottom: "10px", // Add padding after the title
                    }}
                >
                    {this.formatCategoryName(categoryName)}
                </h3>
                <div className="row gy-5 justify-content-center">
                    {Object.entries(members).map(([name, details], index) => (
                        <div
                            className="col-lg-4 col-md-6 member"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 20}
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

    // Format category names to make them more readable
    formatCategoryName(categoryName) {
        return categoryName
            .replace(/_/g, ' ') // Replace underscores with spaces
            .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letter of each word
    }

    // Render the full team list
    renderTeamList() {
        return Object.entries(team_list).map(([category, members]) =>
            this.renderCategory(category, members)
        );
    }

    // Render method
    render() {
        return <div className="container">{this.renderTeamList()}</div>;
    }
}

// Mount the TeamList component to the DOM
ReactDOM.render(
    <TeamList />,
    document.getElementById('teamlist') // Ensure this matches the placeholder ID in your HTML
);
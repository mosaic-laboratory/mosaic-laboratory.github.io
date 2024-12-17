class ProjectLandingContributors extends React.Component {
    constructor(props){
        super(props);
    }
    make_online_list(){  
        let list = [];

        for (let item in project_list[window.project_name]["contributors"]) {
            var curr_contributor = project_list[window.project_name]["contributors"][item]
            list.push(
                <li key={curr_contributor}>{curr_contributor} <a href="#">www.example.com</a></li>
            );
        }

        return list;
    }

    // rendor funcion
    render () {
        return (
            <div className="portfolio-info">
            <h3>Contributors</h3>
            <ul>
            {this.make_online_list()}
            <li><a href="publications.html" className="btn-visit align-self-start">More Publications</a></li>
            </ul>
            </div>
        );
    }
}
ReactDOM.render(
    <ProjectLandingContributors></ProjectLandingContributors>,
    document.getElementById("project_landing_contributors")
);
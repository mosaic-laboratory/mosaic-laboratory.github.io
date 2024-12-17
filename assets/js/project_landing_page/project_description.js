class ProjectLandingTxt extends React.Component {
    constructor(props){
        super(props);
    }
    make_online_list(){  

        return (
            <div className="portfolio-description">
                <h2>{project_list[window.project_name]["title"]}</h2>
                <p>{project_list[window.project_name]["summary"]}</p>
            </div>
        );
    }

    // rendor funcion
    render () {
        return this.make_online_list();
    }
}
ReactDOM.render(
    <ProjectLandingTxt></ProjectLandingTxt>,
    document.getElementById("project_landing_txt")
);
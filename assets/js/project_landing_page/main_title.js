class ProjectLandingTitle extends React.Component {
    constructor(props){
        super(props);
    }
    make_online_list(){  

        // console.log(window.project_name);

        return (
            <div>
              <h1>{project_list[window.project_name]["title"]}</h1>
              <p className="mb-0">{project_list[window.project_name]["tags"]}</p>
            </div>
        );
    }

    // rendor funcion
    render () {
        return this.make_online_list();
    }
}
ReactDOM.render(
    <ProjectLandingTitle></ProjectLandingTitle>,
    document.getElementById("project_landing_title")
);
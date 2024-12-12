class ProjectList extends React.Component {
    constructor(props){
        super(props);
    }
    make_online_list(){  
        let list = [];

        for (let item in project_list) {
            list.push(
                <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <article>

                    <div className="post-img">
                        <a href={project_list[item]["landing_page"]}><img src={project_list[item]["image"]} alt="" className="img-fluid"/></a>
                    </div>

                    <p className="post-category">{project_list[item]["tags"]}</p>

                    <h2 className="title">
                        <a href={project_list[item]["landing_page"]}>{project_list[item]["title"]}</a>
                    </h2>

                    <div className="d-flex align-items-center">
                        {/* <img src="assets/img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/> */}
                        <div className="post-meta">
                        <p className="post-author">{project_list[item]["summary"]}</p>
                        <p className="post-date">
                            {project_list[item]["status"]}
                            {/* <time datetime="2022-01-01">{project_list[item]["status"]}</time> */}
                        </p>
                        </div>
                    </div>

                    </article>
                </div>
            );
        }

        return (<div className="row gy-4">{list}</div>);
    }

    // rendor funcion
    render () {
        return this.make_online_list();
    }
}
ReactDOM.render(
    <ProjectList></ProjectList>,
    document.getElementById("project_list")
);
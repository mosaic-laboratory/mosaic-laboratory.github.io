class ProjectLandingImgs extends React.Component {
    constructor(props){
        super(props);
    }
    make_online_list(){  
        let list = [];

        for (let item in project_list[window.project_name]["paper_list"]) {
            var curr_paper = publication_list[project_list[window.project_name]["paper_list"][item]]
            list.push(
                <div className="swiper-slide" key={project_list[window.project_name]["paper_list"][item]}>
                    <a href={curr_paper["paper_pdf"]} target="_blank"><img src={curr_paper["image"]} alt=""/></a>
                </div>
            );
        }

        return (<div className="swiper-wrapper align-items-center">{list}</div>);
        // return {list};
    }

    componentDidMount() {
        // Swiper configuration and initialization after the component has mounted
        const swiperConfig = {
            loop: true,
            speed: 600,
            autoplay: {
                delay: 5000
            },
            slidesPerView: "auto",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
            }
        };

        // Initialize Swiper
        new Swiper('.swiper', swiperConfig);
    }

    // rendor funcion
    render () {
        return (
        <div className="portfolio-details-slider swiper init-swiper">

          {this.make_online_list()}

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>
        );
    }
}
ReactDOM.render(
    <ProjectLandingImgs></ProjectLandingImgs>,
    document.getElementById("project_landing_imgs")
);
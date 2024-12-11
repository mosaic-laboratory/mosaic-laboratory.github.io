class SponsorList extends React.Component {
    constructor(props){
        super(props);
    }
    make_online_list(){  
        let list = [];

        for (let item in sponsor_list) {
            list.push(
                <div className="col-xl-2 col-md-3 col-6 client-logo" id={item} key={item}>
                    <img src={sponsor_list[item]["img"]} className="img-fluid" alt=""/>
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
    <SponsorList></SponsorList>,
    document.getElementById("sponsor_list")
);
// Helper functions: Sort the publication list by year
const sortedPublications = Object.values(publication_list)
.sort((a, b) => b['year'] - a['year']); // Sort descending by year

// Group publications by year
const groupedByYear = sortedPublications.reduce((acc, publication) => {
const year = publication.year;
if (!acc[year]) {
acc[year] = []; // Initialize an empty array for each year
}
acc[year].push(publication); // Push the publication into the respective year group
return acc;
}, {});


// Main class
class PublicationList extends React.Component {
    constructor(props){
        super(props);
    }
    make_online_list(){  
        // manage the element to be displayed
        const list = [];

        const years = Object.keys(groupedByYear).sort((a, b) => b - a);

        years.forEach(year => {
          // Add a title for the year
          list.push(
            <h2 key={year} className="publication-year-title" id={year} data-aos="fade-up">{year}</h2>
          );
        
          // Render the publications for that year
          groupedByYear[year].forEach((publication, index) => {
            list.push(
              <div className="publication-row" id={index} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                {/* Optional image on the left */}
                {publication.image && (
                  <div className="publication-image">
                    <img src={publication.image} alt={publication.title} />
                  </div>
                )}
            
                {/* Structured content on the right */}
                <div className="publication-content">
                  <p className="publication-title"><b>{publication.title}</b></p>
                  <p dangerouslySetInnerHTML={{ __html: publication.authors }}></p>
                  <p className="publication-venue">{publication.venue}</p>
            
                  <div className="publication-links">
                    {publication.paper_pdf && (
                      <a href={publication.paper_pdf} target="_blank" rel="noopener noreferrer">
                        Paper
                      </a>
                    )}
                    {publication.code && (
                      <a href={publication.code} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    )}
                    {publication.poster && (
                      <a href={publication.poster} target="_blank" rel="noopener noreferrer">
                        Poster
                      </a>
                    )}
                    {publication.slide && (
                      <a href={publication.slide} target="_blank" rel="noopener noreferrer">
                        Slide
                      </a>
                    )}
                    {publication.video && (
                      <a href={publication.video} target="_blank" rel="noopener noreferrer">
                        Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          });
        });
        
        return (<div>{list}</div>);
    }

    // rendor funcion
    render () {
        return this.make_online_list();
    }
}
ReactDOM.render(
    <PublicationList></PublicationList>,
    document.getElementById("publication_list")
);
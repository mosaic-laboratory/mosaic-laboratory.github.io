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
        // console.log(years);
        if (window.last_year_only) {
          years.length = 4;  // Keep only the first item
          // console.log(years);
        }

        // for grouping the papers before a certain year
        var early_group_year = 2017;
        var early_year_met = false;

        years.forEach(year => {
          // Add a title for the year
          if (year > early_group_year){
            list.push(
              <h2 key={year} className="publication-year-title" id={year} data-aos="fade-up">{year}</h2>
            );
          }
          else {
            if (!early_year_met){
              list.push(
                <h2 key={year} className="publication-year-title" id={year} data-aos="fade-up">{early_group_year} and before</h2>
              );
              early_year_met = true;
            }
          }
        
          // Render the publications for that year
          groupedByYear[year].forEach((publication, index) => {
            list.push(
              <div className="publication-row" id={index} key={publication.title} data-aos="fade-up" data-aos-delay={index * 20}>
                {/* Optional image on the left */}
                {publication.image && (
                  <div className="publication-image">
                    <img src={publication.image} alt={publication.title} loading="lazy"/>
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
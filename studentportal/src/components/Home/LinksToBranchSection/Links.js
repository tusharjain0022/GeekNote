import "./Links.css";
import branches from "../../../data/branches.json"

const Branch = ({year, dep, theory, prac, credits}) => {
    return(
        <div className="card" >
          <div className="cardContent">
            <div>
              <h3>{year}</h3>
              <h2>{dep}</h2>
              </div>
            <ul className="academics">
                <li>Theory Subjects: {theory}</li>
                <li>Practical Subjects: {prac}</li>
                <li>
                <a href="location" className="stretched-link" >
                  Credits: {credits}
                </a>
                </li>
            </ul>
          </div>
        </div>
    )
}
function Links(){
    return (
        <section>
          <h1 className="headdd" >RESOURCES</h1>
          
          <div className="allcards">
            <div className="cards">
              {
                  branches.map((branch) => {
                      return <Branch key={branch.id} {...branch} />
                  })
              }
              </div>
          </div>
        </section>
    )
}
export default Links;
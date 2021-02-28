const PortfolioCard = ({ data }) => {
    return (
    <div class="col-lg-4 mx-auto">
        <div className="card mb-2 shadow-sm">
        <img src={`${process.env.PUBLIC_URL}/${data.image}`} className="card-img" alt="card-img" />
            <div className="col-md-12">
                <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                        <a className="btn btn-sm btn-outline-secondary mx-1" href={data.deployed} target="blank">Live Webpage</a>
                        <a className="btn btn-sm btn-outline-secondary mx-1" href={data.repo} target="blank">Repo</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>    
    )
  }
  
  export default PortfolioCard;

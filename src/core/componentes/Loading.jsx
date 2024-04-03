const Loading = () => (
    <>  
  
      {[...Array(12)].map((_, index) => (
        <div key={index} className="col mb-3">
          <div className="card h-100">
            <div className="skeleton-card-img" style={{ backgroundColor: 'lightgray', height: '300px' }}></div>
            <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{ background: "black" }}>
              <div className="skeleton-card-title" style={{ backgroundColor: 'lightgray', width: '80%', height: '20px', marginBottom: '10px' }}></div>
              <div className="skeleton-card-button" style={{ backgroundColor: 'lightgray', width: '50%', height: '40px' }}></div>
            </div>
          </div>
        </div>
      ))}
 
    </>
);

export default Loading;

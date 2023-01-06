import React from "react";


const AllData = ({ data }) => {
  
    
    
    
    return (

    <article className="phater" >
       <div>
             <h1>{data.name.title} {data.name.first} {data.name.last}</h1>
            <img src={data.picture.medium} alt="" />
             <h3> <img src="" alt="" /> {data.gender}</h3>
             <h3><img src="" alt="" /> {data.email}</h3>
            <h3><span>telefono:</span> {data.phone}</h3>
            <h3><span>ubicacion:</span>  {data.location.city} {data.location.state} {data.location.country}</h3>
      </div>
            <button>cambio</button>
    </article>


  );
};


export default AllData 
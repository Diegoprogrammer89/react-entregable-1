import React from "react";
import gender from "../assets/icon/gender.png";
import email from "../assets/icon/email.png";
import phone from "../assets/icon/phone.png";
import location from "../assets/icon/pin.png";





const AllData = ({ data }) => {

    
    return (

    <article className="all" >
       <div className="phater" >
             <h2>{data.name.title} {data.name.first} {data.name.last}</h2>
            <img className="photo" src={data.picture.medium} alt="" />
             <h4> <img className="icon" src={gender} alt="" /> {data.gender}</h4>
             <h4><img className="icon" src={email} alt="" /> {data.email}</h4>
            <h4><img className="icon" src={phone} alt="" /> {data.phone}</h4>
            <h4><img className="icon" src={location} alt="" /> {data.location.city} {data.location.state} {data.location.country}</h4>
      </div>
           
            
    </article>


  );
};


export default AllData 
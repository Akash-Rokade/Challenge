import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
export default function CctechChallenge() {
  const [datainfo, setDataInfo] = useState({
    name: [],
    email: [],
    address: [],
  });
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((res) => res)
      .then((data) => {
        // console.log(data.data.results[0].location)
        for (var i = 0; i < data.data.results.length; i++) {
          datainfo.email.push(data.data.results[i].email);
          datainfo.name.push(
            data.data.results[i].name.title +
              " " +
              data.data.results[i].name.first +
              " " +
              data.data.results[i].name.last
          );
          datainfo.address.push(
            data.data.results[i].location.street.name +
              "," +
              data.data.results[i].location.city +
              "," +
              data.data.results[i].location.state +
              "," +
              data.data.results[i].location.country +
              "," +
              data.data.results[i].location.postcode
          );
        }
        // datainfo['name'].map((name)=> console.log(name) );
        // Object.keys(datainfo).map(function () {
        //   console.log(datainfo["address"][0]);
        // });
      });
  },[]);
  return (
    
    <div>
      <Navbar bg="primary" expand="lg">
        <h4 className="heading">User List</h4>
      </Navbar>
      {/* {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )} */}

      {datainfo["name"].map((name,key1) =>     
                                      
        <div className="boxcard">
          <div class="d-flex justify-content-center">
            <div
              className="card mb-3"
              style={{
                width: "700px",
                borderColor: "blue",
                borderWidth: "3px",
              }}
            >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="250"
                    aria-label="Placeholder: Image"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96" />
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      Photo
                    </text>
                  </svg>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{name }</h5>
                    <p className="card-text">{datainfo['email'][key1]}</p>

                    <p className="card-text">
                      <small className="text-muted">{datainfo['address'][key1]}</small>
                  
                    </p> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   )} 

      <div class="footer">
        <p>Frontend Developer Challenge 2021</p>
      </div>
    </div>
  )
}

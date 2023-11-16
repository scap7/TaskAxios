import React from "react"
import axios from "axios"
import SingleImage from "./Components/SingleElement";


// base url and resource
const baseUrl = "https://jsonplaceholder.typicode.com";
const resource = "/comments";


export default function App() {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState();

  //optional declaration for fetch
  const optional = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      body: "user-body",
      email: "user-email",
      name: "user-name",
      postId: 1,
    })
  }

  
  //fetch declaration
  const fetchAPI = () => {
    fetch(baseUrl + resource,/*optional*/)
      .then(res => {
        if (!res.ok) {
          console.log(res);
          throw Error("resource not found")
        } else {
          return res.json();

        }
      })
      .then(res => {
        setData(res);
         console.log(res);
        setLoading(false);
      })
      .catch(e => {
        // console.log(e)
        setError(e.message)
        setLoading(false)
      });

  }


  //Axios 
  const axiosRequest=()=>{
    axios
    .get(baseUrl+resource,/*{
      body: "user-body",
      email: "user-email",
      name: "user-name",
      postId: 1,
    }*/)
    .then(res=>{
            // console.log(res);
            setData(res.data);
            setLoading(false);
      
          })
    .catch(error=>{
            // console.log(error);
            setError(error.message);
            setLoading(false);
          })
  }


  //calling fetch ||axios in useEffect
  React.useEffect(() => {
    // fetchAPI();
    axiosRequest();
  }, []);



//react return 

  if (!loading) {
    return (
      <div className="container">

        {error ? <h3 >{error}</h3> :
          data.slice(0, 5).map(e => {

            return (
              <SingleImage
                key={e.id}
                e={e} />
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

}
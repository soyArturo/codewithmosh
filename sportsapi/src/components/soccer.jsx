import React, { useState, useEffect } from "react";
import axios from "axios";
import SportCard from "./common/cards";

const Soccer = () => {
  const [leagues, setLeagues] = useState([]);
  const url =
    "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      console.log(result.data);
      setLeagues(result.data);
    };
    fetchData();
  }, []);
  const { countrys } = leagues;
  return (
    <>
      <h1 className="text-center font-weight-bold mb-5">English Soccer</h1>
      <div className="row">
        {countrys &&
          countrys.reverse().map((countrie) => (
            <div className="col-md-4" key={countrie.idLeague}>
              <SportCard countrie={countrie} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Soccer;

import View from "../../components/Vacants/View";
import Card from "../../components/Vacants/LinkCard";
import Results from "../../components/Results";
import { useParams, useHistory } from "react-router-dom";
import React from "react";
import axios from "axios";

function LinkRecruiters() {
  const { id } = useParams();
  const [recruiters, setRecruiters] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    async function checkVacant() {
      const vacant = await axios.get(`/api/vacant/${id}`);
      console.log("ESTADO",vacant.data.state)
      if (vacant.data.state !== "Iniciada") history.push(`/vacants/${id}`);
    }

    async function seting() {
      const resRecruiter = await axios.get(`/api/vacant/${id}/showRanking`);
      setRecruiters(resRecruiter.data);
    }
    checkVacant();
    seting();
  }, [id]);

  return (
    <div>
      <Results datas={recruiters} View={View} Card={Card} />
    </div>
  );
}

export default LinkRecruiters;

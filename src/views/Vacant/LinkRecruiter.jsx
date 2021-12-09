import View from "../../components/Vacants/View";
import Card from "../../components/Vacants/LinkCard";
import Results from "../../components/Results";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";

function LinkRecruiters() {
  const { id } = useParams();
  const [recruiters, setRecruiters] = React.useState([]);
  React.useEffect(() => {
    async function seting() {
      const resRecruiter = await axios.get(`/api/vacant/${id}/showRanking`);
      setRecruiters(resRecruiter.data);
    }
    seting();
  }, [id]);

  return (
    <div>
      <h1>Seleccion de Reclutador</h1>
      <Results datas={recruiters} View={View} Card={Card} />
    </div>
  );
}

export default LinkRecruiters;

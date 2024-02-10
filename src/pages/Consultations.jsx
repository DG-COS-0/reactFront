import React, { useEffect } from "react";
import { getAllConsultations } from "../services/apiConsultations";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import ConsultationTab from "../features/consultations/ConsultationTab";
import AddConsultation from "../features/consultations/AddConsultation";

export default function Consultations() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Les Consultations</Heading>
        <p>Filtrer / Trier </p>
      </Row>

      <Row>
        <ConsultationTab />
        <AddConsultation />
      </Row>
    </>
  );
}

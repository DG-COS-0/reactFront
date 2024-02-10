import styled from "styled-components";

import Loader from "../../ui/Loader";
import ConsultationRow from "./ConsultationRow";
import Button from "../../ui/Button";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useConsultations } from "./useConsultation";
import Row from "../../ui/Row";
const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function ConsultationTab() {
  const { isPending, consultations } = useConsultations();

  if (isPending) return <Loader />;

  return (
    <>
      <Menus>
        <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
          <Table.Header>
            <div>Clients</div>
            <div>Consult Code</div>
            <div>Price</div>
            <div>Status</div>
            <div>Créé à</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={consultations.data}
            render={(consultation) => (
              <ConsultationRow
                consultation={consultation}
                key={consultation._id}
              />
            )}
          />
        </Table>
      </Menus>
    </>
  );
}

export default ConsultationTab;

import styled from "styled-components";

import { useDeleteConsultation } from "./useDeleteConsultation.js";
import { formatCurrency, formatDate } from "../../utils/helpers.js";
import { HiPencil, HiSquare2Stack, HiTrash, HiEye } from "react-icons/hi2";
import { FiCheck } from "react-icons/fi";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
const Img = styled.img`
  display: block;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Consultation = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;
const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;
const CreatedAt = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function ConsultationRow({ consultation }) {
  const { isDeleting, deleteConsultation } = useDeleteConsultation();
  const {
    id: consultationId,

    status,
    price,
    code: name,
    client: { photo: userPhoto, fullName: userName },
    description,
    createdAt,
  } = consultation;

  return (
    <Table.Row>
      <Img src={userPhoto} />
      <Consultation>{name}</Consultation>
      <Price>{formatCurrency(price)}</Price>
      <div> {status} </div>
      <CreatedAt>{formatDate(createdAt)}</CreatedAt>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={consultationId} />

            <Menus.List id={consultationId}>
              <Modal.Open opens="voirPlus">
                <Menus.Button icon={<HiEye />}>Voir plus</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="validate">
                <Menus.Button icon={<FiCheck />}>Validate</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="consultations"
                disabled={isDeleting}
                onConfirm={() => deleteConsultation(consultationId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default ConsultationRow;

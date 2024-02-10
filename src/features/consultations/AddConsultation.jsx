import Button from "../../ui/Button";
import CreateConsultationForm from "./CreateConsultationForm";
import Modal from "../../ui/Modal";

function AddConsultation() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="Consultation-form">
          <Button>Ajouter Consultation</Button>
        </Modal.Open>
        <Modal.Window name="Consultation-form">
          <CreateConsultationForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddConsultation;

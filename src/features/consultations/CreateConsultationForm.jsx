import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateConsultation } from "./useCreateConsultation";
import { useEditConsultation } from "./useEditConsultation";

function CreateConsultationForm({ ConsultationToEdit = {}, onCloseModal }) {
  const { isCreating, createConsultation } = useCreateConsultation();
  const { isEditing, editConsultation } = useEditConsultation();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = ConsultationToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession)
      editConsultation(
        { newConsultationData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createConsultation(
        { ...data },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Consultation name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          placeholder="Ex: CONS-789"
          disabled={isWorking}
          {...register("name", {
            required: "Champs requis",
          })}
        />
      </FormRow>

      <FormRow
        label="Consultation Price (XOF)"
        error={errors?.consPrice?.message}
      >
        <Input
          type="number"
          id="consPrice"
          disabled={isWorking}
          {...register("consPrice", {
            required: "Champs requis",
            min: {
              value: 5000,
              message: "La consultation doit couter au moins 5000f",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Description de consulation"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "Champs requis",
            min: {
              value: 200,
              message: "La description doit faire au moins 200Carateres",
            },
          })}
        />
      </FormRow>

      {/* <FormRow label="Consultation photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "Champs requis",
          })}
        />
      </FormRow> */}

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Consultation" : "Create new Consultation"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateConsultationForm;

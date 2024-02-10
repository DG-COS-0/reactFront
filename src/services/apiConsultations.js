import apiURL from "./api";

export async function getAllConsultations() {
  const { status, results, data, message } = await fetch(`${apiURL}/cons`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());

  if (status === "echec") {
    console.error("Erreur", message);
    throw new Error(`Une erreur s'est produit lors de l'arrivage des données`);
  }
  return { status, results, data: data.data };
}
export async function deleteConsultation(id) {
  const { status, results, data, message } = await fetch(
    `${apiURL}/cons/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }
  ).then((data) => data.json());
  if (status === "echec") {
    console.error("Erreur", message);
    throw new Error(
      `Une erreur s'est produit lors de la suppression de la consultation`
    );
  }
  return { status, results, data: data.data };
}
export async function createEditConsultation({ newConsultation, id }) {
  const data = await fetch(`${apiURL}/cons/${id ? id : ""}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: id ? "PATCH" : "POST",
    body: JSON.stringify(newConsultation),
  }).then((data) => data.json());

  return data;
}

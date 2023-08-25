const form = document.querySelector("form");

const sendDatas = async (e) => {
  e.preventDefault();
  const datas = new FormData(form);
  const lastName = datas.get("nom");
  const firstName = datas.get("prenom");
  const jsonDatas = {
    lastName,
    firstName,
  };

  try {
    const response = await fetch("http://127.0.0.1:3000/api/addUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(jsonDatas),
    });

    if (!response.ok) {
      console.log(`impossible d'ajouter un utilisateur`);
    }
    alert("vos données sont bien envoyées");
  } catch (e) {
    console.log(`impossible d'envoyer les données ${e.message}`);
  }
};

form.addEventListener("submit", sendDatas);

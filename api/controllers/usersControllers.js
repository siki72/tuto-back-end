import { loadDatas, saveDatas } from "../utils/helper.js";
export const addUser = async (req, res) => {
  const newData = req.body;
  const existingDatas = await loadDatas();
  existingDatas.push(newData);
  await saveDatas(existingDatas);
  res.status(201).json({ message: "Utilisateur ajouté avec succès" });
};

export const getAllUsers = async (req, res) => {
  try {
    const datas = await loadDatas();
    res.status(200).json(datas);
  } catch (e) {
    res.status(500).json({ message: "Oops !, une erreur s'est produite." });
  }
};

import { createContext, useState } from "react";

export const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
  const [pages, setPages] = useState("login");
  const [usuario, setUsuario] = useState({})
  const [contQuestoes, setContQuestoes] = useState()
  const [contDisciplinas, setDisciplinas] = useState()
  return (
    <PagesContext.Provider value={{ pages, setPages, usuario, setUsuario ,contQuestoes, setContQuestoes,contDisciplinas, setDisciplinas}}>
      {children}
    </PagesContext.Provider>
  );
};

import React, { createContext, useState } from "react";
import Data from "./db.json";

interface IApp {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveMenu: boolean;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuHandler: () => void;
  person: IPerson[];
  setPerson: (person: IPerson[]) => void;
  getPerson: (idPerson: number) => IPerson | undefined;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IApp>({} as IApp);

export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {
  const [isLight, setIsLight] = useState(false);
  const [filter, setFilter] = useState("");
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const menuHandler = () => {
    setIsActiveMenu(!isActiveMenu);
  };
  const [person, setPerson] = useState(Data.person);
  const getPerson = (idPerson: number) => {
    return person.find((person) => person.id === idPerson);
  };
  return (
    <AppContext.Provider
      value={{
        isActiveMenu,
        setIsActiveMenu,
        menuHandler,
        isLight,
        setIsLight,
        person,
        setPerson,
        getPerson,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

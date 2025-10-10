import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Tworzymy Context
export const MobileNavContext = createContext({
  isOpen: false,
  setIsOpen: (_value: boolean) => {},
});

// Hook do używania Context
export const useMobileNav = () => useContext(MobileNavContext);

// Provider
export const MobileNavProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MobileNavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
};

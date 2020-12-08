import { createContext, useContext } from 'react';

export const CarouselContext = createContext(null);
export const CarouselContextProvider = ({ children, ...props }) => (
  <CarouselContext.Provider {...props}>{children}</CarouselContext.Provider>
);

export const useCarouselContext = () => useContext(CarouselContext);

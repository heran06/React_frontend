import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const {children} = props;
    const [currentPage , setcurrentPage] = useState(1);
    return (
        <GlobalContext.Provider value = {{currentPage,setcurrentPage}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContext;
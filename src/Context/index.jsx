import { createContext, useState } from "react";
import exampleImg from '../assets/images/imagem1.png'

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [displayImg, setDisplayImg] = useState(exampleImg);
    const [uploadedProjects, setUploadedProjects] = useState([]);
    const handleUpload = (input) => {
        console.log(input);
    }

    return(
        <DataContext.Provider value={{handleUpload, displayImg, setDisplayImg, uploadedProjects, setUploadedProjects}}>
            {children}
        </DataContext.Provider>
    )
    
}


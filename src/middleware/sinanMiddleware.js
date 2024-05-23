export const sinanLogger = (store) => {
    //debugger
    return(next) => {
        //debugger
        
        return(action) => {
            //debugger
            console.log("sinan action: ", action)
            action.sinan = "sinan field added"
            //console.log("Sinan was here");
            const result = next(action);
            console.log("Sinan'dan sonra kim var?")
            return result;
        }
    }
}
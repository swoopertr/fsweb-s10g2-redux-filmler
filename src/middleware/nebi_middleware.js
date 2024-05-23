export const nebiLogger = (store) => {
    return (next) => {
        return (action) => {
            console.log("Nebi Action: " , action);
            action.nebiobj = "nebi field."
            const result = next(action);
            console.log("After nebi  Next");
            return result;
        }
    }
}
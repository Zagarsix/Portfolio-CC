const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            test: null,
            language: "en"
        },
        actions: {
            exampleFunction: () => {
                console.log("Working...")
            },
        }
    }
}
export default getState
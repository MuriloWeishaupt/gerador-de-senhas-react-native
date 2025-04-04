import  AsyncStorage  from "@react-native-async-storage/async-storage";

const useStorage = () => {

    const pegaItem = async (chave) => {
        try {
            const passwords = await AsyncStorage.getItem(chave)
            return JSON.parse(passwords) || [];
            
        } catch (error) {
            console.log("Deu ruim :(")
            return [];
        }
    } 

    const salvaItem = async (chave, value) => {
        try {
            let passwords = await pegaItem(chave);

            passwords.push(value)

            await AsyncStorage.setItem(chave, JSON.stringify(passwords));

        } catch (error) {
            console.log("Erro ao salvar", error)
        }
    }

    const removeItem = async (chave, item) => {
        try {   
            let passwords = await pegaItem(chave);
            let myPasswords = passwords.filter( (password) => {
                return (password !== item)
            })  

            await AsyncStorage.setItem(chave, JSON.stringify(myPasswords))
            return myPasswords;

        } catch (error) {

            console.log("Erro ao deletar", error)
        }
    }


    return {
        pegaItem,
        salvaItem,
        removeItem
    }
}

export default useStorage  
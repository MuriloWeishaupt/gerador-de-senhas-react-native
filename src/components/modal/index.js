import { StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native"
import useStorage from './../../hooks/useStorage'
import * as Clipboard from 'expo-clipboard'

export function ModalPassword({ password, handleClose }) {
const { salvaItem  } = useStorage();

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password)
        await salvaItem("#pass", password)

        alert("Senha Salva com sucesso!")        

        handleClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Senha gerada</Text>
                <Pressable style={styles.password}>
                    <Text style={styles.passText}>{ password }</Text>
                    </Pressable>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonBack}  onPress={handleClose}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                            <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    content: {
        backgroundColor: "#fff",
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 24,
    },

    password: {
        backgroundColor: "#0e0e0e",
        width: "90%",
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 8,
    },

    passText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },

    buttonArea: {
        flexDirection: "row",
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,

    },

    buttonSave: {
        backgroundColor: '#12b575',
        borderRadius: 8,
        padding: 10,
    },

    buttonSaveText: {
        color: '#fff',
        fontWeight: 'bold'
    }


})
import { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import PasswordItem  from './components/passwordItem'

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { pegaItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await pegaItem("#pass")
            console.log(passwords)
            setListPasswords(passwords)
        }

        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item) {
        const passwords = await removeItem("#pass", item)
        setListPasswords(passwords)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.text}>Minhas senhas</Text>
            </View>
            <View style={styles.content}>
                <FlatList style={styles.containerList}
                    data={listPasswords}
                    keyExtractor={ (item) => String(item) }
                    renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}  /> }
                />

            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: "#12b575",
        paddingTop: 60,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,

    },

    text: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold',
    },

    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    },

    containerList: {
        flex: 1,
        paddingTop: 14, 
    }
})
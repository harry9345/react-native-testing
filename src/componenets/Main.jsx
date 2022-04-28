import Constants from 'expo-constants';
import { Text, StyleSheet, View, Pressable, Alert } from 'react-native';


const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        marginTop: 20,
        width:40,
        backgroundColor: 'red',
        padding: '5%',
        borderRadius: 40,
    }
})

const Main = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text> Rate repo App</Text>
            </View>
            <Pressable onPress={() => Alert.alert('you press')} style={styles.button}><Text>salam</Text></Pressable>
        </View>
    )
}

export default Main
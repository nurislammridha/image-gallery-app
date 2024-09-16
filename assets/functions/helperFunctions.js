import AsyncStorage from '@react-native-community/async-storage';
export const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('data', jsonValue);
    } catch (e) {
        // console.log('e', e)
    }
}
export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('data') || [];
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};
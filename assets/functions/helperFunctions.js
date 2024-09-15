// import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from '@react-native-community/async-storage';
export const storeData = async (value) => {
    try {
        // console.log('value', value)
        const jsonValue = JSON.stringify(value);
        // console.log('jsonValue', jsonValue)
        await AsyncStorage.setItem('data', jsonValue);
    } catch (e) {
        // console.log('e', e)
    }
}
export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('data') || [];
        // console.log('jsonValue', jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};
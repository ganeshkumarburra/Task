import AsyncStorage from '@react-native-async-storage/async-storage';
async function set(key: string, data: any) {
  const value = JSON.stringify(data);
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

async function get(key: string) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
}

async function remove(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}
export default {set, get, remove};

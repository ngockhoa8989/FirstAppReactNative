import { AsyncStorage } from 'react-native';

const DeviceStorage = {
    async setKey(key, value) {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
      }
    },
  
    async getKey(key) {
      try {
        return  await AsyncStorage.getItem(key);
       
      } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
        return null;
      }
    },
  
    async deleteKey(key) {
      try{
        await AsyncStorage.removeItem(key)
        
      } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
      }
    }
  };
  
  export default DeviceStorage;
  

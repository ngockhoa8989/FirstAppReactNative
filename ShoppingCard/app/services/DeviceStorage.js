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
  
<<<<<<< HEAD
export default DeviceStorage;
=======
  export default DeviceStorage;
  
>>>>>>> 538b358c6f7579514673a9d987c3e7c658ef3b04

import React, { Component } from 'react'
import DeviceStorage from './DeviceStorage';
import { constants } from '../config/constants';

const FetchService = {
    async getData (url) {
        let TokenId = await DeviceStorage.getKey('Token_Id');
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': TokenId ? 'Bearer ' + TokenId : null
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject(error);
            }); 
        });
       
    },

    async postData(url, data) {
        let  TokenId = await DeviceStorage.getKey('Token_Id');
        return fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': TokenId ? 'Bearer ' + TokenId : null
                },
                body: typeof data === 'string' ? data : JSON.stringify(data)
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    resolve(responseJson);
                })
                .catch((error) => {
                    reject(error);
                }); 
        
    },

    async putData(url, data) {
        let TokenId = await DeviceStorage.getKey('Token_Id');
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': TokenId ? 'Bearer ' + TokenId : null
                },
                body: typeof data === 'string' ? data : JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject(error);
            }); 
        });
    },

    async deleteData(url) {
        let TokenId = await DeviceStorage.getKey('Token_Id'); 
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': TokenId ? 'Bearer ' + TokenId : null
                },
            })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject(error);
            }); 
        });

        
    }
};

export default FetchService;
import React, { Component } from 'react'
import DeviceStorage from './DeviceStorage';
import { constants } from '../config/constants';

const FetchService = {
    async getData(url) {
        var TokenId = await DeviceStorage.getKey(constants.StorageKey.Token_Id);
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
                    return responseJson;
                })
                .catch((error) => {
                    console.error(error);
                }); 
    },

    async postData(url, data) {
        var TokenId = await DeviceStorage.getKey(constants.StorageKey.Token_Id);
        fetch(url, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': TokenId ? 'Bearer ' + TokenId : null
                    },
                    body: JSON.stringify({data})
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    return responseJson;
                })
                .catch((error) => {
                    console.error(error);
                }); 
    },

    async putData(url, data) {
        var TokenId = await DeviceStorage.getKey(constants.StorageKey.Token_Id);
        fetch(url, {
                    method: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': TokenId ? 'Bearer ' + TokenId : null
                    },
                    body: JSON.stringify({data})
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    return responseJson;
                })
                .catch((error) => {
                    console.error(error);
                }); 
    },

    async deleteData(url) {
        var TokenId = await DeviceStorage.getKey(constants.StorageKey.Token_Id);
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
                    return responseJson;
                })
                .catch((error) => {
                    console.error(error);
                }); 
    }
};

export default FetchService;
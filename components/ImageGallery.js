/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import car from '../assets/images/car.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, offlineMode } from '../features/imageGallerySlice';
import { useNetInfo, useNetInfoInstance } from '@react-native-community/netinfo';
// import { getData, storeData } from '../assets/functions/helperFunctions';
import { MyActivityIndicator } from './MyActivityIndicator';
import { getData, storeData } from '../assets/functions/helperFunctions';
import AsyncStorage from '@react-native-community/async-storage';
const ImageGallery = ({ navigation }) => {
    const [filter, setFilter] = useState("")
    const dispatch = useDispatch()
    const { netInfo: { type, isConnected }, refresh } = useNetInfoInstance();
    const data = useSelector(state => state.posts)
    const { posts, isLoading, isError, error } = data || {}

    useEffect(() => {
        if (isConnected !== null && !isConnected) {
            Alert.alert('You are offline. Data are showing from storage');
            getData().then((res) => {
                dispatch(offlineMode(res))
            })
        } else {
            dispatch(fetchPosts())

        }
    }, [isConnected])

    useEffect(() => {
        if (posts && posts.length > 0) {
            storeData(posts)
        }

    }, [posts])
    // useEffect(() => {
    //     const { details, isConnected, isInternetReachable } = netInfo
    //     if (details !== null && !isConnected && !isInternetReachable) {
    //         Alert.alert('You are offline. Data are showing from storage');
    //     } else {
    //         storeData(posts?.posts)
    //     }
    // }, [netInfo])

    // console.log('netinfo', isConnected)
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.headTxt}>Image Gallery</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setFilter(text)}
                    value={filter}
                    placeholder="Search by title"
                />
            </View>
            <View style={styles.galleryContainer}>
                {isLoading && <MyActivityIndicator />}
                {!isLoading && posts && posts?.length > 0 && posts.filter(({ title }) => title.toLowerCase().includes(filter.toLowerCase())).map(({ thumbnailUrl, title, url }, index) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { title, url })} key={index}>
                        <View
                            style={styles.gallery}

                        >
                            <View style={styles.galleryImgContainer}>
                                <Image source={thumbnailUrl == null ? car : { uri: thumbnailUrl }} style={styles.galleryImg} />

                            </View>
                            <Text style={styles.galleryImgTitle}>{title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        paddingLeft: 5,
        paddingRight: 5
    },
    headTxt: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        paddingBottom: 10
    },
    galleryContainer: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    gallery: {
        width: 100,
        marginRight: 5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10
    },
    galleryImgContainer: {
        height: 100,
    },
    galleryImg: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    galleryImgTitle: {
        marginTop: 5,
        textAlign: 'center',
        height: 20
    },
    input: {
        marginTop: 20,
        width: '100%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        placeholderTextColor: 'gray',
        borderRadius: 10,
        paddingLeft: 15
    }

});

export default ImageGallery;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Button,
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import car from '../assets/images/car.jpg'
const Details = ({ navigation, route }) => {
    const { title, url } = route?.params
    // console.log('thumbnailUrl', thumbnailUrl)
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.headTxt}>{title}</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image source={{ uri: url }} style={styles.img} />
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                </Text>
            </View>
            <TouchableOpacity style={styles.btnCon}>
                <Button
                    title='Back'
                    style={styles.btn}
                    onPress={() => navigation.navigate('Gallery')}
                />
            </TouchableOpacity>
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
    imgContainer: {
        marginTop: 10
    },
    img: {
        width: '100%',
        height: Dimensions.get('window').width
    },
    text: {
        marginTop: 10
    },
    btnCon: {
        marginTop: 10,

    },
    btn: {
        borderRadius: 20
    }

});

export default Details;

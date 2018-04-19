import React, { Component } from "react"
import { Text, View, Image } from "react-native"
import { Fonts } from "../../src/utils/Fonts.js"

export default class Footer extends Component {
    render (){

        const { viewStyle } = styles;

        return(
            <View style = {viewStyle}>
                <Image  style = {{height: 30, width: 30, marginLeft: 10}}
                        source = {{uri: "https://cdn1.iconfinder.com/data/icons/freeline/32/home_house_real_estate-512.png"}}
                />
                <Image  style = {{height: 30, width: 30, marginRight: 10}}
                        source = {{uri: "https://d30y9cdsu7xlg0.cloudfront.net/png/15803-200.png"}}
                />
                <Image  style = {{height: 30, width: 30, marginRight: 10}}
                        source = {{uri: "http://icons.iconarchive.com/icons/icons8/ios7/256/User-Interface-Plus-icon.png"}}
                />
                <Image  style = {{height: 30, width: 30, marginRight: 10}}
                        source = {{uri: "http://icons.iconarchive.com/icons/iconsmind/outline/512/Heart-2-icon.png"}}
                />
                <Image  style = {{height: 30, width: 30, marginRight: 10}}
                        source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZuFmSEC7CkY5g3NUkElNACQImmSZRPlA7OWe1ZJ9p0LyqmqRpg"}}
                />
            </View>
        )
    }
}


const styles = {
    viewStyle: {
         backgroundColor: '#FFFFFF',
         alignItems: 'center',
         height: 60,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 20 },
         shadowOpacity: 0.2,
         elevation: 2,
         position: 'relative',
         bottom: 0,
         flexDirection: 'row',
         justifyContent: 'space-between'
    },
}
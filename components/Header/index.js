import React, { Component } from "react"
import { Text, View, Image } from "react-native"
import { Fonts } from "../../src/utils/Fonts.js"

export default class Header extends Component{
    render(){

        const {textStyle, viewStyle} = styles;

        return(
            <View style = {viewStyle}>
                <Image  style = {{height: 30, width: 30, marginLeft: 10}}
                        source = {{uri: "https://imageog.flaticon.com/icons/png/512/3/3901.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"}}
                />
                <Text style = {textStyle}>Instagram</Text>
                <Image  style = {{height: 30, width: 30, marginRight: 10}}
                        source = {{uri: "https://d30y9cdsu7xlg0.cloudfront.net/png/230502-200.png"}}
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textStyle: {
        fontFamily: Fonts.Allura,
        fontSize: 30
    }
}
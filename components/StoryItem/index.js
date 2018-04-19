import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class Item extends Component {
    render (){
        const { itemStyle, viewStyle } = styles

        return (
            <View>
                <View style={viewStyle}>
                    <Image style = {itemStyle}
                           source = {{uri: this.props.uri}}
                    />
                </View>
                <View style={{marginLeft: 7}}>
                    <Text style={{alignSelf: "center"}}>{this.props.name}</Text>
                </View>
            </View>
        )

    }

}

const styles = {
    viewStyle:{
        height: 65,
        width: 65,
        borderColor: "#f442b9",
        borderWidth: 2,
        borderRadius: 32.5,
        marginLeft: 10,
        justifyContent: "center",
        flexDirection: "column"
    },

    itemStyle:{
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: "#FFF",
        borderWidth: 2,
        alignSelf: "center"
    }
}
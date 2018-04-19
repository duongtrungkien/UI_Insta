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
            </View>
        )

    }

}

const styles = {
    viewStyle:{
        height: 45,
        width: 45,
        borderColor: "#FFF",
        borderWidth: 2,
        borderRadius: 22.5,
        marginLeft: 5,
        justifyContent: "center",
        flexDirection: "column"
    },

    itemStyle:{
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: "#FFF",
        borderWidth: 2,
        alignSelf: "center"
    }
}
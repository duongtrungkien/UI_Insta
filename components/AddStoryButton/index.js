import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class AddStoryButton extends Component {
    render (){

        const { viewStyle, itemStyle, addButtonStyle } = styles

        return (
            <View>
                <View style={ viewStyle }>
                    <Image style = {itemStyle}
                           source = {{uri: this.props.uri}}
                    />
                    <Image style={ addButtonStyle }
                           source = {{uri: "https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/add_blue.png"}}
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
        borderColor: "#FFF",
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
    },

    addButtonStyle:{
        height: 18,
        width: 18,
        borderColor: "#FFF",
        borderRadius: 9,
        borderWidth: 1,
        position: "absolute",
        bottom: 0,
        right: 0
    }
}
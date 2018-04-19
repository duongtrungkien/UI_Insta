import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import Item from "../StoryItem/index.js"
import AddStory from "../AddStoryButton/index.js"
import { Fonts } from "../../src/utils/Fonts.js"

export default class Story extends Component {

    render (){

        const { containerStyle, headerStyle, bodyStyle } = styles;

        return(
            <View style = {containerStyle}>
                <View style={headerStyle}>
                    <Text style={{marginLeft: 10, fontSize: 15, fontFamily: Fonts.OpenSansBold}}>Stories</Text>
                    <View style={{flexDirection: 'row', marginRight: 5}}>
                        <Image style = {{height: 20, width: 20, marginRight: 2}}
                               source = {{uri: "https://icon-icons.com/icons2/1132/PNG/512/1486348532-music-play-pause-control-go-arrow_80458.png"}}
                        />
                        <Text style={{marginRight: 10, fontSize: 15, fontFamily: Fonts.OpenSans}}>Watch All</Text>
                    </View>
                </View>

                <ScrollView style={bodyStyle}
                            horizontal = {true}
                            showsHorizontalScrollIndicator={false}
                >
                    <AddStory name="you" uri="https://0.soompi.io/wp-content/uploads/2017/07/08133727/jeon-somi-xpn.jpg"/>
                    <Item name="cat" uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-87OnFbtlcm27uBtMJ9fFtfe_5Z1sH_VjxmtmWPOsQdbj3muJ"/>
                    <Item name="dog" uri="https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"/>
                    <Item name="Quang_Anh" uri="https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/26172747_10208090686784326_1054024624423792071_o.jpg?_nc_cat=0&oh=7360e416e0193d4b1fce8bc25ddea6af&oe=5B60CB1A"/>
                    <Item name="Nancy" uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuI3B1gdSkAx5eY8acxR-TZ35aQshNvUY5wsOnPsgtuIseHPa"/>
                    <Item name="Sugar_Tank" uri="https://khamphatre.com/wp-content/uploads/2017/12/vi-sao-duong-tang-bi-3-do-de-hat-hui-30-nam-nay-5-khamphatre.com_.jpg"/>
                    <Item name="Ngo_0" uri="https://1.bp.blogspot.com/-m8suz1jgYfc/VsWQ5EWhvwI/AAAAAAAACVw/_cdg8tCMuk4/s1600/ton-ngo-khong-ngaydeptuoi.jpg"/>
                </ScrollView>

            </View>
        )
    }
}

const styles = {
    containerStyle:{
        backgroundColor: '#FFFFFF',
        height: 120,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        elevation: 0.3,
        position: 'relative',
        flexDirection: 'column'
    },

    headerStyle:{
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        height: 30,
        position: 'relative',
        flexDirection: 'row'
    },

    bodyStyle:{
        backgroundColor: '#FFFFFF',
        height: 90,
        position: 'relative',
    }
}
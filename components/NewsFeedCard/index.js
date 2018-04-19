import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Thumbnail from '../Thumbnail/index.js'
import { Fonts } from "../../src/utils/Fonts.js"


export default class NewsFeedCard extends Component {
    render(){

        const { Bar, textStyle } = styles;

        return(
            <View>
                <View style = {Bar}>
                    <View style={{flexDirection: 'row'}}>
                        <Thumbnail uri={this.props.thumbnail}/>
                        <Text style={{marginTop: 10, marginLeft: 2, fontFamily: Fonts.OpenSansBold}}>{this.props.name}</Text>
                    </View>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Image style={{height: 20, width: 20, marginRight: 10}}
                               source={{uri: "https://cdn4.iconfinder.com/data/icons/android-11/512/three_dots-512.png"}}
                        />
                    </TouchableOpacity>
                </View>

                <View>
                    <Image style={{height: 350}}
                           source={{uri: this.props.link}}
                           resizeMode="contain"
                    />
                </View>

                <View style={Bar}>
                    <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={{marginLeft: 15}}>
                            <Image style={{height: 27, width: 27, marginRight: 15, marginTop: 5}}
                                   source={{uri: "http://icons.iconarchive.com/icons/iconsmind/outline/512/Heart-2-icon.png"}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{height: 30, width: 30, marginRight: 15, marginTop: 5}}
                                   source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGtc_5VtnFqXUwbdclX5MCSQSF-ns36Byntc0a-qxSkzW6d9I"}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{height: 30, width: 30, marginRight: 15, marginTop: 5}}
                                   source={{uri: "https://d30y9cdsu7xlg0.cloudfront.net/png/326025-200.png"}}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={{marginLeft: 15}}>
                            <Image style={{height: 30, width: 30, marginRight: 15}}
                                   source={{uri: "http://downloadicons.net/sites/default/files/bookmark-icon-91229.png"}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text style={textStyle}>{this.props.likeNumber} likes</Text>
                    <View style={{flexDirection: "row"}}>
                        <Text style={textStyle}>{this.props.name}</Text>
                        <Text style={{marginTop: 3, fontSize: 15, marginLeft: 5}}>{this.props.caption}</Text>
                    </View>
                    <Text style={{marginTop: 3, fontSize: 15, marginLeft: 15, fontFamily: Fonts.OpenSansLight}}>
                        View 434 comment
                    </Text>
                    <View style={{flexDirection: "row", marginLeft: 15}}>
                        <Text style={{marginTop: 3, fontSize: 10, fontFamily: Fonts.OpenSansLight}}>
                            24 HOURS AGO -
                        </Text>
                        <Text style={{marginTop: 3, fontSize: 10, marginLeft: 2}}>
                            SEE TRANSLATION
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    Bar:{
        backgroundColor: '#FFF',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        elevation: 0,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textStyle:{
        marginLeft: 15,
        fontFamily: Fonts.OpenSansBold,
        marginTop: 3,
        fontSize: 15
    }
}
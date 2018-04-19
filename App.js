import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import Header from "./components/Header/index.js"
import Footer from "./components/Footer/index.js"
import Story from "./components/Story/index.js"
import Card from "./components/NewsFeedCard/index.js"
import { Fonts } from "./src/utils/Fonts.js"

export default class App extends Component {
  render() {
    const { containerStyle } = styles;

    return (
      <View style = {containerStyle}>
        <Header/>
        <ScrollView>
            <Story/>
            <Card thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuI3B1gdSkAx5eY8acxR-TZ35aQshNvUY5wsOnPsgtuIseHPa"
                  name="nancy"
                  link="https://em.wattpad.com/99b317e42d0a12795207e5513fa11877ac0b5d1d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f75485a31414238386c7a4d3546673d3d2d3433333537383939382e313463636535343435666432666565353331303733353036383430322e6a7067?s=fit&w=720&h=720"
                  likeNumber="23"
                  caption="dit me chung m, bo m xinh chua"
            />
            <Card thumbnail="https://0.soompi.io/wp-content/uploads/2017/07/08133727/jeon-somi-xpn.jpg"
                  name="somi"
                  link="https://pre00.deviantart.net/8ef7/th/pre/f/2016/362/8/b/invoker_by_doghateburger-dat65lt.jpg"
                  likeNumber="43"
                  caption="huy diet the gioi chang"
            />
        </ScrollView>
        <Footer/>
      </View>
    );
  }
}

const styles = {
    containerStyle: {
        flex: 1
    }
}


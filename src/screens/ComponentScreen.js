import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function ComponentScreen() {
    const name = 'things'
    return (
        <View>
            <Text style = {styles.t1}>Getting started with React Native!</Text>
            <Text style = {styles.t2}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    t1: {
        fontSize: 45
    },
    t2: {
        fontSize: 20
    }
})

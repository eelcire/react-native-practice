import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: '1', age: 1 },
        { name: '2', age: 1 },
        { name: '3', age: 1 },
        { name: '4', age: 1 },
        { name: '5', age: 1 },
        { name: '6', age: 1 },
        { name: '7', age: 1 },
        { name: '8', age: 1 },
        { name: '9', age: 1 }
    ]
    return (
        <FlatList
            keyExtractor = {friend => friend.name}
            data = {friends}
            renderItem = {({ item }) => {
            return <Text style = {styles.textStyle}>{item.name}, {item.age}</Text>
            }} />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen
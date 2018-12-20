import React, { Component } from 'react'

import { View, Text, StyleSheet, Button } from 'react-native';

import { NavigationActions, StackActions } from 'react-navigation';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
        };
    render() {
    return (
        <View style={styles.container}>
            <Text> Hello from HomeScreen</Text>
            <Button
                title="Go to Settings"
                onPress={() => {
                    this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Settings' })
                    ],
                    }))
                }}
                />
        </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})
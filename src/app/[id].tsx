import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs, useLocalSearchParams } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const lel = () => {
    const {id} = useLocalSearchParams()
    function TabBarIcon(props: {
      name: React.ComponentProps<typeof FontAwesome>['name'];
      color: string;
    }) {
      return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
    }
  return (
    <View>
      <Text>{id}</Text>
      <Stack.Screen  options={{ title : " baha"}}   />


    </View>
  )

}

export default lel

const styles = StyleSheet.create({})
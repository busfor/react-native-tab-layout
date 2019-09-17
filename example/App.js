import React, { useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ViewPager from '@react-native-community/viewpager'
import TabLayout from 'react-native-tab-layout'

export default () => {
  const viewPagerRef = useRef()
  return (
    <View style={styles.container}>
      <TabLayout
        style={{ height: 60 }}
        backgroundColor='white'
        indicatorTabColor='#ffc400'
        indicatorTabHeight={2}
        scrollable={false}
        center={false}
        items={[
          {
            text: 'tab 1',
            textSize: 16,
            textColor: 'black',
            selectedTextColor: '#ffc400',
          },
          {
            text: 'tab 2',
            textSize: 16,
            textColor: 'black',
            selectedTextColor: '#ffc400',
          },
        ]}
        viewPagerRef={viewPagerRef}
      />
      <ViewPager ref={viewPagerRef} style={styles.viewPager} initialPage={0}>
        <View key='1'>
          <Text>First page</Text>
        </View>
        <View key='2'>
          <Text>Second page</Text>
        </View>
      </ViewPager>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  viewPager: {
    flex: 1,
  },
})

import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useTheme } from '../../Theme/'
import { HeaderProfile, HeaderWithIcon, Gap, Note } from '../../Components'
import FAB from 'react-native-fab'

const dummyData = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    title: 'consectetur adipiscing elit',
  },
  {
    id: 3,
    title: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 4,
    title: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
]

const HomePage = () => {
  const { Layout, Colors, Images, Gutters } = useTheme()
  return (
    <View style={[Layout.fill, { backgroundColor: Colors.pageBackground }]}>
      <View
        style={[Layout.fill, Gutters.regularVPadding, Gutters.regularHPadding]}
      >
        <HeaderProfile urlImage={Images.dummyProfile} />
        <Gap height={20} />
        <HeaderWithIcon />
        <Gap height={20} />
        <FlatList
          horizontal={false}
          columnWrapperStyle={{
            alignItems: 'flex-start',
          }}
          numColumns={2}
          data={dummyData}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => <Note data={item} />}
        />
        <FAB
          buttonColor={Colors.primary}
          iconTextColor="#FFFFFF"
          onClickAction={() => {
            console.log('FAB pressed')
          }}
          visible={true}
          //   iconTextComponent={<Icon name="all-out" />}
        />
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})

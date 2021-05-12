import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Modal,
  Pressable,
  Alert,
} from 'react-native'
import { useTheme } from '../../Theme/'
import { HeaderProfile, HeaderWithIcon, Gap, Note } from '../../Components'
import FAB from 'react-native-fab'
import { connect } from 'react-redux'
import { navigate } from '../../Navigators/Root'
import { getListNotes, addListNote } from '../../Redux/Actions/NotesAction'
import { logout } from '../../Redux/Actions/LoginAction'

const HomePage = props => {
  const { Layout, Colors, Images, Gutters } = useTheme()
  const [modalVisible, setModalVisible] = useState(false)

  const { data, loading } = props

  useEffect(() => {
    const { getListNotes } = props
    getListNotes()
  }, [])

  const handleUpdateNote = (id, title, desc) => {
    navigate('AddNotePage', {
      type: 'update',
      id: id,
      title: title,
      desc: desc,
    })
  }

  const onPressLogout = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.pageBackground }]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to log out?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
              <Gap width={60} />
              <Pressable
                style={[styles.button, styles.buttonOpen(Colors.primary)]}
                onPress={() => {
                  const { logout } = props
                  logout()
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={[Layout.fill, Gutters.regularVPadding, Gutters.regularHPadding]}
      >
        <HeaderProfile
          onPressImage={onPressLogout}
          urlImage={Images.dummyProfile}
        />
        <Gap height={20} />
        <HeaderWithIcon />
        <Gap height={20} />
        <FlatList
          onRefresh={() => {
            const { getListNotes } = props

            getListNotes()
          }}
          refreshing={loading}
          horizontal={false}
          columnWrapperStyle={{
            alignItems: 'flex-start',
          }}
          numColumns={2}
          data={data}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <Note
              onPress={() => handleUpdateNote(item.id, item.title, item.desc)}
              data={item}
            />
          )}
        />
        <FAB
          buttonColor={Colors.primary}
          iconTextColor="#FFFFFF"
          onClickAction={() => {
            const { addListNote } = props
            navigate('AddNotePage', { type: '' })
          }}
          visible={true}
        />
      </View>
    </View>
  )
}
const mapStateToProps = state => ({
  loading: state.notes.loading,
  error: state.notes.error,
  data: state.notes.data,
})

const mapDispatchToProps = dispatch => ({
  getListNotes: () => dispatch(getListNotes()),
  addListNote: payload => dispatch(addListNote(payload)),
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: color => ({
    backgroundColor: color,
  }),
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

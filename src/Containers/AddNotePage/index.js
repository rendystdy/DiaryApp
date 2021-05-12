import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { HeaderWithBack, TextArea, Gap } from '../../Components/'
import { useTheme } from '../../Theme'
import { addListNote, updateListNote } from '../../Redux/Actions/NotesAction'
import { navigate } from '../../Navigators/Root'

import { connect } from 'react-redux'

const AddNotePage = props => {
  const { route, navigation, addListNote, loading, updateListNote } = props
  const { type, id } = route.params
  const titleParam = route.params.title
  const descParam = route.params.desc

  const { Layout, Colors } = useTheme()
  const [title, setTitle] = useState(titleParam ? titleParam : '')
  const [desc, setDesc] = useState(descParam ? descParam : '')
  const handleBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (title && desc && type !== 'update') {
      if (!loading) {
        navigate('HomePage')
      }
    }
  }, [loading])

  const handleSave = async () => {
    if (type === 'update') {
      const payload = {
        id,
        title,
        desc,
      }
      return await updateListNote(payload)
    } else {
      const payload = {
        id: new Date().getMilliseconds().toString(),
        title,
        desc,
      }
      return await addListNote(payload)
    }
  }

  return (
    <>
      <View style={[Layout.fill, { backgroundColor: Colors.pageBackground }]}>
        <HeaderWithBack
          type={type}
          loading={loading}
          onPressBack={handleBack}
          onPressSave={handleSave}
        />
        <TextArea
          placeholder="Title"
          type="title"
          onChange={val => setTitle(val)}
          defaultValue={title}
        />
        <TextArea
          placeholder="Type something ..."
          onChange={val => setDesc(val)}
          defaultValue={desc}
        />
      </View>
      {loading && (
        <View style={styles.wrapperLoading}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  loading: state.notes.loading,
})

const mapDispatchToProps = dispatch => ({
  addListNote: payload => dispatch(addListNote(payload)),
  updateListNote: payload => dispatch(updateListNote(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNotePage)

const styles = StyleSheet.create({
  wrapperLoading: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

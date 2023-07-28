import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import SaveCard from './components/SaveCard'
import Header from './components/Header'
import ToDo from './components/ToDo'

function App() {

  const [chore, setChore] = useState("")

  const changeItem = (text) => setChore(text)

  const [list, setList] = useState([])

  function addChores() {

    setList([
      ...list,
      {
        name: chore
      }
    ]);
  }

  function removeChores(index) {

    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);

  }

  const renderItems = ({ item }) => <ToDo chore={item.name} click={removeChores} />

  return (
    <View style={styles.container}>
      <View>
        <Header title={"Yapılacaklar"} counter={list.length} />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={list}
          renderItem={renderItems}
        />

        <SaveCard
          value={chore}
          changeText={changeItem}
          press={addChores} />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
  },

})

export default App
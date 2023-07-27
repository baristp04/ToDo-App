import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import SaveCard from './components/SaveCard'
import Header from './components/Header'
import ToDo from './components/ToDo'

function App() {

  const [chore, setChore] = useState("")

  const changeItem = (text) => setChore(text)

  const [list, setList] = useState([])

  const [counter, setCounter] = useState(0)

  function addChores() {

    setList([
      ...list,
      {
        name: chore
      }
    ]);

    setCounter(list.length + 1)
  }

  function removeChores(index) {

    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    setCounter(list.length - 1)

  }

  const renderItems = ({ item }) => <ToDo chore={item.name} click={removeChores} />

  return (
    <View style={styles.container}>
      <View>
        <Header title={"Yapılacaklar"} counter={counter} />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={list}
          renderItem={renderItems}
        />
      </View>

      <View style={styles.function_container}>
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

  function_container: {
    flex: 0.2,
    justifyContent: "flex-end"
  }

})

export default App
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TodoCard from '../components/todocards';
import AddTodoModal from '../components/AddTodoModal';
// import LottieView from 'lottie-react-native';
const TodoListScreen = () => {
  type Todo = {
  id: string;
  text: string;
};
  const [modalVisible, setModalVisible] = useState(false);
const [todos, setTodos] = useState<Todo[]>([]);
  const removeTodo =(index:number)=>{
    let newTodos =[...todos]
    newTodos.splice(index ,1);
    setTodos(newTodos);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}  >
        <View style={styles.wrapper}>
          <Text style={styles.heading} >
            Task Organizer
          </Text>
          <Image
            source={require('../../assets/gifs/rabbitHi.gif')}
            style={styles.gif}
          />

        </View>
        <View style={styles.profile}>
          <Ionicons name="person" size={22} color={COLORS.white} />
        </View>
      </View>
      <View style={{margin:10, paddingVertical:20}}>
      <Text style={{textAlign:"center",fontSize:22, fontWeight:800, color:COLORS.white, }}>{new Date().toLocaleTimeString()}</Text>
      </View>

      <View style={styles.todocontainer}>
       {todos.map((todo)=>(
        <TodoCard 
        key={todo.id}
        task ={todo.text}
        onRemove={() =>
      setTodos(prev => prev.filter(t => t.id!== todo.id))
    }
        />
       ))}


   <TouchableOpacity style={styles.createBox} onPress={() => setModalVisible(true)}>
  <Ionicons name="add" size={42} color="white" />
</TouchableOpacity>
      </View>



      <AddTodoModal
  visible={modalVisible}
  onClose={() => setModalVisible(false)}
  onAdd={(task) =>
    setTodos(prev => [
      ...prev,
      { id: Date.now().toString(), text: task }
    ])
  }
/>
    </SafeAreaView>




  )
}

export default TodoListScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"black",
    backgroundColor: COLORS.primary,
  },
  wrapper: {
    // borderWidth:2,
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  heading: {
    padding: 10,
    fontFamily: 'Switzer-Variable',
    fontWeight: 800,
    fontSize: 22,
    color: COLORS.white
  },
  gif: {
    width: 60,
    height: 60,
  },
  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.accent,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  todocontainer:{
    position:"relative",
  flex:1,
  // borderWidth:2,
  marginTop:10,
   padding:10,
  },
  card:{
   width:"100%",
   minHeight:80,
   backgroundColor: COLORS.white,
   borderRadius:10,
   borderColor:COLORS.primary,
   borderWidth:1,
  },
  createBox:{
   position:"absolute",
    // borderWidth:2,
    padding:5,
    borderRadius:50,
    bottom:30,
    right:30,
    backgroundColor:COLORS.accent,
  },
})
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constants/colors";
import Entypo from "react-native-vector-icons/Entypo";
import AddNoteModal from "../components/AddNoteModal";
type Note = {
  id: string;
  title: string;
  note: string;
};
const NotesScreen = () => {
  const [notes, setNote] = useState<Note[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Notes</Text>
       <TouchableOpacity>
  <Entypo name="dots-three-vertical" size={22} color={COLORS.white} />
</TouchableOpacity>

      </View>

      {/* Notes List */}
     <View style={styles.Cardcontainer}>
       {notes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="document-text-outline"
            size={60}
            color={COLORS.white}
            style={{ opacity: 0.5 }}
          />
          <Text style={styles.emptyText}>No notes yet</Text>
        </View>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <View style={styles.noteCard}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.noteText}>{item.note}</Text>
<TouchableOpacity
        style={styles.deleteBtn}
        onPress={() =>
          setNote(prev => prev.filter(n => n.id !== item.id))
        }
      >
        <Ionicons name="trash" size={20} color={COLORS.accent} />
      </TouchableOpacity>
            </View>
          )}
        />
      )}
     </View>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.fab}
        onPress={() => setModalVisible(true)} 
      >
        <Ionicons name="add" size={32} color={COLORS.white} />
      </TouchableOpacity>


    <AddNoteModal
      visible={modalVisible}
      onClose={()=>setModalVisible(false)}
      onAdd={(title, note) =>
    setNote(prev => [
      ...prev,
      { id: Date.now().toString(), title, note }
    ])
  }
    />
    </SafeAreaView>
  );
};

export default NotesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 15,
   
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.white,
  },
  Cardcontainer:{
    marginTop:10,
    flex:1,
    // borderWidth:2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  //  borderWidth:2,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.7,
  },
  noteCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  title:{
 fontWeight:500,
    fontSize: 16,
    color: COLORS.textGray,
  },
  noteText: {
    fontWeight:400,
    fontSize: 14,
    color: COLORS.textGray,
  },
  fab: {
    position: "absolute",
    right: 24,
    bottom: 24,
    backgroundColor: COLORS.accent,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  deleteBtn: {
  position: "absolute",
  right: 10,
  top: 10,
  padding: 4,
}
});

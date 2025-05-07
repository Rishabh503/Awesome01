import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

export default function ContactList() {
    const contatcs=[
        {
          "name": "Aarav Singh",
          "uid": "UID001",
          "status": "Active",
          "description": "Software developer specializing in MERN stack.",
          "image": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          "name": "Priya Sharma",
          "uid": "UID002",
          "status": "Inactive",
          "description": "Marketing executive at a leading firm.",
          "image": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          "name": "Rajesh Gupta",
          "uid": "UID003",
          "status": "Active",
          "description": "Financial analyst and data enthusiast.",
          "image": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          "name": "Neha Kapoor",
          "uid": "UID004",
          "status": "Pending",
          "description": "Content writer and blogger.",
          "image": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
          "name": "Vikram Rao",
          "uid": "UID005",
          "status": "Active",
          "description": "Event manager with expertise in PR.",
          "image": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
          "name": "Ananya Mehta",
          "uid": "UID006",
          "status": "Inactive",
          "description": "Freelance graphic designer.",
          "image": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
          "name": "Rahul Nair",
          "uid": "UID007",
          "status": "Active",
          "description": "AI/ML enthusiast and Python developer.",
          "image": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
          "name": "Meera Iyer",
          "uid": "UID008",
          "status": "Pending",
          "description": "Digital marketing specialist.",
          "image": "https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
          "name": "Siddharth Deshmukh",
          "uid": "UID009",
          "status": "Active",
          "description": "Data scientist working with startups.",
          "image": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
          "name": "Sonal Jain",
          "uid": "UID010",
          "status": "Inactive",
          "description": "Student pursuing a degree in CS.",
          "image": "https://randomuser.me/api/portraits/women/10.jpg"
        }
      ]
      
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <View style={styles.container}>
        <ScrollView>
            {
                contatcs.map((item)=>(
                    <View style={styles.chatSection} key={item.uid}>
                        <View>
                        <Image
                        style={styles.userImage}
                        source={{uri:item.image}}
                        />
                        <Text>
                            {item.name}
                        </Text>
                 </View>
                <View>
                  <View style={styles.chatInfo}>
                  <Text style={styles.headingText}>
                        {item.name}
                    </Text>
                    <Text> {item.status}</Text>
                  </View>
                    <Text>
                        {item.description}
                    </Text>
                </View>
         </View>
                ))
            }
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#6ab04c'
    },
    headingText:{
        fontSize:32,
    },
    chatSection:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    chatInfo:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius:2,
        borderBlockColor:'black',
        borderColor:'black'

    },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    }
})
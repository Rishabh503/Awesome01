import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Practice() {

    const contacts=[
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
          "name": "Siddharth ",
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
    <View style={styles.container}>
      <ScrollView>
           
            {/* top ka view  */}

            <View style={styles.topView}>
                <View style={styles.profile}>
                <Image style={styles.image} source={{uri:"https://res.cloudinary.com/dhe9p6bo0/image/upload/v1742047494/memories/ep0ty8snvqkb4awtn6lw.jpg"}}/>
               <View>
                    <Text > Good Morning</Text>
                    <Text style={styles.name}> Niyati Chugh</Text>
                </View>
                </View>
                <View style={styles.logoBox}>
                    <View style={styles.logo}>
                      <Text >
                      </Text>
                    </View>
                    <View style={[styles.logo,styles.color2]}>
                        
                    </View>

                </View>
            </View>
                {/* this is your scrollable view  */}
            <View >
                <ScrollView horizontal={true}>
                {
                contacts.map((item)=>(
                    <View style={styles.chatContainer} key={item.uid}>
                <Image style={styles.image2}
                source={{uri:item.image}}
                />
                <Text>
                    {item.name}
                </Text>
            </View>
                ))
            }
                </ScrollView>
            </View>

            <View style={styles.appContainer}>
                <ScrollView>
                    <View  style={styles.profile}>
                        <Text style={styles.heading}>
                            Chats
                        </Text>
                        <Text>
                            Manage
                        </Text>
                    </View>

                    <View>
                            {
                                contacts.map((item)=>(
                                    <View style={styles.topView2}> 
                                        <Image style={styles.image2}
                                        source={{uri:item.image}}
                                        /> 
                                      <View> 
                                    <Text style={styles.name}>
                                        {item.name}
                                    </Text>
                                    <Text>
                                    {item.description}
                                    </Text>
                                        
                                      </View>
                                    </View>
                                ))
                            }

                    </View>
                </ScrollView>
            </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F7FA',
        width:'100%'
    },
    appContainer:{
        padding:10,
        shadowColor: '#000',
        borderRadius:2
        
    },

    heading:{
        fontSize:32,
        color:'#000' ,
        fontWeight:'500'
        
    },
    name:{
     
        fontSize:16

    },
    image:{
        height:70,
        width:70,
        borderRadius:100
    },
    image2:{
        height:50,
        width:50,
        borderRadius:100
    },
    topView:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        padding:10,
        margin:10,
        borderWidth: 1,
        borderColor: '#6200EE',
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

    },
    topView2:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'',
        padding:10,
        margin:10,
        borderWidth: 1,
        borderColor: '#6200EE',
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

    },
    profile:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
    },
    name:{
        fontSize:24,
        marginTop:12,
        fontWeight:'600'

    },
    logoBox:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBlock:20,
        gap:2
        
    },
    logo:{
        height:40,
        width:40,
        backgroundColor:'#8C7CFF',
        borderRadius:100,
    },
    color2:{
        backgroundColor:'#FF6B98'
    },
    chatContainer:{
        backgroundColor:"#fff",
        borderRadius:10,
        flex:1,
        gap:10,
        elevation:5,
        padding:10,
        margin:10,
        alignItems:'center',
        
    }
})
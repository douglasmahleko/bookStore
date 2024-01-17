import { useState } from "react"
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../constants/themes"
import { sizes } from "../constants/sizes"
import Icon from "react-native-vector-icons/MaterialIcons"
import images from "../constants/images"
import { Image } from "react-native"



function Home({navigation}){

    const otherWordsForHome ={
        id : 1,
        bookName : "Other words for home",
        bookCover: images.otherWords ,
        rating : 4.5,
        language : "Eng",
        pageNo: 340,
        author: "Douglas Mahleko",
        genre : [
            "romance", "adventure", "drama"
        ],
        readed:"12k",
        backgroundColor:"rgba(240, 240, 232, 0.9)",
        navTintColor: "#000",
        description:"This is a middle grade book that is about a young Arabic girl just trying to find her place in American. The main character is Jude. Jude comes to American with her mother, but leaves her brother and her Dad in her home country. I think this is a great book that teaches us you should not judge people by where they come from or look like. I really did not know if I would like this book, but I loved it.This is a middle grade book that is about a young Arabic girl just trying to find her place in American. The main character is Jude. Jude comes to American with her mother, but leaves her brother and her Dad in her home country. I think this is a great book that teaches us you should not judge people by where they come from or look like. I really did not know if I would like this book, but I loved it."
    }
    const theMetropolist ={
        id : 2,
        bookName : "the metropolist",
        bookCover: images.metros ,
        rating : 4.1,
        language : "Eng",
        pageNo: 272,
        author: "Dougie Mlambo",
        genre : [
             "adventure", "drama"
        ],
        readed:"12k",
        backgroundColor:"rgba(247, 239, 219, 0.9)",
        navTintColor: "#000",
        description:"This is a middle grade book that is about a young Arabic girl just trying to find her place in American. The main character is Jude. Jude comes to American with her mother, but leaves her brother and her Dad in her home country. I think this is a great book that teaches us you should not judge people by where they come from or look like. I really did not know if I would like this book, but I loved it.This is a middle grade book that is about a young Arabic girl just trying to find her place in American. The main character is Jude. Jude comes to American with her mother, but leaves her brother and her Dad in her home country. I think this is a great book that teaches us you should not judge people by where they come from or look like. I really did not know if I would like this book, but I loved it."
    }
    const theTinyDragon = {
        id : 3,
        bookName : "the tiny dragon",
        bookCover: images.dragon ,
        rating : 3.5,
        language : "Eng",
        pageNo: 110,
        author: "Simon Mlambo",
        genre : [
            "romance", "adventure", "drama"
        ],
        readed:"13k",
        backgroundColor:"rgba(119, 77, 143, 0.9)",
        navTintColor: "#fff",
        description:"This is a middle grade book that is about a young Arabic girl just trying to find her place in American. The main character is Jude. Jude comes to American with her mother, but leaves her brother and her Dad in her home country. I think this is a great book that teaches us you should not judge people by where they come from or look like. I really did not know if I would like this book, but I loved it.This is a middle grade book that is about a young Arabic girl just trying to find her place in American. The main character is Jude. Jude comes to American with her mother, but leaves her brother and her Dad in her home country. I think this is a great book that teaches us you should not judge people by where they come from or look like. I really did not know if I would like this book, but I loved it."
    }
    const myBooksData = [
        {
            ...otherWordsForHome,
            completion:"75%",
            lastRead:"3d 5h",
            },
        {
            ...theMetropolist,
            completion:"23%",
            lastRead:"10d 5h",
            },
        {
            ...theTinyDragon,
            completion:"10%",
            lastRead:"1d 2h",
            },
    ]
    const categoryData =[
        {
            id : 1,
            categoryName : "Best Seller",
            books : [
                theMetropolist, theTinyDragon, otherWordsForHome
            ]
        },
        {
            id : 2,
            categoryName : "the latest",
            books : [
                theMetropolist
            ]
        },
        {
            id : 3,
            categoryName : "Coming Soon",
            books : [
                theTinyDragon
            ]
        },
    ]
    const profileData = {
        name:"Douglas",
        point:200
    }
    const [profile, setProfile] =useState(profileData) 
    const [myBooks, setMyBooks] =useState(myBooksData) 
    const [category, setCategory] =useState(categoryData) 
    const [selectedCategory, setSelectedCategory] = useState(1)
    function renderHeader(profile){
        return(
            <View style={{flex:1, flexDirection:'row', alignItems:'center', paddingHorizontal:sizes.padding}}>
                <View style={{flex:1}}>
                    <View style={{marginRight: sizes.padding }}>
                        <Text style={{color:colors.white,fontSize:18}}>Good Morning</Text>
                        <Text style={{color:colors.white, fontSize:22, fontWeight:"bold"}}> {profile.name} </Text>
                    </View>
                </View>
                <TouchableOpacity style={{backgroundColor:"coral", height:40, borderRadius:20, paddingLeft:3,
                                        paddingRight:sizes.radius}}>
                    <View style={{flex:1, flexDirection:"row", justifyContent:"center", alignItems:"center" }}>
                        <View style={{ width:30, height:30, borderRadius:30, backgroundColor:"rgba(0,0,0,0.5)",
                                    justifyContent:"center", alignItems:"center"}}>
                            <Icon name="add" sizes={20} style={{color: colors.white, fontWeight:"bold", fontSize:22}} />
                        </View>
                        <Text style={{color:colors.white, fontWeight:"bold", marginLeft:sizes.base}}> {profile.point} point </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    
    function renderButtonSection(){
        return(
            <View style={{flex:1, justifyContent:"center", padding:sizes.padding}}>
                <View style={{flexDirection:'row', height:70, backgroundColor:colors.secondary, borderRadius:sizes.radius}}>
                    <TouchableOpacity style={{flex:1}}>
                        <View style={{ flex:1, flexDirection:"row", justifyContent:"center", alignItems:"center" }}>
                            <Icon name="qr-code-scanner" size={30} color={"coral"} />
                            <Text style={{color:colors.white, marginLeft:sizes.base, fontSize:18, fontWeight:"bold"}}>Claim</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{width:1, paddingVertical:18}}>
                        <View style={{flex:1, borderLeftWidth:1, borderLeftColor:colors.lightGray}}>

                        </View>
                    </View>
                    <TouchableOpacity style={{flex:1}}>
                        <View style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                        <Icon name="control-point" size={30} color={"coral"} />
                            <Text style={{color:colors.white, marginLeft:sizes.base, fontSize:18, fontWeight:"bold"}}>Get Point</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{width:1, paddingVertical:18}}>
                        <View style={{flex:1, borderLeftWidth:1, borderLeftColor:colors.lightGray}}>

                        </View>
                    </View>
                    <TouchableOpacity style={{flex:1}}>
                        <View style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                        <Icon name="card-giftcard" size={30} color={"coral"} />
                            <Text style={{color:colors.white, marginLeft:sizes.base, fontSize:18, fontWeight:"bold"}}>My Card</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function renderMyBooksSection(myBooks){
        const renderItem =({item, index})=> {
            return(
                <TouchableOpacity style={{flex:1, marginRight: sizes.radius, marginLeft: index == 0 ? sizes.padding : 0}} 
                onPress={() => navigation.navigate("BookDetail", {book:item})} >
                    <Image style={{width:180, height:250, borderRadius:20}} resizeMode="cover" source={item.bookCover} />
                    <View style={{marginTop:sizes.radius, flexDirection:"row", alignItems:"center"}}>
                        <Icon name="lock-clock" size={20} style={{marginLeft:sizes.radius, color:colors.lightGray}} />
                        <Text style={{marginLeft:5, color:colors.lightGray,fontSize:16}}> {item.lastRead} </Text>
                        <Icon name="contact-page" size={20} style={{marginLeft:sizes.radius, color:colors.lightGray}} />
                        <Text style={{marginLeft:5, color:colors.lightGray,fontSize:16}}> {item.completion} </Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return(
            <View style={{flex:1}}>
                <View style={{flexDirection:"row", paddingHorizontal:sizes.padding, justifyContent:"space-between"}}>
                    <Text  style={{fontWeight:"bold", color:colors.white,fontSize:20}}>My Books</Text>
                    <TouchableOpacity>
                        <Text style={{alignSelf:"flex-start", textDecorationLine:"underline",color:colors.lightGray,fontSize:16}} >see more</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, marginTop:sizes.padding}}>
                    <FlatList 
                        data={myBooks}
                        renderItem={renderItem}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                    />
                </View>
            </View>
        )
    }
    function renderCategoryHeader(){
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity style={{flex:1, marginRight:sizes.padding}} 
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id && 
                        <Text style={{color:colors.white , fontSize:16, fontWeight:"bold"}}> { item.categoryName } </Text>
                    }{
                        selectedCategory != item.id && 
                        <Text style={{color:colors.lightGray, fontSize:16}}> { item.categoryName } </Text>
                    }
                </TouchableOpacity>
            )
        }
        return(
            <View style={{flex:1, paddingLeft:sizes.padding}}>
                <FlatList 
                    data={category}
                    renderItem={renderItem}
                    horizontal
                    keyExtractor={item => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
    function renderCategoryData(){
        var book = []
        let selectedCategoryBooks = category.filter(a => a.id == selectedCategory)
        
        if (selectedCategoryBooks.length > 0){
            book = selectedCategoryBooks[0].books
            
        }
        const renderItem =({item}) => {
            return(
                <View style={{ marginVertical : sizes.base }} >
                    <TouchableOpacity style={{flex:1, flexDirection:"row"}} onPress={() => navigation.navigate("BookDetail", {book:item})}>
                    <Image source={item.bookCover} resizeMode="cover" style={{height:150, width:100, borderRadius:10}} />
                        <View style={{flex:1, marginLeft:sizes.radius}}>
                            <View >
                                <Text style={{paddingRight:sizes.padding, color:colors.white, fontSize:20, fontWeight:"bold"}}> {item.bookName} </Text>
                                <Text style={{ color:colors.lightGray, fontSize:18}}> {item.author} </Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop: sizes.radius}}>
                                <Icon size={25} color={colors.lightGray} name="pages"  />
                                <Text style={{ paddingHorizontal:sizes.radius, color:colors.lightGray, fontSize:18, fontWeight:"bold" }} > {item.pageNo} </Text>
                                <Icon size={25} color={colors.lightGray} name="mark-chat-read"  />
                                <Text style={{ paddingHorizontal:sizes.radius, color:colors.lightGray, fontSize:18, fontWeight:"bold" }} > {item.readed} </Text>
                            </View>
                            <View style ={{ marginTop:sizes.base, flexDirection:'row'}} >
                                {
                                    item.genre.includes("adventure") && 
                                    <View style ={{justifyContent:'center', alignItems:"center", padding: sizes.base, marginRight: sizes.base, backgroundColor:colors.darkGreen,
                                    height: 40, borderRadius:sizes.radius}}>
                                        <Text style ={{ color:colors.lightGreen, fontSize:14}} >Adventure</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("romance") && 
                                    <View style={{justifyContent:'center', alignItems:"center", padding: sizes.base, marginRight: sizes.base, backgroundColor:colors.darkRed,
                                    height: 40, borderRadius:sizes.radius}}>
                                        <Text style ={{ color:colors.lightRed, fontSize:14}} >Romance</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("drama") && 
                                    <View style={{justifyContent:'center', alignItems:"center", padding: sizes.base, marginRight: sizes.base, backgroundColor:colors.darkBlue,
                                    height: 40, borderRadius:sizes.radius}}>
                                        <Text style ={{ color:colors.lightBlue, fontSize:14}} >Drama</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{position:"absolute", top:5, right:15}}>
                        <Icon name="bookmark-outline" size={25} color={colors.lightGray} />
                    </TouchableOpacity>
                </View>
            )
        }
        return(
            <View style={{ flex:1, marginTop : sizes.radius, paddingLeft : sizes.padding }}>
                  <FlatList 
                    data={book}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />                               
            </View>
        )
    }
    return(
        <SafeAreaView style={{flex:1, backgroundColor:colors.black}}>
            <View style={{height:200}}>
                {renderHeader(profile)}
                {renderButtonSection()}
            </View>
            <ScrollView>
                <View>
                    {renderMyBooksSection(myBooks)}
                </View>
                <View>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View> 
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home




  
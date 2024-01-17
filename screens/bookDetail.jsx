import { useEffect, useState } from "react"
import { Animated, ImageBackground, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native"
import { colors } from "../constants/themes"
import Icon from "react-native-vector-icons/MaterialIcons"
import { sizes } from "../constants/sizes"


function BookDetail({route, navigation}){
    const [books, setBook] =useState(null)
    const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1)
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0)

    const indicator = new Animated.Value(0)
    useEffect(() => {
        console.log("the color of books inside effect is " + route.params)
        setBook(route.params)
    }, [books])
    
    function renderBookInfoSection(){
        return(
            <View style={{ flex:1 }} >
                {/* <ImageBackground source={books.bookCover} resizeMode="cover" style={{ position:"absolute",
                top:0, right:0, left:0, bottom:0 }} /> */}
                <View style={{ position:"absolute",
                    top:0, right:0, left:0, bottom:0 }} > 
                </View>
                <View style={{ flexDirection:"row", paddingHorizontal:sizes.radius, height:80, alignItems:"flex-end" }}>
                    <TouchableOpacity style={{ marginLeft:sizes.base }} onPress={navigation.goBack}>
                        <Icon size={25} color={colors.white} name="keyboard-arrow-left"  />
                    </TouchableOpacity>
                    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
                        <Text style={{ color:colors.white, fontSize:18, fontWeight:"bold" }}>Book Detail</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ marginRight:sizes.base }}>
                            <Icon name="more-horiz" size={30} style={{alignSelf:"flex-end", color:colors.white}} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{flex:5, paddingTop:sizes.padding2, alignItems:"center"}}>

                </View>
                <View style={{ flex:1.8, alignItems:"center", justifyContent:"center" }}>
                    <Text style={{color:colors.white, fontWeight:"bold", fontSize:18}}>  </Text>
                    <Text style={{color:colors.white, fontSize:16}}>  </Text>
                </View>
                <View style={{paddingVertical:20, flexDirection:"row", margin:sizes.padding, borderRadius:sizes.radius,
                            backgroundColor:"rgba(0,0,0,0.3)"
            }} >
                    <View style={{flex:1, alignItems:"ccenter", marginLeft:20}}>
                        <Text style={{color:colors.white, fontWeight:"bold", fontSize:18}}></Text>
                        <Text style={{color:colors.white,  fontSize:16}}>Rating</Text>
                    </View>
                    <View style={{width:1, paddingVertical:5}}>
                        <View style={{flex:1, borderLeftWidth:1, borderLeftColor:colors.lightGray2}}>

                        </View>
                    </View>
                    <View style={{flex:1, alignItems:"ccenter", marginLeft:20}}>
                        <Text style={{color:colors.white, fontWeight:"bold", fontSize:18}}></Text>
                        <Text style={{color:colors.white,  fontSize:16}}> Number of Pages</Text>
                    </View>
                    <View style={{width:1, paddingVertical:5}}>
                        <View style={{flex:1, borderLeftWidth:1, borderLeftColor:colors.lightGray2}}>

                        </View>
                    </View>
                    <View style={{flex:1, alignItems:"ccenter", marginLeft:20}}>
                        <Text style={{color:colors.white, fontWeight:"bold", fontSize:18}}></Text>
                        <Text style={{color:colors.white,  fontSize:16}}> Language </Text>
                    </View>
                </View>
            </View>
        )
    }
    function renderBookDescription(){

        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ?
        scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight :
        scrollViewVisibleHeight
        const difference = scrollViewVisibleHeight > indicatorSize ? 
        scrollViewVisibleHeight - indicatorSize : 1
        return(
            <View style={{flex:1, flexDirection:"row", padding:sizes.padding}}>
                <View style={{width:4, height:"100%", backgroundColor:colors.gray1}}>
                    <Animated.View style={{
                        width:4,
                        height:indicator,
                        backgroundColor:colors.lightGray4,
                        transform:[{
                            translateY: Animated.multiply(indicator, scrollViewVisibleHeight/scrollViewWholeHeight).
                            interpolate({
                                inputRange:[0, difference],
                                outputRange:[0, difference],
                                extrapolate:'clamp'
                            })
                        }]
                    }} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingLeft:sizes.padding}}
                    scrollEventThrottle={16}
                    onContentSizeChange={(width, height) => {
                        setScrollViewWholeHeight(height)
                    }}
                    onLayout={({nativeEvent:{layout : { x, y, width, height }}}) => {
                        setScrollViewVisibleHeight(height)
                    }}
                    onScroll={Animated.event(
                        [{nativeEvent:{contenOffset : { y: indicator }}}],
                        {useNativeDriver:false}
                    )}
                >
                    <Text style={{color:colors.white, marginBottom:sizes.padding,fontSize:18, fontWeight:"bold"}}>Description</Text>

                </ScrollView>
            </View>
        )
    }
    function renderBottomButton(){
        return(
            <View style={{flex:1, flexDirection:"row"}} >
                <TouchableOpacity style={{width:60, alignContent:"center", justifyContent:"center", backgroundColor:colors.secondary,
                marginLeft:sizes.padding, marginVertical:sizes.base, borderRadius:sizes.radius
            }}>
                <Icon color={colors.lightGray2} size={30} name="bookmark-outline" style={{marginLeft:15}} />
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, alignItems:"center", backgroundColor:"coral", justifyContent:"center",
                marginHorizontal:sizes.base, marginVertical:sizes.base, borderRadius:sizes.radius, marginRight:sizes.padding
            }}>
                    <Text style={{color:colors.white,fontSize:18, fontWeight:"bold"}}>Start Reading</Text>
                </TouchableOpacity>
            </View>
        )
    }
    if(books){
        return(
            <View style={{flex:1, backgroundColor:colors.black}}>
                <View style={{flex:4}} >
                    {renderBookInfoSection()} 
                </View>
                <View style={{flex:2}}>
                    {renderBookDescription()}
                </View>
                <View style={{height:70, marginBottom:30}}>
                    {renderBottomButton()}
                </View>
            </View>
        )
    }else{
        return(
            <></>
        )
    }
}
export default BookDetail
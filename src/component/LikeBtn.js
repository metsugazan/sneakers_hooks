import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const LikeBtn = ({like_}) => {
    const [like,setLike] = useState(typeof(like_) == "undefined" ? 0 : like_)
    const [liked,setLiked] = useState(false)

    useEffect(() => {
        if (like <= 0){
            setLike(like)
        } 

    },[])

    return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', marginLeft: 35}}>
            <TouchableOpacity onPress={() => {

                setLike(Number(like)+(liked ? -1 : 1))
                setLiked(!liked)

            }}>
            <Icon name={liked ? "heart" : "hearto"} size={24} color="blue"/>
            </TouchableOpacity>
            <Text style={{color:'blue',marginLeft:10,textAlign:'right'}}>{like}</Text>
        </View>
    )
}

export default LikeBtn
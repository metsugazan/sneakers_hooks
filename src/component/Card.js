import {View} from 'react-native'
import CardBody from './CardBody'
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"
import LikeBtn from "./LikeBtn"

const Card = ({kl,e}) => {

    return(
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{ width: 185, marginHorizontal: 10, marginVertical: 8, borderWidth: 2, borderRadius: 5, borderColor: 'blue' }}>
            <CardHeader price={e.price}/>
            <CardBody title={e.title} desc={e.desc} image={e.photo}/>
            <View style={{marginHorizontal:5, marginRight: 35,flexDirection:'row',alignItems:'center'}}>
                <CardFooter size={e.size} />
                <LikeBtn like={e.likes} />
            </View></View>
        </View>
    )
}

export default Card
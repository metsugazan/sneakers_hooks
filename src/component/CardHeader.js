import { View, Text } from "react-native"

const CardHeader = ({price}) => {
    return(
        <View style={{borderBottomWidth: 2, borderColor:'blue'}}>
            <Text style={{textAlign:'right', fontSize: 30, color:'brown', marginRight: 10}}>{price} €</Text>
        </View>
    )
}

export default CardHeader
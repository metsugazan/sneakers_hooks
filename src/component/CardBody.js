import { Text, View, Image } from "react-native"

const CardBody = ({ image, title, desc }) => {
    return (
        <View>
            <View style={{ height: 160, backgroundColor: 'lightgray', alignItems: 'center', borderBottomWidth: 2, borderColor: 'blue'  }}>
                <Image source={image} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
            </View>
            <View style={{ height: 285 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 5 }}>{title}</Text>
                <Text style={{ fontSize: 16, marginHorizontal: 5 }}>{desc}</Text>
            </View>
        </View>

    )
}

export default CardBody
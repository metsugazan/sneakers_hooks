import { Text, View } from 'react-native'

const CardFooter = ({ size }) => {
    return (
        <View>
            {(size == "toutes tailles") &&
                < View style={{ borderColor: 'blue', flexDirection: 'row' }}>
                    <Text style={{ textAlign: 'left', fontSize: 14, fontWeight:'bold', color: 'brown', marginVertical: 5 }}>Toutes tailles</Text>
                </View>
            }
           {(size != "toutes tailles") &&
                    <Text style={{ textAlign: 'left', fontSize: 22, color: 'brown', marginVertical: 5, marginLeft: 5 }}>Taille {size}</Text>
                }
        </View>
    )
}

export default CardFooter
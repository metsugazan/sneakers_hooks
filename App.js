import { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text, StatusBar, KeyboardAvoidingView } from 'react-native';
import Card from './src/component/Card';
import PRODUITS from './assets/data';
import { SearchBar } from '@rneui/base';

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      );
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  }

  useEffect(() => {
    setFilteredDataSource(PRODUITS);
    setMasterDataSource(PRODUITS);
  }, [])

  return (
    <KeyboardAvoidingView>
      <StatusBar backgroundColor={'black'} />
      <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'blue' }}>Liste des produits</Text>
      <View style={{ borderWidth: 2, color: 'blue' }} />
      <SearchBar placeholder="Rechercher"
        lightTheme
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        inputContainerStyle={{
          flexDirection: 'row-reverse'
        }}
      />

      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 80 }}>
        <SafeAreaView>
          <FlatList
            numColumns={2}
            data={filteredDataSource}
            renderItem={({ item, index, separators }) => (
              <Card key={index} kl={index} e={item} />
            )}
          />
        </SafeAreaView>
      </View>
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

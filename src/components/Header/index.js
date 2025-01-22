import {View, Text, Pressable, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Input from '../Input';

function Header({
  title,
  onBackPress,
  onLogout,
  showLogout,
  showSearch,
  showBack,
  onSearch,
  keyword,
}) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const onSearchPress = () => {
    setShowSearchInput(s => !s);
  };
  return (
    <View>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              style={styles.icon}
              source={require('./../../assets/back.png')}
            />
          </Pressable>
        ) : showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchPress}>
            <Image
              style={styles.icon}
              source={require('./../../assets/search.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
        <Text style={styles.title}>{title}</Text>
        {showLogout ? (
          <Pressable hitSlop={20} onPress={onLogout}>
            <Image
              style={styles.icon}
              source={require('./../../assets/logout.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>
      {showSearchInput && (
        <View style={styles.searchContainer}>
          <Input
            onChangeText={onSearch}
            value={keyword}
            placeholder="Type your keyboard"
          />
        </View>
      )}
    </View>
  );
}

export default React.memo(Header);

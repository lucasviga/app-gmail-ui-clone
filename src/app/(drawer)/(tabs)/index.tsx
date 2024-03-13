import { Avatar } from '@/components/Avatar';
import { Email } from '@/components/Email';
import { FloatButton } from '@/components/FloatButton';
import { Input } from '@/components/Input';
import { MenuButton } from '@/components/MenuButton';
import { emails } from '@/utils/emails';
import { FlatList, Text, View } from 'react-native';

const avatarURL = "https://scontent.fpll3-1.fna.fbcdn.net/v/t39.30808-6/365262347_3288881611372432_685580410151819301_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ulYg1vHV1ncAX-QVfAn&_nc_ht=scontent.fpll3-1.fna&oh=00_AfDboDu9dOcU4T64Av8AdySHN2Rh74rhZdnZmXNhRut0mw&oe=65F36536";

export default function Home() {
  return (
    <View className='flex-1 bg-gray-900 pt-14 p-4'>
      <Input>
        <MenuButton />
        <Input.Field placeholder='Serch in mail' />
        <Avatar source={{ uri: avatarURL }} size='sm' />        
      </Input> 

      <FlatList 
        data={emails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName='gap-6'
        ListHeaderComponent={() => (
          <Text 
            className='text-gray-400 text-sm font-subtitle mt-6'
          >
            Inbox
          </Text>
        )}
      />

      <FloatButton icon="edit" />
    </View>
  )
}
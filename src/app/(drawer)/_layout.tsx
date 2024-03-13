import { DrawerContent } from '@/components/DrawerContent';
import { CustomOptions } from '@/types/navigation';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (    
    <Drawer 
      defaultStatus='open'
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '75%',
        },        
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen 
        name='(tabs)' 
        options={{ 
          title:  'All inboxes',
          iconName: 'all-inbox',
          isDivider: true,          
        } as CustomOptions} 
      />  

      <Drawer.Screen 
        name='inbox' 
        options={{ 
          title: 'Inbox',
          iconName: 'inbox',
          isDivider: true,          
        } as CustomOptions} 
      />    

      <Drawer.Screen 
        name='favorites' 
        options={{ 
          title:  'Favorites',
          iconName: 'star-outline',          
        } as CustomOptions} 
      />
      
      <Drawer.Screen 
        name='postPoned' 
        options={{ 
          title:  'Postponed',
          iconName: 'schedule',          
        } as CustomOptions} 
      />     
      
      <Drawer.Screen 
        name='important' 
        options={{ 
          title:  'Important',
          iconName: 'label-important-outline',          
        } as CustomOptions} 
      />      

      <Drawer.Screen 
        name='sent' 
        options={{ 
          title:  'Sent',
          iconName: 'send',          
        } as CustomOptions} 
      />  

      <Drawer.Screen 
        name='programming' 
        options={{ 
          title:  'Programmed',
          iconName: 'schedule-send',          
        } as CustomOptions} 
      />  

      <Drawer.Screen 
        name='outbox' 
        options={{ 
          title:  'Outbox',
          iconName: 'outbox',          
        } as CustomOptions} 
      />  

      <Drawer.Screen 
        name='draft' 
        options={{ 
          title:  'Draft',
          iconName: 'note',          
        } as CustomOptions} 
      />  

      <Drawer.Screen 
        name='allmails' 
        options={{ 
          title:  'All mails',
          iconName: 'email',          
        } as CustomOptions} 
      />

      <Drawer.Screen 
        name='spam' 
        options={{ 
          title:  'Spam',
          iconName: 'info-outline',          
        } as CustomOptions} 
      />

      <Drawer.Screen 
        name='trash' 
        options={{ 
          title:  'Trash',
          iconName: 'delete-outline',          
        } as CustomOptions} 
      />

      <Drawer.Screen 
        name='read' 
        options={{ 
          title:  'Read',
          iconName: 'label-important-outline',          
          sectionTitle: 'Marked'          
        } as CustomOptions} 
      />

      <Drawer.Screen 
        name='general' 
        options={{ 
          title:  'General',
          iconName: 'label-important-outline',
          isDivider: true,                 
        } as CustomOptions} 
      />

      <Drawer.Screen 
        name='newMarker' 
        options={{ 
          title:  'Create new',
          iconName: 'add',
          isDivider: true,                 
        } as CustomOptions} 
      />

      <Drawer.Screen 
        name='feedback' 
        options={{ 
          title:  'Feedback',
          iconName: 'feedback',          
        } as CustomOptions} 
      />

      <Drawer.Screen 
        name='help' 
        options={{ 
          title:  'Help',
          iconName: 'help-outline',          
        } as CustomOptions} 
      />

      <Drawer.Screen 
        name='settings' 
        options={{ 
          title:  'Settings',
          iconName: 'settings',          
        } as CustomOptions} 
      />
    </Drawer>
  );
}
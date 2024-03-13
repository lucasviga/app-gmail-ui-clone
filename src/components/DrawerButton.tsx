import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text, View } from "react-native";

import clsx from 'clsx';

export type IconNameProps = keyof typeof MaterialIcons.glyphMap;

type DrawerBtuttonProps =  PressableProps & {
  title: string;
  isFocused?: boolean;
  isDivider?: boolean;
  iconName: IconNameProps;
  notifications?: number;
}

export function DrawerButton({ title, isFocused = true, isDivider = false, iconName, notifications ,...rest }: DrawerBtuttonProps) {
  
  return (
    <Pressable {...rest} className={clsx("py-2 w-full", {
      "border-b ml-10 border-gray-500": isDivider,
    })}>
      <View 
        className={clsx("flex-row items-center gap-4 w-full h-14 px-6 -ml-2", {
          "-ml-12": isDivider,
          "bg-orange-800 rounded-r-full": isFocused,
        })}
      >
        <MaterialIcons 
          name={iconName}
          size={20} 
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />
        
        <Text 
          className={clsx("text-white text-base font-subtitle flex-1", {
            "text-orange-300": isFocused
          })}
        >
          {title}
        </Text>

        <Text 
          className={clsx("text-gray-400 text-sm font-body", {
            "text-orange-300": isFocused
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  )
}
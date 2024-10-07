import {useNavigation} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  FadeInUp,
  FadeInDown,
  FadeInLeft,
} from 'react-native-reanimated';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white w-full h-full ">
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../assets/images/background.png')}
        className="absolute w-full h-full"
      />
      {/* lights */}
      <View className="flex-row justify-around absolute w-full">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require('../assets/images/light.png')}
          className="h-[165] w-[66]"
        />
        <Animated.Image
          entering={FadeInUp.delay(600).duration(1000).springify()}
          source={require('../assets/images/light.png')}
          className="h-[100] w-[38]"
        />
      </View>

      {/* Title&Form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInDown.delay(500).duration(200).springify()}
            className="font-bold tracking-wider text-3xl text-white">
            Sign Up
          </Animated.Text>
        </View>
        {/* Form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInLeft.delay(200).duration(400).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput placeholder="Username" placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View
            entering={FadeInLeft.delay(400).duration(600).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput placeholder="E-mail" placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View
            className="w-full p-5 bg-black/5 rounded-2xl"
            entering={FadeInLeft.delay(600).duration(800).springify()}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              placeholderTextColor={'gray'}
            />
          </Animated.View>
          {/* PressButton */}
          <Animated.View
            className="w-full"
            entering={FadeInLeft.delay(800).duration(1000).springify()}>
            <TouchableOpacity className="w-full p-3 bg-sky-400 rounded-2xl">
              <Text className="text-2xl font-bold text-center text-white">
                Sign Up
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            className="flex-row justify-center"
            entering={FadeInLeft.delay(1000).duration(1200).springify()}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text className="text-sky-600"> Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});

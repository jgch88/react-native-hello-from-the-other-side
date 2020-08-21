import { NativeModules } from 'react-native';

type HelloFromTheOtherSideType = {
  multiply(a: number, b: number): Promise<number>;
  greet(name: string): Promise<string>;
};

const { HelloFromTheOtherSide } = NativeModules;

export default HelloFromTheOtherSide as HelloFromTheOtherSideType;

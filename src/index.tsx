import { NativeModules } from 'react-native';

type HelloFromTheOtherSideType = {
  multiply(a: number, b: number): Promise<number>;
};

const { HelloFromTheOtherSide } = NativeModules;

export default HelloFromTheOtherSide as HelloFromTheOtherSideType;

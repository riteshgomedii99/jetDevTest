import { Input, InputProps } from '@rneui/base'
import React, { forwardRef } from 'react'
import {RFValue} from 'react-native-responsive-fontsize'
import { StyleProp, ViewStyle } from 'react-native'

interface InputTextAtomProps extends InputProps {
    enableView?: boolean
    containerStyle?: StyleProp<ViewStyle>
    onlySecureTextEntry?: boolean
    showPlaceholder?: boolean
  }
const InputTextAtom = (props: InputTextAtomProps, ref: any) => {
  return (
    <Input
    // @ts-ignore
    ref={ref}
    errorStyle={{
      fontSize: RFValue(15),
    }}
    containerStyle={[
      {
        paddingLeft: 0,
        paddingRight: 0,
       
      },
      props.containerStyle,
    ]}
    inputContainerStyle={[props.inputContainerStyle]}
    style={[
      {
        fontSize: RFValue(14),
       
      },
      props.style,
    ]}
    
    {...props}
    
  />
  )
}

export default forwardRef(InputTextAtom)
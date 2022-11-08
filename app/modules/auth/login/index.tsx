import { EmailIcon, LockIcon } from '@app/assets/icons'
import { images } from '@app/assets/images'
import Toast from '@app/core/helpers/Toast'
import { ButtonAtom, InputTextAtom } from '@app/shared'
import { setUserLoginStatus } from '@app/store/actions/slice.action'
import { Input } from '@rneui/base'
import { Formik } from 'formik'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'
import { scale, verticalScale } from 'react-native-size-matters';
import { useDispatch } from 'react-redux'

const Login = () => {

    const dispatch = useDispatch()
// Validate login screen
    const manageLoginValues = (values: any) => {
        dispatch(setUserLoginStatus(true))
        Toast("Login Sucessfully", '', 'success')
    }
    // initial filling values
    const initValues = {
        email: 'reactnative@test.com',
        pass: 'test@12345'

    };
    return (
        <View style={{ flex: 1, }}>
            <Card style={{ marginVertical: verticalScale(60), marginHorizontal: verticalScale(16), borderRadius: 5 }}>
                <View style={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    zIndex: 1, top: verticalScale(-20),
                    left: 0,
                    right: 0,
                    alignItems: "center",
                }}>
                    <Image
                        source={images.login_logo}
                        style={{ height: verticalScale(50), width: scale(50) }}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ marginVertical: verticalScale(60), alignItems: "center" }}>
                    <Text>LOGIN</Text>
                </View>
                <Formik
                    enableReinitialize
                    initialValues={initValues}
                    onSubmit={(values) => manageLoginValues(values)}>
                    {({ values, setFieldTouched, handleChange, isValid, errors, touched, handleSubmit }: any) => (
                        <View style={{ marginHorizontal: scale(16) }}>
                            <InputTextAtom
                                leftIcon={EmailIcon()}
                                placeholder='Email'
                                value={values.email}
                                onChangeText={handleChange('email')} />

                            <InputTextAtom
                                leftIcon={LockIcon()}
                                placeholder='Password'
                                secureTextEntry={true}
                                value={values.pass}
                                onChangeText={handleChange('pass')} />

                            <ButtonAtom 
                                title={'LOGIN'}
                                titleStyle={{ fontSize: RFValue(10), backgroundColor:'balck' }}
                                disabled={false}
                                
                                containerStyle={{ marginVertical: verticalScale(30) }}
                                buttonStyle={{backgroundColor:'#e12e6f', height:40}}
                                onPress={handleSubmit}
                            />
                        </View>
                    )}
                </Formik>



            </Card>
        </View>
    )
}

export default Login

import Toast from 'react-native-toast-message';
type ToastType = 'success' | 'error' | 'info';

export default(title?:string,message?: string,type:ToastType='success',bottomOffsetType:any=60,)=>Toast.show({
    type: type,
    text1: title,
    text2: message,
    position:'bottom',
    bottomOffset:bottomOffsetType,
    autoHide:true,
    visibilityTime:1000
})



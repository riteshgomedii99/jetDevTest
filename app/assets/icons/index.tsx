import React from 'react'
import colors from '@app/theme/colors';
import { Icon } from 'react-native-eva-icons';


export const EmailIcon = () =>(
    <Icon name='email-outline' width={16} height={16} fill={colors.lightGray} animation='pulse'  />
  );
  export const LockIcon = () =>(
    <Icon name='lock-outline' width={16} height={16} fill={colors.lightGray} animation='pulse'  />
  );

  export const PersonIcon = (props: any) => (
    <Icon {...props} name='home-outline' />
);

export const FavoriteIcon = () => (
    <Icon name='star-outline'  width={30} height={30} fill={colors.secondary} animation='pulse' />
);

  
import colors from '@app/theme/colors'
import { Button, ButtonProps } from '@rneui/base'
import React from 'react'


interface ButtonAtomProps extends ButtonProps {
    gradient?: 'PRIMARY' | 'SECONDARY' | 'TERNARY' | 'WHITE'
}
// button item component
const ButtonAtom = (props: ButtonAtomProps) => {
    return (<Button {...props}
        buttonStyle={
            [{
                backgroundColor: props.gradient === 'PRIMARY' ? colors.btnColor : props.gradient === 'TERNARY' ? colors.ternary : props.gradient === 'WHITE' ? colors.white : colors.secondary
            }, props.buttonStyle]
        }
        titleProps={{ numberOfLines: 1 }
        } />)
}

export default ButtonAtom

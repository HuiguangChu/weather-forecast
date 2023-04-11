import { StyleSheet } from 'react-native';

const styleMixin = StyleSheet.create({
    containerWithContentCenterFullHeight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignContentAndItemCentered: {
        alignItems: 'center',
        alignContent: 'center',
    },
    flexRowWithSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styleMixin;

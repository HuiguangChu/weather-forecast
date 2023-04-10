import { StyleSheet, FlexStyle, FlexAlignType } from 'react-native';
import index from "@babel/generator";
export interface FlexProps {
    alignContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'stretch'
        | 'space-between'
        | 'space-around'
        | undefined;
    alignItems?: FlexAlignType | undefined;
    alignSelf?: 'auto' | FlexAlignType | undefined;
    aspectRatio?: number | string | undefined;
    borderBottomWidth?: number | undefined;
    borderEndWidth?: number | string | undefined;
    borderLeftWidth?: number | undefined;
    borderRightWidth?: number | undefined;
    borderStartWidth?: number | string | undefined;
    borderTopWidth?: number | undefined;
    borderWidth?: number | undefined;
    bottom?: number | string | undefined;
    display?: 'none' | 'flex' | undefined;
    end?: number | string | undefined;
    flex?: number | undefined;
    flexBasis?: number | string | undefined;
    flexDirection?:
        | 'row'
        | 'column'
        | 'row-reverse'
        | 'column-reverse'
        | undefined;
    rowGap?: number | undefined;
    gap?: number | undefined;
    columnGap?: number | undefined;
    flexGrow?: number | undefined;
    flexShrink?: number | undefined;
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | undefined;
    start?: number | string | undefined;
}

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
    }
});

export default styleMixin;

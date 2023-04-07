import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Counter.scss';
import { View, Text, Button } from 'react-native';
import { onDecreaseClick, onIncreaseClick } from '../../redux/counter/actions';

const Counter = memo(() => {
    const dispatch = useDispatch();
    const onInCreaseClick = () => dispatch(onIncreaseClick());
    const onDeCreaseClick = () => dispatch(onDecreaseClick());
    const counterState = useSelector((state: any) => state.counter);

    return (
        <View className={styles.row}>
            <Button
                aria-label="Decrement value"
                onPress={onDeCreaseClick}
                title={"-"}
            />
            <Text className={styles.value}>{counterState.counter}</Text>
            <Button
                aria-label="Increment value"
                onPress={onInCreaseClick}
                title={'+'}
            />
        </View>
    )
});

export default Counter;

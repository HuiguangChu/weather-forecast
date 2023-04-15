import React, { memo, FC } from 'react';
import { Text, TextStyle } from 'react-native';

interface ComponentProps {
    content?: string | number;
    size?: TextStyle['fontSize'];
    color?: TextStyle['color'];
    weight?: TextStyle['fontWeight'],
    children?: React.ReactNode;
}

const StyledText: FC<ComponentProps> = memo(({
    content, size, color, weight, children,
}: ComponentProps) => {
    return (
        <Text style={[
            { fontSize: size || 15 },
            { color: color || '#000' },
            { fontWeight: weight || '400' },
        ]}
        >
            {children || content}
        </Text>
    );
});

export default StyledText;

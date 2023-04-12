import React, { memo, FC } from 'react';
import { Text } from 'react-native';

interface ComponentProps {
    content?: string;
    size?: number;
    color?: string;
    weight?: number;
    children?: React.ReactNode;
}

const StyledText: FC<ComponentProps> = memo(({
    content, size, color, weight, children,
}: ComponentProps) => {
    return (
        <Text style={[
            { fontSize: size || 15 },
            { color: color || '#000' },
            { fontWeight: weight || 400 },
        ]}
        >
            {children || content}
        </Text>
    );
});

export default StyledText;

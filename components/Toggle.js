import { StyleSheet, View, Button, Text } from 'react-native';

export default function Toggle({label, options, value, onChange}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.optionContainer}>
                {options.map(option => (
                    <Button
                        key={option}
                        title={option}
                        color={option === value ? 'blue' : 'gray'}
                        onPress={() => onChange(option)}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingBootom: 12,
    },
    label: {
        fontSize: 16,
        padding: 4,
    },
    optionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
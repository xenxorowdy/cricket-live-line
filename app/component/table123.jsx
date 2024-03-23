import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// const cricketData = [
//     { over: 6, session: '48-50', current: '42/3', other: '42-44 CSK' },
//     { over: 10, session: '69-71', current: '75/3', other: '70-72 CSK' },
//     { over: 15, session: '115-117', current: '102/5', other: '39-41 CSK' },
//     { over: 20, session: '148-150', current: '173/6', other: '58-60 CSK' },
//     { over: 6, session: '49-50', current: '62/1', other: '25-27 CSK' },
//     { over: 10, session: '92-94', current: '92/2', other: '20-22 CSK' },
//     { over: 15, session: '132-134', current: '128/4', other: '22-24 CSK' }
// ];

const App = ({ cricketData }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.table}>
                {cricketData?.map((item, index) => (
                    <View key={index} style={styles.row}>
                        <Text style={styles.cell}>{item.over}</Text>
                        <Text style={styles.cell}>{item.session}</Text>
                        <Text style={styles.cell}>{item.current} </Text>
                        <Text style={styles.cell}>{item.other}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    table: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
    },
});

export default App;

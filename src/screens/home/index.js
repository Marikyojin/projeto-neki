import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Card from '../../componets/cards';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Card
                url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyTJ4GdwpqPMOVv72uncVsoIqxHeokSyvzG1LTqfmLtiB3F2UQVEvFZm_HVd8PAwoQ9g&usqp=CAU'
                nome='JAVA'
                versao='v8.0'
                />
                <Card
                url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyTJ4GdwpqPMOVv72uncVsoIqxHeokSyvzG1LTqfmLtiB3F2UQVEvFZm_HVd8PAwoQ9g&usqp=CAU'
                nome='JAVA'
                versao='v8.0'
                />
                <Card
                url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyTJ4GdwpqPMOVv72uncVsoIqxHeokSyvzG1LTqfmLtiB3F2UQVEvFZm_HVd8PAwoQ9g&usqp=CAU'
                nome='JAVA'
                versao='v8.0'
                />
                <Card
                url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyTJ4GdwpqPMOVv72uncVsoIqxHeokSyvzG1LTqfmLtiB3F2UQVEvFZm_HVd8PAwoQ9g&usqp=CAU'
                nome='JAVA'
                versao='v8.0'
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4882D',
    },
    text: {
        color: '#000036',
    }
});

export default Home;
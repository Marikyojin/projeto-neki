import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Card from '../../componets/cards';
import ProgressBar from 'react-native-progress/Bar';

const Usuario = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Card
                url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyTJ4GdwpqPMOVv72uncVsoIqxHeokSyvzG1LTqfmLtiB3F2UQVEvFZm_HVd8PAwoQ9g&usqp=CAU'
                nome='JAVA'
                versao='v8.0'
                >
                    
                </Card>
                <ProgressBar
                    animated={false}
                    backgroundColor='black'
                    progress={0.2}
                    color='white'
                    ></ProgressBar>
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

export default Usuario;
import React, { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import CusText from '../component/CusText';


const PlayersModal = ({ visible, onClose, playerInfo, teamInfo }) => {
    // Group players by play_role
    console.log("playerInfo", playerInfo);
    const groupedPlayers = playerInfo.reduce((acc, player) => {
        // Check if the play_role key already exists in the accumulator object
        if (!acc[player.play_role]) {
            // If not, initialize it as an empty array
            acc[player.play_role] = [];
        }
        // Push the current player object into the corresponding play_role array
        acc[player.play_role].push(player);
        return acc;
    }, {});

    // Convert groupedPlayers object into an array of objects
    const groupedPlayersArray = Object.keys(groupedPlayers).map(key => ({
        play_role: key,
        players: groupedPlayers[key],
    }));

    const renderPlayerItem = ({ item }) => {
        const { play_role, players } = item;

        const renderPlayer = ({ item: player }) => (
            <View style={styles.playerItem}>
                <Image source={{ uri: player.image }} style={styles.playerImage} />
                <View style={styles.playerInfo}>
                    <Text style={styles.playerName}>{player.name}</Text>
                    <Text style={styles.playerRole}>{player.play_role}</Text>
                </View>
            </View>
        );

        return (
            <View style={styles.playerContainer}>
                <Text style={styles.playRoleText}>{play_role}</Text>
                <FlatList
                    data={players}
                    horizontal={false}
                    numColumns={2}
                    renderItem={renderPlayer}
                    keyExtractor={player => player.player_id.toString()}
                    contentContainerStyle={styles.playerListContainer}
                />
            </View>
        );
    };



    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={false}
            onRequestClose={onClose}
        >

            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <View style={{ flexDirection: "row", gap: "10", alignItems: "center" }} >
                            <Image source={{ uri: teamInfo.flag }} style={{ width: 26, height: 26, borderRadius: 18, }} />
                            <CusText style={{ fontSize: 26, fontWeight: 'bold', marginLeft: 10, width: "80%" }} numberOfLines={2} ellipsizeMode="tail" >{teamInfo.name}</CusText>
                        </View>
                        <TouchableOpacity onPress={onClose}  >
                            <AntDesign name="close" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <CusText style={{ fontSize: 26, fontWeight: 'bold', marginTop: 10, margin: 10 }}>Players</CusText>

                    <FlatList
                        data={groupedPlayersArray}
                        ItemSeparatorComponent={renderSeparator}
                        renderItem={renderPlayerItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
const renderSeparator = () => (
    <View style={{ height: 10, }} />
);

const PlayerTeam = ({ teamStats }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [playerInfo, setPlayerInfo] = useState([]);
    const [teamInfo, setTeamInfo] = useState([]);
    return (
        <View>
            <FlatList
                data={teamStats}
                renderItem={({ item }) => renderTeamItem({ item, setModalVisible, setPlayerInfo, setTeamInfo })}

                keyExtractor={(item, index) => index.toString()}
            />
            <PlayersModal visible={modalVisible} onClose={() => setModalVisible(false)} playerInfo={playerInfo} teamInfo={teamInfo} />
        </View>
    );
};

const renderTeamItem = ({ item, setModalVisible, setPlayerInfo, setTeamInfo }) => (
    <TouchableOpacity
        onPress={() => {
            setPlayerInfo(item.player);
            setTeamInfo(item.team)
            setModalVisible(true);
        }}
        style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, textAlign: "center" }}>
            <Image source={{ uri: item.team.flag }} style={{ width: 40, height: 40, borderRadius: 50 }} />
            <CusText style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, width: "80%" }} numberOfLines={1} ellipsizeMode="tail" >{item.team.name}</CusText>
        </View>
        <AntDesign name="right" size={24} color="white" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#030304',
        padding: 20,
        borderRadius: 10,
        width: '95%',
        maxHeight: '85%',
        overflow: 'hidden',
    },
    closeButton: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    openButton: {
        backgroundColor: 'tomato',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    playerContainer: {
        marginBottom: 20,
    },
    playRoleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ffffff',
    },
    playerListContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    playerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 10,
        marginBottom: 10,
        width: "50%",
        elevation: "10",
        border: "1px solid #ffffff",
        borderColor: "#fff",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#141414",
    },
    playerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,

    },
    playerInfo: {
        flexDirection: "column",
        alignItems: 'flex-start',
        width: 100
    },
    playerName: {
        fontSize: 16,
        fontWeight: 700,
        color: '#ffffff',
    },
    playerRole: {
        fontSize: 14,
        color: '#cccccc',
    },

});

export default PlayerTeam;

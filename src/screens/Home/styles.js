import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    itemContent: {
        marginLeft: 20
    },
    avatar: {
        width: 50,
        height: 50,
    },
    avatarContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    positionText: {
        fontSize: 14,
        marginTop: 5
    }
});

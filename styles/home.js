import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},

	connected_fail: {
		backgroundColor: 'red',
		width: '100%',
		paddingTop: 16,
		paddingBottom: 16,
		bottom: 0,
		marginTop: 5
	},

	connected_fail_text: {
		color: '#fff',
		textAlign: 'center'
	}
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import { WebView } from "react-native-webview"

type Props = {}
export default class App extends Component<Props> {
	listeners = []

	render() {
		return (
			<View style={styles.container}>
				<WebView
					style={styles.webview}
					source={{ uri: "https://rbscott.github.io/WebviewBug/docs/" }}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	webview: {
		flex: 1,
		backgroundColor: "white",
		width: 350,
	},
})

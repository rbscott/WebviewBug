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
	cacheBuster = Date.now()

	render() {
		return (
			<View style={styles.container}>
				<WebView
					style={styles.webview}
					// This one crashes
					source={{
						uri: `https://rbscott.github.io/WebviewBug/index.html?c=${
							this.cacheBuster
						}`,
					}}

					// This one does not.
					// source={{
					// 	uri: `https://rbscott.github.io/WebviewBug/no-emoji.html?c=${
					// 		this.cacheBuster
					// 	}`,
					// }}
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

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import { actions } from '../store/reducers/menu_reducer';

const styles = {
	container: {
		textAlign: 'center'
	}
};

const Main = ({ children, is_showing_menu, hideMenu, showMenu }) => (
	<div style={styles.container}>
		<Drawer open={is_showing_menu} docked={false} onRequestChange={hideMenu}>
			<Menu onTouchTap={hideMenu}>
				<MenuItem primaryText='Index' containerElement={<Link to='/' />}/>
				<MenuItem primaryText='Route Example 1' containerElement={<Link to='/route_example_1' />}/>
				<MenuItem primaryText='Counter' containerElement={<Link to='/route_example_2' />}/>
				<MenuItem primaryText='Reddit' containerElement={<Link to='/reddit' />}/>
				<MenuItem primaryText='Note' containerElement={<Link to='/note' />}/>
			</Menu>
		</Drawer>

		<AppBar
			title='react-webpack-babel-hotreload-example'
			iconClassNameRight='muidocs-icon-navigation-expand-more'
			onLeftIconButtonTouchTap={showMenu}
		/>

		{children}
	</div>
);

Main.propTypes = {
	children: PropTypes.node,
	is_showing_menu: PropTypes.bool.isRequired,
	showMenu: PropTypes.func.isRequired,
	hideMenu: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	is_showing_menu: state.menuReducer.is_showing_menu
});

export default connect(mapStateToProps, actions)(Main);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

	componentDidMount() {
		this.props.onInitOrders(this.props.token);
	}

	buildOrders = () => {
		let orders = null;

		orders = this.props.orders.map(order => {
			return <Order key={order.id} ingredients={order.ingredients} price={order.price} />
		});

		return orders;
	}

	render() {
		if (this.props.loading) {
			return <Spinner />;
		}

		return (
			<div>
				{this.buildOrders()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		orders: state.order.orders,
		loading: state.order.loading,
		token: state.auth.token
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInitOrders: (token) => dispatch(actions.fetchOrders(token))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
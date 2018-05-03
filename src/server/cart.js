'use strict';
const dbManager = require('./db');

const db = dbManager.db;
const scripts = dbManager.scripts;

//all this - test verison - need debug

function createNewOrder(items, user_id, callback) {
    console.log("in createNewOrder");
    if (user_id == undefined) return {status: 'Only registered users can place an order.'}
    else addNewOrder(user_id)
    .then(order_id => {
        items.forEach(item => {
            addNewOrderItem(order_id, item.id, item.count)
            .then(result => {
                if (!result) {
                    console.log("server error");
                    removeOrder(order_id);
                    return {status: 'Server error, try again later'};
                }
            })
            .catch(err => console.log(err)); // FIXME Log errors the right way
        });
        console.log("SUCCESS! {order_id: ", order_id);
        return {status: 'success', order_id: order_id};
    })
    .catch(err => console.log(err)); // FIXME Log errors the right way
}


const addNewOrder = (user_id) => {
    console.log("in addNewOrder");
    return new Promise((resolve, reject) => {
		db.query(scripts.addNewOrder, {user_id: user_id}, (err, rows) => {
            if (err) { return reject(err); }
            console.log("new order added: ", order_id);
            console.dir(rows);
			return resolve(rows[0].order_id);
		});
	});
}

const addNewOrderItem = (order_id, post_id, count) => {
    return new Promise((resolve, reject) => {
		db.query(scripts.addNewOrderItem, {order_id: order_id, post_id: post_id, count: count}, (err, rows) => {
            if (err) { return reject(err); }
            console.log("new order item added!  ROWS:");
            console.dir(rows);
			return resolve(true);
		});
	});
}

const removeOrder = (order_id) => {
    return new Promise((resolve, reject) => {
		db.query(scripts.removeOrder, {order_id: order_id}, (err, rows) => {
            if (err) { return reject(err); }
			return resolve(true);
		});
	});
}




module.exports.createNewOrder = createNewOrder;
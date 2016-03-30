// browserify entrypoint
var Vue = require('vue');

import Alert from './components/Alert.vue';

Vue.filter('role', function(value, role) {
	return value.filter(function(item) {
		return item.role == role;
	});
});

new Vue({
	el: 'body',

	components: { Alert },

	ready() {
		console.log('Ready!');
	},

	data: {
		people: [
			{ name: 'Joe', role: 'admin' },
			{ name: 'Susan', role: 'admin' },
			{ name: 'Alex', role: 'student' },
			{ name: 'Jason', role: 'student' },
		]
	}
});
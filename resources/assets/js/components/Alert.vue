<template>
	<div :class="alertsClasses" v-show="show">
		<slot></slot>
		<span class="alerts-close pull-right" @click="show = false">x</span>
	</div>
</template>

<script>
	export default {

		props: ['type'],

		data() {
			return {
				show: true
			};
		},

		computed: {
			alertsClasses() {
				var type = this.type;
				return {
					'alerts': true,
					'alerts-success': type == 'success',
				};
			}
		}
	};
</script>
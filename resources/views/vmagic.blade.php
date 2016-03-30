@extends('layouts.app')

@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-10 col-md-offset-1">
			<div class="panel panel-success">
				<div id="app">
					<h2 class="text-center">@{{ fullName }}</h2>
					<form action="anywhere" method="post">
						<div class="form-group">
							<input type="text" v-model="first" class="form-control">
						</div>
						<div class="form-group">
							<input type="text" v-model="last" class="form-control">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection

@section('footer')

<script src="/js/vendor.js"></script>
<script src="/js/main.js"></script>
@endsection
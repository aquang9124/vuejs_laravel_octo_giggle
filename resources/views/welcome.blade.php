@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <ul>
                <li v-for="person in people | role 'admin'">@{{ person.name }}</li>
            </ul> 
        </div>
    </div>
</div>
@endsection
@section('footer')

<script src="/js/vendor.js"></script>
<script src="/js/main.js"></script>

@endsection
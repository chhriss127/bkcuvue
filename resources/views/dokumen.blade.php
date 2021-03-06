@extends('_layouts.layout')

@section('css')

@stop

@section('content')

<!-- pengumuman -->
@include('_components.pengumumanBKCU')

<!-- page title -->
<section id="page-title">

  <div class="container clearfix">
    <h1>{{ $title }}</h1>
    <span>{{ $subtitle }}</span>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">{{ $title }}</li>
    </ol>
  </div>

</section>

<!-- content -->
<section id="content">

  <div class="content-wrap">

    <div class="container clearfix">

      <div class="row clear-bottommargin">
        @foreach($dokumens as $item)
        <div class="col-lg-4 col-md-6 bottommargin">
          <div class="promo promo-border promo-mini">
            <h3>{{ $item->name }}</h3>
            <hr/>
            @if($item->keterangan != '')
              {{ $item->keterangan }}
              <br/>
            @endif
            @if($item->format == 'upload')
              <a href="{{ route('files', $item->filename )}}" class="button button-large button-dark button-rounded">Download</a>
            @else
              <a href="{{ $item->link }}" class="button button-large button-dark button-rounded" target="_blank">Download</a>
            @endif
          </div>
        </div>
        @endforeach
      </div>

    </div>

  </div>

</section>

@stop

@section('js')

@stop

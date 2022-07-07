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
      <li class="breadcrumb-item active" aria-current="page">saranBaru</li>
      <li class="breadcrumb-item active" aria-current="page">{{ $title }}</li>
    </ol>
  </div>

</section>

<!-- content -->

<section id="content">

      <div class="container mt-3">
      <h2>Input Saran</h2>
        <form method="POST" action="{{route('/saranBaru')}}">
          @csrf
          <div class="mb-3">
            <label>NAMA:</label>
            <input type="Nama" name="Nama" class="form-control" placeholder="Masukan Nama . . ." >
          </div>

          <div class="mb-3 mt-3">
            <label>Input Saran:</label>
            <textarea type="Saran" name="Saran" class="form-control" placeholder="Masukan Saran/Masukan anda . . ." ></textarea>
          </div>
          <input value="Submit"  type="submit" class="btn btn-success"></input>

        </form>

      </div>
</section>

<div class="container mt-3">
  <h2>Lihat Saran</h2>
</div>

<div class="container mt-3">
  
    <table class="table table-striped">
      
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Saran/Masukan</th>
        </tr>
      
        @foreach($saran_baru as $saran)
        <tr>
            <td>{{$saran->id}}</td>
            <td>{{$saran->Nama}}</td>
            <td>{{$saran->Saran}}</td>
        </tr>
        @endforeach
    </table>
  
</div>
</section>



@stop

@section('js')

@stop

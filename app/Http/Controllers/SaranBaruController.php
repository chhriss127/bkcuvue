<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\SaranBaru;


    class SaranBaruController extends Controller
{
    protected $message = 'Saran';

    public function index()
    {
        $sarans = DB::table('saran_baru')->get();
        $title = 'SARAN';
		$subtitle = 'Saran anda sangat membantu kami';

        return view('saranBaru', compact('title','subtitle','sarans'));
    }

	public function saranBaru()
	{
		
		$title = 'SARAN';
		$subtitle = 'Saran anda sangat membantu kami';

		return view('saranBaru', compact('title','subtitle'));
	}

    public function store(Request $request)
    {
        if($request->nama && $request->comment != null){
            $nama = $request->Nama;
		    $kelas = SaranBaru::create($request->all());
        }
		
        $sarans = DB::table('saran_baru')->get();
		
        $title = 'SARAN';
		$subtitle = 'Saran anda sangat membantu kami';

		return view('saranBaru',compact('title','subtitle','sarans'));
    }

    

}

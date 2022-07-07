<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\HalamanBaru;


    class HalamanBaruController extends Controller
{
    protected $message = 'Saran';

    public function index()
    {
        // $sarans = DB::table('saran_baru')->get();
        // $title = 'SARAN';
		// $subtitle = 'Saran anda sangat membantu kami';

        // return view('halamanBaru', compact('title','subtitle','sarans'));
        $table_data=halamanBaru::select('id','nama','comment')->advancedFilter();

        return response()
        ->json([
            'model' => $table_data
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()
			->json([
					'form' => HalamanBaru::initialize(),
					'rules' => HalamanBaru::$rules,
                    'option' =>[]
			]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, halamanBaru::$rules);

        $kelas = halamanBaru::create(['nama'=> $request->nama, 'comment' =>$request->comment]);

        return response()
        ->json([
            'saved'=>true,
            'message'=>$this->message.''.$request->nama.'berhasil ditambah',
            'id' => $kelas->id
        ]);
        // if($request->nama && $request->comment != null){
        //     $nama = $request->nama;
		//     $kelas = HalamanBaru::create($request->all());
        // }
		
        // $sarans = DB::table('halaman_baru')->get();
		
        // // $title = 'SARAN';
		// // $subtitle = 'Saran anda sangat membantu kami';

		// return view('halamanbaru',compact('sarans'));

        // return index();
    }

    

}

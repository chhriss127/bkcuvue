<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\BaruLagi;


    class BaruLagiController extends Controller
{
    protected $message = 'Saran';

    public function index()
    {
        // $sarans = DB::table('saran_baru')->get();
        // $title = 'SARAN';
		// $subtitle = 'Saran anda sangat membantu kami';

        // return view('halamanBaru', compact('title','subtitle','sarans'));
        $table_data=BaruLagi::select('id','nama','comment')->advancedFilter();
        
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
					'form' => BaruLagi::initialize(),
					'rules' => BaruLagi::$rules,
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
        $this->validate($request, BaruLagi::$rules);

        $kelas = BaruLagi::create(['nama'=> $request->nama, 'comment' =>$request->comment]);

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
    public function destroy($id)
    {
        $kelas = BaruLagi::findOrFail($id);
        $name = $kelas->name;
        $kelas->delete();

        return response()
            ->json([
                'deleted' => true,
                'message' =>  $this->message . ' ' . $name . 'berhasil dihapus'
            ]);
    }
    public function update(Request $request, $id)
    {
        $name = $request->name;
        $kelas = BaruLagi::findOrFail($id);
        // processing single image upload
        $kelas->update($request->all());
        return response()
            ->json([
                'saved' => true,
                'message' => $this->message . ' ' . $name . ' berhasil diubah'
            ]);
    }
    public function edit($id)
    {
        $kelas = BaruLagi::findOrFail($id);

        return response()
            ->json([
                'form' => $kelas,
                'option' => []
            ]);
    }
    

}

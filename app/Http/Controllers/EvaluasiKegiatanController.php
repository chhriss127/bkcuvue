<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EvaluasiKegiatanController extends Controller
{
    public function index()
    {
        //
        $table_data = EvaluasiKegiatan::select('masih kosong')->advancedFilter();
        
        return response()->json([
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
        //
        return response()
			->json([
					'form' => EvaluasiKegiatan::initialize(),
					'rules' => EvaluasiKegiatan::$rules,
                    'option' => []
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
        //
        $name = $request->name;
        $kelas = EvaluasiKegiatan::create($request->all());
        

		return response()
            ->json([
                'saved' => true,
                'message' => $this->message . ' ' . $name . ' berhasil ditambah',
                'id' => $kelas->id
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\EvaluasiKegiatan  $EvaluasiKegiatan
     * @return \Illuminate\Http\Response
     */
    public function show(EvaluasiKegiatan $EvaluasiKegiatan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\EvaluasiKegiatan  $EvaluasiKegiatan
     * @return \Illuminate\Http\Response
     */
    public function edit(EvaluasiKegiatan $EvaluasiKegiatan)
    {
        //
        $kelas = EvaluasiKegiatan::findOrFail($EvaluasiKegiatan);

    return response()
        ->json([
            'form' => $kelas,
            'option' => []
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\EvaluasiKegiatan  $EvaluasiKegiatan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EvaluasiKegiatan $EvaluasiKegiatan)
    {
        //
        $kelas = EvaluasiKegiatan::findOrFail($EvaluasiKegiatan);
        $name = $request->name;
        $kelas->update($request->all());

        return response()
            ->json([
                'saved' => true,
                'message' => $this->message . ' ' . $name . ' berhasil diubah'
            ]);

        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\EvaluasiKegiatan  $EvaluasiKegiatan
     * @return \Illuminate\Http\Response
     */
    public function destroy(EvaluasiKegiatan $EvaluasiKegiatan)
    {
        //
        $kelas = EvaluasiKegiatan::findOrFail($EvaluasiKegiatan);
        $name = $kelas->name;
        $kelas->delete();
    
        return response()
            ->json([
                'deleted' => true,
                'message' =>  $this->message . ' ' . $name . 'berhasil dihapus'
            ]);
    }
}

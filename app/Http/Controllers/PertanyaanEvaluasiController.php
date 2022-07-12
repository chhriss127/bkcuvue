<?php

namespace App\Http\Controllers;

use App\PertanyaanEvaluasi;
use Illuminate\Http\Request;

class PertanyaanEvaluasiController extends Controller
{
    protected $message = 'pertanyaan';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $table_data = PertanyaanEvaluasi::select('id','pertanyaan')->advancedFilter();

        //dd($table_data);
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
                'form' => PertanyaanEvaluasi::initialize(),
                'rules' => PertanyaanEvaluasi::$rules,
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
        $name = $request->pertanyaan;
        $kelas = PertanyaanEvaluasi::create($request->all());
        

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
     * @param  \App\PertanyaanEvaluasi  $pertanyaanEvaluasi
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PertanyaanEvaluasi  $pertanyaanEvaluasi
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $kelas = PertanyaanEvaluasi::findOrFail($id);

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
     * @param  \App\PertanyaanEvaluasi  $pertanyaanEvaluasi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $kelas = PertanyaanEvaluasi::findOrFail($id);
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
     * @param  \App\PertanyaanEvaluasi  $pertanyaanEvaluasi
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $kelas = PertanyaanEvaluasi::findOrFail($id);
        $name = $kelas->name;
        $kelas->delete();

        return response()
            ->json([
                'deleted' => true,
                'message' =>  $this->message . ' ' . $name . 'berhasil dihapus'
            ]);
    }
}

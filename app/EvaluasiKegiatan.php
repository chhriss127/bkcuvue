<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class EvaluasiKegiatan extends BaseEloquent
{
    use Dataviewer, LogsActivity; 
    protected $table = 'evaluasi_diklat';
    protected static $logAttributes = ['user_id', 'cu_id', 'kode_kegiatan', 'pertanyaan_id'];

    
    public static $rules = [
        'user_id' => 'required',
        'name' => 'required',
        'cu_id' => 'required',
        'cu' => 'required',
        'kode_kegiatan' => 'required',
        'pertanyaan_id' => 'required',
        'evaluasi' => 'required'
    ];
    
    protected $fillable = [
        'user_id',
        'name',
        'cu_id',
        'cu',
        'kode_kegiatan',
        'nama_kegiatan',
        'pertanyaan_id',
        'pertanyaan',
        'evaluasi',
        'saran'
    ];

    public static function initialize(){
        return[
            'user_id' => '',
            'name' => '',
            'cu_id' => '',
            'cu' => '',
            'kode_kegiatan' => '',
            'nama_kegiatan' => '',
            'pertanyaan_id' => '',
            'pertanyaan' => '',
            'evaluasi' =>'',
            'saran' => ''
        ];
    }
    protected $allowedFilters = [
        'user_id',
        'name',
        'cu_id',
        'cu',
        'kode_kegiatan',
        'nama_kegiatan',
        'pertanyaan_id',
        'pertanyaan',
        'evaluasi',
        'saran',
        'created_at',
        'updated_at'
    ];

    protected $orderable = [
        'user_id',
        'name',
        'cu_id',
        'cu',
        'kode_kegiatan',
        'nama_kegiatan',
        'pertanyaan_id',
        'pertanyaan',
        'evaluasi',
        'saran',
        'created_at',
        'updated_at'
    ];

    // public function getUserId()
    // {
    //     return $this->user_id;

    // }
    // public function getCuId()
    // {
    //     return $this->cu_id;
    // }
    // public function getkodeDiklat()
    // {
    //     return $this->kode_diklat;
    // }
    // public function getPertanyaanId()
    // {
    //     return $this->pertanyaan_id;
    // }

    public function user()
    {
        return $this->belongsTo('App\User', 'id', 'name')->select('id', 'name');
    }

    public function cu()
    {
        return $this->belongsTo('App\Cu', 'cu_id', 'cu')->select('id', 'name');
    }

    public function kegiatan()
    {
        return $this->belongsTo('App\Kegiatan', 'kode_kegiatan', 'nama_kegiatan')->select('id', 'name');
    }

    public function pertanyaan()
    {
        return $this->belongsTo('App\PertanyaanEvaluasi', 'pertanyaan_id', 'pertanyaan')->select('id', 'pertanyaan');
    }
}

<?php

namespace App;

use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

use Illuminate\Database\Eloquent\Model;

class SaranBaru extends BaseEloquent
{
    use Dataviewer, LogsActivity;

    protected $table = 'saran_baru';

    public static $rules = [
        'Nama' => 'required',
        'Saran' => 'required',
        
    ];
    protected $fillable = ['Nama','Saran'];

    public static function initialize(){
        return [
            'Nama' => '','Saran'=>''
        ];
    }

    protected $allowedFilters = [
        'Nama','Saran','updated_at','created_at'
    ];

    protected $orderable = [
        'Nama','Saran','updated_at','created_at'
    ];
}
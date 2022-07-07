<?php

namespace App;

use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

use Illuminate\Database\Eloquent\Model;

class HalamanBaru extends BaseEloquent
{
    use Dataviewer, LogsActivity;

    protected $table = 'halaman_baru';

    public static $rules = [
        'nama' => 'required',
        'comment' => 'required',
        
    ];
    protected $fillable = ['nama','comment'];

    public static function initialize(){
        return [
            'nama' => '','comment'=>''
        ];
    }

    protected $allowedFilters = [
        'id','nama','comment'
    ];

    protected $orderable = [
        'id','nama','comment'
    ];
}
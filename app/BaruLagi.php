<?php

namespace App;

use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

use Illuminate\Database\Eloquent\Model;

class BaruLagi extends BaseEloquent
{
    use Dataviewer, LogsActivity;

    protected $table = 'baru_lagi';

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
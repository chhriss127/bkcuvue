<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class PertanyaanEvaluasi extends BaseEloquent
{
    use Dataviewer, LogsActivity; 
    protected $table = 'pertanyaan_evaluasi';

    
    public static $rules = [
        'pertanyaan' => 'required'
    ];
    
    protected $fillable = [
        'pertanyaan'
    ];

    public static function initialize(){
        return[
            'pertanyaan' => ''
        ];
    }
    protected $allowedFilters = [
        'id','pertanyaan', 'created_at', 'updated_at'
    ];

    protected $orderable = [
        'id','pertanyaan', 'created_at', 'updated_at'
    ];
}

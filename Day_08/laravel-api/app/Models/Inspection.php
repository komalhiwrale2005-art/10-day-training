<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Inspection extends Model
{
    protected $fillable = [
        'facility_id',
        'inspection_date',
        'inspector_name',
        'cleanliness_score',
        'remarks',
    ];

    protected function casts(): array
    {
        return [
            'inspection_date' => 'date',
            'cleanliness_score' => 'integer',
        ];
    }

    public function facility(): BelongsTo
    {
        return $this->belongsTo(Facility::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;
    

    protected $fillable = [
        'title',
        'slug',
        'content',
        'category_id',
    ];

    /**
     * Get the category associated with the post.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

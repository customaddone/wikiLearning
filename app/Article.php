<?php

namespace App;

use cebe\markdown\Markdown as Markdown;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['title','userId','article','status'];

    public function parse() {
        //newでインスタンスを作る
        $parser = new Markdown();
        //textsをパースする
        return $parser->parse($this->article);
    }

    public function getMarkBodyAttribute() {
        return $this->parse();
    }
}

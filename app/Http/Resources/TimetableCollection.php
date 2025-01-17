<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class TimetableCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'links' => [
                'self' => $request->url(),
                'first' => $this->collection->first()->url(),
                'last' => $this->collection->last()->url(),
                'prev' => $this->collection->previousPageUrl(),
                'next' => $this->collection->nextPageUrl(),
            ],
        ];
    }
}

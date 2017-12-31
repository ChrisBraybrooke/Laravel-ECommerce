<?php

namespace ChrisBraybrooke\ECommerce\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\MediaResource;
use App\Http\Resources\CollectionTypesResource;

class CollectionResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'individual_name' => $this->individual_name,
            'header_img' => new MediaResource($this->media()->location('header_img')->first()),
            'types' => new CollectionTypesResource($this->whenLoaded('types')),
            'slug' => $this->slug,
            'live_at' => $this->live_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}

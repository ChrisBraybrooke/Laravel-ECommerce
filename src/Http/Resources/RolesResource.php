<?php

namespace ChrisBraybrooke\ECommerce\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use ChrisBraybrooke\ECommerce\Http\Resources\RoleResource;

class RolesResource extends ResourceCollection
{
    public $collects = RoleResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $shop = new ShopResource($request);
        return [
            'data' => $this->collection,
            'shop_data' => $shop->toArray($request)
        ];
    }
}

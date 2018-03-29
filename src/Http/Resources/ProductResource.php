<?php

namespace ChrisBraybrooke\ECommerce\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use ChrisBraybrooke\ECommerce\Http\Resources\ShopResource;
use ChrisBraybrooke\ECommerce\Http\Resources\MediaResource;
use ChrisBraybrooke\ECommerce\Http\Resources\MediasResource;
use ChrisBraybrooke\ECommerce\Http\Resources\ProductsResource;
use ChrisBraybrooke\ECommerce\Http\Resources\ProductResource;
use ChrisBraybrooke\ECommerce\Http\Resources\CollectionTypesResource;
use ChrisBraybrooke\ECommerce\Http\Resources\ProductCustomisationsResource;
use App\Product;

class ProductResource extends Resource
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
            'collections' =>
            $this->when(
                $this->relationLoaded('collectionTypes'),
                ['data' => $this->groupedCollectionTypes()]
            ),
            'content' => $this->when(
                $this->relationLoaded('content'),
                new ContentsResource($this->whenLoaded('content'))
            ),
            'main_img' => $this->when(
                $this->relationLoaded('media'),
                new MediaResource($this->mediaByLocation('main_img')->first())
            ),
            'gallery' => $this->when(
                $this->relationLoaded('media'),
                new MediasResource($this->mediaByLocation('gallery'))
            ),
            'customisation_base_img' => $this->when(
                $this->relationLoaded('collectionTypes'),
                new MediaResource($this->mediaByLocation('customisation_base_img')->first())
            ),
            'variants' => new ProductsResource($this->whenLoaded('variants')),
            'variant' => new ProductResource($this->whenLoaded('variant')),
            'customisations' => new ProductCustomisationsResource($this->whenLoaded('customisations')),
            'is_variant' => $this->is_variant,
            'live_at' => $this->live_at,
            'slug' => $this->slug,
            'price' => $this->price,
            'use_variant_customisation' => $this->use_variant_customisation,
            'can_customise' => $this->can_customise,
            'list_in_shop' => $this->list_in_shop,
            'featured' => $this->featured,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'can_customise_width' => $this->can_customise_width,
            'can_customise_height' => $this->can_customise_height,
            'can_customise_depth' => $this->can_customise_depth,
            'measurement_unit' => $this->measurement_unit,
            'width' => $this->width,
            'height' => $this->height,
            'depth' => $this->depth
        ];
    }

    /**
     * Get additional data that should be returned with the resource array.
     *
     * @param \Illuminate\Http\Request  $request
     * @return array
     */
    public function with($request)
    {
        $shop = new ShopResource($request);
        return [
            'shop_data' => $shop->toArray($request)
        ];
    }
}
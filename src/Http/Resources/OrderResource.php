<?php

namespace ChrisBraybrooke\ECommerce\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use ChrisBraybrooke\ECommerce\Http\Resources\ShopResource;

class OrderResource extends Resource
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
            'status' => $this->status,
            'invoice' => $this->invoice,
            'customer' => $this->customer,
            'use_billing_for_shipping' => $this->use_billing_for_shipping,
            'billing_address' => $this->billing_address,
            'shipping_address' => $this->shipping_address,
            'cart' => $this->cart,
            'items' => $this->items,
            'amount' => $this->payment_amount,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'payment_method' => $this->payment_method,
            'payment_id' => $this->payment_id,
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
            'shop_data' => $shop->toArray($request),
            'statuses' => $this->getStatuses()
        ];
    }
}
<?php

namespace ChrisBraybrooke\ECommerce\Contracts;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

interface Product
{
    /**
     * The collection types that this product is associated with.
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function collectionTypes(): BelongsToMany;

    /**
     * The collection types that this product is associated with.
     *
     * @return Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function customisations(): HasMany;

    /**
      * Display any variants of this product.
     *
     * @return Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function variants(): HasMany;

    /**
     * If the product is a variant then what is a variant of
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function variant(): BelongsTo;
}
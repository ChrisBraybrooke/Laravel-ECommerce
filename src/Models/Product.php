<?php

namespace ChrisBraybrooke\ECommerce\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use ChrisBraybrooke\ECommerce\Traits\ResponsableTrait;
use ChrisBraybrooke\ECommerce\Traits\Importable;
use ChrisBraybrooke\ECommerce\Traits\SluggableTrait;
use ChrisBraybrooke\ECommerce\Traits\FormatDatesTrait;
use ChrisBraybrooke\ECommerce\Traits\HasMediaAttached;
use ChrisBraybrooke\ECommerce\Traits\HasContentAttached;
use ChrisBraybrooke\ECommerce\Traits\HasFormsTrait;
use ChrisBraybrooke\ECommerce\Traits\HasCustomisationsAttached;
use ChrisBraybrooke\ECommerce\Scopes\LiveScope;
use Collection;
use ChrisBraybrooke\ECommerce\Events\ProductCreated;
use ChrisBraybrooke\ECommerce\CollectionType;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use ChrisBraybrooke\ECommerce\Contracts\Product as ProductContract;
use Carbon\Carbon;

class Product extends Model implements ProductContract
{
    use LogsActivity, ResponsableTrait, FormatDatesTrait, SluggableTrait, SoftDeletes, HasMediaAttached,
        HasContentAttached, HasFormsTrait, Importable, HasCustomisationsAttached;

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new LiveScope);
    }

    /**
     * Which collumns to use for search.
     *
     * @return array
     */
    private function responsableSearch()
    {
        return [
          'id',
          'name',
          'sku'
        ];
    }
    
    /**
     * Which collumns to use for search.
     *
     * @return array
     */
    private function responsableOrderByAlias()
    {
        return [
          'name' => 'name',
          'price' => 'price',
        ];
    }

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => ProductCreated::class,
    ];

    /**
     * The default meta to create on creation
     *
     * @var array
     */
    public $defaultMeta = [

    ];

    /**
     * The default content to create on creation
     *
     * @var array
     */
    public $defaultContent = [
        ['content_name' => 'Main Content', 'content' => '', 'type' => 'quill'],
        ['content_name' => 'Snippet', 'content' => '', 'type' => 'text']
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'use_variant_data', 'live_at', 'slug', 'price', 'use_variant_customisation', 'can_customise',
        'list_in_shop', 'featured', 'can_customise_width', 'can_customise_height', 'can_customise_depth',
        'measurement_unit', 'width', 'height', 'depth', 'variant_id', 'order_form_id', 'frontend_form_id',
        'use_variant_order_forms', 'order_options'
    ];

    /**
     * The attributes to log when changes are made.
     *
     * @var array
     */
    protected static $logAttributes = [
        'id', 'name', 'live_at', 'slug', 'price', 'use_variant_customisation', 'can_customise',
        'list_in_shop', 'featured', 'can_customise_width', 'can_customise_height', 'can_customise_depth',
        'measurement_unit', 'width', 'height', 'depth', 'order_form_id', 'frontend_form_id', 'use_variant_order_forms', 'order_options'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'use_variant_data' => 'boolean',
        'list_in_shop' => 'boolean',
        'featured' => 'boolean',
        'use_variant_customisation' => 'boolean',
        'can_customise_width' => 'boolean',
        'can_customise_height' => 'boolean',
        'can_customise_depth' => 'boolean',
        'order_options' => 'array'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'live_at'
    ];

    /**
     * Get the identifier of the Buyable item.
     *
     * @return int|string
     */
    public function getBuyableIdentifier($options = null)
    {
        return $this->id;
    }

    /**
     * Get the description or title of the Buyable item.
     *
     * @return string
     */
    public function getBuyableDescription($options = null)
    {
        return $this->name;
    }

    /**
     * Get the price of the Buyable item.
     *
     * @return float
     */
    public function getBuyablePrice($options = null)
    {
        return $this->price;
    }

    /**
     * Set default event log message.
     *
     * @var String
     */
    public function getDescriptionForEvent(string $eventName): string
    {
        return "Product was: {$eventName}";
    }

    /**
     * The collection types that this product is associated with.
     *
     * @return App\CollectionType
     */
    public function collectionTypes(): BelongsToMany
    {
        return $this->belongsToMany(config('ecommerce.models.collection_type'))
                    ->with('collection:id,name')
                    ->withTimestamps();
    }

    /**
     * The collection types that this product is associated with.
     *
     * @return App\ProductCustomisation
     */
    public function customisations(): HasMany
    {
        return $this->hasMany(config('ecommerce.models.product_customisation'));
    }

    /**
     * The collection types that this product is associated with.
     *
     * @return App\Price
     */
    public function prices(): HasMany
    {
        return $this->hasMany(config('ecommerce.models.price'));
    }

    /**
     * Get the collectionTypes of either this product or it's parent.
     *
     * @return App\CollectionType
     */
    public function getAvailableCollectionTypesAttribute()
    {
        if ($this->is_variant && $this->use_variant_customisation) {
            return $this->variant->collectionTypes;
        }
        return $this->collectionTypes;
    }

    /**
     * Get the customisations of either this product or it's parent.
     *
     * @return App\ProductCustomisation
     */
    public function getAvailableCustomisationsAttribute()
    {
        if ($this->is_variant && $this->use_variant_customisation) {
            return $this->variant->customisations()->with('options')->get();
        }
        return $this->customisations;
    }

    /**
     * Add a scope to pull only variants
     *
     * @param $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOnlyVariants($query)
    {
        return $query->whereNotNull('variant_id');
    }

    /**
     * Add a scope to pull only parents
     *
     * @param $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeNoVariants($query)
    {
        return $query->whereNull('variant_id');
    }

    /**
     * Add a scope to pull products that belong to a certain collectiontype
     *
     * @param $query
     * @param App\CollectionType $collection_type
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeWhereCollectionType($query, CollectionType $collection_type)
    {
        return $query->join('collection_type_product', 'products.id', '=', 'collection_type_product.product_id')
                     ->where('collection_type_product.collection_type_id', $collection_type->id);
    }

    /**
    * Group the collection Types.
    *
    * @param Boolean $includeTypes
    * @param Boolean $includeTypesSync
    * @return Array
    */
    public function groupedCollectionTypes($includeTypes = true, $includeTypesSync = true)
    {
        $collectionTypes = $this->collectionTypes;

        $formatted_collections = [];

        foreach ($collectionTypes->groupBy('collection.name') as $collection_name => $collections) {
            $formatted_collection = [];
            foreach ($collections as $key => $collection) {
                $formatted_collection[] = [
                    'id' => $collection['id'],
                    'name' => $collection['name'],
                    'individual_name' => $collection['individual_name'],
                    'main_img' => $collection['main_img'],
                    'slug' => $collection['slug'],
                    'live_at' => $collection['live_at'],
                    'created_at' => $collection['created_at'],
                    'updated_at' => $collection['updated_at'],
                ];
            }
            $formatted_collections[$collection_name] = $formatted_collection;
        }

        $formatted_sync_collections = [];

        foreach ($collectionTypes->groupBy('collection.id') as $collection_id => $collections) {
            $formatted_sync_collection = [];
            foreach ($collections as $key => $collection) {
                $formatted_sync_collection[] = $collection['id'];
            }
            $formatted_sync_collections[$collection_id] = $formatted_sync_collection;
        }

        foreach (Collection::get() as $key => $collection) {
            if (!isset($formatted_sync_collections[$collection['id']])) {
                $formatted_sync_collections[$collection['id']] = [];
            }
        }

        $groupedCollectionsArray = [];

        if ($includeTypesSync) {
            $groupedCollectionsArray['collection_types_sync'] = collect($formatted_sync_collections);
        }
        if ($includeTypes) {
            $groupedCollectionsArray['collection_types'] = $formatted_collections;
        }

        return $groupedCollectionsArray;
    }

    /**
    * If the pruct is a variant then what is a variant of?
    *
    * @return App\Product
    */
    public function variant(): BelongsTo
    {
        return $this->belongsTo(config('ecommerce.models.product'), 'variant_id', 'id');
    }

    /**
    * If the pruct is a variant then what is a variant of?
    *
    * @return App\Product
    */
    public function getIsVariantAttribute()
    {
        return !empty($this->variant_id);
    }

    /**
    * Return the price attribute in the correct format.
    *
    * @return App\Product
    */
    public function getPriceAttribute($value)
    {
        return is_null($value) ? null : priceFormatter(($value / 100));
    }

    /**
    * Return the price attribute in the correct format.
    *
    * @return App\Product
    */
    public function setPriceAttribute($value)
    {
        $formatted = priceFormatter($value);
        $formatted = (int)preg_replace('/\D/', '', $formatted);
        $this->attributes['price'] = $formatted;
    }

    /**
    * Can the product be customised?
    *
    * @return App\Product
    */
    public function getCanCustomiseAttribute($value)
    {
        return $this->use_variant_customisation ? optional($this->variant)->can_customise : $value;
    }

    /**
    * Display any variants of this product.
    *
    * @return App\Product
    */
    public function variants(): HasMany
    {
        return $this->hasMany(config('ecommerce.models.product'), 'variant_id', 'id');
    }

    /**
     * Get the Order Form.
     *
     * @return App\Form
     */
    public function orderForm(): HasOne
    {
        return $this->hasOne(config('ecommerce.models.form'), 'id', 'order_form_id');
    }

    /**
     * Get the frontend Order Form.
     *
     * @return App\Form
     */
    public function frontendForm(): HasOne
    {
        return $this->hasOne(config('ecommerce.models.form'), 'id', 'frontend_form_id');
    }

    /**
     * Get the frontend Order Form.
     *
     * @return App\Form
     */
    public function getAvailableOrderFormAttribute()
    {
        if ($this->is_variant && $this->use_variant_customisation && empty($this->orderForm)) {
            return $this->variant->orderForm()->with('sections.fields')->first();
        }
        return $this->orderForm;
    }

    /**
     * Get the frontend Order Form.
     *
     * @return App\Form
     */
    public function getAvailableFrontendFormAttribute()
    {
        if ($this->is_variant && $this->use_variant_customisation && empty($this->frontendForm)) {
            return $this->variant->frontendForm()->with('sections.fields')->first();
        }
        return $this->frontendForm;
    }

    /**
    * Display google tag manager array.
    *
    * @param $key
    * @return array
    */
    public function gtm($key = null, $extra = [])
    {
        $default = [
            'name' => $this->variant ? $this->variant->name : $this->name,
            'id' => $this->id,
            'price' => $this->price,
            // 'category': 'Apparel',
            'variant' => $this->variant ?  $this->name : '',
            // 'list': 'Search Results',
            'position' => $key
        ];

        return array_merge($default, $extra);
    }

    /**
    * The validation rules for importing products.
    *
    * @return array
    */
    public function importValidationRules()
    {
        return [
            'name' => 'bail|required|max:255',
            'slug' => 'bail|max:255',
        ];
    }

    /**
    * The validation messages for importing products.
    *
    * @var Int $i
    * @return array
    */
    public function importValidationMessages($i)
    {
        return [
            'required' => 'The :attribute collumn is required on row ' . $i,
            'max' => 'The :attribute collumn should be under 255 characters'
        ];
    }

    /**
    * This gets called on each row when importing a product.
    *
    * @var Array $row
    * @var ChrisBraybrooke\ECommerce\Models\Import $import
    * @return array
    */
    public function importCreate($row, $import)
    {
        $meta = $this->formatImportMeta($row, $import);
        $content = $this->formatImportContent($meta);

        $variant = $row['variant_id'] ?? null;

        $collection_types = $this->formatImportCollectionTypes($row, $import);

        $live_at = null;
        if (isset($row['live_at']) && !empty($row['live_at'])) {
            $live_at = Carbon::createFromFormat('d/m/Y', $row['live_at'])->toDateTimeString();
        } elseif (isset($row['live']) && $row['live']) {
            $live_at = Carbon::now()->toDateTimeString();
        }

        if (!$variant && isset($row['variant_name'])) {
            $lookup_array = [
                'name' => $row['variant_name']
            ];

            if (isset($row['variant_slug']) && !empty($row['variant_slug'])) {
                $lookup_array['slug'] = $row['variant_slug'];
            }

            $variant_meta = $this->formatImportMeta($row, $import, 'variant_meta_');
            $variant_content = $this->formatImportContent($variant_meta);

            if (!empty($variant_meta)) {
                $lookup_array['meta'] = json_encode($variant_meta);
            }

            $parent = Product::firstOrCreate($lookup_array, [
                'name' => $row['variant_name'],
                'live_at' => $live_at,
                'price' => $row['variant_price'] ?? null,
                'slug' => $row['variant_slug'] ?? $row['variant_name'],
                'list_in_shop' => $row['variant_list_in_shop'] ?? false,
                'width' => $row['variant_width'] ?? null,
                'height' => $row['variant_height'] ?? null,
                'depth' => $row['variant_depth'] ?? null,
                'featured' => $row['variant_featured'] ?? false,
                'meta' => $variant_meta,
            ]);

            if ($parent->wasRecentlyCreated) {
                $parent->content()->createMany($variant_content);
                $parent->update(['meta' => $variant_meta]);
                $parent->collectionTypes()->sync($collection_types);
                $import->models('product')->attach($parent->id);
                $this->syncMediaFromName(($row['variant_img'] ?? ''), $parent);
            }

            $variant = $parent->id;
        }

        $product = self::create([
            'name' => $row['name'],
            'variant_id' => $variant,
            'live_at' => $live_at,
            'price' => $row['price'] ?? null,
            'slug' => $row['slug'] ?? $row['name'],
            'list_in_shop' => $row['list_in_shop'] ?? false,
            'width' => $row['width'] ?? null,
            'height' => $row['height'] ?? null,
            'depth' => $row['depth'] ?? null,
            'featured' => $row['featured'] ?? false,
            'sku' => $row['sku'] ?? null,
            'meta' => $meta,
        ]);

        $this->syncMediaFromName(($row['img'] ?? ''), $product);
        $product->content()->createMany($content);
        $import->models('product')->attach($product->id);
        $product->collectionTypes()->sync($collection_types);

        return $product;
    }

    /**
    * Sync media just by using a name.
    *
    * @var String $name
    * @var String $product
    * @var String $location
    * @var String $field
    * @return Bool
    */
    public function syncMediaFromName($name, $product, $location = 'main_img', $field = 'file_name')
    {
        if ($name) {
            $media = Media::where($field, $name)->first();
            if ($media) {
                $product->syncMedia([
                    $location => $media,
                ]);
                return true;
            }
        }
        return false;
    }

    /**
    * Create the collection types on the import.
    *
    * @var Array $row
    * @var ChrisBraybrooke\ECommerce\Models\Import $import
    * @var String $starts_with
    * @return array
    */
    public function formatImportCollectionTypes($row, $import, $starts_with = 'collection_')
    {
        $types = [];
        foreach ($row as $key => $field) {
            if (starts_with($key, $starts_with) && !empty($field)) {
                $new_key = str_replace_first($starts_with, '', $key);
                $collection_name = ucwords(str_replace('_', ' ', $new_key));

                $collection = Collection::firstOrCreate(['name' => $collection_name], [
                    'name' => $collection_name,
                    'individual_name' => null,
                    'slug' => $collection_name,
                    'live_at' => Carbon::now()->toDateTimeString(),
                ]);
                if ($collection->wasRecentlyCreated) {
                    $import->models('collection')->attach($collection->id);
                }

                $collection_types = explode(',', $field);
                foreach ($collection_types as $key => $type_name) {
                    $type = $collection->types()->firstOrCreate(['name' => $type_name], [
                        'name' => ucwords(str_replace('_', ' ', $type_name)),
                        'individual_name' => null,
                        'slug' => str_replace('_', ' ', $type_name),
                        'live_at' => Carbon::now()->toDateTimeString(),
                    ]);
                    if ($type->wasRecentlyCreated) {
                        $import->models('collection_type')->attach($type->id);
                    }
                    $types[] = $type->id;
                }
            }
        }
        return $types;
    }
}

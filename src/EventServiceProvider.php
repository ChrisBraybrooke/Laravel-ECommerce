<?php

namespace ChrisBraybrooke\ECommerce;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'ChrisBraybrooke\ECommerce\Events\CollectionTypeCreated' => [
            'ChrisBraybrooke\ECommerce\Listeners\CreateContentOnCreation',
            'ChrisBraybrooke\ECommerce\Listeners\CreateMetaOnCreation',
        ],
        'ChrisBraybrooke\ECommerce\Events\PageCreated' => [
            'ChrisBraybrooke\ECommerce\Listeners\CreateContentOnCreation',
            'ChrisBraybrooke\ECommerce\Listeners\CreateMetaOnCreation',
        ],
        'ChrisBraybrooke\ECommerce\Events\ProductCreated' => [
            'ChrisBraybrooke\ECommerce\Listeners\CreateContentOnCreation',
            'ChrisBraybrooke\ECommerce\Listeners\CreateMetaOnCreation',
        ],
        'ChrisBraybrooke\ECommerce\Events\OrderCreated' => [
            'ChrisBraybrooke\ECommerce\Listeners\ProcessOrderCreation',
        ],
        'ChrisBraybrooke\ECommerce\Events\OrderUpdated' => [
            'ChrisBraybrooke\ECommerce\Listeners\ProcessOrderUpdate',
        ],
        'ChrisBraybrooke\ECommerce\Events\ImportCreated' => [
            'ChrisBraybrooke\ECommerce\Listeners\ProcessImportOnCreation',
        ],
        'ChrisBraybrooke\ECommerce\Events\ImportUpdated' => [

        ],
        'ChrisBraybrooke\ECommerce\Events\ContactFormCreated' => [
            'ChrisBraybrooke\ECommerce\Listeners\ProcessContactForm',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
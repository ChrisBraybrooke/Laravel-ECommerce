<?php

namespace ChrisBraybrooke\ECommerce\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CreateContentOnCreation
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        if (isset($event->model->defaultContent) && !empty($event->model->defaultContent)) {
            $event->model->content()->createMany($event->model->defaultContent);
        }
    }
}
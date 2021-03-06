<?php

namespace ChrisBraybrooke\ECommerce\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use ChrisBraybrooke\ECommerce\Jobs\CreateOrderInvoicePdf;
use ChrisBraybrooke\ECommerce\Jobs\SendOrderNotification;
use Order;

class ProcessOrderUpdate implements ShouldQueue
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
        $order = $event->model;

        if ($order->status === Order::$statuses['STATUS_AWAITING_PAYMENT']) {
            if ($order->isFullyPaid()) {
                $order->updateStatus('STATUS_PROCESSING');
            }
        }
    }
}

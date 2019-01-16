<?php

namespace ChrisBraybrooke\ECommerce\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use ChrisBraybrooke\ECommerce\Jobs\CreateOrderInvoicePdf;
use ChrisBraybrooke\ECommerce\Jobs\SendOrderNotification;
use ChrisBraybrooke\ECommerce\Notifications\SendOrderCompleteNotification;
use Notification;
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
        if (isset($event->model->status) && $event->model->getOriginal('status') !== Order::$statuses['STATUS_PROCESSING'] && $event->model->status === Order::$statuses['STATUS_PROCESSING']) {
            CreateOrderInvoicePdf::withChain([
                new SendOrderNotification($event->model),
            ])->dispatch($event->model);

            $event->model->update(['invoice_at' => now()->toDateTimeString()]);
        }

        if (isset($event->model->status) && $event->model->getOriginal('status') === Order::$statuses['STATUS_AWAITING_PAYMENT']) {
            if ($event->model->payment_amount == $event->model->cart['totals']['Total']) {
                $event->model->update(['status' => Order::$statuses['STATUS_PROCESSING']]);
            }
        }

        if (isset($event->model->status) && $event->model->getOriginal('status') !== Order::$statuses['STATUS_COMPLETED'] && $event->model->status === Order::$statuses['STATUS_COMPLETED']) {
            Notification::route('mail', $event->model->user_email)
            ->notify(new SendOrderCompleteNotification($event->model));

            activity()
               ->performedOn($event->model)
               ->log("Order complete email sent to {$event->model->user_email}");
        }
    }
}

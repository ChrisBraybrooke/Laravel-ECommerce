<?php
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Pages
Route::apiResource('pages', 'ApiPagesController');
Route::post('pages/bulk', 'ApiPagesController@bulkUpdate');

// Collections
Route::apiResource('collections', 'ApiCollectionsController');
Route::post('collections/bulk', 'ApiCollectionsController@bulkUpdate');

// Collection Types
Route::apiResource('collection-types', 'ApiTypesController');
Route::apiResource('collections/{collection}/types', 'ApiCollectionTypesController');
Route::post('collections/{collection}/types/bulk', 'ApiCollectionTypesController@bulkUpdate');

// Products
Route::apiResource('products', 'ApiProductsController');
Route::get('products/{product}/variants', 'ApiProductsController@variants');
Route::post('products/bulk', 'ApiProductsController@bulkUpdate');

// Media
Route::delete('media/{media}', 'ApiMediaController@delete');
Route::post('media/upload', 'ApiMediaController@upload');

// Gallery
Route::apiResource('galleries', 'ApiGalleriesController');
Route::get('galleries/{gallery}/media', 'ApiGalleriesController@media');

// Site Settings
Route::get('settings', 'ApiSettingsController@index');
Route::post('settings', 'ApiSettingsController@hydrate');
Route::put('settings', 'ApiSettingsController@update');
Route::delete('settings', 'ApiSettingsController@destroy');

// Users
Route::apiResource('users', 'ApiUsersController');
Route::get('user', 'ApiUsersController@authUser');

// Forms
Route::apiResource('forms', 'ApiFormsController');

// Menus
Route::apiResource('menus', 'ApiMenusController');

// Links
Route::get('links', 'ApiLinksController@index');

// Orders
Route::apiResource('orders', 'ApiOrdersController');
Route::put('orders/{order}/payment', 'ApiOrdersController@payment');
Route::post('orders/{order}/delivery', 'ApiOrdersController@delivery');
Route::post('orders/{order}/invoice', 'ApiOrdersController@invoice');

// Deliveries
Route::put('deliveries/{delivery}', 'ApiDeliveriesController@update');

// Import / Export
Route::post('imports', 'ApiImportsController@import');
Route::get('imports', 'ApiImportsController@index');

Route::post('exports', 'ApiExportsController@export');

// Payments
Route::post('payments', 'ApiPaymentsController@store');
Route::put('payments/{payment}', 'ApiPaymentsController@update');

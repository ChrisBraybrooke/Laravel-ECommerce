<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Admin</title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ mix('css/normalize.css', 'vendor/ecommerce') }}">
    <link rel="stylesheet" href="{{ mix('css/admin.css', 'vendor/ecommerce') }}">

  </head>
  <a class="admin_banner" href="/" style="background: @ShopData('theme_color')">Website</a>
  <body>
    <div id="app"></div>


    @ShopDataScript

    <script src="{{ mix('js/admin.js', 'vendor/ecommerce') }}"></script>
  </body>
</html>
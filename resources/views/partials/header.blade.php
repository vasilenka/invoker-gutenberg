<header class="banner">
  <div class="container">
    <a style="color: #FFFFFF" class="brand" href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a>
    <nav class="nav-primary" style="color: #FFFFFF">
      @if (has_nav_menu('primary_navigation'))
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
      @endif
    </nav>
  </div>
</header>
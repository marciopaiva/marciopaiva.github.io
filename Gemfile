source "https://rubygems.org"

gem "jekyll", "~> 4.4"

group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-github-metadata"
  gem "jekyll-paginate"
  gem "jemoji"
end

gem "webrick", "~> 1.7"
gem "wdm", ">= 0.1.0" if Gem.win_platform?

# Windows and JRuby do not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

---
layout: default
title: Home
icon: home
weight: 0
permalink: /
---

<header class="hero">
  <div class="container">
    <h1 class="hero-title">{{ site.author.bio }}</h1>
    <p class="hero-description mt-2">{{ site.description }}</p>
  </div>
</header>

<div class="row row-cards flex-row">
  <div class="col-lg-6">
    {% include card/profile.html %}
  </div>
  <div class="col-lg-6">
    {% assign featured = site.projects | where: "name", "Runic SSH" | first %}
    {% if featured %}
      <article class="card h-100">
        <div class="card-stamp">
          <div class="card-stamp-icon bg-primary">
            {% include ui/icon.html icon="brand-github" %}
          </div>
        </div>
        <div class="card-body p-3 text-center">
          <div class="rounded-circle shadow-inset p-1">
            <img
              alt="{{ featured.name | escape }}"
              loading="lazy"
              width="150"
              height="150"
              decoding="async"
              class="rounded-circle shadow-inset"
              style="color: transparent"
              src="https://raw.githubusercontent.com/marciopaiva/runic-ssh/main/src-tauri/icons/256x256.png"
            />
          </div>
          <h3 class="m-2 text-primary">{{ featured.name | escape }}</h3>
          <div class="m-2 text-secondary">{{ featured.description }}</div>
        </div>
        <div class="card-footer text-center">
          <div class="avatar avatar-lg bg-primary-lt m-1" aria-hidden="false">
            <a href="{{ featured.external_url }}" target="_blank" class="link-primary" rel="noopener noreferrer">
              {% include ui/icon.html icon="brand-github" %}
            </a>
          </div>
        </div>
      </article>
    {% endif %}
  </div>
</div>

<div class="hr-text mt-4">Veja também</div>

<div class="row row-cards justify-content-center">
  <!-- Card 1: insights4you-jekyll-theme -->
  <div class="col-md-6 col-lg-4">
    <a href="https://github.com/marciopaiva/insights4you-jekyll-theme" target="_blank" rel="noopener" class="card card-sm h-100 text-decoration-none">
      <div class="card-body text-center">
        <div class="avatar avatar-lg bg-primary-lt mb-3" aria-hidden="true">
          {% include ui/icon.html icon="template" color="currentColor" size="48" %}
        </div>
        <h3 class="card-title">insights4you-jekyll-theme</h3>
        <p class="text-muted">
          O tema Jekyll que dá vida a este site, baseado em Bootstrap 5, com
          dark/light mode, blog, projetos e comentários via Giscus.
        </p>
      </div>
    </a>
  </div>

  <!-- Card 2: ViperTrade -->
  <div class="col-md-6 col-lg-4">
    <a href="https://github.com/marciopaiva/vipertrade" target="_blank" rel="noopener" class="card card-sm h-100 text-decoration-none">
      <div class="card-body text-center">
        <div class="avatar avatar-lg bg-primary-lt mb-3" aria-hidden="true">
          {% include ui/icon.html icon="chart-candle" color="currentColor" size="48" %}
        </div>
        <h3 class="card-title">ViperTrade</h3>
        <p class="text-muted">
          Lead Trader Bot para Bybit Copy Trading Classic.
        </p>
      </div>
    </a>
  </div>

  <!-- Card 3: Tupalang -->
  <div class="col-md-6 col-lg-4">
    <a href="https://github.com/marciopaiva/tupalang" target="_blank" rel="noopener" class="card card-sm h-100 text-decoration-none">
      <div class="card-body text-center">
        <div class="avatar avatar-lg bg-primary-lt mb-3" aria-hidden="true">
          {% include ui/icon.html icon="language" color="currentColor" size="48" %}
        </div>
        <h3 class="card-title">Tupalang</h3>
        <p class="text-muted">
          Linguagem brasileira para sistemas críticos e IA evolutiva.
        </p>
      </div>
    </a>
  </div>
</div>

{% if site.posts and site.posts.size > 0 %}
<div class="hr-text mt-4">Últimos posts</div>

<div class="row row-cards">
  {% for post in site.posts limit: 3 %}
    {% assign post_color = post.color | default: "primary" %}
    <div class="col-md-4">
      <a href="{{ post.url | relative_url }}" class="card h-100 text-decoration-none">
        <div class="card-status-top bg-{{ post_color }}"></div>
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="text-muted small">{{ post.date | date: "%b %d, %Y" }}</span>
            {% if post.tags and post.tags.size > 0 %}
              <span class="badge bg-{{ post_color }}-lt">{{ post.tags | first }}</span>
            {% endif %}
          </div>
          <h3 class="card-title mb-2">{{ post.title | escape }}</h3>
          {% if post.description %}
            <p class="text-muted">{{ post.description | strip_html | truncate: 110 }}</p>
          {% endif %}
        </div>
        <div class="card-footer">
          <span class="text-{{ post_color }} d-inline-flex align-items-center">
            Ler mais {% include ui/icon.html icon="arrow-right" size="sm" inline=true %}
          </span>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
{% endif %}

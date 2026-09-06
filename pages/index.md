---
layout: default
title: Home
icon: home
weight: 0
permalink: /
---

{% include card/profile.html %}

<div class="row row-cards mt-4">
  <div class="col-md-6">
    <div class="card h-100">
      <div class="card-body">
        <h3 class="card-title">Blog</h3>
        <p class="text-muted">Artigos sobre arquitetura de soluções, cloud, DevOps e IA.</p>
      </div>
      <div class="card-footer">
        {% include ui/button.html href="/blog/" block=true color="text-primary" class="bg-primary-lt" text="Ver posts" icon="arrow-right" %}
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card h-100">
      <div class="card-body">
        <h3 class="card-title">Projetos</h3>
        <p class="text-muted">Repositórios em destaque e projetos pessoais.</p>
      </div>
      <div class="card-footer">
        {% include ui/button.html href="/projects/" block=true color="text-primary" class="bg-primary-lt" text="Ver projetos" icon="arrow-right" %}
      </div>
    </div>
  </div>
</div>

{% if site.posts and site.posts.size > 0 %}
<h2 class="mt-4 mb-3">Últimos posts</h2>
<div class="row row-cards">
  {% for post in site.posts limit: 3 %}
    <div class="col-md-4">
      <a href="{{ post.url | relative_url }}" class="card h-100 text-decoration-none">
        <div class="card-body">
          <div class="text-muted mb-1">{{ post.date | date: "%b %d, %Y" }}</div>
          <h3 class="card-title">{{ post.title | escape }}</h3>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
{% endif %}

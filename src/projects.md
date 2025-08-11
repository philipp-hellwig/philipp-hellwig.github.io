---
layout: base.njk
title: Projects
---

### Projects
---
I am currently still building this part of the website.
<ul class="project-list">
{%- for project in collections.project -%}
  <li class="project-card" background-image="projects/default-background.png">
    <div class="project-info">
      <h3>
        <a class="underline-hover" href={{ project.url }}> {{ project.data.title }}</a>
      </h3>
      {%- if project.data.topics %}
        <div class="project-tags">
          {%- for topic in project.data.topics %}
            <span class="project-tag">{{ topic }}</span>
          {%- endfor %}
        </div>
      {%- endif %}
    </div>
  </li>
{%- endfor -%}
</ul>
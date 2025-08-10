---
layout: base.njk
title: Projects
---

### Projects
---
<ul>
{%- for project in collections.project -%}
  <li class="project-card">
    <img class="project-img" src="{{ project.url }}image.png" alt="{{ project.data.title }} image" />
    <div class="project-info">
      <h4>
        <a href={{ project.url }}> {{ project.data.title }}</a>
      </h4>
      {%- if project.data.topics %}
        <div class="project-tags">
          {%- for topic in project.data.topics %}
            <span class="project-tag">{{ topic }}</span>
          {%- endfor %}
        </div>
      {%- endif %}
    </div>
  </li>
  <hr>
{%- endfor -%}
</ul>
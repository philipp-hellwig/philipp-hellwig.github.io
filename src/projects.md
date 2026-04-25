---
layout: base.njk
title: Projects
---

## Projects
---

### Game Development

Since 2025, I occasionally create small video games in the game engine [Godot](https://godotengine.org/). I think Godot is a nice and accessible way to get started with game development as the UI is intuitive and the syntax of the main programming language (GDScript) is quite similar to Python. Speaking of, another awesome feature is that there are plugins to other programming languages such as Python, making it easy to integrate ML models.

#### Santorini Clone
I have built an online multiplayer clone of the game [Santorini](https://en.wikipedia.org/wiki/Santorini_(game)), a turn-based strategy game.
It was quite challenging to make the multiplayer work but I have also found it rewarding when it finally came together:

<div class="project-media-panel">
  <img src="/projects/santorini/santorini_placement.png" alt="Placement phase">
  <img src="/projects/santorini/santorini_building.png" alt="Building phase">
  <img src="/projects/santorini/santorini_winning.png" alt="Winning condition">
</div>
<figcaption> A preview of the Santorini clone. Players first place two workers each (left), and then compete with each other to climb upwards, taking turns moving their workers and building (center). A player wins when they reach the third level of a building (right).</figcaption>

In the future, I would like to extend this to create interactive experimental environments that can tell us something new about how we and/or machines learn and interact.

#### Boids
During a course on Complexity Science during my Master's, I have learned about [self-organization in biology](https://santafeinstitute.github.io/ComplexPsych/ch5n.html#sec-Biology). One stunning example is flocking, which occurs in birds and fish. Below is a 2D implementation I wrote of [boids](https://en.wikipedia.org/wiki/Boids) (which model flocking behaviour):

<img src="/projects/boids/boids.gif" alt="short clip of boids aligning with each other." />

<!-- I am currently still building this part of the website.
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
</ul> -->
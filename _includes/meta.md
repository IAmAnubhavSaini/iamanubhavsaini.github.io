{{page.date | date: "%B %e, %Y"}} • 
{% for tag in page.tags %}
<a href="/tags/{{tag}}">[{{ tag }}]</a> • 
{% endfor %}
{% if page.author %} {{ page.author }}{% endif %}
<details>
<summary>{{ data.currentGroupName | upperfirst }}</summary>
{% for type, items in data.currentGroup %}
* {{ type | upperfirst }}s{% for item in items %}{% if type == 'variable' && item.context.name|is_public %}
  * `${{ item.context.name }}`{% endif %}{% if type == 'function' && item.context.name|is_public %}
  * `{{ item.context.name }}()`{% endif %}{% if type == 'mixin' && item.context.name|is_public %}
  * `@include {{ item.context.name }}()`{% endif %}{% endfor %}{% endfor %}
</details>

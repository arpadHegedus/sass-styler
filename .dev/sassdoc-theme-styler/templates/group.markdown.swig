# {{ data.currentGroupName | upperfirst }}
{% for type, items in data.currentGroup %}
## {{ type | upperfirst }}s
{% if type == 'variable'%}
<table>
<thead>
<tr>
    <th>name</th>
    <th>description</th>
    <th>type</th>
</tr>
</thead>
<tbody>
{% endif %}
{% for item in items %}

{% if type == 'variable' && item.context.name|is_public %}
<tr><th><code>${{ item.context.name }}</code></th><td>{{ item.description }}</td><td>{{ item.type }}</td></tr>
{% endif %}
{% if type == 'function' && item.context.name|is_public %}
### `{{ item.context.name }}()`
{% endif %}
{% if type == 'mixin' && item.context.name|is_public %}
### `@include {{ item.context.name }}()`
{% endif %}
{% endfor %}
{% if type == 'variable'%}
</tbody>
</table>
{% endif %}
{% endfor %}

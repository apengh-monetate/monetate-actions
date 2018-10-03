# POSSIBLE COMBINATIONS
# -------------------------------------
# 2 across
# 3 across
# 4 across


# resultSet / rowCount

# EXAMPLES
# -------------------------------------
# 2 x 4; 7 products
# 7 / 2 = 3.5 -- floor(3) x 2 = 6



# 2 x 4; 8 products
# 8 / 2 = 4 -- floor(4) x 2 = 8



# 3 x 3; 8 products
# 8 / 3 = 2.67 -- floor(2) x 3 = 6


# 3 x 3; 7 products
# 7 / 3 = 2.33 -- floor(2) x 3 = 6


# a = rowCount
# b = resultSet

# floor( a / b ) x b



{% for product in recommended_products[:8] %}

{% endfor %}

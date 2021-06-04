-- Get all products with profits that are more than the profit of a gray hoodie and prices that are less than or equal to 70 USD.
SELECT name, price-cost
FROM items
WHERE price <= 70 AND price-cost > (
  SELECT price - cost
  FROM items
  WHERE name = 'grey hoodie'
);
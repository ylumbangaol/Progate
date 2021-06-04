-- get all products with a price higher than the price of "grey hoodie"
SELECT name, price
FROM items
WHERE price > (
  SELECT price
  FROM items
  WHERE name = 'grey hoodie'
);
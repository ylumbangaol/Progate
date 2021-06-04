-- get the name and profit of the products the top 5 highest profit values
SELECT name, price - cost
FROM items
ORDER BY price - cost DESC LIMIT 5
;
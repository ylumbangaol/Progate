-- group by category, then get the sum of the price column
-- and the category column for each group

SELECT SUM(price), category
FROM purchases
GROUP BY category
;
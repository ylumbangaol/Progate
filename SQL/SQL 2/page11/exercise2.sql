-- make a group for each character, then get the sum of the price column and the character_name column
-- but, aggregate only where the category column is "other"

SELECT SUM(price), character_name
FROM purchases
WHERE category = 'other'
GROUP BY character_name
;
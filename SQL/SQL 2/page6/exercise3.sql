-- for rows in which the character_name is "Ken the Ninja"
-- get the highest price of all the values in the price column

SELECT MAX(price)
FROM purchases
WHERE character_name = 'Ken the Ninja'
;
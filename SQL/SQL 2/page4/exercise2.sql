-- get the average of the price column where the character_name is "Ken the Ninja" 

SELECT AVG(price)
FROM purchases
WHERE character_name = 'Ken the Ninja'
;
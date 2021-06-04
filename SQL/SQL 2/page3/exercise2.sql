-- get the sum total of the price column where the character_name is "Ken the Ninja"

SELECT SUM (price)
FROM purchases
WHERE character_name = 'Ken the Ninja'
;
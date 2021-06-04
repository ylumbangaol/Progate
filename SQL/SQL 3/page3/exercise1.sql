-- Use AS to name the column "180 cm or taller"
SELECT name AS "180 cm or taller"
FROM players
WHERE height >= 180
;
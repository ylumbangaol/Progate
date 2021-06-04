SELECT name AS 'player name', height AS 'height'
FROM players
WHERE height > (
  SELECT AVG (height)
  FROM players
)
;
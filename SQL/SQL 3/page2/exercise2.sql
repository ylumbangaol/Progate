SELECT name,goals
FROM players
WHERE goals > (
  -- Write an SQL statement below to get Will's score
  SELECT AVG(goals)
  FROM players

)
;
SELECT countries.name AS 'country name', AVG (goals) AS 'average score'
FROM players
JOIN countries
ON players.country_id = countries.id
GROUP BY countries.name
;
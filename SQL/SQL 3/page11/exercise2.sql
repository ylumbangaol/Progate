SELECT *
FROM players
JOIN countries
ON players.country_id = countries.id
WHERE height >= 180 AND countries.name ='Japan'
;
SELECT players.name AS 'player name', teams.name AS 'team (last year)'
FROM players
LEFT JOIN teams 
ON players.previous_team_id = teams.id
;
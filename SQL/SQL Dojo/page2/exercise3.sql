-- get the number of users by age and the ages of users
SELECT age, COUNT(age)
FROM users
GROUP BY age
;
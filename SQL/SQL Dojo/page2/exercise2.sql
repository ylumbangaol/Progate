-- Get values from every column for users who are both male and younger than 20 years old.
SELECT *
FROM users
WHERE age < 20 and gender = 0

-- after "FROM purchases" add code to get rows where the "price" column is not NULL

SELECT *
FROM purchases
WHERE price is not NULL;
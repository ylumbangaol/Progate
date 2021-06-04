-- get the name and number of items for users who have purchased 10 items or more
SELECT users.id, users.name, COUNT(sales_records.item_id) AS 'number'
FROM sales_records
JOIN users
ON sales_records.user_id = users.id
GROUP BY sales_records.user_id
HAVING COUNT(sales_records.item_id) >= 10
-- get the user id and name of unique users who purchased "sandals"
SELECT users.id, users.name
FROM sales_records
JOIN users
ON sales_records.user_id = users.id
WHERE sales_records.item_id = (
  SELECT id
  FROM items
  WHERE name = 'sandals'
)
GROUP BY sales_records.user_id
-- get the id and number of units sold of the top 5 most purchased items
SELECT item_id,COUNT(item_id)
FROM sales_records
GROUP BY item_id
ORDER BY COUNT(item_id) DESC LIMIT 5;
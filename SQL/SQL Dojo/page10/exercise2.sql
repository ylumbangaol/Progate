-- get the specified data for the top 5 products with the highest sales
SELECT items.id, items.name, items.price * COUNT(sales_records.item_id) AS 'sales total'
FROM sales_records
JOIN items
ON  sales_records.item_id = items.id
GROUP BY sales_records.item_id
ORDER BY items.price * COUNT(sales_records.item_id) DESC
LIMIT 5;
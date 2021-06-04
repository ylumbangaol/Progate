-- get all rows with a higher sales total than the item "grey hoodie"
SELECT items.id, items.name, items.price * COUNT(sales_records.item_id) AS 'sales total'
FROM sales_records
JOIN items
ON  sales_records.item_id = items.id
GROUP BY sales_records.item_id
HAVING items.price * COUNT(sales_records.item_id) >(
  SELECT items.price * COUNT(sales_records.item_id) 
  FROM sales_records
  JOIN items
  ON  sales_records.item_id = items.id 
  WHERE name = 'grey hoodie'
)



;
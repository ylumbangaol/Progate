-- get the number of sales for each item by item id
SELECT item_id,COUNT(item_id)
FROM sales_records
GROUP BY item_id;
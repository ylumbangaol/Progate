-- get the total sales and total profit for the entire site
SELECT SUM(items.price) AS 'total sales', SUM(items.price - items.cost) AS 'total profit'
FROM sales_records
JOIN items
ON sales_records.item_id = items.id

;
-- within the students table, update the name to Jordan and the course to HTML for the record that has an id of 6
UPDATE students
SET name = 'Jordan', course = 'HTML'
WHERE id = 6;

-- do not delete the following query
SELECT * FROM students WHERE id=6;

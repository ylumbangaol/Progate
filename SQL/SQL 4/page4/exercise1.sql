-- add a new record to the students table, where the name is Katy and the course is HTML
INSERT INTO students (name, course)
VALUES ('Katy', 'HTML');

-- within the students table, update the name to Juliet and the course to Ruby, for the record that has the id 6
UPDATE students
SET name = 'Juliet', course = 'Ruby'
WHERE id = 6;

-- within the students table, delete the record with the id 2
DELETE FROM students
WHERE id = 2;

-- do not delete the following query
SELECT * FROM students;

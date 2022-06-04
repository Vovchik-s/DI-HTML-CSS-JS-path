-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

CREATE DATABASE dvdrental
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_Israel.1252'
    LC_CTYPE = 'English_Israel.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
-- 	You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- Find out how many films there are for each rating.
SELECT rating, COUNT(rating) FROM public.film GROUP BY rating;

-- Get a list of all the movies that have a rating of G or PG-13.
SELECT * FROM public.film WHERE rating = 'G' OR rating = 'PG-13';


-- Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT * FROM public.film WHERE (rating = 'G' OR rating = 'PG-13') AND length < 120 AND rental_rate < 3  ORDER BY rating ASC

-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
UPDATE customer SET first_name = 'Alfred', last_name= 'Schmidt' WHERE customer_id = 1;

SELECT * FROM public.customer WHERE customer_id = 1;


		-- Exercise 2

-- Update
-- ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to 02/11/1998.
-- Change the last_name of David from ‘Grez’ to ‘Guez’.
UPDATE students SET last_name= 'Guez' WHERE first_name = 'David'
UPDATE students SET birth_date = '02-11-1998' WHERE last_name = 'Benichou'


SELECT * FROM public.students

-- Delete
-- Delete the student named ‘Lea Benichou’ from the table.
DELETE FROM public.students WHERE first_name='Lea';


-- Count
-- Count how many students are in the table.
-- Count how many students were born after 1/01/2000.
SELECT count(*) FROM public.students;
SELECT count(*) FROM public.students WHERE birth_date > '01-01-2000';


-- Insert / Alter
-- Add a column to the student table called math_grade.
ALTER TABLE public.students ADD math_grade INT;


-- Add 80 to the student which id is 1.
UPDATE public.students SET math_grade= 80 WHERE id = 1

-- Add 90 to the students which have ids of 2 or 4.
UPDATE public.students SET math_grade= 90 WHERE (id = 2 OR id = 4)
SELECT * FROM public.students


-- Add 40 to the student which id is 6.
UPDATE public.students SET math_grade= 40 WHERE id = 6

-- Count how many students have a grade bigger than 83

SELECT COUNT(*) FROM public.students WHERE math_grade > 83;

-- Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.
INSERT INTO students VALUES(7,'Simpson','Omer','01-01-2000', 70 );


-- Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, although he received 2 different grades because he retook the math exam.


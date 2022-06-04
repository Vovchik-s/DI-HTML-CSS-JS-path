-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_Israel.1252'
    LC_CTYPE = 'English_Israel.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	




	-- All items, ordered by price (lowest to highest).
SELECT * FROM public.items ORDER BY price ASC

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM public.items WHERE price >= 80 ORDER BY price DESC

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name,last_name FROM public.customers ORDER BY first_name ASC LIMIT 3;

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM public.customers ORDER BY last_name DESC ;



------------------------------------ TASK 2 -----------------------

-- 	In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM public.customer

-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT first_name "First Name",  last_name "Last Name" FROM customer;

-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer”
-- table (there should be no duplicates).
SELECT DISTINCT create_date FROM public.customer  --To remove duplicate rows from a result set, you use the DISTINCT

-- Write a query to get all the customer details from the customer table, it should be displayed in descending order
-- by their first name.
SELECT DISTINCT * FROM public.customer ORDER BY first_name DESC

-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according
-- to their rental rate.
SELECT film_id,title,description,release_year,rental_rate FROM public.film ORDER BY rental_rate ASC


-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details
-- can be found in the “address” table.
SELECT address,phone FROM public.address WHERE district = 'Texas'


-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * FROM public.film WHERE film_id = 15 OR film_id = 150



-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID,
-- title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id,title,description,length,rental_rate FROM public.film WHERE title LIKE '%American%' --american psycho



-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title,
-- description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id,title,description,length,rental_rate FROM public.film WHERE title LIKE '%Am%';

-- Write a query which will find the 10 cheapest movies.
SELECT * FROM public.film WHERE rental_rate = (SELECT MIN(rental_rate) from film) LIMIT 10;


-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT * FROM public.film WHERE rental_rate = (SELECT MIN(rental_rate) from film) ORDER BY rental_rate ASC LIMIT 10;



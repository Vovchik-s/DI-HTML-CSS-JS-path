-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;


-- using public;

CREATE TABLE public.items (
    item_id SERIAL PRIMARY KEY,
	item_name VARCHAR (50) NOT NULL,
	price SMALLINT NOT NULL
)

-- DROP TABLE items

INSERT INTO public.items(item_id, item_name, price)
VALUES(1,'Small Desk ',100),
      (2,'Large Desk ',300),
       (3,'Fan',80);
	   
	   
	   
CREATE TABLE public.customers  (
    customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL
)

INSERT INTO public.customers(customer_id, first_name, last_name)
VALUES(1,'Greg','Jones'),
      (2,'Sandra ','Jones'),
       (3,'Scott ','Scott '),
	   (4,'Trevor ','Green'),
	   (5,'Melanie ','Johnson')
	   
-- 	   1
SELECT * FROM public.items

-- 	   2
SELECT * FROM public.items WHERE price > 80

-- 	   3
SELECT * FROM public.items WHERE price < 300

-- 	   4
SELECT * FROM public.customers WHERE last_name = 'Smith' --NULL

-- 	   5
SELECT * FROM public.customers WHERE last_name = 'Jones'

-- 	   6
SELECT * FROM public.customers WHERE first_name != 'Scott'





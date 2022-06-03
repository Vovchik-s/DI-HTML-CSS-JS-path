-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
	last_name VARCHAR (50) NOT NULL,
	first_name VARCHAR (100) NOT NULL,
	birth_date DATE NOT NULL
)

INSERT INTO public.students (first_name,last_name,birth_date)
VALUES('Marc','Benichou','02/11/1998'),
('Yoan','Cohen','03/12/2010'),
('Leah','Benichou','27/07/1987'),
('Amelia','Dux','07/04/1996'),
('David','Grez','14/06/2003'),
('Omer','Simpson','03/10/1980')


-- 	   1
SELECT * FROM public.students

-- 	   2
SELECT first_name,last_name FROM public.students

-- 	   3 id is equal to 2
SELECT first_name,last_name FROM public.students WHERE id = 2;

-- 	last_name is Benichou AND first_name is Marc
SELECT first_name,last_name FROM public.students WHERE (last_name = 'Benichou') AND first_name = 'Marc';

-- 	   last_names are Benichou OR first_names are Marc
SELECT * FROM public.students WHERE (last_name = 'Benichou') OR first_name = 'Marc';

-- 	   irst_names contain the letter a.
SELECT * FROM public.students WHERE first_name LIKE '%a%'
-- 	   first_names start with the letter a.
SELECT * FROM public.students WHERE first_name LIKE 'a%'

-- 	   first_names end with the letter a.
SELECT * FROM public.students WHERE first_name LIKE '%a'

--  whose second to last letter of their first_names are a
SELECT * FROM public.students WHERE first_name LIKE '_%a'

-- -- 4
SELECT first_names,last_names,birth_dates FROM public.students WHERE id IN (1,3);


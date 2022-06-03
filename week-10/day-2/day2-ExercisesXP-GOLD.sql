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



SELECT first_name,last_name, birth_date FROM public.students WHERE id < 5 ORDER BY first_name ASC;

SELECT first_name,last_name, birth_date FROM public.students WHERE birth_date = (SELECT MAX(birth_date) from students)

SELECT first_name,last_name, birth_date FROM public.students WHERE id > 2
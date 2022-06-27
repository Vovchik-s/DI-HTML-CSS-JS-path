-- Database: hackaton

-- DROP DATABASE IF EXISTS hackaton;

CREATE DATABASE hackaton
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_Israel.1252'
    LC_CTYPE = 'English_Israel.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE hackaton
    IS 'Databse for my hackaton project';
	
	
		
CREATE TABLE products(
   id SERIAL PRIMARY KEY,
   IMG TEXT,
   price INT,
   name VARCHAR(20),
   description TEXT
)



	SELECT * FROM public.products
	
	DROP TABLE products; 
	
	
	
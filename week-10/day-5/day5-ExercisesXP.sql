Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” from the employee table.
SELECT first_name "First Name",  last_name "Last Name" FROM public.employees;

Write a query to get unique departments ID from the employee table (ie. without duplicates).
SELECT DISTINCT public.department_id FROM public.employees;

Write a query to get the details of all employees from the employee table, do so in descending order by first name.
SELECT * FROM public.employees ORDER BY first_name DESC;

Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
SELECT first_name, last_name, salary, salary*.15 PF FROM public.employees;
	
	
Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
SELECT employee_id, first_name, last_name, salary FROM public.employees ORDER BY salary ASC;

Write a query to get the total sum of all salaries paid to the employees.
SELECT SUM(salary) FROM public.employees;

Write a query to get the maximum and minimum salaries paid to the employees.
SELECT MAX(salary) AS maximum, MIN(salary) AS minimum FROM public.employees;
	 
Write a query to get the average salary paid to the employees.
SELECT AVG(salary) FROM public.employees;
	 
	 
Write a query to get the number of employees working in the company.
SELECT COUNT(*) FROM public.employees;
	
Write a query to get all the first names from the employees table in upper case.
SELECT UPPER(first_name) FROM public.employees;

Write a query to get the first three characters of each first name of all the employees in the employees table.
SELECT SUBSTRING(first_name,1,3) FROM public.employees;

Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.
SELECT  CONCAT(first_name,' ', last_name) FROM public.employees;

Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.
SELECT first_name,last_name, LENGTH(first_name) + LENGTH(last_name) AS length FROM public.employees;

Write a query to check whether the first_name column of the employees table contains any numbers.
SELECT * FROM public.employees WHERE first_name ~'[0-9]';
   
Write a query to select the first ten records from a table.
SELECT * FROM public.employees LIMIT 10;




🌟 Restricting And Sorting
Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.
SELECT first_name, last_name, salary FROM employees
WHERE salary BETWEEN 10000 AND 15000;
   
Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
SELECT first_name, last_name, hire_date FROM employees WHERE hire_date LIKE '1987%';  -- DOESNT WORK ??


Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
SELECT first_name FROM employees WHERE first_name LIKE '%c%' AND first_name LIKE '%e%';

Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.
SELECT last_name, job_id, salary FROM employees
WHERE job_id NOT IN (9, 17)  -- IT`S A GOOD ONE
AND salary NOT IN (4500,10000, 15000);

Write a query to display the last names of all employees whose last name contains exactly six characters.
SELECT last_name FROM employees WHERE LENGTH(last_name) = 6;


Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.
SELECT last_name FROM employees WHERE first_name LIKE '__e%';


Write a query to display the jobs title appearing in the employees table.
SELECT jobs.job_title FROM employees
INNER JOIN jobs 
ON employees.job_id=jobs.job_id;


Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
SELECT * FROM employees 
WHERE last_name IN('JONES', 'BLAKE', 'SCOTT', 'KING', 'FORD');
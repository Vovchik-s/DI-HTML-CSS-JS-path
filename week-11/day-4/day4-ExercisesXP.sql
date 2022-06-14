-- Subqueries
-- Write a query to find the first_name, last_name and salaries of the employees who have a higher salary than the employee whose last_name is Bull.

SELECT e.first_name,e.last_name,e.salary
FROM employees WHERE employees.salary > (SELECT employees.salary AS salary FROM employees WHERE employees.last_name = 'Bull');
-- its no workers with last name Bull. Bell maybe ? 

-- Write a SQL subquery to find the first_name and last_name of the employees under a manager who works for a department based in the United States.
-- Hint : Write single-row and multiple-row subqueries
SELECT employees.first_name,employees.last_name FROM employees 
WHERE employees.manager_id IN
    (SELECT employees.employee_id FROM employees
    WHERE employees.department_id IN
    (SELECT departments.department_id
    FROM departments 
    WHERE departments.location_id IN
    (SELECT locations.location_id FROM locations
    WHERE locations.country_id = 'US')));

-- Write a SQL subquery to find the first_name and last_name of the employees who are working as managers.
SELECT employees.first_name, employees.last_name FROM employees 
WHERE employees.employee_id IN
    (SELECT employees.manager_id
    FROM employees);

-- Write a SQL subquery to find the employee(s) first_name and last_name, which salary is greater than the average salary of the employees
SELECT employees.first_name, employees.last_name, employees.salary FROM employees
WHERE employees.salary > (SELECT ROUND(AVG(employees.salary), 2) FROM employees);


-- Write a SQL subquery to find the employee(s) first_name and last_name, which salary is equal to the minimum salary of their job position.
SELECT employees.first_name, employees.last_name, employees.salary FROM employees
WHERE employees.salary = (SELECT MIN(employees.salary) FROM employees WHERE employees.job_id = 5);

-- Write a query to find the names (first_name, last_name) of the employees who are not supervisors.
SELECT employees.first_name, employees.last_name FROM employees WHERE employees.job_id != 'Supervisor';
-- is no such employee

-- Write a SQL subquery to find the employee(s) ID, first name, last name and salary of all employees whose salary is above the average salary for their departments.
SELECT employees.employee_id, employees.first_name, employees.last_name, employees.salary FROM employees
WHERE employees.salary > (SELECT ROUND(AVG(employees.salary))
FROM employees WHERE employees.department_id = employees.department_id);

-- Write a subquery to find the 5th maximum salary of all salaries
SELECT salary
FROM (SELECT DISTINCT employees.salary FROM employees ORDER BY 1 DESC
    LIMIT 5) AS x
ORDER BY 1 LIMIT 1;


-- Write a subquery to find the 4th minimum salary of all the salaries.
SELECT salary
FROM (SELECT DISTINCT employees.salary FROM employees ORDER BY 1 ASC
    LIMIT 4) AS x
ORDER BY 1 DESC LIMIT 1;

-- Write a query to list the department name and number, of all the departments in which there are no employees.
SELECT * FROM departments WHERE departments.department_id 
NOT IN (SELECT employees.department_id FROM employees);

-- Joins
-- Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments.
SELECT countries.*,
    locations.*
FROM countries 
JOIN locations ON locations.country_id = countries.country_id;

-- Write a query to make a join with the employees and departments table to find the name of the employee, including first_name and last name, department ID and name of departments.
SELECT employees.first_name,employees.last_name,
departments.department_id,
departments.department_name
FROM employees
JOIN departments ON employees.department_id = departments.department_id;

-- Write a SQL query to make a join with three tables: employees, departments and locations to find the name, including first_name and last_name, jobs, department name and ID, of the employees working in London.
SELECT employees.first_name, employees.last_name,
    employees.job_id,
    departments.department_id,
    departments.department_name,
    locations.city 
FROM employees 
JOIN departments ON employees.department_id = departments.department_id
JOIN locations ON locations.location_id = departments.location_id
WHERE locations.city = 'London';

-- Write a query to make a join with two tables to find the employee id, last_name as Employee along with their manager_id and last name as Manager.


-- Write a query to make a join with two tables employees and departments, to get the employees working in each department (retrieve the employees details, and the department name and number).

-- Write a query to make a join to find the employees who worked in a department which ID is 90 (retrieve the employee ID, job title and number of days the employee worked).


-- Write a query to make a join with three tables, departments, employees, and locations to display the department name, manager name, and city.
SELECT employees.first_name,
    departments.department_name,
    locations.city
FROM departments 
JOIN employees ON departments.department_id = employees.department_id
JOIN locations ON locations.location_id = departments.location_id;

-- Write a query to make a join with two tables, employees and jobs to display the job title and average salary of the employees.
SELECT employees.job_id,
    ROUND(AVG(employees.salary))
FROM employees GROUP BY 1;

-- Write a query to make a join with two tables, employees and departments to display department name, first_name and last_name, hire date and salary for all the managers who achieved a working experience of more than 15 years.
SELECT departments.department_name, 
    employees.first_name,
    employees.last_name,
    employees.hire_date,
    employees.salary,
    DATE_PART('year', age(now(), employees.hire_date)) AS experience
FROM departments 
JOIN employees ON (departments.department_id = employees.department_id)
WHERE DATE_PART('year',age(now(), employees.hire_date)) > 15;


-- String Function
-- Write a query to update phone_number records. If the the substring ‘124’ was found in that column, update the phone_number to ‘999’.
UPDATE employees 
SET phone_number = REPLACE(phone_number, '124', '999') 
WHERE phone_number LIKE '%124%';

-- Write a query to find the details of the employees who contain eight or more characters in their first name.
SELECT * FROM employees
WHERE LENGTH(first_name) >= 8;

-- Write a query to join in uppercase, the first letter of the first_name, with the last_name, with '@example.com‘ in the email column.
UPDATE employees
SET email = CONCAT(substring(employees.first_name, 1,1), substring(employees.last_name, 1),(email, '@example.com'))


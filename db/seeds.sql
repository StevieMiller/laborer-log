USE employee_db;

INSERT INTO departments (dept_name)
VALUES
('Human Resources'),
('Network'),
('Systems'),
('Digital Media'),
('IT');

INSERT INTO roles (title, salary, dept_id)
VALUES
('Director of Technology', 80000, 1),
('Sr. Network Engineer', 70000, 2),
('Jr. Network Engineer', 60000, 2),
('Sr. Systems Engineer', 70000, 3),
('Jr. Systems Engineer', 60000, 3),
('Sr. Digital Media Engineer', 70000, 4),
('Jr. Digital Media Engineer', 60000, 4),
('Technical Support Supervisor', 70000, 5),
('Technical Specialist', 50000, 5),
('Information Technician', 40000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Hermione', 'Granger', 1, null),
('Harry', 'Potter', 2, 1),
('Ron', 'Weasley', 3, 2),
('Ginny', 'Weasley', 4, 1),
('Draco', 'Malfoy', 5, 4),
('Luna', 'Lovegood', 6, 1),
('Neville', 'Longbottom', 7, 6),
('Dudley', 'Dursley', 8, 1),
('Rita', 'Skeeter', 9, 8),
('Seamus', 'Finnigan', 10, 8);
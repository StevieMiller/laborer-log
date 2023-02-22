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
1('Director of Technology', 80000, 1),
2('Sr. Network Engineer', 70000, 2),
3('Jr. Network Engineer', 60000, 2),
4('Sr. Systems Engineer', 70000, 3),
5('Jr. Systems Engineer', 60000, 3),
6('Sr. Digital Media Engineer', 70000, 4),
7('Jr. Digital Media Engineer', 60000, 4),
8('Technical Support Supervisor', 70000, 5),
9('Technical Specialist', 50000, 5),
10('Information Technician', 40000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Hermione', 'Granger', 1, null),
('Harry', 'Potter', 2, 1),
('Ron', 'Weasley', 3, null),
('Ginny', 'Weasley', 4, 2),
('Draco', 'Malfoy', 5, null),
('Luna', 'Lovegood', 6, 3),
('Neville', 'Longbottom', 7, null),
('Dudley', 'Dursley', 8, 4),
('Rita', 'Skeeter', 9, 5),
('Seamus', 'Finnigan', 10, 6)
CREATE DATABASE bujo;
USE bujo;
SELECT database();

CREATE TABLE task_statuses (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL
);

DESC task_statuses;

CREATE TABLE tasks (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    status_id INT NOT NULL DEFAULT 1,
    timestamp TIMESTAMP NULL DEFAULT NOW(),
    FOREIGN KEY (status_id) REFERENCES task_statuses(id)
);

INSERT INTO task_statuses (title) VALUES
('TO_DO'),
('IN_PROGRESS'),
('COMPLETED'),
('CANCELLED'),
('MIGRATED');

SELECT * FROM task_statuses;

INSERT INTO tasks (title, status_id, timestamp) VALUES 
('Add dates', 1, '2021-03-10 00:00:01'),
('Order by dates', 1, '2021-03-02 00:00:01'),
('Query by dates', 1, '2021-03-03 00:00:01');

SELECT yearweek(timestamp) FROM tasks; 

SELECT * FROM tasks;

	

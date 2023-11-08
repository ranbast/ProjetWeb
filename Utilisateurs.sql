CREATE TABLE IF NOT EXISTS Utilisateurs (
  mail VARCHAR(50) NOT NULL PRIMARY KEY,
  prenom VARCHAR(50) NOT NULL DEFAULT '',
  nom VARCHAR(50) NOT NULL DEFAULT '',
  telephone VARCHAR(20) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;



INSERT INTO Utilisateurs (mail, prenom, nom, telephone) VALUES
('utilisateur1@example.com', 'John', 'Doe', '123-456-7890'),
('utilisateur2@example.com', 'Jane', 'Smith', '987-654-3210'),
('utilisateur3@example.com', 'Alice', 'Johnson', '555-123-4567'),
('utilisateur4@example.com', 'Robert', 'Williams', '444-555-6666'),
('utilisateur5@example.com', 'Emily', 'Brown', '777-888-9999'),
('utilisateur6@example.com', 'Michael', 'Davis', '111-222-3333'),
('utilisateur7@example.com', 'Olivia', 'Martinez', '666-777-8888'),
('utilisateur8@example.com', 'William', 'Garcia', '333-444-5555'),
('utilisateur9@example.com', 'Sophia', 'Rodriguez', '999-888-7777'),
('utilisateur10@example.com', 'James', 'Lopez', '222-333-4444'),
('utilisateur11@example.com', 'Liam', 'Harris', '555-444-3333'),
('utilisateur12@example.com', 'Mia', 'Turner', '888-999-1111'),
('utilisateur13@example.com', 'Benjamin', 'Adams', '111-999-8888'),
('utilisateur14@example.com', 'Ava', 'White', '666-555-4444'),
('utilisateur15@example.com', 'Lucas', 'Thompson', '333-666-9999'),
('utilisateur16@example.com', 'Isabella', 'Scott', '555-222-7777'),
('utilisateur17@example.com', 'Henry', 'Parker', '888-111-3333'),
('utilisateur18@example.com', 'Sofia', 'Wright', '222-555-8888'),
('utilisateur19@example.com', 'Alexander', 'Morris', '111-444-6666'),
('utilisateur20@example.com', 'Grace', 'Wilson', '777-333-2222');

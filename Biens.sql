CREATE TABLE IF NOT EXISTS Biens (
  idBien int NOT NULL PRIMARY KEY,
  mailProprio varchar(50) NOT NULL DEFAULT '',
  commune varchar(50) NOT NULL DEFAULT '',
  cp varchar(10) NOT NULL DEFAULT '',
  nbCouchages int NOT NULL,
  nbChambres int NOT NULL,
  distance varchar(10) NOT NULL DEFAULT '',
  prix float,
  FOREIGN KEY (mailProprio) REFERENCES Utilisateurs(mail)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO Biens (idBien, mailProprio, commune, cp, nbCouchages, nbChambres, distance, prix) VALUES
(1, 'utilisateur1@example.com', 'Paris', '75001', 4, 2, '5 km', 150.00),
(2, 'utilisateur2@example.com', 'Lyon', '69001', 6, 3, '3 km', 200.00),
(3, 'utilisateur3@example.com', 'Marseille', '13001', 2, 1, '8 km', 100.00),
(4, 'utilisateur4@example.com', 'Nice', '06000', 5, 2, '2 km', 180.00),
(5, 'utilisateur5@example.com', 'Bordeaux', '33000', 8, 4, '10 km', 250.00),
(6, 'utilisateur6@example.com', 'Toulouse', '31000', 3, 2, '6 km', 120.00),
(7, 'utilisateur7@example.com', 'Lille', '59000', 4, 2, '4 km', 130.00),
(8, 'utilisateur8@example.com', 'Strasbourg', '67000', 6, 3, '5 km', 190.00),
(9, 'utilisateur9@example.com', 'Rennes', '35000', 2, 1, '7 km', 90.00),
(10, 'utilisateur10@example.com', 'Nantes', '44000', 5, 3, '9 km', 160.00),
(11, 'utilisateur11@example.com', 'Toulon', '83000', 4, 2, '2 km', 140.00),
(12, 'utilisateur12@example.com', 'Montpellier', '34000', 6, 3, '6 km', 210.00),
(13, 'utilisateur13@example.com', 'Reims', '51100', 3, 2, '4 km', 110.00),
(14, 'utilisateur14@example.com', 'Nancy', '54000', 2, 1, '3 km', 80.00),
(15, 'utilisateur15@example.com', 'Caen', '14000', 4, 2, '5 km', 130.00),
(16, 'utilisateur16@example.com', 'Avignon', '84000', 2, 1, '4 km', 100.00),
(17, 'utilisateur17@example.com', 'Dijon', '21000', 3, 2, '2 km', 120.00),
(18, 'utilisateur18@example.com', 'Grenoble', '38000', 4, 3, '6 km', 150.00),
(19, 'utilisateur19@example.com', 'Limoges', '87000', 2, 1, '3 km', 90.00),
(20, 'utilisateur20@example.com', 'Besançon', '25000', 3, 2, '4 km', 110.00);

CREATE TABLE IF NOT EXISTS Locations (
  idLocation int NOT NULL PRIMARY KEY,
  idBien int NOT NULL,
  mailLoueur varchar(50) NOT NULL DEFAULT '',
  dateDebut date,
  dateFin date,
  avis varchar(255) NOT NULL DEFAULT '',
  FOREIGN KEY (idBien) REFERENCES Biens(idBien),
  FOREIGN KEY (mailLoueur) REFERENCES Utilisateurs(mail)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;



  INSERT INTO Locations (idLocation, idBien, mailLoueur, dateDebut, dateFin, avis) VALUES
(1, 1, 'utilisateur2@example.com', '2023-01-15', '2023-01-20', 'Très bien situé.'),
(2, 2, 'utilisateur1@example.com', '2023-02-10', '2023-02-15', 'Superbe vue.'),
(3, 3, 'utilisateur3@example.com', '2023-03-05', '2023-03-10', 'Calme et reposant.'),
(4, 4, 'utilisateur4@example.com', '2023-04-20', '2023-04-25', 'Idéal pour des vacances en famille.'),
(5, 5, 'utilisateur5@example.com', '2023-05-12', '2023-05-18', 'Proche de la plage.'),
(6, 6, 'utilisateur6@example.com', '2023-06-08', '2023-06-14', 'Belle expérience.'),
(7, 7, 'utilisateur7@example.com', '2023-07-10', '2023-07-16', 'Recommande fortement.'),
(8, 8, 'utilisateur8@example.com', '2023-08-25', '2023-08-30', 'Vue panoramique magnifique.'),
(9, 9, 'utilisateur9@example.com', '2023-09-14', '2023-09-20', 'Confortable et propre.'),
(10, 10, 'utilisateur10@example.com', '2023-10-18', '2023-10-25', 'Super séjour.'),
(11, 1, 'utilisateur11@example.com', '2023-11-02', '2023-11-08', 'Tout était parfait.'),
(12, 2, 'utilisateur12@example.com', '2023-12-12', '2023-12-18', 'Endroit magnifique.'),
(13, 3, 'utilisateur13@example.com', '2024-01-05', '2024-01-10', 'À refaire sans hésiter.'),
(14, 4, 'utilisateur14@example.com', '2024-02-20', '2024-02-25', 'Vacances inoubliables.'),
(15, 5, 'utilisateur15@example.com', '2024-03-12', '2024-03-18', 'Vue sur la mer incroyable.'),
(16, 6, 'utilisateur16@example.com', '2024-04-08', '2024-04-14', 'Hôte très accueillant.'),
(17, 7, 'utilisateur17@example.com', '2024-05-10', '2024-05-16', 'Emplacement stratégique.'),
(18, 8, 'utilisateur18@example.com', '2024-06-25', '2024-06-30', 'Parfait pour se détendre.'),
(19, 9, 'utilisateur19@example.com', '2024-07-14', '2024-07-20', 'Service exceptionnel.'),
(20, 10, 'utilisateur20@example.com', '2024-08-18', '2024-08-25', 'Excellente expérience.');


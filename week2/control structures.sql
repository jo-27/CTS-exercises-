use plsql;
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    Balance DECIMAL(10,2),
    IsVIP BOOLEAN DEFAULT FALSE
);

CREATE TABLE Loans (
    LoanID INT PRIMARY KEY,
    CustomerID INT,
    InterestRate DECIMAL(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers VALUES 
(1, 'Alice', 65, 12000.00, FALSE),
(2, 'Bob', 45, 8000.00, FALSE),
(3, 'Charlie', 70, 5000.00, FALSE),
(4, 'Diana', 32, 20000.00, FALSE);

INSERT INTO Loans VALUES 
(101, 1, 8.5, CURDATE() + INTERVAL 10 DAY),
(102, 2, 7.0, CURDATE() + INTERVAL 40 DAY),
(103, 3, 9.0, CURDATE() + INTERVAL 5 DAY),
(104, 4, 6.5, CURDATE() + INTERVAL 20 DAY);

select * from Customers;
select * from Loans;

DELIMITER //
CREATE PROCEDURE ApplySeniorDiscount()
BEGIN
    DECLARE discount INT DEFAULT FALSE;
    DECLARE custId INT;

    DECLARE cur CURSOR FOR 
        SELECT CustomerID FROM Customers WHERE Age > 60;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET discount = TRUE;

    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO custId;
        IF discount THEN
            LEAVE read_loop;
        END IF;

        UPDATE Loans
        SET InterestRate = InterestRate - 1.00
        WHERE CustomerID = custId;
    END LOOP;
    CLOSE cur;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE PromoteVIPCustomers()
BEGIN
    UPDATE Customers
    SET IsVIP = TRUE
    WHERE Balance > 10000;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE SendLoanReminders()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE custName VARCHAR(100);
    DECLARE due DATE;

    DECLARE cur CURSOR FOR 
        SELECT c.Name, l.DueDate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.DueDate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO custName, due;
        IF done THEN
            LEAVE read_loop;
        END IF;
        SELECT CONCAT('Reminder: Dear ', custName, ', your loan is due on ', due) AS ReminderMessage;
    END LOOP;
    CLOSE cur;
END //
DELIMITER ;

CALL ApplySeniorDiscount();
SELECT * FROM Loans;
CALL PromoteVIPCustomers();
SELECT * FROM Customers;
CALL SendLoanReminders();

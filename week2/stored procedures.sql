use storedprocedures;
CREATE TABLE accounts (
    account_id INT PRIMARY KEY,
    customer_id INT,
    account_type VARCHAR(50),
    balance DECIMAL(10, 2)
);

INSERT INTO accounts VALUES (101, 1, 'savings', 1000.00);
INSERT INTO accounts VALUES (102, 2, 'savings', 2000.00);
INSERT INTO accounts VALUES (103, 3, 'current', 1500.00);
INSERT INTO accounts VALUES (104, 4, 'savings', 3000.00);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    department VARCHAR(50),
    salary DECIMAL(10, 2)
);

INSERT INTO employees VALUES (1, 'IT', 50000.00);
INSERT INTO employees VALUES (2, 'HR', 40000.00);
INSERT INTO employees VALUES (3, 'IT', 55000.00);

DELIMITER $$
CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
  UPDATE accounts
  SET balance = balance * 1.01
  WHERE account_id IN (SELECT account_id FROM accounts WHERE account_type = 'savings');
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE UpdateEmployeeBonus(
  IN dept_name VARCHAR(50),
  IN bonus_rate DECIMAL(5, 2)
)
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_rate)
  WHERE department = dept_name;
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE TransferFunds(
  IN from_account INT,
  IN to_account INT,
  IN amount DECIMAL(10, 2)
)
BEGIN
  DECLARE current_balance DECIMAL(10,2);

  SELECT balance INTO current_balance
  FROM accounts
  WHERE account_id = from_account;

  IF current_balance >= amount THEN
    UPDATE accounts
    SET balance = balance - amount
    WHERE account_id = from_account;

    UPDATE accounts
    SET balance = balance + amount
    WHERE account_id = to_account;
  ELSE 
	SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Insufficient balance in source account';
  END IF;
END $$
DELIMITER ;

CALL ProcessMonthlyInterest();
CALL UpdateEmployeeBonus('IT', 0.10);
CALL TransferFunds(101, 102, 100.00);

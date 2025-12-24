CREATE TABLE sales (
      id INTEGER PRIMARY KEY,
      product TEXT NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      sale_date DATE NOT NULL,
      region TEXT NOT NULL
    );

    INSERT INTO sales (product, amount, sale_date, region) VALUES
      ('Widget A', 150.00, '2025-01-01', 'North'),
      ('Widget B', 250.00, '2025-01-02', 'South'),
      ('Widget A', 175.00, '2025-01-03', 'East'),
      ('Widget C', 300.00, '2025-01-04', 'West'),
      ('Widget B', 225.00, '2025-01-05', 'North');
    SQL
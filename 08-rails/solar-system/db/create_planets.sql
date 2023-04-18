CREATE TABLE planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    orbit FLOAT,
    diameter FLOAT,
    mass FLOAT,
    moons INTEGER
);

-- Rails has a better place for seed data: seeds.rb

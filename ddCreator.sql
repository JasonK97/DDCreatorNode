CREATE TABLE character 
(
    id          SERIAL          NOT NULL            PRIMARY KEY,
    ch_name     VARCHAR(100)    NOT NULL,
    ch_level    INT             NOT NULL 
);

INSERT INTO character(ch_name, ch_level) VALUES ('Jason', 1);
INSERT INTO character(ch_name, ch_level) VALUES ('Steve', 12);
INSERT INTO character(ch_name, ch_level) VALUES ('Zelgo', 7);

CREATE USER jasonk97 WITH PASSWORD 'jasonkent';
GRANT SELECT, INSERT, UPDATE ON character TO jasonk97;
GRANT USAGE, SELECT ON SEQUENCE character_id_seq TO jasonk97;

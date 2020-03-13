DROP TABLE IF EXISTS about;
DROP TABLE IF EXISTS stats;
DROP TABLE IF EXISTS character;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS race;
DROP TABLE IF EXISTS class;
DROP TABLE IF EXISTS alignment;

CREATE TABLE profile
(
    id                      SERIAL          NOT NULL    PRIMARY KEY,
    username                VARCHAR(100)    NOT NULL    UNIQUE,
    password                VARCHAR(255)    NOT NULL,
    display_name            VARCHAR(100)    NOT NULL
);

CREATE TABLE class
(
    id			            SERIAL			NOT NULL	PRIMARY KEY,
    class                   VARCHAR(100)    NOT NULL
);

CREATE TABLE race
(
    id			            SERIAL			NOT NULL	PRIMARY KEY,
    race                    VARCHAR(100)    NOT NULL
);

CREATE TABLE alignment
(
    id                      SERIAL          NOT NULL    PRIMARY KEY,
    alignment               VARCHAR(100)    NOT NULL
);

CREATE TABLE character
(
    id                  	SERIAL          NOT NULL    PRIMARY KEY,
    user_id             	INT	            NOT NULL    REFERENCES profile(id),
    class_id               	INT             NOT NULL    REFERENCES class(id),
    race_id                	INT             NOT NULL    REFERENCES race(id),
    character_name     		VARCHAR(100)    NOT NULL,
    character_level     	INT             NOT NULL
);

CREATE TABLE stats
(
    id						SERIAL			NOT NULL	PRIMARY KEY,
	character_id			INT				NOT NULL	REFERENCES character(id),
    maxHP               	INT             NOT NULL,
    strength            	INT             NOT NULL,
	dexterity           	INT             NOT NULL,
	constitution        	INT             NOT NULL,
	intelligence        	INT             NOT NULL,
	wisdom              	INT             NOT NULL,
	charisma            	INT             NOT NULL
);

CREATE TABLE about
(
	id						SERIAL			NOT NULL	PRIMARY KEY,
	character_id			INT				NOT NULL	REFERENCES character(id),
    alignment_id           	INT             NOT NULL    REFERENCES alignment(id),
	accessible_items    	VARCHAR(1000), 
	currency            	INT,
	feats               	VARCHAR(1000)   NOT NULL,
	features            	VARCHAR(1000)   NOT NULL
);

INSERT INTO race (race) VALUES ('Dragonborn');
INSERT INTO race (race) VALUES ('Dwarf');
INSERT INTO race (race) VALUES ('Elf');
INSERT INTO race (race) VALUES ('Human');
INSERT INTO race (race) VALUES ('Gnome');
INSERT INTO race (race) VALUES ('Half-Elf');
INSERT INTO race (race) VALUES ('Half-Orc');
INSERT INTO race (race) VALUES ('Halfling');
INSERT INTO race (race) VALUES ('Tiefling');


INSERT INTO class (class) VALUES ('Barbarian');
INSERT INTO class (class) VALUES ('Bard');
INSERT INTO class (class) VALUES ('Cleric');
INSERT INTO class (class) VALUES ('Druid');
INSERT INTO class (class) VALUES ('Fighter');
INSERT INTO class (class) VALUES ('Monk');
INSERT INTO class (class) VALUES ('Paladin');
INSERT INTO class (class) VALUES ('Ranger');
INSERT INTO class (class) VALUES ('Rogue');
INSERT INTO class (class) VALUES ('Sorcerer');
INSERT INTO class (class) VALUES ('Warlock');
INSERT INTO class (class) VALUES ('Wizard');
INSERT INTO class (class) VALUES ('--Artificer--');
INSERT INTO class (class) VALUES ('--Blood Hunter--');

INSERT INTO alignment (alignment) VALUES ('Lawful Good');
INSERT INTO alignment (alignment) VALUES ('Neutral Good');
INSERT INTO alignment (alignment) VALUES ('Chaotic Good');
INSERT INTO alignment (alignment) VALUES ('Lawful Neutral');
INSERT INTO alignment (alignment) VALUES ('Neutral');
INSERT INTO alignment (alignment) VALUES ('Chaotic Neutral');
INSERT INTO alignment (alignment) VALUES ('Lawful Evil');
INSERT INTO alignment (alignment) VALUES ('Neutral Evil');
INSERT INTO alignment (alignment) VALUES ('Chaotic Evil');
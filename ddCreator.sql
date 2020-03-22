DROP TABLE IF EXISTS campaign;
--DROP TABLE IF EXISTS character;

-- CREATE TABLE character
-- (
--     id              SERIAL          NOT NULL    PRIMARY KEY,
--     ch_name     	VARCHAR(100)    NOT NULL,
--     ch_level     	INT             NOT NULL,
--     ch_race         VARCHAR(100)    NOT NULL,
--     ch_class        VARCHAR(100)    NOT NULL
-- );

CREATE TABLE campaign
(
	id	        SERIAL			NOT NULL	PRIMARY KEY,
	title       VARCHAR(100)    NOT NULL,
    url         VARCHAR(1000)   NOT NULL,
    isFree      BOOLEAN         NOT NULL
);

-- INSERT INTO character(ch_name, ch_level, ch_race, ch_class) VALUES ('Zelgo', 1, 'Half-Elf', 'Fighter');
-- INSERT INTO character(ch_name, ch_level, ch_race, ch_class) VALUES ('Stephan', 1, 'Human', 'Ranger');
-- INSERT INTO character(ch_name, ch_level, ch_race, ch_class) VALUES ('Quentil', 1, 'Elf', 'Druid');
-- INSERT INTO character(ch_name, ch_level, ch_race, ch_class) VALUES ('Jaskier', 1, 'Human', 'Bard');

INSERT INTO campaign(title, url, isFree) VALUES ('The Burning Plague', 'http://archive.wizards.com/default.asp?x=dnd/oa/20000801a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Ettin`s Riddle', 'http://archive.wizards.com/default.asp?x=dnd/oa/20000901a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Base of Operations', 'http://archive.wizards.com/default.asp?x=dnd/oa/20001001a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Vessel of Stars', 'http://archive.wizards.com/default.asp?x=dnd/oa/20001101a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Alchemist`s Eyrie', 'http://archive.wizards.com/default.asp?x=dnd/oa/20001215a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Ghosts of Aniel', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010112a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('One Last Riddle', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010202a', true);
-- INSERT INTO campaign(title, url) VALUES ('Manifesting: A Tale', '');
-- INSERT INTO campaign(title, url) VALUES ('Something`s Cooking', '');
-- INSERT INTO campaign(title, url) VALUES ('The Tower of Deception', '');
-- INSERT INTO campaign(title, url) VALUES ('A Frigid Demise', '');
-- INSERT INTO campaign(title, url) VALUES ('The Ministry of Winds', '');
-- INSERT INTO campaign(title, url) VALUES ('An Eye for an Eye', '');
-- INSERT INTO campaign(title, url) VALUES ('Fang, Beak, and Claw', '');
-- INSERT INTO campaign(title, url) VALUES ('The Sea Witch', '');
-- INSERT INTO campaign(title, url) VALUES ('The Secret of the Windswept Wall', '');
-- INSERT INTO campaign(title, url) VALUES ('A Harvest of Evil', '');
-- INSERT INTO campaign(title, url) VALUES ('House of Harpies', '');
-- INSERT INTO campaign(title, url) VALUES ('An Icy Heart', '');
-- INSERT INTO campaign(title, url) VALUES ('Desert Sands', '');
-- INSERT INTO campaign(title, url) VALUES ('The Crumbling Hall of the Frost Giant Jarl', '');
-- INSERT INTO campaign(title, url) VALUES ('Black Rain', '');
-- INSERT INTO campaign(title, url) VALUES ('Start at the End', '');
-- INSERT INTO campaign(title, url) VALUES ('A Question of Ethics', '');
-- INSERT INTO campaign(title, url) VALUES ('Tiger`s Palace', '');
-- INSERT INTO campaign(title, url) VALUES ('Self-Fulfilling Prophecy?', '');
-- INSERT INTO campaign(title, url) VALUES ('Test of the Demonweb', '');
-- INSERT INTO campaign(title, url) VALUES ('Haunting Lodge', '');
-- INSERT INTO campaign(title, url) VALUES ('The Treasure of the Black Veils', '');
-- INSERT INTO campaign(title, url) VALUES ('Thicker Than Water', '');

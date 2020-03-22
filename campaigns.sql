DROP TABLE IF EXISTS campaign;

CREATE TABLE campaign
(
	id	        SERIAL			NOT NULL	PRIMARY KEY,
	title       VARCHAR(100)    NOT NULL,
    url         VARCHAR(1000)   NOT NULL,
    isFree      BOOLEAN         NOT NULL
);

INSERT INTO campaign(title, url, isFree) VALUES ('The Burning Plague', 'http://archive.wizards.com/default.asp?x=dnd/oa/20000801a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Ettin''s Riddle', 'http://archive.wizards.com/default.asp?x=dnd/oa/20000901a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Base of Operations', 'http://archive.wizards.com/default.asp?x=dnd/oa/20001001a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Vessel of Stars', 'http://archive.wizards.com/default.asp?x=dnd/oa/20001101a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Alchemist''s Eyrie', 'http://archive.wizards.com/default.asp?x=dnd/oa/20001215a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Ghosts of Aniel', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010112a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('One Last Riddle', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010202a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Manifesting: A Tale', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010330a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Something''s Cooking', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010413a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Tower of Deception', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010525a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('A Frigid Demise', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010608a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Ministry of Winds', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010720a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('An Eye for an Eye', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010824a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Fang, Beak, and Claw', 'http://archive.wizards.com/default.asp?x=dnd/oa/20010926a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Sea Witch', 'http://archive.wizards.com/default.asp?x=dnd/oa/20011005a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Secret of the Windswept Wall', 'http://archive.wizards.com/default.asp?x=dnd/oa/20011021a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('A Harvest of Evil', 'http://archive.wizards.com/default.asp?x=dnd/oa/20011130a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('House of Harpies', 'http://archive.wizards.com/default.asp?x=dnd/oa/20011221a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('An Icy Heart', 'http://archive.wizards.com/default.asp?x=dnd/oa/20020125a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Desert Sands', 'http://archive.wizards.com/default.asp?x=dnd/oa/20020223a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Crumbling Hall of the Frost Giant Jarl', 'http://archive.wizards.com/default.asp?x=dnd/oa/20020329a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Black Rain', 'http://archive.wizards.com/default.asp?x=dnd/oa/20020427a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Start at the End', 'http://archive.wizards.com/default.asp?x=dnd/oa/20020628a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('A Question of Ethics', 'http://archive.wizards.com/default.asp?x=dnd/oa/20020726a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Tiger''s Palace', 'http://archive.wizards.com/default.asp?x=dnd/oa/20020830a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Self-Fulfilling Prophecy?', 'http://archive.wizards.com/default.asp?x=dnd/oa/20020928a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Test of the Demonweb', 'http://archive.wizards.com/default.asp?x=dnd/oa/20021026a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Haunting Lodge', 'http://archive.wizards.com/default.asp?x=dnd/oa/20021130a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('The Treasure of the Black Veils', 'http://archive.wizards.com/default.asp?x=dnd/oa/20021206a', true);
INSERT INTO campaign(title, url, isFree) VALUES ('Thicker Than Water', 'http://archive.wizards.com/default.asp?x=dnd/oa/20021227a', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', true);

INSERT INTO campaign(title, url, isFree) VALUES ('Scourge of the Howling Horde', 'https://www.amazon.com/Scourge-Howling-Dungeons-Roleplaying-Adventure/dp/0786939354', false);
INSERT INTO campaign(title, url, isFree) VALUES ('The Sunless Citadel', 'https://www.amazon.com/Sunless-Citadel-Dungeons-Dragons-Adventure/dp/0786916400', false);
INSERT INTO campaign(title, url, isFree) VALUES ('The Ghosts of Saltmarsh', 'https://www.amazon.com/Dungeons-Dragons-Saltmarsh-Hardcover-Adventure/dp/0786966750/ref=sr_1_4?dchild=1&keywords=dungeons+and+dragons+version+5+campaigns&qid=1584849154&s=books&sr=1-4', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);
-- INSERT INTO campaign(title, url, isFree) VALUES ('', '', false);

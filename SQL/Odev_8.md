## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

#### 1-test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
` select  avg(rental_rate) from film`
#### 2-Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
`insert into  employee (id, name, birthday, email) values (1, 'Dennis', '15.09.1992', 'dcornewell0@virginia.edu');
insert into  employee (id, name, birthday, email) values (2, 'Carolus', '20.02.1992', 'ctewes1@barnesandnoble.com');
insert into  employee (id, name, birthday, email) values (3, 'Jemimah', '05.09.1993', 'jvarran2@indiegogo.com');
insert into  employee (id, name, birthday, email) values (4, 'Lamar', '04.08.1996', 'lsamwayes3@sogou.com');
insert into  employee (id, name, birthday, email) values (5, 'Elwood', '20.11.1999', 'eault4@dagondesign.com');
insert into  employee (id, name, birthday, email) values (6, 'Lynde', '18.04.1991', 'lgaitung5@gravatar.com');
insert into  employee (id, name, birthday, email) values (7, 'Ginevra', '25.08.1996', 'gbogey6@kickstarter.com');
insert into  employee (id, name, birthday, email) values (8, 'Pippy', '13.05.1990', 'psaturley7@gnu.org');
insert into  employee (id, name, birthday, email) values (9, 'Eunice', '23.10.1998', 'eraith8@tripod.com');
insert into  employee (id, name, birthday, email) values (10, 'Elsinore', '07.11.1993', 'ecarnell9@hugedomains.com');
insert into  employee (id, name, birthday, email) values (11, 'Cynthia', '25.12.1994', 'civakhina@time.com');
insert into  employee (id, name, birthday, email) values (12, 'Shellie', '30.01.1992', 'sharradineb@desdev.cn');
insert into  employee (id, name, birthday, email) values (13, 'Adrien', '12.10.1996', 'agilffillanc@businessinsider.com');
insert into  employee (id, name, birthday, email) values (14, 'Josselyn', '22.01.1997', 'jitzaksond@sakura.ne.jp');
insert into  employee (id, name, birthday, email) values (15, 'Jonathon', '28.10.1997', 'jlawlese@theglobeandmail.com');
insert into  employee (id, name, birthday, email) values (16, 'Ceciley', '01.08.1997', 'ccastiglionif@cnbc.com');
insert into  employee (id, name, birthday, email) values (17, 'Nyssa', '16.05.1990', 'nkrebsg@facebook.com');
insert into  employee (id, name, birthday, email) values (18, 'Clotilda', '27.06.1991', 'cmiskenh@pagesperso-orange.fr');
insert into  employee (id, name, birthday, email) values (19, 'Lisha', '01.06.1994', 'lspringi@mapy.cz');
insert into  employee (id, name, birthday, email) values (20, 'Pancho', '06.01.1998', 'ppowej@dion.ne.jp');
insert into  employee (id, name, birthday, email) values (21, 'Gerard', '03.05.1993', 'ghelversenk@drupal.org');
insert into  employee (id, name, birthday, email) values (22, 'Niko', '10.08.1995', 'nhargrovel@dropbox.com');
insert into  employee (id, name, birthday, email) values (23, 'Jenilee', '27.09.1991', 'jjirickam@nasa.gov');
insert into  employee (id, name, birthday, email) values (24, 'Juan', '19.04.1998', 'jrousbyn@linkedin.com');
insert into  employee (id, name, birthday, email) values (25, 'Benedikta', '27.01.1993', 'beuelso@skype.com');
insert into  employee (id, name, birthday, email) values (26, 'Evonne', '20.05.1998', 'ejanczakp@nydailynews.com');
insert into  employee (id, name, birthday, email) values (27, 'Clayborne', '26.06.1994', 'clegatq@hubpages.com');
insert into  employee (id, name, birthday, email) values (28, 'Lloyd', '27.04.1996', 'lknewstubr@globo.com');
insert into  employee (id, name, birthday, email) values (29, 'Ajay', '09.12.1995', 'acuredales@ucsd.edu');
insert into  employee (id, name, birthday, email) values (30, 'Janka', '06.10.1997', 'jskipseyt@uol.com.br');
insert into  employee (id, name, birthday, email) values (31, 'Kaile', '05.08.1992', 'kmcgrirlu@shinystat.com');
insert into  employee (id, name, birthday, email) values (32, 'Angelique', '04.02.1993', 'acunnellv@technorati.com');
insert into  employee (id, name, birthday, email) values (33, 'Carroll', '15.08.1998', 'cspargow@netscape.com');
insert into  employee (id, name, birthday, email) values (34, 'Penelope', '02.11.1995', 'pworttx@gizmodo.com');
insert into  employee (id, name, birthday, email) values (35, 'Kelly', '22.05.1999', 'kdedantesiey@webs.com');
insert into  employee (id, name, birthday, email) values (36, 'Ninon', '05.05.1998', 'ndanovichz@umn.edu');
insert into  employee (id, name, birthday, email) values (37, 'Thaddeus', '24.04.1999', 'tareles10@tripadvisor.com');
insert into  employee (id, name, birthday, email) values (38, 'Alena', '12.03.1997', 'ajecks11@prweb.com');
insert into  employee (id, name, birthday, email) values (39, 'Elayne', '27.10.1999', 'emcnuff12@addthis.com');
insert into  employee (id, name, birthday, email) values (40, 'Lanae', '02.09.1994', 'ldutteridge13@gnu.org');
insert into  employee (id, name, birthday, email) values (41, 'Cammy', '18.01.1995', 'cmathey14@mayoclinic.com');
insert into  employee (id, name, birthday, email) values (42, 'Pris', '11.11.1995', 'pbodell15@google.co.jp');
insert into  employee (id, name, birthday, email) values (43, 'Chico', '03.03.1992', 'ctevelov16@zimbio.com');
insert into  employee (id, name, birthday, email) values (44, 'Daffi', '18.05.1998', 'dhaston17@auda.org.au');
insert into  employee (id, name, birthday, email) values (45, 'Abdul', '10.01.1998', 'aglashby18@youku.com');
insert into  employee (id, name, birthday, email) values (46, 'Hermann', '08.02.1991', 'hcleiment19@walmart.com');
insert into  employee (id, name, birthday, email) values (47, 'Dana', '11.03.1991', 'djedryka1a@blogger.com');
insert into  employee (id, name, birthday, email) values (48, 'Myrtia', '05.02.1999', 'mfeldhuhn1b@cargocollective.com');
insert into  employee (id, name, birthday, email) values (49, 'Dicky', '05.04.1996', 'dmcamish1c@fotki.com');
insert into  employee (id, name, birthday, email) values (50, 'Kylie', '09.03.1995', 'ksandey1d@cam.ac.uk');
insert into  employee (id, name, birthday, email) values (51, 'Lauryn', '09.03.1998', 'lproudley1e@barnesandnoble.com');
insert into  employee (id, name, birthday, email) values (52, 'Nikkie', '02.12.1997', 'nkeenan1f@multiply.com');
insert into  employee (id, name, birthday, email) values (53, 'Aveline', '07.12.1993', 'adietmar1g@newyorker.com');
insert into  employee (id, name, birthday, email) values (54, 'Walliw', '07.08.1990', 'wbarnby1h@github.io');
insert into  employee (id, name, birthday, email) values (55, 'Dynah', '02.04.1999', 'dfarnish1i@ezinearticles.com');
insert into  employee (id, name, birthday, email) values (56, 'Basile', '28.05.1998', 'bdybbe1j@epa.gov');
insert into  employee (id, name, birthday, email) values (57, 'Carmen', '20.09.1993', 'cmcnair1k@chronoengine.com');
insert into  employee (id, name, birthday, email) values (58, 'Kessia', '24.07.1990', 'kgerrels1l@addtoany.com');
insert into  employee (id, name, birthday, email) values (59, 'Venita', '11.06.1997', 'vsantarelli1m@virginia.edu');
insert into  employee (id, name, birthday, email) values (60, 'Caye', '21.11.1991', 'cpipet1n@artisteer.com');
insert into  employee (id, name, birthday, email) values (61, 'Pietro', '26.07.1991', 'psidebotton1o@odnoklassniki.ru');
insert into  employee (id, name, birthday, email) values (62, 'Leroi', '22.12.1998', 'lnesbit1p@freewebs.com');
insert into  employee (id, name, birthday, email) values (63, 'Alleyn', '14.01.1996', 'aspiers1q@pbs.org');
insert into  employee (id, name, birthday, email) values (64, 'Pollyanna', '14.05.1995', 'ppenlington1r@123-reg.co.uk');
insert into  employee (id, name, birthday, email) values (65, 'Diane-marie', '01.02.1999', 'dgonnet1s@google.co.jp');
insert into  employee (id, name, birthday, email) values (66, 'Irvine', '23.08.1990', 'iboarer1t@timesonline.co.uk');
insert into  employee (id, name, birthday, email) values (67, 'Deva', '23.11.1993', 'dnason1u@hc360.com');
insert into  employee (id, name, birthday, email) values (68, 'Saraann', '22.05.1992', 'scaulliere1v@wix.com');
insert into  employee (id, name, birthday, email) values (69, 'Aarika', '16.03.1992', 'aorrin1w@vistaprint.com');
insert into  employee (id, name, birthday, email) values (70, 'Teddy', '20.12.1990', 'tfortin1x@etsy.com');
insert into  employee (id, name, birthday, email) values (71, 'Rodolfo', '30.09.1990', 'reyton1y@biblegateway.com');
insert into  employee (id, name, birthday, email) values (72, 'Legra', '02.10.1990', 'lsumbler1z@stumbleupon.com');
insert into  employee (id, name, birthday, email) values (73, 'Burt', '10.12.1990', 'bduferie20@census.gov');
insert into  employee (id, name, birthday, email) values (74, 'Kassi', '25.12.1991', 'kraden21@tmall.com');
insert into  employee (id, name, birthday, email) values (75, 'Roxane', '13.02.1993', 'rhuie22@yolasite.com');
insert into  employee (id, name, birthday, email) values (76, 'Sol', '28.01.1991', 'selks23@angelfire.com');
insert into  employee (id, name, birthday, email) values (77, 'Adan', '17.11.1992', 'acanavan24@google.de');
insert into  employee (id, name, birthday, email) values (78, 'Nikolos', '08.07.1991', 'nmatterface25@etsy.com');
insert into  employee (id, name, birthday, email) values (79, 'Dominga', '28.04.1995', 'dhaller26@nps.gov');
insert into  employee (id, name, birthday, email) values (80, 'Ole', '10.04.1997', 'obompas27@umn.edu');
insert into  employee (id, name, birthday, email) values (81, 'Bailie', '26.09.1990', 'bgillings28@dropbox.com');
insert into  employee (id, name, birthday, email) values (82, 'Ozzy', '02.07.1994', 'omccaughen29@posterous.com');
insert into  employee (id, name, birthday, email) values (83, 'Karalee', '11.12.1991', 'ksheere2a@reference.com');
insert into  employee (id, name, birthday, email) values (84, 'Noe', '04.05.1999', 'neyres2b@pcworld.com');
insert into  employee (id, name, birthday, email) values (85, 'Thia', '06.10.1992', 'tgutman2c@webmd.com');
insert into  employee (id, name, birthday, email) values (86, 'Kristofer', '21.02.1990', 'kbrannon2d@about.me');
insert into  employee (id, name, birthday, email) values (87, 'Vasilis', '13.05.1994', 'vtirrell2e@mail.ru');
insert into  employee (id, name, birthday, email) values (88, 'Papagena', '19.03.1999', 'pspadollini2f@networkadvertising.org');
insert into  employee (id, name, birthday, email) values (89, 'Almira', '10.11.1999', 'ariehm2g@google.it');
insert into  employee (id, name, birthday, email) values (90, 'Matthus', '20.10.1996', 'mgorbell2h@nyu.edu');
insert into  employee (id, name, birthday, email) values (91, 'Cleveland', '30.11.1995', 'cflipsen2i@desdev.cn');
insert into  employee (id, name, birthday, email) values (92, 'Kattie', '11.11.1995', 'kwashington2j@xinhuanet.com');
insert into  employee (id, name, birthday, email) values (93, 'Christina', '20.02.1992', 'cdarrigo2k@hp.com');
insert into  employee (id, name, birthday, email) values (94, 'Marylynne', '11.09.1991', 'mneasam2l@symantec.com');
insert into  employee (id, name, birthday, email) values (95, 'Raquela', '27.08.1997', 'rprendeville2m@wiley.com');
insert into  employee (id, name, birthday, email) values (96, 'Archibaldo', '19.03.1993', 'astandage2n@state.gov');
insert into  employee (id, name, birthday, email) values (97, 'Bertina', '19.06.1990', 'bhaxby2o@europa.eu');
insert into  employee (id, name, birthday, email) values (98, 'Iorgo', '07.03.1991', 'ikeming2p@networksolutions.com');
insert into  employee (id, name, birthday, email) values (99, 'Daveta', '20.05.1994', 'drigard2q@walmart.com');
insert into  employee (id, name, birthday, email) values (100, 'Blisse', '18.07.1992', 'bhenze2r@noaa.gov');'`
#### 3-Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
`UPDATE employee
SET name = 'Blisse'
WHERE id = 99 
RETURNING * ;

UPDATE employee
SET name = 'Daveta'
WHERE birthday = '20.05.1994' 
RETURNING * ;

UPDATE employee
SET email = 'asdasd@gmail.com'
WHERE name = 'Gretna' 
RETURNING * ;

UPDATE employee
SET birthday = '1999-12-12'
WHERE id = 6 
RETURNING * ;

UPDATE employee
SET name = 'utku'
WHERE birthday = '1996-06-03' 
RETURNING * ;`
#### 4-Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
`ELETE FROM employee
WHERE id = 50;

DELETE FROM employee
WHERE name = 'Cosme';

DELETE FROM employee
WHERE birthday = '2000-01-18';

DELETE FROM employee
WHERE email = 'smeritz@oaic.gov.au';

DELETE FROM employee
WHERE id = 49;`


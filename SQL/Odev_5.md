## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

#### 1-film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.
`select title,length from film where title like  '%n' order by length desc limit 5;`
#### 2-film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.
`select title,length from film where title like  '%n' order by length asc offset 5 limit 5`
#### 3-customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.
`SELECT store_id, last_name FROM customer WHERE store_id IN (1) ORDER BY last_name DESC LIMIT 4;`


# lunchbox
Lunchbox is a website made using node.js and ejs as templeting engine with database integration sql.
To make this work 
1. Tnstall node.js and mysql.<br>
2. In the Node.js command prompt do "npm start".<br>
3. To make database integration work go to the routes/index.js and in the dbconnect object insert your respective user, root and any database(new).<br>
4. In the database create these tables.

create table moms(
	fName varchar(40),
    email varchar(30),
    phone varchar(20),
    address varchar(90)
);

create table kids(
	fName varchar(40),
    email varchar(30),
    phone varchar(20),
    address varchar(90)
);

Done

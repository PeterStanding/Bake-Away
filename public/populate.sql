-- Dummy Data to be used within the Database for the BakeAway software used as to test the javascript and the overall software

-- INSERT STATEMENTS FOR BAKERY TABLE --
INSERT ignore INTO BakeAway.Bakery Values ("138691", "Greggs", "78 Queen Road", "Portsmouth", "PO1 4RT", "Hampshire", "08202020","greggs@gmail.com");
INSERT ignore INTO BakeAway.Bakery VALUES ("522670", "Bread Addiction", "54 Elm Grove", "Portsmouth", "PO5 1JG", "Hampshire", "0767829", "breadadd@gmail.com");
INSERT ignore INTO BakeAway.Bakery VALUES ("167608", "Patisserie Valerie", "The tramshed", "Portsmouth", "PO1 3TA", "Hampshire", "02392291168", "patisserievalerie@gmail.com");
INSERT ignore INTO BakeAway.Bakery VALUES ("653782", "Sweet Cakes", "70 Palmerston rd", "Portsmouth", "PO5 3PT", "Hampshire", "07840", "sweetc@gmail.com");
INSERT ignore INTO BakeAway.Bakery VALUES ("146823", "Capital Cake", "283 Kingston rd", "Portsmouth", "PO2 7LR", "Hampshire", "02392", "capital@gmail.com");
INSERT ignore INTO BakeAway.Bakery VALUES ("487197", "Cupcake Treasure", "49 Farlington rd", "Portsmouth", "PO2 0DS", "Hampshire", "02393", "cupcake@gmail.com");
INSERT ignore INTO BakeAway.Bakery VALUES ("873489", "Fondantly Yours", "98 Elm Grove", "Portsmouth", "PO5 1LN", "Hampshire", "02394", "fondant@gmail.com");
INSERT ignore INTO BakeAway.Bakery VALUES ("975234", "Cakes O'Licious", "9 Holbeach rd", "Portsmouth", "PO6 3LD", "Hampshire", "02397", "cakeso@gmail.com");
INSERT ignore INTO BakeAway.Bakery VALUES ("352182", "Commercial Bakery", "1100 Blueprint", "Portsmouth", "PO3 5RW", "Hampshire", "02391", "commercial@gmail.com");
INSERT ignore INTO BakeAway.Bakery VALUES ("245386", "Heidi's Patisserie", "256 Havant rd", "Portsmouth", "PO6 1PA", "Hampshire", "02395", "heidicakes@gmail.com");

-- INSERT STATEMENTS FOR Menu_Items Table --
INSERT ignore INTO BakeAway.Menu_Items VALUES ("1562", "YumYum", "A sweet doughnut twist", "0.45", "138691");
INSERT ignore INTO BakeAway.Menu_Items VALUES ("2635", "Chocolate Cake", "Belgian chocolate", "9.98", "522670");
INSERT ignore INTO BakeAway.Menu_Items VALUES ("3625", "Apple pie", "Pie with apple", "2.36", "167608");
INSERT ignore INTO BakeAway.Menu_Items VALUES ("8734", "Tottenham Cake", "Sponge cake with icing", "1.25", "653782");
INSERT ignore INTO BakeAway.Menu_Items VALUES ("1752", "Cinnamon Bun", "Cake with cinamon", "2.00", "146823");
INSERT ignore INTO BakeAway.Menu_Items VALUES ("5243", "Brownie", "Chocolate brownie", "0.99", "487197");
INSERT ignore INTO BakeAway.Menu_Items VALUES ("9726", "Pink Jammie", "Strawberry doughnut", "0.50", "873489");
INSERT ignore INTO BakeAway.Menu_Items VALUES ("3826", "Muffin", "Chocolate or blueberry muffin", "1.00", "975234");
INSERT ignore INTO BakeAway.Menu_Items VALUES ("7652", "Ginger bread man", "Ginger flavoured biscuit", "0.99", "352182");
INSERT ignore INTO BakeAway.Menu_Items VALUES ("6291", "Belgian bun", "Cake with raisins", "1.10", "245386");


-- INSERT STATEMENTS FOR Customer Table --
INSERT ignore INTO BakeAway.Customer VALUES ("90397","Mr","Lev","Hughes","1978-07-10","31 Mollis St.","Durham","FZ04 0PW","DU","056234845","01697898","justo@enimMauris.ca");
INSERT ignore INTO BakeAway.Customer VALUES ("30371","Mr","Chandler","Frank","1972-06-27","3251 Vitae Avenue","Marlborough","N95 0NR","WI","08001111","052264967","blandit@etmagnis.ca");
INSERT ignore INTO BakeAway.Customer VALUES ("51575","Mr","Amir","Delaney","1998-09-17","792 Amet Road","Beverley","M47 5SF","YK","01978373","053213072","vehicula@metusfacilisislorem.co.uk");
INSERT ignore INTO BakeAway.Customer VALUES ("16825","Mr","Patrick","Flowers","1979-07-27","177 Amet, Av.","Kilmalcolm","F1 0QG","Renfrewshire","08001111","080335341","lobortis@ametante.edu");
INSERT ignore INTO BakeAway.Customer VALUES ("35586","Mr","Richard","Pratt","1982-05-27","42 Curabitur Av.","Dumfries","GU0 6OY","DF","017334552","08001111","nunc@inaliquetlobortis.ca");
INSERT ignore INTO BakeAway.Customer VALUES ("80004","Ms","Alika","Wade","1992-06-15","350 Est Rd.","Builth Wells","N12 2RZ","Brecknockshire","0700948743","076623837","dignissim@malesuadaaugueut.ca");
INSERT ignore INTO BakeAway.Customer VALUES ("90925","Miss","Sybill","Rodgers","1967-10-04","93 Aliquet Rd.","Duns","HH1G 5FJ","Berwickshire","022145586","027675508","elit.pharetra@diamProindolor.com");
INSERT ignore INTO BakeAway.Customer VALUES ("63755","Mrs","Yardley","Nixon","2002-04-29","5048 Erat St.","Castletown","ZY3N 1JL","Caithness","05003827","030425326","libero.Donec@gmail.com");
INSERT ignore INTO BakeAway.Customer VALUES ("66698","Mr","Unity","Tanner","1995-06-02","961 Cras Rd.","Lochgilphead","ZI09 1XN","AR","011042778","079039134","risus.at.fringilla@at.com");
INSERT ignore INTO BakeAway.Customer VALUES ("42943","Miss","Laurel","Rutledge","1983-07-07","9495 Non Rd.","York","BP5 8QC","Yorkshire","075201209","0844645","dolor.dapibus@velarcueu.ca");

-- INSERT STATEMENTS FOR EMPLOYEE TABLE --
INSERT ignore INTO BakeAway.Employee VALUES ("28833","Molly","Mortimer","71 Nostra, St.","C5W 8HH","05003314235");
INSERT ignore INTO BakeAway.Employee VALUES ("36816","Reagan","Emerson","78 Varius Ave","K89 4TE","07463673527");
INSERT ignore INTO BakeAway.Employee VALUES ("31172","Laura","Ross","48 Suspendisse Avenue","U13 7GJ","05559373426");
INSERT ignore INTO BakeAway.Employee VALUES ("42701","Hyacinth","Dyer","97 Mattis Rd.","YX9 9DZ","05674241764");
INSERT ignore INTO BakeAway.Employee VALUES ("06011","Gloria","Ochoa","846 Feugiat Rd.","H77 3NZ","07531427385");
INSERT ignore INTO BakeAway.Employee VALUES ("21010","Katelyn","Wolfe","19 Aenean Road","DW13 5PC","07041307169");
INSERT ignore INTO BakeAway.Employee VALUES ("86799","Tanek","Ramirez","35 Tincidunt, Av.","Q9 2YY","05561726480");
INSERT ignore INTO BakeAway.Employee VALUES ("42053","Ashton","Cash","72 Ultrices Rd.","EO9 1TF","07896146862");
INSERT ignore INTO BakeAway.Employee VALUES ("93896","Cameron","Wood","96 Vulputate, Rd.","C01 2GW","07622358594");
INSERT ignore INTO BakeAway.Employee VALUES ("41233","Jemima","Morgan","65 Porttitor Street","JN9 9WH","05553152378");

-- INSERT STATEMENTS FOR LOGIN TABLE --
INSERT ignore INTO BakeAway.Login VALUES ("879389","H5llo2w","90397");
INSERT ignore INTO BakeAway.Login VALUES ("866467","qwERTY3","30371");
INSERT ignore INTO BakeAway.Login VALUES ("850874","IGbsdg8","51575");
INSERT ignore INTO BakeAway.Login VALUES ("841221","C4tih21","16825");
INSERT ignore INTO BakeAway.Login VALUES ("909308","Iamhdy2","35586");
INSERT ignore INTO BakeAway.Login VALUES ("857315","LOnd21d","80004");
INSERT ignore INTO BakeAway.Login VALUES ("817277","Alimaj2","90925");
INSERT ignore INTO BakeAway.Login VALUES ("874567","K1hdn22","63755");
INSERT ignore INTO BakeAway.Login VALUES ("872039","UYSBn23","66698");
INSERT ignore INTO BakeAway.Login VALUES ("839730","12sf4Js","42943");

-- INSERT STATEMENTS FOR Order_Details TABLE-
INSERT ignore INTO BakeAway.Order_Details VALUES ("1", "12.00", "26", "10", "1562");
INSERT ignore INTO BakeAway.Order_Details VALUES ("2", "3.00", "3", "0", "3826");
INSERT ignore INTO BakeAway.Order_Details VALUES ("3", "6.00", "5", "20", "1752");
INSERT ignore INTO BakeAway.Order_Details VALUES ("4", "20.00", "40", "0", "9726");
INSERT ignore INTO BakeAway.Order_Details VALUES ("5", "9.00", "7", "0", "8734");
INSERT ignore INTO BakeAway.Order_Details VALUES ("6", "15.00", "14", "0", "7652");
INSERT ignore INTO BakeAway.Order_Details VALUES ("7", "9.98", "1", "0", "2635");
INSERT ignore INTO BakeAway.Order_Details VALUES ("8", "2.50", "2", "5", "8734");
INSERT ignore INTO BakeAway.Order_Details VALUES ("9", "1.10", "8", "0", "6291");
INSERT ignore INTO BakeAway.Order_Details VALUES ("10", "7.00", "2", "5", "5243");

-- INSERT STATEMENTS FOR ORDER_LINE TABLE --
INSERT ignore INTO BakeAway.Order_Line VALUES ("111","2019-02-18","90397");
INSERT ignore INTO BakeAway.Order_Line VALUES ("112","2019-03-02","30371");
INSERT ignore INTO BakeAway.Order_Line VALUES ("113","2019-01-29","51575");
INSERT ignore INTO BakeAway.Order_Line VALUES ("114","2019-01-31","16825");
INSERT ignore INTO BakeAway.Order_Line VALUES ("115","2019-04-29","35586");
INSERT ignore INTO BakeAway.Order_Line VALUES ("116","2018-12-05","80004");
INSERT ignore INTO BakeAway.Order_Line VALUES ("117","2018-10-24","90925");
INSERT ignore INTO BakeAway.Order_Line VALUES ("118","2018-01-23","63755");
INSERT ignore INTO BakeAway.Order_Line VALUES ("120","2018-10-07","66698");
INSERT ignore INTO BakeAway.Order_Line VALUES ("119","2019-05-12","66698");

-- INSERT STATEMENTS FOR PAYMENT TABLE --
INSERT ignore INTO BakeAway.Payment VALUES ("201","12.00","26","Card","90397","1");
INSERT ignore INTO BakeAway.Payment VALUES ("202","3.00","3","Card","30371","2");
INSERT ignore INTO BakeAway.Payment VALUES ("203","6.00","5","Cash","51575","3");
INSERT ignore INTO BakeAway.Payment VALUES ("204","20.00","40","PayPal","16825","4");
INSERT ignore INTO BakeAway.Payment VALUES ("205","9.00","7","Card","35586","5");
INSERT ignore INTO BakeAway.Payment VALUES ("206","15.00","14","Cash","80004","6");
INSERT ignore INTO BakeAway.Payment VALUES ("207","9.98","1","PayPal","63755","7");
INSERT ignore INTO BakeAway.Payment VALUES ("208","2.50","2","Card","66698","8");
INSERT ignore INTO BakeAway.Payment VALUES ("209","1.10","8","Card","66698","9");
INSERT ignore INTO BakeAway.Payment VALUES ("210","7.00","2","Card","90397","10");

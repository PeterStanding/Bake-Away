# Bake-Away
INSE Coursework 2018/2019

BakeAway is an online  application that customers can use to order baked products to be delivered to their door from the bakery. Users will be able to save payment details once an account is created, however they may use the appication under a guest profile. Similar products that are on the market currently are Deliveroo and Uber Eats.

------------
Team Members
------------
GitHub UserName   -- UoP Student Number  
1. PeterStanding  -- UP817277            
2. Chrisjnovell   -- UP850874            
3. up857315       -- UP857315            
4. UP879389       -- UP879389             
5. up866467       -- UP866467            
6. D3BZ           -- UP841221            
7. KsKhoo         -- UP909308             

----------------------------------------------------------
Steps for Uploading and Downloading Repository from GitHub
----------------------------------------------------------
1. Notify group once you have begun to download from the main repository
2. Make sure that the changed code run correctly on personal machine before reuploading to the Github repository
3. If upload causes bugs or compromises the integrity of the repostory - Fix own code as soon as possible - Then reupload to the repository
4. Notify group once upload is completed


-------------------------------
Steps for running the database 
-------------------------------
1. Download MariaDB Server for own machine from: https://go.mariadb.com/search-download-MariaDB-server.html?utm_source=google&utm_medium=ppc&utm_campaign=MKG-Search-Google-Branded-DL-EMEA-bd&gclid=EAIaIQobChMIqZj95pG34QIVxqSaCh3jkw9BEAAYASAAEgKAe_D_BwE
2. The passowrd is: bakeawaypass, or can be found in the config file.
3. Create the 'BakeAway' Database. By using the command CREATE DATABASE BakeAway;
4.Then download the SQL from github. This can be found in the SQL folder under the name 'SQL- BakeAway'. ** Remove statement CREATE DATABASE BakeAway**. 
5. Populate the database by using the insert statements, these can be found in the SQL folder under the name ' Insert Statements'.
6. The database has now been created on your machine. 


--------------------------
Installing our application
--------------------------
1. To run the server part of the application, you need to use node.js
2. Please install node and gitbash if you don't already have it
3. Go on the master file called Bake-Away, right click and run with gitbash
4. On the gitbash screen, type "npm install" to install all of the packages used, this should download all the node modules needed
5. Then type "npm start" to start the server
6. Now go to your preferred web browser (Chrome is recommended) and type "localhost:8080"

7. IF THE SERVER NEEDS REBOOTING: type control + c into gitbash to stop the server running, then type "npm start" to restart the server

------
TO DO: 
------
1. Server coding 
2. Finish html 
3. Test cases 
4. Documentation on code (Mario) 
5. Video Demo 

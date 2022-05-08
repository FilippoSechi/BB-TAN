-- Progettazione Web 
DROP DATABASE if exists 577991_Sechi; 
CREATE DATABASE 577991_Sechi; 
USE 577991_Sechi; 
-- MySQL dump 10.13  Distrib 5.6.20, for Win32 (x86)
--
-- Host: localhost    Database: 577991_Sechi
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `partite`
--

DROP TABLE IF EXISTS `partite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partite` (
  `Username` varchar(255) NOT NULL,
  `Punteggio` int(11) NOT NULL,
  `Difficolta` int(11) NOT NULL,
  `Data` datetime NOT NULL,
  PRIMARY KEY (`Username`,`Data`),
  KEY `Username` (`Username`),
  CONSTRAINT `Username` FOREIGN KEY (`Username`) REFERENCES `profili` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partite`
--

LOCK TABLES `partite` WRITE;
/*!40000 ALTER TABLE `partite` DISABLE KEYS */;
INSERT INTO `partite` VALUES ('anonimo',67,2,'2020-09-14 15:06:09'),('anonimo',77,0,'2020-09-17 22:25:31'),('anonimo',31,0,'2020-09-18 12:00:09'),('homer',24,0,'2020-09-04 07:21:43'),('homer',12,1,'2020-09-04 23:36:08'),('homer',76,1,'2020-09-09 10:30:13'),('homer',43,1,'2020-09-10 14:32:00'),('homer',60,0,'2020-09-11 10:33:12'),('homer',65,2,'2020-09-11 11:38:59'),('homer',21,2,'2020-09-13 12:25:31'),('homer',56,1,'2020-09-15 18:44:42'),('homer',13,0,'2020-09-17 22:17:00'),('homer',75,1,'2020-09-19 11:31:05'),('lisa',15,2,'2020-09-06 19:11:42'),('lisa',90,0,'2020-09-13 12:11:42'),('lisa',12,2,'2020-09-20 01:59:26'),('MortySmith',10,0,'2020-09-10 13:36:02'),('MortySmith',69,2,'2020-09-10 23:54:55'),('MortySmith',44,1,'2020-09-15 07:38:49'),('MortySmith',11,0,'2020-09-15 09:37:21'),('pippo',87,1,'2020-09-04 17:51:32'),('pippo',33,1,'2020-09-10 12:21:32'),('pippo',45,0,'2020-09-10 15:04:30'),('pippo',8,2,'2020-09-14 16:05:28'),('pippo',4,0,'2020-09-14 16:06:38'),('pippo',24,1,'2020-09-19 22:12:32'),('pippo',25,2,'2020-12-03 10:04:04'),('pluto',9,2,'2020-09-11 11:32:58'),('pluto',12,0,'2020-09-16 16:43:12'),('pluto',16,2,'2020-09-21 15:40:17'),('RickSanchez',30,2,'2020-09-14 09:12:57'),('RickSanchez',20,1,'2020-09-15 16:26:04'),('RickSanchez',44,2,'2020-09-19 10:34:51');
/*!40000 ALTER TABLE `partite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profili`
--

DROP TABLE IF EXISTS `profili`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profili` (
  `Username` varchar(255) CHARACTER SET latin1 NOT NULL,
  `Password` varchar(255) CHARACTER SET latin1 NOT NULL,
  `Immagine` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profili`
--

LOCK TABLES `profili` WRITE;
/*!40000 ALTER TABLE `profili` DISABLE KEYS */;
INSERT INTO `profili` VALUES ('anonimo','$2y$10$gxw1QKk5blfEuwqN3xKl8uzVWeQ1DXiedG6S5Kd3lgjzPLdVAlxBG','uploads/placeholder.png'),('homer','$2y$10$zwzXLzyySQ9AnR5VO.2LhudfjM0bkf1qezxi1J1TATYeKHCT1M.Ke','uploads/5f5ea338534831.48349948.jpg'),('lisa','$2y$10$DvPqnUNv7I7x1NUtYpXB3e6oEvcjM1Zs68hhbSWkGtib/tzJIoWK6','uploads/5f6692181adeb4.48339068.jpg'),('MortySmith','$2y$10$MOpYkUwsFVTDRo1y4WWd3O2ByIJe7KuEMjnHWjphygFqJ6hTPhUEG','uploads/5f5ea147602b57.59084487.jpg'),('pippo','$2y$10$CvIcTgvHDG0fTw.eG3ImBO68ZtgTILjadUMiNnHS4Y6nsE.cpLWKa','uploads/5f6620429506c0.91346688.jpg'),('pluto','$2y$10$YhXhhg7rMwOSsKBTRb6GVO4DPE3KzquWel2wqGyGsGbshjt0fvrcO','uploads/5f5eb457c50998.50147121.jpg'),('RickSanchez','$2y$10$yle0kWuromZbVF5IaV1wzOD.8eKYByn.Tg.6/nuyCT5k6STUpHtxW','uploads/5f5ea1300e0d97.73458994.jpg');
/*!40000 ALTER TABLE `profili` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-21 15:42:34
